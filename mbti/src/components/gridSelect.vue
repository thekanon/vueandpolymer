<template>
  <v-container fluid>
    <v-data-iterator hide-default-footer>
      <template v-slot:header>
        <div
          class="title bread"
          style="border-bottom: 2px solid #ff6600;margin-bottom:10px;font-size: 14px !important;color: rgb(255, 102, 0);font-weight: bold;"
        >
          그리드 단건 및 다건 선택
        </div>
          <template>
            <v-toolbar class="mb-2" color="#f4f0ed">
              <v-toolbar-title>그리드 선택</v-toolbar-title>
              <v-radio-group
                mandatory
                row
                class="pl-3 pt-5"
              >
                <v-radio
                  @click=radioClick
                  label="Grid Radio"
                  value=true
                ></v-radio>
                <v-radio
                  @click=radioClick
                  label="Grid Checkbox"
                  value=false
                ></v-radio>
              </v-radio-group>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>
          </template>

      </template>
      <template v-slot:no-data>
        <v-data-table
          dense
          height=250
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :items-per-page="dessertsIndex"
          :single-select="singleSelect"
          :search="searchKey"
          item-key="Column1"
          show-select
          hide-default-footer
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar class="mb-2" flat>
              <v-btn icon>
                <v-icon color="orange">mdi-circle-outline</v-icon>
              </v-btn>
              <v-toolbar-title>{{title}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn @click="addRow" dark color="#7a99ac" class="mr-2">
                행추가
              </v-btn>
              <v-btn @click="delRow" dark color="#7a99ac" class="mr-2">
                행삭제
              </v-btn >
              <v-btn @click="filter" dark color="#7a99ac" class="mr-2">
                필터
              </v-btn>
              <v-btn @click="resetFilter" dark color="#7a99ac" class="mr-2">
                필터해제
              </v-btn>
            </v-toolbar>
          </template>
        </v-data-table>
      </template>
      <template v-slot:footer>
        <v-container class="grey lighten-5 mt-3" fluid>
          <v-row no-gutters>
            <v-col cols="7">
              <v-card class="pa-2 mr-2">
                            <div class="guidance-message-pnl state-highlight">
                                <p>[그리드 다건 선택 및 컬럼 sort]</p>
                                <ol>
                                    <li>
                                        화면의&nbsp;&nbsp;&nbsp; complete영역에 onsite.gridInit({grid:naw("#그리드id"), check:true, sort:true});를 선언합니다.
                                        <br>
                                        (check 옵션에 true시 전체체크 적용, sort 옵션에 true시 모든 컬럼 sort 적용)
                                    </li>
                                    <li>그리드 body 해당컬럼의 ref정보는 꼭 chkYn으로 지정합니다.(해당model항목에도 chkYn이 존재)</li>
                                    <li>그리드 body 해당컬럼의 type을 checkbox로 지정합니다.</li>
                                </ol>
                                <p>
                                    gridHeader:[
                                    <br>
                                    &nbsp;&nbsp;&nbsp;[
                                    <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{viewText:"",
                                    <b>type:"checkbox"</b>
                                    }
                                    <br>
                                    &nbsp;&nbsp;&nbsp;]
                                    <br>
                                    ]
                                </p>
                                <p>
                                    gridBody:[
                                    <br>
                                    &nbsp;&nbsp;&nbsp;[
                                    <br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{colName:"chkYn",
                                    <b>type:"checkbox",ref:"chkYn",checkValue:"1",unCheckValue:"0"</b>
                                    }
                                    <br>
                                    &nbsp;&nbsp;&nbsp;]
                                    <br>
                                    ]
                                </p>
                            </div>
              </v-card>
            </v-col>
            <v-col cols="5">
              <v-card class="pa-2  mr-2">
                <div class="guidance-message-pnl state-highlight">
                                <p>[행추가,행삭제]</p>
                                <p>행추가 행삭제는 onsite 공통함수를 사용하여 구현할 수 있습니다.</p>
                                <p>ex)</p>
                                <ol>
                                    <li>
                                        행추가 onsite.gridAddRow(naw("#grd00"));
                                        <br>
                                    </li>
                                    <li>행삭제 onsite.gridDelRow(naw("#grd00"));</li>
                                </ol>
                            </div>
                            <div class="guidance-message-pnl state-highlight">
                                <p>[필터,필터해제]</p>
                                <p>필터는 model API의 filter 를 사용하여 구현할 수 있습니다.</p>
                                <p>ex)</p>
                                <ol>
                                    <li>필터 해제 : model00.filter("");</li>
                                    <li>
                                        필터 적용 : model00.filter("Column4 &gt;= '200'");
                                        <br>
                                    </li>
                                </ol>
                            </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<style scoped>
* {
  font-size: 12px;
}
.v-toolbar {
  font-weight: bold;
}
.v-radio >>> .v-label {
  font-size: 13px !important;
}
.v-btn {
  font-size: 12px !important;
  height: 25px !important;
  
}
.guidance-message-pnl {
    background: #eff3f5;
    border: 1px solid #cad6de;
    padding: 5px 17px;
}
</style>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    title: "그리드 단건 선택 - radio & sort",
    singleSelect: true,
    searchKey:'',
    selected: [],
    headers: [
      {
        text: '이름',
        value: 'Column1',
        align: 'start', 
        sortable: false,        
        width:300,
      },
      { text: "순번", value: "chkYn" ,width:300,},
      { text: "닉네임", value: "name" ,width:300,},
      { text: "생년월일", value: "Column2" ,width:300,},
      { text: "직업", value: "Column3" ,width:300,},
      { text: "비고", value: "Column4" ,width:300,},
    ],
    dessertsIndex: 30,
    desserts: [
      {
        name: 'Froz1en Yogurt',
				chkYn: "1",
        Column1: "가길동",
        Column2: "19830101",
        Column3: "회사원",
        Column4: "100",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "0",
        Column1: "나길동",
        Column2: "19800101",
        Column3: "자영업",
        Column4: "20000",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "다길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "50",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "라길동",
        Column2: "199100101",
        Column3: "대학생",
        Column4: "50",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "마길동",
        Column2: "199020101",
        Column3: "대학생",
        Column4: "102",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "바길동",
        Column2: "199003101",
        Column3: "대학생",
        Column4: "103",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "사길동",
        Column2: "199001401",
        Column3: "대학생",
        Column4: "1035",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "아길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "1037",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "자길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "1031",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "차길동",
        Column2: "199004101",
        Column3: "대학생",
        Column4: "11",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "카길동",
        Column2: "19900101",
        Column3: "초등학생",
        Column4: "123",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "타길동",
        Column2: "199050101",
        Column3: "대학생",
        Column4: "1321",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "파길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "13212",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "하길동",
        Column2: "199600101",
        Column3: "대학생",
        Column4: "13212231",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "가2길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "1321223123",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "나2길동",
        Column2: "199312200101",
        Column3: "대학생",
        Column4: "13212231231",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "라2길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "132122312313",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "마2길동",
        Column2: "19900113201",
        Column3: "대학생",
        Column4: "13212231231312",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "바2길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "13212231231312123",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "사2길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "13212231231312123123",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "아2길동",
        Column2: "1990012101",
        Column3: "대학생",
        Column4: "13212231231312123123123",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "자2길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "83",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "차길동2",
        Column2: "199004101",
        Column3: "초등학생",
        Column4: "832",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "카2길동",
        Column2: "199001101",
        Column3: "초등학생",
        Column4: "83223",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "률길동",
        Column2: "199003101",
        Column3: "초등학생",
        Column4: "832232",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "받길동",
        Column2: "199004101",
        Column3: "초등학생",
        Column4: "8322321",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "길동",
        Column2: "19900101",
        Column3: "대학생",
        Column4: "8322321",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "뮴길동",
        Column2: "199003101",
        Column3: "대학생",
        Column4: "83223212",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "륨길동",
        Column2: "199050101",
        Column3: "대학생",
        Column4: "832232121",
      },
      {
        name: 'Frozen Yogurt',
				chkYn: "1",
        Column1: "한길동",
        Column2: "20011113",
        Column3: "학생",
        Column4: "300",
      },
    ],
  }),
  methods: {
    gotoEndRow: function () {
      this.$nextTick(() => this.$vuetify.goTo(this.$el.querySelector(".v-data-table__wrapper").scrollHeight, { container: this.$el.querySelector(".v-data-table__wrapper")}))
    },    
    resetFilter  : function() { 
      this.searchKey = '';
    },
    addRow  : function() { 
      this.desserts.push({name: 'Frozen Yogurt',chkYn: "1",Column1: "한1길동1"+this.dessertsIndex,Column2: "20011113",Column3: "학생",Column4: "300"})
      this.dessertsIndex++;
      this.gotoEndRow()
    },
    delRow  : function() { 
      this.dessertsIndex--;
      this.gotoEndRow()
    },
    filter  : function() { 
      this.searchKey = '2길';
    },

    radioClick : function() {
      this.singleSelect = !this.singleSelect 
      if(this.singleSelect){
        this.title = "그리드 단건 선택 - radio & sort" 
      } else {
        this.title = "그리드 다건 선택 - checkbox & sort"
      }
    },
    addVote: function() {
      this.optionCount = this.optionCount + 1;
      this.options.push({
        id: "opt1" + this.optionCount,
        label: "보기" + this.optionCount,
        value: "",
      });
      console.log(this.hello);
    },
    submit: function() {
      console.log(this.options);
      console.log(this.vote);
      console.log(this.hello);
      fetch("http://1eed00.hopto.org:3000/viewNews")
        .then((response) => {
          if (response.ok) {
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
