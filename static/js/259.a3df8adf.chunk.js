"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[259],{259:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var r=t(885),c=t(871),a=t(791),u=t(556),s=t(184),i=function(e){var n=e.revArrey;return 0===n.length?(0,s.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)}))})},o=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],p=(0,c.UO)().movieId;return(0,a.useEffect)((function(){""!==p&&(0,u.Bt)(p).then((function(e){o(e.results)})).catch((function(e){return console.log(e)}))}),[p]),(0,s.jsx)("section",{children:(0,s.jsx)(i,{revArrey:t})})}},556:function(e,n,t){t.d(n,{Bt:function(){return d},Kc:function(){return f},PI:function(){return l},Up:function(){return o},Zn:function(){return s}});var r=t(861),c=t(757),a=t.n(c),u="024bf82d4805f650033dc69997860333";function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u),e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(u,"&language=en-US"),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=259.a3df8adf.chunk.js.map