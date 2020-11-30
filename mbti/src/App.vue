<template>
  <v-app>
    <v-app-bar
      app
      color="white"
    >
      <div class="pink--text font-weight-black" tile><subtitle-1>WATCHA!</subtitle-1></div>
      <v-spacer><h1 class="pink--text">{{title}}</h1></v-spacer>

      <router-link to="/foo">
        <v-btn color=pink icon>
            <v-icon>mdi-home-variant-outline</v-icon>
        </v-btn>      
      </router-link><br />
      <router-link to="/bar">
        <v-btn color=pink icon>
            <v-icon>mdi-book-plus</v-icon>
        </v-btn>      
      </router-link>


    </v-app-bar>

    <v-main>
        <router-view></router-view>

    </v-main>
  </v-app>

</template>
<script>
export default {
  data: () => ({
      title:"MBTI Project"
  })
}
</script>
<style scoped>
.spacer {
    text-align: center;
}
a { text-decoration:none } 

</style>
