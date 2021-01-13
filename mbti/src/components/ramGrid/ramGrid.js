class gridU {
    constructor(_gridId, _template) {
      this._gridId = _gridId;
      this._template = _template;
      this._coloum = _template.gridBody.map(col => {
        return col.colName
      });
  
      this.dataSet = [];
      this.eventSet = [];
      this.editableCellSet = [];
      this._template.gridBody.map(cell => {
        if (cell.type == null) {
          cell.type = 'text'
        }
  
        if (cell.editable == null) {
          cell.editable = false;
        }
        return cell
      })
    }
  
    gridId() {
      return this._gridId;
    }
  
    template() {
      return this._template;
    }
  
    addEmptyRow(num) {
      if (num == null) num = 1;
      let newLineTmp = {};
      // let colNum = 0;
      this._coloum.forEach(colNm => {newLineTmp[colNm] = ''});
  
      while (num-- > 0) {
        const newArr = {...newLineTmp};
        this.dataSet[this.dataSet.length] = newArr;
      }
  
      this.dataSet.push();
    }
  
    addRow(data) {
      if (this.getClassType(data) == 'Array') { //파라미터를 배열로 받을 때
      let newLineTmp = {}; let colNum=0;
      this._coloum.forEach(colNm => {newLineTmp[colNm] = data[colNum++]});
  
        this.dataSet.push(newLineTmp);
      } else { //파라미터를 객체로 받을 때
  
      }
    }
  
    deleteRow(num) {
      while (num-- > 0)
        this.dataSet.pop();
    }
  
    setCell(row, col, data) {
      if (this.dataSet.length - 1 < row || this.dataSet[row].length - 1 < col) return;
      this.dataSet[row][this._coloum[col]] = data;
      this.dataSet.push()
    }
  
    getCell(row, col) {
      return (this.dataSet[row][col])
    }
  
    setCellEditable(row, col, isEdit) {
      row
      col
      isEdit
    }
  
    onEvent(event, row, col) {
      const callbackSet = this.eventSet.filter(cell => cell.row == row && cell.col == col);
      if (callbackSet.length == 0) return false;
      switch (event.type) {
        case 'click':
          return callbackSet.filter(cell => cell.eventNm == 'click')[0].funNm;
      }
    }
  
    onClick(row, col, funNm) {
      this.eventSet.push({
        eventNm: 'click',
        row: row,
        col: col,
        funNm: funNm
      })
    }
  
  
  
    getClassType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }
  }
  
  export default {
    gridU: (gridID, template) => {
      return new gridU(gridID, template)
    }
  }