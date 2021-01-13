<template>
    <div id='ram_container'>
        <div id='test_contaner'>
            <RamGrid grid-id='GridU100' 
            :grid-data ='widget.grid.GridU100'
            />
        </div>
        <div id='test_contaner2'>
            <RamGrid grid-id='GridU101' 
            :grid-data ='widget.grid.GridU101'
            @event = 'GridU101_Event'
            />
        </div>
    </div>
</template>

<script>
import RamGrid from '../ramGrid/RamGrid.vue';
import naw from '../ramGrid/ramGrid.js'

let widgetGrid_GridU100 = naw.gridU('GridU101',{
        bodyWidth:'auto',
        gridHeight:'250',
        gridHeader:[
            {name:"타이틀1",width:"25.0%"},
            {name:"타이틀2",width:"20.0%"},
            {name:"타이틀3",width:"20.0%"},
            {name:"타이틀4",width:"20.0%"},
            {name:"타이틀5",width:"15.0%"}],
        gridBody:[
            {colName:"cell1"},
            {colName:"cell2"},
            {colName:"cell3"},
            {colName:"cell4"},
            {colName:"cell5"}]
    });
let widgetGrid_GridU101 = naw.gridU('GridU100',{
        gridHeight:'300',
        gridHeader:[
            {name:"메서드이름",width:"18.0%"},
            {name:"row",width:"6.0%"},
            {name:"col",width:"6.0%"},
            {name:"data",width:"35.0%"},
            {name:"실행",width:"35.0%"}],
        gridBody:[
            {colName:"method"},
            {colName:"row",editable:true},
            {colName:"col",editable:true},
            {colName:"data",editable:true},
            {colName:"run",type:'button',options:{btnNm:'실행하기'}}]
    });

    widgetGrid_GridU101.addRow(['addEmptyRow','','','',''])
    widgetGrid_GridU101.addRow(['addRow','','','',''])
    widgetGrid_GridU101.addRow(['deleteRow','','','',''])
    widgetGrid_GridU101.addRow(['setCell','','','',''])
    widgetGrid_GridU101.onClick(0,4,'addEmptyRow_toGrid1')
    widgetGrid_GridU101.onClick(2,4,'deleteRow_toGrid1')
    widgetGrid_GridU101.onClick(3,4,'setCell_toGrid1')
    widgetGrid_GridU101.setCellEditable(3,1,true)
    
export default {
    components: { RamGrid },
    data() {
        return {
            widget: {
                grid: {
                    GridU100: widgetGrid_GridU100,
                    GridU101: widgetGrid_GridU101
                }
            },
            row:'',col:'',data:''
        }
    },
    mounted(){
        console.log('mount')
    },
    created(){
        console.log('created')
    },
    updated(){
        console.log('updated')
    },
    methods: {
        GridU101_Event(row,col){
            const e = widgetGrid_GridU101.onEvent(event,row,col);
            if(e)this[e](row,col )
        },
        addEmptyRow_toGrid1(rowNum) {
          widgetGrid_GridU100.addEmptyRow(widgetGrid_GridU101.getCell(rowNum,'data'));
          widgetGrid_GridU101.setCell(0,3,'');
        },
        setCell_toGrid1(){
            widgetGrid_GridU100.setCell(
                widgetGrid_GridU101.getCell(3,'row'),
                widgetGrid_GridU101.getCell(3,'col'),
                widgetGrid_GridU101.getCell(3,'data'),
            );
        },
        deleteRow_toGrid1(rowNum){
            widgetGrid_GridU100.deleteRow(widgetGrid_GridU101.getCell(rowNum,'data'));
          widgetGrid_GridU101.setCell(2,3,'');
        }
    }
}
</script>

<style>
#ram_container{
    text-align: center;
    padding-top: 20px;
}

#test_contaner,#test_contaner2{
    width:900px;
    display: inline-block;
    margin: 10px;
}
</style>