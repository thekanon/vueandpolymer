<template>
  <v-card
    class="mx-auto"
    outlined
  >
      <v-list>

    <v-card-title>{{title}}</v-card-title>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            {{description}}
        </v-list-item-title>
        <v-list-item-group
        v-model="selectedItem"
        color="pink"
      >
        <v-list-item
          v-for="(item, i) in options"
          :style="{
               'display': 'inline-table'
          }"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-list-item-content>
    </v-list-item>
    </v-list>

  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    title : "MBTI",
    description : "당신의 MBTI를 알려주세요",
    upperVote : "",
    lowerVote : "",
    optionCount : 14,
    options: [
        {id: "val1", label : "무응답", select:false},
        {id: "val2", label : "ISFJ", select:false},
        {id: "val3", label : "INTJ", select:false},
        {id: "val4", label : "ISTP", select:false},
        {id: "val5", label : "ISFP", select:false},
        {id: "val6", label : "INFP", select:false},
        {id: "val7", label : "INTP", select:false},
        {id: "val8", label : "ESTP", select:false},
        {id: "val9", label : "ESFP", select:false},
        {id: "val10", label : "ESFP", select:false},
        {id: "val11", label : "ENFP", select:false},
        {id: "val12", label : "ENTP", select:false},
        {id: "val13", label : "ESTJ", select:false},
        {id: "val14", label : "ESFJ", select:false},
        {id: "val15", label : "ENTJ", select:false},
    ],
    selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
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
