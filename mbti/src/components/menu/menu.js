function Menu() {
    // 여러 메서드를 정의할 수 있음
    this.menuJSON = [
        { path: '/foo', component: './components/HelloWorld.vue', description:'머티리얼 디자인의 UI 샘플페이지' },
        { path: '/bar', component: './components/Vote/VoteList.vue', description:'Vue 컴포넌트 재활용 샘플 페이지' },
        { path: '/test', component: './components/ErpPage/menu.vue', description:'기능샘플리스트' },
        { path: '/test1', component: './components/ErpPage/gridSelect.vue', description:'naw 샘플 페이지 클론' },
        { path: '/test2', component: './components/ErpPage/gridSearch.vue', description:'Vue 거래 연동(조회, 공통코드), 그리드 이벤트 구현' },
        { path: '/test3', component: './components/ErpPage/litPage.vue', description:'vue + lit element를 이용한 그리드+바인딩' },
        { path: '/test4', component: './components/ErpPage/ramGridTest.vue', description:'4.1 기준 그리드 메서드 구현' },
        { path: '/test5', component: './components/ErpPage/searchTable.vue', description:'searchTable(작성중)' },
    ]        
}
const menu = new Menu();
console.log(menu.menuJSON)
export {Menu}; // 변수를 내보냄

