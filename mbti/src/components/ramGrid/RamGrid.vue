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

        <div id='divTest'>

      <table>
        <colgroup>
          <col v-for="(col,i) in gHeader" :key="i" :width='col.width'>
        </colgroup>
        <tbody>
        <tr v-for="(row,i) in dataSet" :key="i" 
        v-on:mouseover = 'trMouseOver'  
        v-on:mouseout = 'trMouseOut'
        v-on:click ='rowClick(i)'>
            <td v-for="(cell,colNum) in row" :key="colNum" 
                v-on:click ='cellClick(colNametoNum(colNum))'
                @click="gBody[colNametoNum(colNum)].type == '' ? $emit('event',i,colNametoNum(colNum)) :''"
                @dblclick="gBody[colNametoNum(colNum)].type == '' ? $emit('event',i,colNametoNum(colNum)) :''"
            >
                <button v-if ="gBody[colNametoNum(colNum)].type == 'button'" 
                    @click="$emit('event',i,colNametoNum(colNum))" 
                    @dblclick="$emit('event',i,colNametoNum(colNum))">
                    {{gBody[colNametoNum(colNum)].options.btnNm}}
                </button>
                <input v-if ="gBody[colNametoNum(colNum)].type == 'text' && gBody[colNametoNum(colNum)].editable" type="text" v-model='dataSet[i][colNum]'>
                <span v-else>{{cell}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
        </div>
  </div>
</template>

<script>
    export default {
    mounted() {
        //그리드바디 높이 설정
        const grid = document.getElementById(this.gridId);
        grid.childNodes[1].style.height = this.gridData.template().gridHeight + 'px'
        console.log('mountedGrid')
    },
    created(){
        console.log('createdGrid')
    },
    updated(){
        console.log('updatedGrid')
    },
    destroyed(){
        console.log('distroyedGrid')
    },
    props: ['gridId', 'gridData','test'],
    data() {
        return {
            dataSet : this.gridData.dataSet,
            gBody : this.gridData.template().gridBody,
            gHeader : this.gridData.template().gridHeader,
            colNametoNum : colNm=>{
                return this.gridData.template().gridBody.map(col=>{return col.colName}).indexOf(colNm);
            },
            clickedCell:0,
            clickedRow:0,
        }
    },
    methods: {
        trMouseOver(e){
            let target = e.path.filter(tag => tag.tagName == 'TR')[0];
            target.classList.add('tr-mouseover');
        },
        trMouseOut(e){
            let target = e.path.filter(tag => tag.tagName == 'TR')[0];
            target.classList.remove('tr-mouseover');
        },
        cellClick(cell){
            const targetTable = event.path.filter(tag=>tag.tagName=='TABLE')[0]
            if(targetTable.rows.length-1>=this.clickedRow)
                targetTable.rows[this.clickedRow].cells[this.clickedCell].classList.remove('td-clicked')

            this.clickedCell = cell;
            let target = event.path.filter(tag=>tag.tagName=='TD')[0]
            target.classList.add('td-clicked')
        },
        rowClick(row){
            const targetTable = event.path.filter(tag=>tag.tagName=='TABLE')[0]
            if(targetTable.rows.length>=this.clickedRow)
                targetTable.rows[this.clickedRow].classList.remove('tr-clicked')
            this.clickedRow =row;
            let target = event.path.filter(tag=>tag.tagName=='TR')[0]
            target.classList.add('tr-clicked')
        }
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
    -webkit-user-select: none; 
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
    overflow: hidden;
}

.grid-pnl td{
    height: 30px;
    background: white;
    border-bottom: 1px solid #adadad;
    font-family: Noto Sans KR;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.1s;
    -webkit-user-select: none; 
}

.grid-pnl td:not(:last-child){
    border-right: 1px solid #adadad;
}

.tr-mouseover td{
    background: rgba(238, 238, 238, 0.637);
}

.td-clicked{
    background: #7c8db9 !important;
    color: #f4f4f7
}

.tr-clicked td{
    border-bottom: 2px solid #474d61e3;
    border-top: 2px solid #474d61e3;
}

.tr-clicked td:first-child{border-left: 2px solid #474d61e3;}
.tr-clicked td:last-child{border-right: 2px solid #474d61e3;}
/* tr::after{
    content: '';
    position: absolute;
    background: #474d61;
    width: 0%;
    left: 50%;
    transform: translate(-50%,28px);
    transition: 0.5s;
}

.tr-clicked::after{
    background: #474d61;
    width: 900px;
    height: 1.5px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,28px);
} */

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
    transition: 0.3s;
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
    height: 99%;
    background: #e6ecf3;
    font-family: 'Noto Sans KR';
    padding: 1px 10px;
    color: #474d61;
    font-weight: 500;
    caret-color: #e9eef1;
}

.grid-pnl input[type='text']::selection{
    /* background: #617d8a; */
    background: #e9eef1;
    color: #474d61;
}

.td-clicked input[type='text']{
    background: #617d8a;
    color: #e9eef1;
}

#divTest{
    width: 102%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}

</style>