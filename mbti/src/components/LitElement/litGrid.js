import {LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {
  static get styles() {
    // Write styles in standard CSS
    return css`
      * { color: black; }
      .mytitle { border: 2px solid;background:rgb(232 232 232); }
      .mybody { border: 1px solid; }
    `;
  }
  get bindRef() {
    return this._bindRef
  }
  set bindRef(val) {
      let oldVal = this._bindRef;
      this._bindRef = JSON.parse(val);
      this.requestUpdate('bindRef', oldVal);
      this.makeGrid()
  }
  attributeChangedCallback(name, old, value) {
    if (old !== value) {
        this._attributeToProperty(name, value);
    }
  }
  connectedCallback() {
    super.connectedCallback()

    //상위 컴포넌트의 데이터를 가져옴.
    this.json =  this.parentElement.__vue__ ? this.parentElement.__vue__.sampleData : []; 
    this.makeGrid();
  }
  static get properties() {
    return {
      name: {type: String},

      flag: {type:String},
      bindRef:  {type:String},

      json: {type:Object},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }
  constructor(){
    super();
    this.json = [];    
    this.body = [];
    this.count = 10;
    this._bindRef = '';

  }
  updated() {
    console.log(this.flag)
    console.log(this.bindRef)
  }
  render() {
    return html`
        ${this.json.length !=0 
        ? html`<table id="example" class="display" style="width:100%">
          <thead >
              <tr>
                ${Object.keys(this.json[0]).map((element) => html`<th class="mytitle">${element}</th>`)}
              </tr>
          </thead>
          <tbody>
              ${this.body}
          </tbody>
          <tfoot>
              <tr>
                  <th>footer</th>
                  <th>footer</th>
                  <th>footer</th>
                  <th>footer</th>
                  <th>footer</th>
              </tr>
          </tfoot>
        </table>`
        : html`<table></table>`
        }
        <!-- <button @click=${this._onClick} part="button">
          ${this.count}번째 행 추가
        </button> -->
        `
  }
  makeGrid() {
    this.json =  this.parentElement ? this.parentElement.__vue__.sampleData : []; 

    this.body = [];
    for(let i=0;i<this.json.length;i++){
      this.body.push(html`
      <tr>
        ${Object.values(this.json[i]).map((element) => html`<td class="mybody">${element}</td>`)}
      </tr>`);
    }
  }
  _onClick() {
    this.count++;
    this.name = 'World';
    this.json.push({"first_name":"Liliane","last_name":"O'Corrane","email":"locorrane9@guardian.co.uk","gender":"Female","ip_address":"94.38.74.50"})

    this.body.push(html`
    <tr>
      ${Object.values(this.json[this.json.length-1]).map((element) => html`<td class="mybody">${element}</td>`)}
    </tr>`);
  }

}

customElements.define('lit-grid', MyElement);