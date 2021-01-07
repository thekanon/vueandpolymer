import {LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {
  static get styles() {
    // Write styles in standard CSS
    return css`
      * { color: black; }
      .mytitle { border: 2px solid; }
      .mybody { border: 1px solid; }
    `;
  }
  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

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

    this.json = [{"first_name":"Brendin","last_name":"Hegdonne","email":"bhegdonne0@cafepress.com","gender":"Male","ip_address":"142.101.100.170"},
    {"first_name":"Bailie","last_name":"Renhard","email":"brenhard1@vimeo.com","gender":"Male","ip_address":"18.121.110.122"},
    {"first_name":"Amandy","last_name":"Blair","email":"ablair2@newyorker.com","gender":"Female","ip_address":"230.214.198.165"},
    {"first_name":"Odelia","last_name":"Mompesson","email":"omompesson3@dot.gov","gender":"Female","ip_address":"147.45.68.95"},
    {"first_name":"Kurt","last_name":"Waud","email":"kwaud4@blogspot.com","gender":"Male","ip_address":"99.250.245.64"},
    {"first_name":"Hazel","last_name":"Courtney","email":"hcourtney5@pagesperso-orange.fr","gender":"Male","ip_address":"21.231.159.228"},
    {"first_name":"Jeri","last_name":"Letcher","email":"jletcher6@elpais.com","gender":"Female","ip_address":"172.117.53.50"},
    {"first_name":"Pavlov","last_name":"Eydel","email":"peydel7@imgur.com","gender":"Male","ip_address":"155.47.16.22"},
    {"first_name":"Spike","last_name":"Cregan","email":"scregan8@baidu.com","gender":"Male","ip_address":"58.217.162.121"},
    {"first_name":"Liliane","last_name":"O'Corrane","email":"locorrane9@guardian.co.uk","gender":"Female","ip_address":"94.38.74.50"}];
    
    this.body = [];
    for(let i=0;i<this.json.length;i++){
      this.body.push(html`
      <tr>
        ${Object.values(this.json[i]).map((element) => html`<td class="mybody">${element}</td>`)}
      </tr>`);
    }


    this.count = 10;
  }
  updated() {
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
                  <th>footer</th>
              </tr>
          </tfoot>
        </table>`
        : html`<table></table>`
        }
        <button @click=${this._onClick} part="button">
          ${this.count}번째 행 추가
        </button>
        `
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