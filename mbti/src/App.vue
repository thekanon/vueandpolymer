<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(255 5 88)"
      dark
    >
      <v-spacer><h1>MBTI 설문</h1></v-spacer>
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
