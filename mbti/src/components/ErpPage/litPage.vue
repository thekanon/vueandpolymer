<template>
    <div>
      <table class="searchTable">
          <colgroup>
              <col width="*">
              <col width="5%">
          </colgroup>
          <tr>
              <th></th>
              <th><button @click="resetFilterData" type="button" class="doaction" id="btnFilter1">조회</button></th>
          </tr>
      </table>      
      <table>
          <caption>● 그리드 컴포넌트</caption>
          <colgroup>
              <col width="*">
              <col width="5%">
              <col width="5%">
              <col width="5%">
              <col width="5%">
          </colgroup>
          <tr>
              <th></th>
              <th><button @click="addRow" id="btnRowAdd1">행추가</button></th>
              <th><button @click="deleteRow" id="btnRowDel1">행삭제</button></th>
              <th><button @click="filterData" type="button" class="doaction" id="btnFilter1">필터</button></th>
              <th><button @click="resetFilterData" type="button" class="doaction" id="btnFilter1">필터해제</button></th>
          </tr>
      </table>      
      <!-- <button @click="addRow">행추가</button> -->
      <lit-grid 
        :bindRef ='sampleDataString' 
        :flag='gridType'
      ></lit-grid>
    </div>
</template>
<style scoped>
  table {
    width: 100%;
    font-size: 15px;
  }
  tr {
  }
  button {
    width: 100%;
    height: 30px;
    font-size: 13px;
    text-transform: uppercase;
    color: #fff;
    background-color: #e91e63;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }
  button:hover {
    background-color: #f387ac;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
  }
  caption {
    text-align: left;
    padding-top: 20px;
    padding-left: 10px;
  }
</style>
<script>
// import Vote from './Vote.vue';
import '../LitElement/litGrid.js';
export default {
  name: "LitList",

  data: () => ({
    gridType:"grid",
    sampleDataString: '1',
    sampleData: [{"first_name":"Brendin","last_name":"Hegdonne","email":"bhegdonne0@cafepress.com","gender":"Male","ip_address":"142.101.100.170"},
{"first_name":"Bailie","last_name":"Renhard","email":"brenhard1@vimeo.com","gender":"Male","ip_address":"18.121.110.122"},
{"first_name":"Amandy","last_name":"Blair","email":"ablair2@newyorker.com","gender":"Female","ip_address":"230.214.198.165"},
{"first_name":"Odelia","last_name":"Mompesson","email":"omompesson3@dot.gov","gender":"Female","ip_address":"147.45.68.95"},
{"first_name":"Kurt","last_name":"Waud","email":"kwaud4@blogspot.com","gender":"Male","ip_address":"99.250.245.64"},
{"first_name":"Hazel","last_name":"Courtney","email":"hcourtney5@pagesperso-orange.fr","gender":"Male","ip_address":"21.231.159.228"},
{"first_name":"Jeri","last_name":"Letcher","email":"jletcher6@elpais.com","gender":"Female","ip_address":"172.117.53.50"},
{"first_name":"Pavlov","last_name":"Eydel","email":"peydel7@imgur.com","gender":"Male","ip_address":"155.47.16.22"},
{"first_name":"Spike","last_name":"Cregan","email":"scregan8@baidu.com","gender":"Male","ip_address":"58.217.162.121"},
{"first_name":"Liliane","last_name":"O'Corrane","email":"locorrane9@guardian.co.uk","gender":"Female","ip_address":"94.38.74.50"}],


  orgData: ''

  }),
  mounted : function(){
    for(let i=0;i<100;i++){
      this.sampleData.push({"first_name":"Spike","last_name":"Cregan","email":"scregan8@baidu.com","gender":"Male","ip_address":"58.217.162.121"});
    }
  },
  watch: {
    sampleData(data){
      console.log(data);
      this.sampleDataString = JSON.stringify(data)
    }
  },
  created: function (){
    this.sampleDataString = JSON.stringify(this.sampleData);
  },
  methods: {
    addRow: function() {
      this.sampleData.push({"first_name":"Spike","last_name":"Cregan","email":"scregan8@baidu.com","gender":"Male","ip_address":"58.217.162.121"});
    },
    deleteRow: function() {
      this.sampleData.pop()
    },
    filterData: function() {
      console.log("Male Filter");
      this.orgData = this.sampleData

      this.sampleData = this.sampleData.filter(item => {
        if (item.gender=='Female') {
          return true;
        }
        return false;
      });
    },
    resetFilterData: function() {
      console.log("reset Filter");

      this.sampleData = this.orgData;

    },
    submit: function () {
      console.log(this.options)
      console.log(this.vote)
      fetch('http://1eed00.hopto.org:3000/viewNews')
        .then((response) => {
          if(response.ok){
            return response.json();
          }
          throw new Error('Network Error');
        })
        .then((json)=> {
          console.log(json);
        })
        .catch((error) =>{
          console.log(error)
        });
    }
  }
};
</script>
