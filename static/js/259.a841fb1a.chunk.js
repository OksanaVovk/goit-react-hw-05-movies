"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[259],{259:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),c=t(871),u=t(791),i=t(523),a=t(184),o=function(e){var n=e.revArrey;return 0===n.length?(0,a.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,a.jsx)("ul",{children:n.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{children:e.author}),(0,a.jsx)("p",{children:e.content})]},e.id)}))})},s=function(){var e=(0,u.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],f=(0,c.UO)().movieId;return(0,u.useEffect)((function(){if(""!==f){var e="https://api.themoviedb.org/3/movie/".concat(f,"/reviews?api_key=").concat("024bf82d4805f650033dc69997860333","&language=en-US&page=1");(0,i.Z)(e).then((function(e){s(e.results)})).catch((function(e){return console.log(e)}))}}),[f]),(0,a.jsx)("section",{children:(0,a.jsx)(o,{revArrey:t})})}},523:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(861),c=t(757),u=t.n(c);function i(e){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=259.a841fb1a.chunk.js.map