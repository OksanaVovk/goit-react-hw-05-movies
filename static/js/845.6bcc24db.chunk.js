"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{523:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(861),r=t(757),o=t.n(r);function s(n){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(o().mark((function n(e){var t,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:return i=n.sent,n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},845:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var i,r,o,s,c,a,l=t(885),d=t(791),u=t(501),p=t(871),h=t(523),f=t(168),x=t(444),m=(0,x.ZP)(u.OL)(i||(i=(0,f.Z)(["\n  color: black;\n  font-size: 20px;\n  font-weight: 500;\n  margin-botton: 15px;\n\n  &:focus,\n  &:hover {\n    color: red;\n  }\n"]))),v=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  border-bottom: 1px solid black;\n"]))),j=x.ZP.div(o||(o=(0,f.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n"]))),g=x.ZP.img(s||(s=(0,f.Z)(["\n  width: 300px;\n"]))),b=x.ZP.span(c||(c=(0,f.Z)(["\n  margin-left: 10px;\n"]))),w=x.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n  padding-bottom: 15px;\n"]))),Z=t(184),k=function(){var n,e,t=(0,d.useState)([]),i=(0,l.Z)(t,2),r=i[0],o=i[1],s=(0,p.TH)(),c=null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",a=(0,p.UO)().movieId;(0,d.useEffect)((function(){if(""!==a){var n="https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat("024bf82d4805f650033dc69997860333","&language=en-US");(0,h.Z)(n).then((function(n){o(n)})).catch((function(n){return console.log(n)}))}}),[a]);var f,x,k=r.title,y=r.name,_=r.poster_path,P=r.genres,U=r.overview,S=r.vote_average;return 0===r.length?(0,Z.jsx)("p",{children:"We don't have any information for this movie."}):(0,Z.jsxs)("main",{children:[(0,Z.jsxs)(m,{to:c,children:[(0,Z.jsx)("span",{children:"\ud83e\udc14"}),"Go back"]}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(g,{src:void 0!==_||null!==_?"https://image.tmdb.org/t/p/w500".concat(_):"https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",alt:""}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)("h1",{children:k||y}),(0,Z.jsxs)("p",{children:["User Score:",(0,Z.jsx)(b,{children:S})]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:U}),(0,Z.jsx)("h2",{children:"Genre"}),(0,Z.jsx)("p",{children:P?P.map((function(n){return n.name+" "})):" "})]})]}),(0,Z.jsx)("h2",{children:"Additional information"}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(u.rU,{to:"cast",state:{from:null===s||void 0===s||null===(f=s.state)||void 0===f?void 0:f.from},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(u.rU,{to:"reviews",state:{from:null===s||void 0===s||null===(x=s.state)||void 0===x?void 0:x.from},children:"Reviews"})})]}),(0,Z.jsx)(d.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsx)(p.j3,{})})]})}}}]);
//# sourceMappingURL=845.6bcc24db.chunk.js.map