(this.webpackJsonpdist_project=this.webpackJsonpdist_project||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),l=a.n(o),c=(a(38),a(6)),i=a(7),s=a(9),u=a(8),m=(a(39),a(14)),d=a(10),h=(a(20),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(m.b,{to:"/",className:"navbar-brand"},"One Word"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{to:"/word-list",className:"nav-link"},"Your words")))))}}]),a}(n.Component)),b=a(15),v=a.n(b),p=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.word.word),r.a.createElement("td",null,e.word.translation))},E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={list:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:5000/words/").then((function(t){e.setState({list:t.data})})).catch((function(e){console.log(e)}))}},{key:"wordList",value:function(){return this.state.list.map((function(e){return r.a.createElement(p,{word:e,key:e._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"All your Words"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thea-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"word"),r.a.createElement("th",null,"translation"))),r.a.createElement("tbody",null,this.wordList())))}}]),a}(n.Component),f=a(12),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeWord=n.onChangeWord.bind(Object(f.a)(n)),n.onChangetarnslation=n.onChangetarnslation.bind(Object(f.a)(n)),n.onSubmit=n.onSubmit.bind(Object(f.a)(n)),n.state={word:"",translation:"",list:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"onChangeWord",value:function(e){e.preventDefault(),this.setState({word:e.target.value})}},{key:"onChangetarnslation",value:function(e){e.preventDefault(),this.setState({translation:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={word:this.state.word,translation:this.state.translation};console.log(t),v.a.post("http://localhost:5000/words/add",t).then((function(e){return console.log(e.data)})),window.location="/word-list"}},{key:"render",value:function(){return r.a.createElement("div",{style:{position:"center"}},r.a.createElement("h3",{className:"title"},"Your Word of the Day"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Your Word"),r.a.createElement("input",{type:"text",required:!0,value:this.state.word,onChange:this.onChangeWord})),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-group "},"Translation"),r.a.createElement("input",{type:"text",value:this.state.translation,onChange:this.onChangetarnslation})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Get translation",className:"btn btn-primary"}))))}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement(d.a,{path:"/",exact:!0,component:g}),r.a.createElement(d.a,{path:"/word-list",component:E}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.f5696822.chunk.js.map