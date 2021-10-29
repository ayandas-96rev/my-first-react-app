(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(20),o=n.n(r),a=(n(28),n(23)),i=n(18),d=n(7),l=n.n(d),u=n(11),j=n(8),b=n(10),p=n(2),h=n(0),x=function(){return Object(h.jsx)("nav",{class:"navbar navbar-light bg-secondary",children:Object(h.jsxs)("div",{class:"container-fluid",children:[Object(h.jsxs)(b.b,{class:"navbar-brand h1 mb-0 text-light",to:"/",children:[Object(h.jsx)("i",{class:"bi bi-app-indicator me-3"}),"My Todos"]}),Object(h.jsxs)("div",{class:"d-flex",children:[Object(h.jsx)(b.b,{class:"nav-link text-light",to:"/",children:"Home"}),Object(h.jsx)(b.b,{class:"nav-link text-light",to:"/about",children:"About"})]})]})})},f=function(e){var t=e.postTodo,n=Object(c.useState)(""),s=Object(j.a)(n,2),r=s[0],o=s[1];return Object(h.jsx)("div",{class:"mt-3",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(t({title:r,completed:!1}),o(""))},children:[Object(h.jsx)("input",{type:"text",class:"form-control mb-3",placeholder:"Enter To-Do",value:r,onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("button",{class:"btn btn-primary",children:"Save"})]})})},O=function(e){var t=e.postTodo,n=Object(c.useState)(!1),s=Object(j.a)(n,2),r=s[0],o=s[1];return Object(h.jsxs)("div",{class:"card-header bg-dark p-3",children:[Object(h.jsxs)("div",{class:"d-flex justify-content-between align-items-center",children:[Object(h.jsx)("h2",{class:"mb-0",children:Object(h.jsx)("i",{class:"bi bi-list-task text-white"})}),Object(h.jsx)("button",{class:"btn btn-".concat(r?"danger":"secondary"),onClick:function(){return o(!r)},children:r?"Cancel":"Add Todo"})]}),r?Object(h.jsx)(f,{postTodo:t}):Object(h.jsx)(h.Fragment,{})]})},m={outline:"none",border:"none",background:"transparent"},v=function(e){var t=e.todo,n=e.toggle,c=e.deleteTodo;return Object(h.jsx)("div",{class:"card mb-3",children:Object(h.jsxs)("div",{class:"card-body d-flex justify-content-between align-items-center",children:[t.title,Object(h.jsxs)("div",{class:"d-flex align-items-center ms-3",children:[Object(h.jsx)("input",{type:"checkbox",class:"form-check-input mb-1 mx-2",style:{cursor:"pointer"},checked:t.completed,onChange:function(){return n(t.id)}}),Object(h.jsx)("button",{class:"btn-small text-danger",style:m,onClick:function(){return c(t.id)},children:Object(h.jsx)("i",{class:"bi bi-trash"})})]})]})})},g=function(e){var t=e.todos,n=e.toggle,c=e.deleteTodo;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)(v,{todo:e,toggle:n,deleteTodo:c},e.id)}))})},y=function(e){return Object(h.jsx)("div",{class:"popper",children:e.text})};y.defaultProps={text:"Message"};var T=y,w=function(){return Object(h.jsx)("div",{children:"copyright\xa9Ayan, 2021 New React App"})};var k={width:"60vw",minWidth:"500px",maxWidth:"650px",minHeight:"200px"},S=function(){var e=Object(c.useState)({state:!1,messege:""}),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),o=Object(j.a)(r,2),d=o[0],f=o[1];Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){s({state:!0,messege:"Deleting Todo"});var t=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos/".concat(e),{method:"DELETE"});case 2:n=t.sent,console.log(n),f(d.filter((function(t){return t.id!==e}))),s({state:!1,messege:""});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()},y=function(e){s({state:!0,messege:"Updating toggle"}),f(d.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t})));var t=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/".concat(t),{method:"PATCH",body:JSON.stringify({completed:!d[t-1].completed}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent,s({state:!1,messege:""});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t(e)},S=function(e){s({state:!0,messege:"Saving Todo"});var t=function(){var t=Object(u.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",body:JSON.stringify({newTodo:e}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,console.log(c),f([c.newTodo].concat(Object(a.a)(d))),s({state:!1,messege:""});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()};return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{class:"d-flex justify-content-center py-5",children:[Object(h.jsx)(p.a,{path:"/",exact:!0,render:function(){return Object(h.jsxs)("div",{class:"card",style:k,children:[Object(h.jsx)(O,{postTodo:S}),Object(h.jsx)("div",{class:"card-body bg-light",style:{minHeight:"200px",maxHeight:"40vh",overflowY:"scroll"},children:Object(h.jsx)(g,{todos:d,toggle:y,deleteTodo:v})})]})}}),Object(h.jsx)(p.a,{path:"/about",component:w})]}),"'",n.state?Object(h.jsx)(T,{text:n.messege}):Object(h.jsx)(h.Fragment,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};n(36);o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.b169732d.chunk.js.map