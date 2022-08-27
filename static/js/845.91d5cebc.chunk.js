"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{845:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,i,o,a,c,s,u=t(885),p=t(791),l=t(501),d=t(871),f=t(556),h=t(168),x=t(444),m=(0,x.ZP)(l.OL)(r||(r=(0,h.Z)(["\n  color: black;\n  font-size: 20px;\n  font-weight: 500;\n  margin-botton: 15px;\n\n  &:focus,\n  &:hover {\n    color: red;\n  }\n"]))),v=x.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  border-bottom: 1px solid black;\n"]))),g=x.ZP.div(o||(o=(0,h.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n"]))),j=x.ZP.img(a||(a=(0,h.Z)(["\n  width: 300px;\n"]))),b=x.ZP.span(c||(c=(0,h.Z)(["\n  margin-left: 10px;\n"]))),w=x.ZP.ul(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n  padding-bottom: 15px;\n"]))),y=t(184),k=function(){var n,e,t=(0,p.useState)([]),r=(0,u.Z)(t,2),i=r[0],o=r[1],a=(0,d.TH)(),c=null!==(n=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",s=(0,d.UO)().movieId;(0,p.useEffect)((function(){""!==s&&(0,f.Kc)(s).then((function(n){o(n)})).catch((function(n){return console.log(n)}))}),[s]);var h,x,k=i.title,Z=i.name,_=i.poster_path,U=i.genres,P=i.overview,S=i.vote_average;return 0===i.length?(0,y.jsx)("p",{children:"We don't have any information for this movie."}):(0,y.jsxs)("main",{children:[(0,y.jsxs)(m,{to:c,children:[(0,y.jsx)("span",{children:"\ud83e\udc14"}),"Go back"]}),(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{src:void 0!==_||null!==_?"https://image.tmdb.org/t/p/w500".concat(_):"https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",alt:""}),(0,y.jsxs)(g,{children:[(0,y.jsx)("h1",{children:k||Z}),(0,y.jsxs)("p",{children:["User Score:",(0,y.jsx)(b,{children:S})]}),(0,y.jsx)("h2",{children:"Overview"}),(0,y.jsx)("p",{children:P}),(0,y.jsx)("h2",{children:"Genre"}),(0,y.jsx)("p",{children:U?U.map((function(n){return n.name+" "})):" "})]})]}),(0,y.jsx)("h2",{children:"Additional information"}),(0,y.jsxs)(w,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"cast",state:{from:null===a||void 0===a||null===(h=a.state)||void 0===h?void 0:h.from},children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"reviews",state:{from:null===a||void 0===a||null===(x=a.state)||void 0===x?void 0:x.from},children:"Reviews"})})]}),(0,y.jsx)(p.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading..."}),children:(0,y.jsx)(d.j3,{})})]})}},556:function(n,e,t){t.d(e,{Bt:function(){return x},Kc:function(){return l},PI:function(){return f},Up:function(){return u},Zn:function(){return c}});var r=t(861),i=t(757),o=t.n(i),a="024bf82d4805f650033dc69997860333";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(a),n.next=3,fetch(e);case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(e),n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US"),n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"),n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"),n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=845.91d5cebc.chunk.js.map