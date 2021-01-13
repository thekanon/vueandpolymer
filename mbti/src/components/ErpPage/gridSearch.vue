<template>
  <v-container fluid>
    <template>
      <div
        class="title bread"
        style="
            border-bottom: 2px solid #ff6600;
            margin-bottom: 10px;
            font-size: 14px !important;
            color: rgb(255, 102, 0);
            font-weight: bold;
          "
      >
        조회 및 수정 삭제 페이지 입니다
      </div>
      <my-element></my-element>
      <template>
        <v-toolbar class="mb-2" color="#f4f0ed">
          <v-text-field
            :loading="searchLoading"
            v-model="searchVoteValue"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="설문ID"
            @blur="searchBlur"
          ></v-text-field>
          <v-text-field
            class="pl-3"
            :loading="searchLoading"
            v-model="searchVoteText"
            flat
            disabled
            solo-inverted
            hide-details
            label="설문명"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <template>
            <v-select
              flat
              solo-inverted
              v-if="searchVoteValue=='' || upperSelect.length !=0"
              :items="upperSelect"
              v-model="searchVoteUpperValue"
              item-text="title"
              item-value="id"
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="상위 설문"
            ></v-select>
            <v-select
              flat
              class="pl-3"
              solo-inverted
              v-if="searchVoteValue=='' || lowerSelect.length !=0"
              :items="lowerSelect"
              v-model="searchVoteLowerValue"
              item-text="title"
              item-value="id"
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="하위 설문"
            ></v-select>
          </template>

          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <div
            style="border:solid 1px;background:#ff6600;color:white;font-weight:bold;width: 90px"
            class="ps-5"
          >
            <v-btn icon dark @click="fetchEvents">
              <v-icon>mdi-magnify</v-icon>
              조회
            </v-btn>
          </div>
        </v-toolbar>
            <v-toolbar class="mb-2" flat>
              <v-btn icon>
                <v-icon color="orange">mdi-circle-outline</v-icon>
              </v-btn>
              <v-toolbar-title>MBTI 설문조사</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn dark color="#7a99ac" class="mr-2">
                행추가
              </v-btn>
              <v-btn dark color="#7a99ac" class="mr-2">
                행삭제
              </v-btn >
            </v-toolbar>

        <template>
          <v-data-table
            dense
            @click:row="clickRow"
            :height="height"
            :headers="viewHeaders"
            :items="voteData"
            :items-per-page="15"
            :item-class="itemRowBackground"
            :loading="viewState=='loading'"
            :hide-default-footer="viewFooter"
            loading-text="Loading... Please wait"
          >
          </v-data-table>
        </template>
      </template>
    </template>
  </v-container>
</template>

<style scoped>
* {
  font-size: 12px;
}
.v-toolbar {
  font-weight: bold;
}
.v-data-table >>> .style-1 {
  background-color: rgb(215,215,44)
}
.v-data-table >>> .style-2 {
  background-color: rgb(114,114,67)
}
</style>

<script>
import gql from "graphql-tag";
import '../LitElement/my-element.js';

export default {
  name: "HelloWorld",
  data: () => ({
    height: null,
    viewState: "no-data",
    viewFooter:true,
    viewHeaders: [],
    searchVoteData:'',
    searchVoteValue:'',
    searchVoteText:'',
    searchVoteUpperValue:'',
    searchVoteLowerValue:'',

    searchLoading:false,

    upperSelect:[],
    lowerSelect:[],
    
    oldCurrentRow:-1,
    newCurrentRow:-1,

    headers: [
      {
        text: "코드",
        value: "id",
        align: "start",
        sortable: false,
        width: 60,
      },
      { text: "설문명", value: "title", width: 250 },
      { text: "설문내용", value: "description", width: 360 },
      { text: "상위설문", value: "upperVote", width: 160 },
      { text: "하위설문", value: "lowerVote", width: 160 },
      { text: "문항1", value: "val1", width: 150 },
      { text: "문항2", value: "val2", width: 150 },
      { text: "문항3", value: "val3", width: 150 },
      { text: "문항4", value: "val4", width: 150 },
      { text: "문항5", value: "val5", width: 150 },
      { text: "문항6", value: "val6", width: 150 },
      { text: "문항7", value: "val7", width: 150 },
      { text: "문항8", value: "val8", width: 150 },
      { text: "문항9", value: "val9", width: 150 },
      { text: "문항10", value: "val10", width: 150 },
      { text: "문항11", value: "val11", width: 150 },
      { text: "문항12", value: "val12", width: 150 },
      { text: "문항13", value: "val13", width: 150 },
      { text: "문항14", value: "val14", width: 150 },
      { text: "문항15", value: "val15", width: 150 },
      { text: "문항16", value: "val16", width: 150 },
      { text: "문항17", value: "val17", width: 150 },
      { text: "문항18", value: "val18", width: 150 },
      { text: "문항19", value: "val19", width: 150 },
      { text: "문항20", value: "val20", width: 150 },
    ],
    voteData: [],
  }),
  watch: {
    voteData(data){
      if(data.length!=0){
        data.forEach(element => {
          //상위,하위코드 세팅
          let lowerArr = [];
          element.lowerVote.forEach(key =>{
            lowerArr.push(key.id);
          });
          element.lowerVote = [...lowerArr];

          let upperArr = [];
          element.upperVote.forEach(key =>{
            upperArr.push(key.id);
          });
          element.upperVote = [...upperArr];
        });
      }
    },
    searchVoteData(data){
      //조회 이후
      this.searchVoteText = data.length==1 ? data[0].title:'';

      this.upperSelect = [...data[0].upperVote]
      this.lowerSelect = [...data[0].lowerVote]
    },
    viewState(slot) {
      if (slot === "loadding") {
        this.viewHeaders = [];
      } else if (slot === "afterSubmit") {
        this.height = null;
        this.viewFooter = false;
        this.viewHeaders = this.headers
      } else if (slot === "no-data") {
        this.viewHeaders = [];
      } 
    },
  },
  created: function () {

  },
  methods: {
    itemRowBackground (item) {
      return item.currentRow ? 'style-1' : ''
    },
    clickRow(event){
      this.voteData.map((element)=> {
        element.currentRow = false;
      });
      event.currentRow = true
      event.id +=1;
      event.id -=1;
    },
    searchBlur(event){
      if(event.target.value !="")
        this.searchVoteEvents(event.target.value);
    },
    isEnabled(slot) {
      return this.enabled === slot;
    },
    async searchVoteEvents(keyword){
      this.searchLoading = true;
      const { data } = await this.$apollo.query({
        query: gql`
          query getVote($id: Int) {
            getVote(id: $id){
              id
              title
              upperVote {
                id
                title
              }
              lowerVote {
                id
                title
              }
            }
          }
        `,
        variables : {
          // Use vue reactive properties here
              id: parseInt(keyword),
        },
      });
      console.log(data);    
      this.searchLoading = false 
      this.searchVoteData = data.getVote.length!=0 ? data.getVote:'';
    },
    async fetchEvents() {
      this.viewState = "loading";
      console.log(this.searchVoteValue,this.searchVoteText,this.searchVoteUpperValue,this.searchVoteLowerValue)
      const { data } = await this.$apollo.query( 
      {
        query: gql`
          query getVote($id: Int, $upperVote: Int, $lowerVote: Int) {
            getVote(id: $id, upperVote: $upperVote, lowerVote: $lowerVote){
              id
              title
              description
              users {
                id
              }
              upperVote {
                id
                title
              }
              lowerVote {
                id
                title
              }
              val1
              val2
              val3
              val4
              val5
              val6
              val7
              val8
              val9
              val10
              val11
              val12
              val13
              val14
              val15
              val16
              val17
              val18
              val19
              val20
            }
          }
        `,
        variables : {
          id: parseInt(this.searchVoteValue),
          upperVote: parseInt(this.searchVoteUpperValue),
          lowerVote: parseInt(this.searchVotelowerValue)
        },

      });
      this.viewState = "afterSubmit";
      data.getVote.forEach((element,index) => {
          //index 및 상태값 세팅
          element.rowIndex = index;
          element.rowFlag = 'R';
      });
      this.voteData = data.getVote;



      console.log(this.voteData)
    },
    submit: function() {
      fetch("http://1eed00.hopto.org:3000/viewNews")
        .then((response) => {
          if (response.ok) {
            console.log("complete")
            return response.json();
          }
          throw new Error("Network Error");
        })
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
