"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[786],{786:function(t,n,e){e.r(n),e.d(n,{default:function(){return u}});var r=e(885),c=e(871),a=e(791),s=e(523),o=e(184),i=function(t){var n=t.castAr;return(0,o.jsx)("ul",{children:n.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:null!==t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",alt:""}),(0,o.jsx)("p",{children:t.original_name}),(0,o.jsxs)("p",{children:["Character: ",(0,o.jsx)("span",{children:t.character})]})]})}))})},u=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],u=n[1],p=(0,c.UO)().movieId;return(0,a.useEffect)((function(){if(""!==p){var t="https://api.themoviedb.org/3/movie/".concat(p,"/credits?api_key=").concat("024bf82d4805f650033dc69997860333","&language=en-US");(0,s.Z)(t).then((function(t){u(t.cast)})).catch((function(t){return console.log(t)}))}}),[p]),console.log(e),(0,o.jsx)("section",{children:(0,o.jsx)(i,{castAr:e})})}},523:function(t,n,e){e.d(n,{Z:function(){return s}});var r=e(861),c=e(757),a=e.n(c);function s(t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=786.ca5882a8.chunk.js.map