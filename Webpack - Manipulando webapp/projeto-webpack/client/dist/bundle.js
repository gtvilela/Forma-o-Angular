webpackJsonp([0],[,,function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a){return a instanceof w||Object.getPrototypeOf(a)instanceof w}function f(a){return e(a)?a.message:(console.log(a),"N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o.")}function g(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearInterval(f),f=setTimeout(()=>e.apply(this,b),a)},d}}function h(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}function i(a){throw new Error(`${a} é um parâmetro obrigatório`)}function j(a=i("event"),b=i("selector"),c=!0){return function(d,e,f){return Reflect.defineMetadata("bindEvent",{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}}function k(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function l(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function m(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}Object.defineProperty(b,"__esModule",{value:!0});let n=class a{static create(b,c,d){return new Proxy(b,{get(b,e){return a._ehFuncao(b[e])&&c.includes(e)?function(){console.log(`"${e}" disparou a armadilha`),b[e].apply(b,arguments),d(b)}:b[e]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _ehFuncao(a){return typeof a==typeof Function}},o=class{constructor(a,b,...c){const d=n.create(a,c,(a)=>{b.update(a)});return b.update(a),d}};const p=["negociacoes"];let q=null,r=null,s=class a{constructor(){throw new Error("N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe")}static getConnection(){return new Promise((b,c)=>{if(q)return b(q);const d=indexedDB.open("jscangaceiro",2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{q=a.target.result,r=q.close.bind(q),q.close=()=>{throw new Error("Voc\xEA n\xE3o pode fechar diretamente a conex\xE3o")},b(a.target.result)},d.onerror=(a)=>{console.log(a.target.error),c(a.target.error.name)}})}static _createStores(a){p.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}static closeConnection(){q&&r()}},t=class{constructor(a){this._connection=a,this._store="negociacoes"}adiciona(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c("N\xE3o foi poss\xEDvel salvar a negocia\xE7\xE3o")}})}listaTodos(){return new Promise((a,b)=>{const c=[],d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();d.onsuccess=(b)=>{const d=b.target.result;if(d){const a=new y(d.value._data,d.value._quantidade,d.value._valor);c.push(a),d.continue()}else a(c)},d.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel listar nas negocia\xE7\xF5es")}})}apagaTodos(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es")}})}},u=(()=>{var a=d(function*(){let a=yield s.getConnection();return new t(a)});return function(){return a.apply(this,arguments)}})(),v=class extends Error{constructor(a=""){super(a),this.name=this.constructor.name}};const w=v;let x=class{_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}},y=class{constructor(a=i("data"),b=i("quantidade"),c=i("valor")){Object.assign(this,{_quantidade:b,_valor:c}),this._data=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(a){return JSON.stringify(this)==JSON.stringify(a)}},z=class{constructor(){this._http=new x}obtemNegociacoesDaSemana(){return this._http.get("http://localhost:3000/negociacoes/semana").then((a)=>a.map((a)=>new y(new Date(a.data),a.quantidade,a.valor)),()=>{throw new v("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana")})}obtemNegociacoesDaSemanaAnterior(){return this._http.get("http://localhost:3000/nnegociacoes/anterior").then((a)=>a.map((a)=>new y(new Date(a.data),a.quantidade,a.valor)),()=>{throw new v("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana anterior")})}obtemNegociacoesDaSemanaRetrasada(){return this._http.get("http://localhost:3000/nnegociacoes/retrasada").then((a)=>a.map((a)=>new y(new Date(a.data),a.quantidade,a.valor)),()=>{throw new v("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es da semana retrasada")})}obtemNegociacoesDoPeriodo(){var a=this;return k(function*(){try{let b=yield Promise.all([a.obtemNegociacoesDaSemana(),a.obtemNegociacoesDaSemanaAnterior(),a.obtemNegociacoesDaSemanaRetrasada()]);return b.reduce(function(a,b){return a.concat(b)},[]).sort(function(c,a){return a.data.getTime()-c.data.getTime()})}catch(a){throw console.log(a),new v("N\xE3o foi poss\xEDvel obter as negocia\xE7\xF5es do per\xEDodo")}})()}},A=class{constructor(){this._negociacoes=[],Object.freeze(this)}adiciona(a){this._negociacoes.push(a)}paraArray(){return[].concat(this._negociacoes)}get volumeTotal(){return this._negociacoes.reduce((a,b)=>a+b.volume,0)}esvazia(){this._negociacoes.length=0}},B=class{constructor(a){this._elemento=document.querySelector(a)}update(a){this._elemento.innerHTML=this.template(a)}template(){throw new Error("Voc\xEA precisa implementar o m\xE9todo template")}},C=class extends B{template(a){return a.texto?`<p class="alert alert-info">${a.texto}</p>`:`<p></p>`}},D=class extends v{constructor(){super("A data deve estar no formato dd/mm/aaaa")}},E=class{constructor(){throw new Error("Esta classe n\xE3o pode ser instanciada")}static paraTexto(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}static paraData(a){if(!/\d{2}\/\d{2}\/\d{4}/.test(a))throw new D;return new Date(...a.split("/").reverse().map((a,b)=>a-b%2))}},F=class extends B{template(a){return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${a.paraArray().map((a)=>`
                    <tr>
                        <td>${E.paraTexto(a.data)}</td>
                        <td>${a.quantidade}</td>
                        <td>${a.valor}</td>
                        <td>${a.volume}</td>
                    </tr>                        
                `).join("")}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${a.volumeTotal}</td>            
                </tr>
            </tfoot>
            
        </table>               
        `}},G=class{constructor(a=""){this._texto=a}get texto(){return this._texto}set texto(a){this._texto=a}};var H,I,J,K,L,M,N,O;let P=(H=function(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const c=a,d=function(){const a=new c(...b);Object.getOwnPropertyNames(c.prototype).forEach((b)=>{Reflect.hasMetadata("bindEvent",a,b)&&h(a,Reflect.getMetadata("bindEvent",a,b))})};return d.prototype=c.prototype,d}}("#data","#quantidade","#valor"),I=j("submit",".form"),J=g(),K=j("click","#botao-importa"),L=g(),M=j("click","#botao-apaga"),H(N=(O=class{constructor(a,b,c){Object.assign(this,{_inputData:a,_inputQuantidade:b,_inputValor:c}),this._negociacoes=new o(new A(),new F("#negociacoes"),"adiciona","esvazia"),this._mensagem=new o(new G(),new C("#mensagemView"),"texto"),this._service=new z,this._init()}_init(){var a=this;return l(function*(){try{const b=yield u(),c=yield b.listaTodos();c.forEach(function(b){return a._negociacoes.adiciona(b)})}catch(b){a._mensagem.texto=f(b)}})()}adiciona(){var a=this;return l(function*(){try{const b=a._criaNegociacao(),c=yield u();yield c.adiciona(b),a._negociacoes.adiciona(b),a._mensagem.texto="Negocia\xE7\xE3o adicionada com sucesso",a._limpaFormulario()}catch(b){a._mensagem.texto=f(b)}})()}_limpaFormulario(){this._inputData.value="",this._inputQuantidade.value=1,this._inputValor.value=0,this._inputData.focus()}_criaNegociacao(){return new y(E.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}importaNegociacoes(){var a=this;return l(function*(){try{const b=yield a._service.obtemNegociacoesDoPeriodo();console.log(b),b.filter(function(b){return!a._negociacoes.paraArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._negociacoes.adiciona(b)}),a._mensagem.texto="Negocia\xE7\xF5es do per\xEDodo importadas com sucesso"}catch(b){a._mensagem.texto=f(b)}})()}apaga(){var a=this;return l(function*(){try{const b=yield u();yield b.apagaTodos(),a._negociacoes.esvazia(),a._mensagem.texto="Negocia\xE7\xF5es apagadas com sucesso"}catch(b){a._mensagem.texto=f(b)}})()}},m(O.prototype,"adiciona",[I,J],Object.getOwnPropertyDescriptor(O.prototype,"adiciona"),O.prototype),m(O.prototype,"importaNegociacoes",[K,L],Object.getOwnPropertyDescriptor(O.prototype,"importaNegociacoes"),O.prototype),m(O.prototype,"apaga",[M],Object.getOwnPropertyDescriptor(O.prototype,"apaga"),O.prototype),O))||N);var Q=c(3),R=c.n(Q),S=c(4),T=c.n(S),U=c(1),V=c.n(U),W=c(5),X=c.n(W);const Y=new P,Z=new y(new Date(),1,200),$=new Headers;$.set("Content-Type","application/json");const _=JSON.stringify(Z);fetch("/negociacoes",{method:"POST",headers:$,body:_}).then(()=>console.log("Dado enviado com sucesso"))},function(){},function(){},function(){}],[2]);