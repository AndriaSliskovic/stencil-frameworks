/*! Built with http://stenciljs.com */
import{h}from"../udemywccourse.core.js";import{a as AV_API_KEY}from"./chunk-98b35419.js";var StockPrice=function(){function t(){this.stockInputValid=!1,this.loading=!1}return t.prototype.stockSymbolChanged=function(t,e){t!==e&&(this.stockUserInput=t,this.stockInputValid=!0,this.fetchStockPrice(t))},t.prototype.onUserInput=function(t){this.stockUserInput=t.target.value,this.stockInputValid=""!==this.stockUserInput.trim()},t.prototype.onFetchStockPrice=function(t){t.preventDefault(),this.stockSymbol=this.stockInput.value},t.prototype.componentWillLoad=function(){console.log("componentWillLoad"),console.log(this.stockSymbol)},t.prototype.componentDidLoad=function(){console.log("componentDidLoad"),this.stockSymbol&&(this.stockUserInput=this.stockSymbol,this.stockInputValid=!0,this.fetchStockPrice(this.stockSymbol))},t.prototype.componentWillUpdate=function(){console.log("componentWillUpdate")},t.prototype.componentDidUpdate=function(){console.log("componentDidUpdate")},t.prototype.componentDidUnload=function(){console.log("componentDidUnload")},t.prototype.onStockSymbolSelected=function(t){console.log("stock symbol selected: "+t.detail),t.detail&&t.detail!==this.stockSymbol&&(this.stockSymbol=t.detail)},t.prototype.fetchStockPrice=function(t){var e=this;this.loading=!0,fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+t+"&apikey="+AV_API_KEY).then(function(t){if(200!==t.status)throw new Error("Invalid!");return t.json()}).then(function(t){if(!t["Global Quote"]["05. price"])throw new Error("Invalid symbol!");e.error=null,e.fetchedPrice=+t["Global Quote"]["05. price"],e.loading=!1}).catch(function(t){e.error=t.message,e.fetchedPrice=null,e.loading=!1})},t.prototype.hostData=function(){return{class:this.error?"error":""}},t.prototype.render=function(){var t=this,e=h("p",null,"Please enter a symbol!");return this.error&&(e=h("p",null,this.error)),this.fetchedPrice&&(e=h("p",null,"Price: $",this.fetchedPrice)),this.loading&&(e=h("uc-spinner",null)),[h("form",{onSubmit:this.onFetchStockPrice.bind(this)},h("input",{id:"stock-symbol",ref:function(e){return t.stockInput=e},value:this.stockUserInput,onInput:this.onUserInput.bind(this)}),h("button",{type:"submit",disabled:!this.stockInputValid||this.loading},"Fetch")),h("div",null,e)]},Object.defineProperty(t,"is",{get:function(){return"uc-stock-price"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},error:{state:!0},fetchedPrice:{state:!0},loading:{state:!0},stockInputValid:{state:!0},stockSymbol:{type:String,attr:"stock-symbol",reflectToAttr:!0,mutable:!0,watchCallbacks:["stockSymbolChanged"]},stockUserInput:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ucSymbolSelected",method:"onStockSymbolSelected"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{font-family:sans-serif;border:2px solid #3b013b;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:#e79804}form input{font:inherit;color:#3b013b;padding:.1rem .25rem;display:block;margin-bottom:.5rem}form button:focus,form input:focus{outline:none}form button{font:inherit;padding:.25rem .5rem;border:1px solid #3b013b;background:#3b013b;color:#fff;cursor:pointer}form button:active,form button:hover{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}"},enumerable:!0,configurable:!0}),t}();export{StockPrice as UcStockPrice};