<template>
  <div class='grid-pnl' :id='gridId'>
    <div class='grid-header'>
      <table>
        <colgroup>
          <col v-for="(col,i) in gHeader" :key="i" :width='col.width'>
        </colgroup>
        <thead>
          <th v-for="(title,i) in gHeader" :key='i'>{{title.name}}</th>
        </thead>

      </table>
    </div>
    <div class='grid-body'>
      <table>
        <colgroup>
          <col v-for="(col,i) in gHeader" :key="i" :width='col.width'>
        </colgroup>
        <tbody>
        <tr v-for="(row,i) in dataSet" :key="i" v-on:mouseover = 'trMouseOver' v-on:mouseout = 'trMouseOut'>
            <td v-for="(cell,j) in row" :key="j" 
                @click="gBody[j].type == '' ? $emit('event',i,j) :''"
                @dblclick="gBody[j].type == '' ? $emit('event',i,j) :''"
            >
                <button v-if ="gBody[j].type == 'button'" 
                    @click="$emit('event',i,j)" 
                    @dblclick="$emit('event',i,j)">
                    {{gBody[j].options.btnNm}}
                </button>
                <input v-if ="gBody[j].type == 'text' && gBody[j].editable" type="text" v-model='dataSet[i][j]'>
                <span v-else>{{cell}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    let updateNum = 0;
    export default {
    mounted() {
        //그리드바디 높이 설정
        const grid = document.getElementById(this.gridId);
        grid.childNodes[1].style.height = this.gridData.template().gridHeight + 'px'
    },
    props: ['gridId', 'gridData','test'],
    data() {
        return {
            dataSet : this.gridData.dataSet,
            gBody : this.gridData.template().gridBody,
            gHeader : this.gridData.template().gridHeader,
        }
    },
    methods: {
        trMouseOver(e){
            let target = e.path.filter(clsNm => clsNm.tagName == 'TR')[0];
            target.classList.add('tr-mouseover');
        },
        trMouseOut(e){
            let target = e.path.filter(clsNm => clsNm.tagName == 'TR')[0];
            target.classList.remove('tr-mouseover');
        }
    },
    updated(){
        console.log(`updte횟수:${++updateNum}`)
    }
}

</script>

<style>
*:focus { outline:none; }

.grid-pnl table {
  width: 100%;
  border-collapse: collapse;
}

/* 여기부터 타이틀 */
.grid-pnl th{
    padding: 12px 10px;
    font-family: Noto Sans KR;
    font-weight: 500;
    border-bottom: 1px solid black;
    background: #474d61;
    color: #dadada;
}
.grid-pnl th:not(:last-child){
    border-right: 1px solid #e0e0e0;
}

.grid-pnl th:first-child{
    border-left: 1px solid #e0e0e0;
}
.grid-pnl th:last-child{
    border-right: 1px solid #e0e0e0;
}

/* 여기부터 바디 */
.grid-body{
    border: 1px solid #e0e0e0;
    background: #f8f8f8;
    overflow: overlay;
}

.grid-pnl td{
    height: 30px;
    background: white;
    border-bottom: 1px solid #e0e0e0;
    font-family: Noto Sans KR;
    font-size: 0.9rem;
    padding: 3px 8px;
}

.grid-pnl td:not(:last-child){
    border-right: 1px solid #e0e0e0;
}

.tr-mouseover td{
    background: rgba(238, 238, 238, 0.637);
}

/* 여기부터 버튼 */
.grid-pnl button{
    border: 1px solid #121b35;
    padding: 2px 7px;
    background: #565e7b;
    font-family: 'Noto Sans KR';
    color: #eeeeee;
    font-weight: 300;
    font-size: 0.9em;
    border-radius: 2px;
    cursor: pointer;
}

.grid-pnl button:hover{
    background: #687296;
}

.grid-pnl button:active{
    background: #4a5069;
}

/* 여기부터 인풋 */
.grid-pnl input[type='text']{
        width: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
    border: none;
    background: #ffffff00;
    font-family: 'Noto Sans KR';
}

</style>