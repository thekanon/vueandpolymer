<template>
  <v-container fluid>
    <v-data-iterator hide-default-footer>
      <template v-slot:header>
        <div
          class="title bread"
          style="border-bottom: 2px solid rgb(233 30 99);margin-bottom:10px;font-size: 14px !important;color: rgb(233 30 99);font-weight: bold;"
        >
          기능 샘플 리스트
        </div>

      </template>

      <template v-slot:no-data>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :search="searchKey"
          hide-default-footer
          class="elevation-1"
        >
        <template #item.path="{ value }">
            <a target="_self" :href="'/#'+value" class='menuNm'>
              {{ value.replace('/','') }}
            </a>
        </template>

        </v-data-table>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<style scoped>
.text-start{
  font-size: 1.1em;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    border-bottom: 3px solid #757575;
}
.menuNm{
  font-family: 'Noto Sans KR';
    font-size: 1.4em;
    text-decoration: none;
    font-weight: 500;
    color: #ee4f85;
    display: inline-block;
    transition: 0.4s;
}


.menuNm::after{
    content: '';
    width: 0px;
    height: 2.5px;
    display: block;
    background: #e91e63;
    margin: -2px 0px 0px -1px;
    transition: 0.2s;
}

.menuNm:hover::after{
  width: 140%;
}
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
        value: 'path',
        align: 'start', 
        sortable: false, 
        width:300,
      },
      { text: "파일경로", value: "component",width:300},
      { text: "설명", value: "description"},
    ],
    dessertsIndex: 30,
    desserts: [
        { path: '/foo', component: './components/HelloWorld.vue', description:'머티리얼 디자인의 UI 샘플페이지' },
        { path: '/bar', component: './components/Vote/VoteList.vue', description:'Vue 컴포넌트 재활용 샘플 페이지' },
        { path: '/test', component: './components/ErpPage/menu.vue', description:'기능샘플리스트' },
        { path: '/test1', component: './components/ErpPage/gridSelect.vue', description:'naw 샘플 페이지 클론' },
        { path: '/test2', component: './components/ErpPage/gridSearch.vue', description:'Vue 거래 연동(조회, 공통코드), 그리드 이벤트 구현' },
        { path: '/test3', component: './components/ErpPage/litPage.vue', description:'vue + lit element를 이용한 그리드+바인딩' },
        { path: '/test4', component: './components/ErpPage/ramGridTest.vue', description:'4.1 기준 그리드 메서드 구현' },
        { path: '/test5', component: './components/ErpPage/searchTable.vue', description:'searchTable(작성중)' },
    ],
  }),
  created: function (){
    // for(let i=0;i<100;i++){
    //   this.desserts.push({name: 'Frozen Yogurt',chkYn: "1",Column1: "한1길동1"+this.dessertsIndex,Column2: "20011113",Column3: "학생",Column4: "300"})
    //   this.dessertsIndex++;
    // }
  },
  methods: {
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
