(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(83),a(49)),s=a.n(o),i=a(70),m=a(30),u=a(31),h=a(39),d=a(32),p=a(38),f=a(202),g=(a(87),a(9)),E=a(33),b=a.n(E),v=a(34),w=a.n(v),y=a(35),k=a.n(y),S=Object(g.withStyles)({root:{flexGrow:1,fontWeight:800},grow:{flexGrow:1}})(function(e){var t=e.title,a=e.classes;return r.a.createElement(b.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(k.a,{variant:"h4",color:"inherit",className:a.grow},t)))}),j=a(22),O=a(72),N=a.n(O),C=a(73),T=a.n(C),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={searchTerms:""},a.handleChange=a.handleChange.bind(Object(j.a)(Object(j.a)(a))),a.emitChangeDebounce=N()(a.queryName,150),a.classes=e.classes,a.saveSearchTerms=e.saveSearchTerms,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.emitChangeDebounce(e.target.value)}},{key:"queryName",value:function(e){console.log("queryName - enteredText: ",e),this.setState({searchTerms:e}),this.saveSearchTerms(e)}},{key:"render",value:function(){return r.a.createElement(T.a,{placeholder:"Enter search terms",className:this.classes.input,variant:"outlined",onChange:this.handleChange,inputProps:{"aria-label":"Description"}})}}]),t}(r.a.Component),D=Object(g.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},input:{backgroundColor:e.palette.common.white,margin:e.spacing.unit}}})(x),W=a(74),H=a.n(W),L=Object(g.withStyles)(function(e){return{button:{backgroundColor:e.palette.primary.light,fontWeight:600,margin:e.spacing.unit},input:{display:"none"}}})(function(e){var t=e.classes,a=e.clickHandler;return r.a.createElement(H.a,{variant:"contained",className:t.button,onClick:a},"Search")}),A=Object(g.withStyles)(function(e){return{container:{display:"flex",backgroundColor:e.palette.common.white,margin:"1rem"}}})(function(e){var t=e.classes,a=e.saveSearchTerms,n=e.searchHandler;return r.a.createElement("div",{className:t.container},r.a.createElement(D,{saveSearchTerms:a}),r.a.createElement(L,{clickHandler:n}))}),B=a(75),F=a.n(B),G=a(77),M=a.n(G),q=a(36),z=a.n(q),I=a(76),J=a.n(I),P=a(37),R=a.n(P),X=a(48),Y=a.n(X),$=Object(g.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:16}}})(z.a),_=Object(g.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.strike,a=e.classes,n=Number.parseFloat(t.mass).toFixed(0),c=null!=t.year?t.year.split("-")[0]:"undefined";return r.a.createElement(R.a,{className:a.row,key:t.id},r.a.createElement($,{component:"th",scope:"row"},t.name),r.a.createElement($,{numeric:!0},t.id),r.a.createElement($,null,t.nametype),r.a.createElement($,null,t.recclass),r.a.createElement($,{numeric:!0},n),r.a.createElement($,null,t.fall),r.a.createElement($,{numeric:!0},c),r.a.createElement($,{numeric:!0},t.reclat),r.a.createElement($,{numeric:!0},t.reclong))}),K=Object(g.withStyles)(function(e){return{head:{backgroundColor:"#FFB564",color:"#3B3939",fontSize:18,fontWeight:600},body:{fontSize:14}}})(z.a),Q=Object(g.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.classes,a=e.meteoriteStrikes;return r.a.createElement(Y.a,{className:t.root},r.a.createElement(F.a,{className:t.table,padding:"dense"},r.a.createElement(J.a,null,r.a.createElement(R.a,null,r.a.createElement(K,null,"Name"),r.a.createElement(K,{numeric:!0},"Id"),r.a.createElement(K,null,"Name Type"),r.a.createElement(K,null,"Rec Class"),r.a.createElement(K,{numeric:!0},"Mass (g)"),r.a.createElement(K,null,"Fall"),r.a.createElement(K,null,"Year"),r.a.createElement(K,null,"Latitude"),r.a.createElement(K,null,"Longitude"))),r.a.createElement(M.a,null,a.map(function(e){return r.a.createElement(_,{className:t.row,key:e.id,strike:e})}))))}),U=Object(g.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.title,a=e.href,n=e.classes;return r.a.createElement(b.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(k.a,{variant:"subtitle1",color:"inherit",className:n.grow},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t))))}),V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={meteoriteStrikes:{},isDataLoaded:!1,searchTerms:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.nasa.gov/resource/y77d-th95.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({meteoriteStrikes:a}),this.setState({isDataLoaded:!0}),console.log("meteoriteStrikes json: ",this.state.meteoriteStrikes);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveSearchTerms",value:function(e){console.log("saveSearchTerms: searchTerms: ",e),this.setState({searchTerms:e})}},{key:"searchHandler",value:function(e){console.log("searchHandler triggered. event: ",e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(S,{title:"Meteorite Explorer"})),r.a.createElement("section",{className:"App-search"},r.a.createElement(A,{saveSearchTerms:this.saveSearchTerms,searchHandler:this.searchHandler})),r.a.createElement("section",{className:"App-results"},r.a.createElement(f.a,{basename:"/meteorite"},r.a.createElement("div",null,this.state.isDataLoaded?r.a.createElement(Q,{meteoriteStrikes:this.state.meteoriteStrikes}):" "))),r.a.createElement("footer",{className:"App-footer"},r.a.createElement(U,{title:"Data courtesy Nasa Open Data Portal",href:"https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){e.exports=a(200)},83:function(e,t,a){},87:function(e,t,a){}},[[78,2,1]]]);
//# sourceMappingURL=main.6c24c5d5.chunk.js.map