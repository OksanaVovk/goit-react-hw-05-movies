"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{621:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(501),c=e(871),u=e(168),i=e(444).ZP.li(r||(r=(0,u.Z)(["\nfont-size: 16px;\nline-height: 1.3;\n  }\n"]))),s=e(184),o=function(n){var t=n.moviesAr,e=(0,c.TH)();return 0===t.length?void 0:(0,s.jsx)("ul",{children:t.map((function(n){return(0,s.jsx)(i,{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title?n.title:n.name})},n.id)}))})}},415:function(n,t,e){e.r(t);var r=e(885),a=e(791),c=e(556),u=e(621),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,a.useEffect)((function(){(0,c.Zn)().then((function(n){s(n.results)})).catch((function(n){return console.log(n)}))}),[]),(0,i.jsx)("main",{children:(0,i.jsx)(u.Z,{moviesAr:e})})}},556:function(n,t,e){e.d(t,{Bt:function(){return d},Kc:function(){return f},PI:function(){return l},Up:function(){return o},Zn:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u="024bf82d4805f650033dc69997860333";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),n.next=3,fetch(e);case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.d13bc4c7.chunk.js.map