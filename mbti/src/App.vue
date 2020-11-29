<template>
  <v-app>
    <v-app-bar
      app
      color="white"
    >
      <div class="pink--text font-weight-black" tile><subtitle-1>WATCHA!</subtitle-1></div>
      <v-spacer><h1 class="pink--text">설문 등록</h1></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.spacer {
    text-align: center;
}
</style>
