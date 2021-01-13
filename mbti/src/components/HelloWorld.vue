<template>
  <v-container>
    <div>
      <p>
      {{typeof hello == 'string' ? hello : hello[0].email}}
    </p>
      <v-text-field v-model=vote.title label="제목"></v-text-field>
      <v-text-field v-model=vote.upperVote disabled label="상위 설문"></v-text-field>
      <v-text-field v-model=vote.lowerVote disabled label="하위 설문"></v-text-field>
      <v-text-field v-model=vote.description label="내용"></v-text-field>

      <v-text-field 
        v-bind:key="option.id" 
        v-for ="option in options" 
        v-bind:label=option.label
        v-model=option.value
      ></v-text-field>      
      <v-btn @click=addVote block color="rgb(255, 47, 110)">
          <div class="white--text font-weight-black">보기 추가</div>
      </v-btn>
      <br />
      <v-btn @click=submit block color="rgb(255, 47, 110)">
          <div class="white--text font-weight-black">제출</div>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: "HelloWorld",
  apollo: {
    hello: gql`query {
      hello :allUser{
        id
        email
        username
      }
    }`
  },
  data: () => ({
    hello:'',
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
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:"https://vuetifyjs.com/getting-started/frequently-asked-questions",
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
      console.log(this.hello)
    },
    submit: function () {
      console.log(this.options)
      console.log(this.vote)
      console.log(this.hello)
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
  },
  
};
</script>
