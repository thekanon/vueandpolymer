<template>
    <div>
        <Vote />
    </div>
</template>

<script>
import Vote from './Vote.vue';
export default {
  components: { Vote },
  name: "VoteList",

  data: () => ({
    vote : {
      title : "",
      description : "",
      upperVote : "",
      lowerVote : "",

    },
    optionCount : 2,
    options: [
      {
        id : "opt1",
        label : "보기1",
        value : ""
      },
      {
        id : "opt2",
        label : "보기2",
        value : "",
      },
    ],
  }),
  methods: {
    addVote: function () {
      this.optionCount = this.optionCount+1;
      this.options.push({
        id : "opt1"+this.optionCount,
        label : "보기"+this.optionCount,
        value : "",
      });
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
