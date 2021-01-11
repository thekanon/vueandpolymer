<template>
<div>11111</div>

</template>
<script>
import {Menu} from '../menu/menu'
const menu = new Menu()
const menuJSON = menu.menuJSON;
export default {
  data: () => ({
    menu : menuJSON,
    title:"ERP Project"
  }),
  mounted : function(){
    console.log(menuJSON);
  },
}
</script>
<style scoped>
</style>