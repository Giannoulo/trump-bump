(this["webpackJsonptrump-bump"]=this["webpackJsonptrump-bump"]||[]).push([[0],{15:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),i=n.n(r),o=(n(15),n(3)),u=n(1),s=function(){return Object(u.jsx)("div",{className:"container",id:"header-row",children:Object(u.jsx)("div",{id:"header-col",children:"Trump Bump"})})},l=function(){return Object(u.jsx)("div",{className:"container",id:"controls-div",children:Object(u.jsx)("span",{children:"Score: ".concat(24," Time: ").concat(20,"s Lives: ").concat(3)})})},d=(n.p,n.p+"static/media/trumpIcon2.5c01a39c.svg"),f=n.p+"static/media/10-BILLION.f1f8a5f9.mp3",m=function(e){var t=function(){new Audio(f).play()};return Object(u.jsx)("div",{children:Object(u.jsx)("img",{onClick:null===e.clickCallback?function(){return t()}:function(){e.clickCallback(),t()},src:d,alt:"Trump icon",draggable:"false",className:"trump-svg ".concat(e.classNameProp)})})},j=function(e){var t,n=Array.from({length:e},(function(e){return""}));return n[(t=e,Math.floor(Math.random()*t))]="target",n},b=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),s=i[0],l=i[1];return Object(c.useEffect)((function(){var e;console.log(n),l((e=function(){a(n+1)},j(20).map((function(t,n){return"target"===t?Object(u.jsx)(m,{classNameProp:t,clickCallback:e},n):Object(u.jsx)(m,{classNameProp:t,clickCallback:null},n)}))))}),[n]),Object(u.jsx)("div",{className:"container",id:"game-board-div",children:s})},p=function(){var e=Object(c.useState)("unclicked"),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){"clicked"===n&&setTimeout((function(){a("unclicked")}),90)}),[n]),Object(u.jsxs)("div",{className:"App ".concat(n),onClick:function(){a("clicked")},children:[Object(u.jsx)(s,{}),Object(u.jsx)(l,{}),Object(u.jsx)(b,{})]})},v=n(2),O=n(6),h=n.n(O),k=n(8);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var g=Object(v.b)("counter/fetchCount",function(){var e=Object(k.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(v.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(g.pending,(function(e){e.status="loading"})).addCase(g.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),y=w.actions,C=(y.increment,y.decrement,y.incrementByAmount,w.reducer),N=Object(v.a)({reducer:{counter:C}}),B=n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(B.a,{store:N,children:Object(u.jsx)(p,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5c64caae.chunk.js.map