(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(t,e,n){},36:function(t,e,n){},54:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),r=n(27),o=n.n(r),i=(n(35),n(36),n(10)),l=n(11),u=n(13),h=n(12),j=n(14),b=n.n(j),d=function(t){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+t)},f=function(t){return console.log(t),b()({method:"post",url:"/api/favorites",data:t,headers:{"Content-Type":"application/json"}})},m=function(){return b.a.get("/api/favorites")};n(54);var O=function(t){return t.results.length>0?Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Results:"}),t.results.map((function(t,e){return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("img",{className:"thumbnail",alt:t.volumeInfo.title,src:t.volumeInfo.imageLinks.thumbnail}),Object(c.jsx)("h5",{className:"card-title",children:t.volumeInfo.title}),Object(c.jsxs)("p",{className:"card-text",children:["By ",t.volumeInfo.authors," "]}),Object(c.jsx)("button",{"data-index":e,className:"btn btn-primary save-btn",onClick:function(){return f({title:t.volumeInfo.title,author:t.volumeInfo.authors[0],date:Date.now()}).catch((function(t){console.log(t)}))},children:"Save to favorites"})]})},e)}))]}):Object(c.jsx)("div",{})},x=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={search:"",results:[]},t.handleInputChange=function(e){t.setState({search:e.target.value},(function(){d(t.state.search).then((function(e){for(var n=[],c=0;c<e.data.items.length;c++)e.data.items[c].volumeInfo.imageLinks&&n.push(e.data.items[c]),t.setState({search:t.search,results:n})}))}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"React Book Search"}),Object(c.jsxs)("form",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search for a book by title:"}),Object(c.jsx)("input",{onChange:this.handleInputChange,className:"form-control",type:"text",id:"search"})]}),Object(c.jsx)(O,{results:this.state.results})]})}}]),n}(s.a.Component),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){m().then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Results:"})})}}]),n}(s.a.Component),p=(n(55),n(28)),g=n(2);var y=function(){return Object(c.jsx)(p.a,{children:Object(c.jsxs)(g.d,{children:[Object(c.jsx)(g.b,{exact:!0,path:"/search",children:Object(c.jsx)(x,{})}),Object(c.jsx)(g.b,{exact:!0,path:"/",children:Object(c.jsx)(g.a,{to:"/search"})}),Object(c.jsx)(g.b,{exact:!0,path:"/saved",children:Object(c.jsx)(v,{})}),Object(c.jsx)(g.b,{path:"*",children:Object(c.jsx)("h1",{children:"Page Not found"})})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),k()}},[[64,1,2]]]);
//# sourceMappingURL=main.8e15c10d.chunk.js.map