(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),c=t.n(r),o=(t(13),t(4)),m=function(e){var a=e.title;return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper white"},l.a.createElement("a",{href:"#!",className:"brand-logo blue-grey darken-4"},a)))},i=function(e){var a=e.message;return l.a.createElement("p",{className:"red darken-4 error"},a)},s=function(e){var a=e.search,t=e.setSearch,r=e.setConsult,c=Object(n.useState)(!1),m=Object(o.a)(c,2),s=m[0],u=m[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==a.trim()?(u(!1),r(!0)):u(!0)}},s?l.a.createElement(i,{message:"El campo ciudad es obligatorio"}):null,l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",name:"city",id:"city",value:a,onChange:function(e){t(e.target.value)},placeholder:"ejemplo: La Plata"}),l.a.createElement("label",{htmlFor:"city"},"Ciudad: ")),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"submit",value:"Buscar Clima",className:"btn-large btn-block yellow accent-4 black-text"})))},u=function(e){var a=e.result,t=a.name,n=a.main;return t?l.a.createElement("div",{className:"card-panel white col s12"},l.a.createElement("div",{className:"black-text"},l.a.createElement("h2",null,"El clima de ",t," es: "),l.a.createElement("p",null,"Temperatura M\xe1xima:",n.temp_max,"  ",l.a.createElement("span",null," \u2103 ")),l.a.createElement("p",null,"Temperatura Minima:",n.temp_min,"  ",l.a.createElement("span",null," \u2103 ")),l.a.createElement("p",null,"Presi\xf3n:",n.pressure,"hPa"),l.a.createElement("p",null,"Humedad:",n.humidity,"%"))):null},d=t(7);var E=function(e){var a=e.city;if(!a.name)return null;var t={lat:a.coord.lat,lng:a.coord.lon};return l.a.createElement(d.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_BACKEND_URL:"http://localhost:4000"}).API_KEY_GOOGLE_MAPS},center:t,defaultZoom:12,onGoogleApiLoaded:function(e){return function(e,a){return new a.Marker({position:t,map:e})}(e.map,e.maps)}})};var p=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),d=Object(o.a)(c,2),p=d[0],v=d[1],f=Object(n.useState)({}),h=Object(o.a)(f,2),b=h[0],N=h[1],g=Object(n.useState)(!1),w=Object(o.a)(g,2),y=w[0],O=w[1];return Object(n.useEffect)((function(){!function(){if(p){var e="/api/weather/?name=".concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){404===e.code?O(!0):O(!1),N(e),v(!1)}))}}()}),[p]),l.a.createElement(n.Fragment,null,l.a.createElement(m,{title:"Clima"}),l.a.createElement("div",{className:"contenedor-form"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col m6 s12"},l.a.createElement(s,{search:t,setSearch:r,setConsult:v})),l.a.createElement("div",{className:"col m6 s12"},y?l.a.createElement(i,{message:"No hay resultados"}):l.a.createElement(u,{result:b}))))),l.a.createElement("div",{className:"map-container"},y?null:l.a.createElement(E,{city:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.4a847386.chunk.js.map