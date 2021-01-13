<template>
  <v-app>
    <v-app-bar
      app
      color="white"
    >
      <div class="pink--text font-weight-black" tile><div name="logo">LOGO!</div></div>
      <v-spacer><h1 class="pink--text">{{title}}</h1></v-spacer>      <router-link to="/foo">
        <v-btn color=pink icon>
            <v-icon>mdi-home-variant-outline</v-icon>
        </v-btn>      
      </router-link><br />
      <router-link to="/bar">
        <v-btn color=pink icon>
            <v-icon>mdi-book-plus</v-icon>
        </v-btn>      
      </router-link><br />
      <router-link to="/test">
        <v-btn color=pink icon>
            <v-icon>mdi-account-box-outline</v-icon>
        </v-btn>      
      </router-link>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>

</template>
<script>
import {Menu} from './components/menu/menu'
const menu = new Menu()
const menuJSON = menu.menuJSON;
export default {
  data: () => ({
      title:"ERP Project",
      menu : menuJSON,
  }),
  mounted : function(){
    console.log(this)
  },
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&family=Pirata+One&family=Do+Hyeon&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
.spacer {
    text-align: center;
}
a { text-decoration:none } 

</style>
