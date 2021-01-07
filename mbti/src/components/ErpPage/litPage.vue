<template>
    <div>
      <lit-grid :testest="arr">cdasfasdfasdf</lit-grid>
    </div>
</template>
<script>
// import Vote from './Vote.vue';
import '../LitElement/litGrid.js';
export default {
  name: "LitList",

  data: () => ({
    arr:"ready",
    sampleData: [{"first_name":"Brendin","last_name":"Hegdonne","email":"bhegdonne0@cafepress.com","gender":"Male","ip_address":"142.101.100.170"},
{"first_name":"Bailie","last_name":"Renhard","email":"brenhard1@vimeo.com","gender":"Male","ip_address":"18.121.110.122"},
{"first_name":"Amandy","last_name":"Blair","email":"ablair2@newyorker.com","gender":"Female","ip_address":"230.214.198.165"},
{"first_name":"Odelia","last_name":"Mompesson","email":"omompesson3@dot.gov","gender":"Female","ip_address":"147.45.68.95"},
{"first_name":"Kurt","last_name":"Waud","email":"kwaud4@blogspot.com","gender":"Male","ip_address":"99.250.245.64"},
{"first_name":"Hazel","last_name":"Courtney","email":"hcourtney5@pagesperso-orange.fr","gender":"Male","ip_address":"21.231.159.228"},
{"first_name":"Jeri","last_name":"Letcher","email":"jletcher6@elpais.com","gender":"Female","ip_address":"172.117.53.50"},
{"first_name":"Pavlov","last_name":"Eydel","email":"peydel7@imgur.com","gender":"Male","ip_address":"155.47.16.22"},
{"first_name":"Spike","last_name":"Cregan","email":"scregan8@baidu.com","gender":"Male","ip_address":"58.217.162.121"},
{"first_name":"Liliane","last_name":"O'Corrane","email":"locorrane9@guardian.co.uk","gender":"Female","ip_address":"94.38.74.50"}]
  }),
  methods: {
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
