function Menu() {
    // 여러 메서드를 정의할 수 있음
    this.menuJSON = [
        { path: '/foo', component: './components/HelloWorld.vue' },
        { path: '/bar', component: './components/Vote/VoteList.vue' },
        { path: '/test1', component: './components/ErpPage/gridSelect.vue' },
        { path: '/test2', component: './components/ErpPage/gridSearch.vue' },
        { path: '/test3', component: './components/ErpPage/litPage.vue' },
        { path: '/test4', component: './components/ErpPage/ramGridTest.vue' },
        { path: '/test5', component: './components/ErpPage/searchTable.vue' },
        { path: '/test', component: './components/ErpPage/menu.vue' },
    ]        
}
const menu = new Menu();
console.log(menu.menuJSON)
export {Menu}; // 두 함수를 내보냄

