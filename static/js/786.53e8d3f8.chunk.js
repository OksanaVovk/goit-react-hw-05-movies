"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[786],{786:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var c=n(885),r=n(871),a=n(791),o=n(124),i=n(184),s=function(t){var e=t.castAr;return(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:null!==t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://mysteriouswritings.com/wp-content/uploads/2017/02/movie.jpg",alt:""}),(0,i.jsx)("p",{children:t.original_name}),(0,i.jsxs)("p",{children:["Character: ",(0,i.jsx)("span",{children:t.character})]})]})}))})},l=function(){var t=(0,a.useState)([]),e=(0,c.Z)(t,2),n=e[0],l=e[1],u=(0,r.UO)().movieId;return(0,a.useEffect)((function(){if(""!==u){var t="https://api.themoviedb.org/3/movie/".concat(u,"/credits?api_key=").concat("024bf82d4805f650033dc69997860333","&language=en-US");(0,o.Z)(t).then((function(t){l(t.cast)})).catch((function(t){return console.log(t)}))}}),[u]),console.log(n),(0,i.jsx)("section",{children:(0,i.jsx)(s,{castAr:n})})}}}]);
//# sourceMappingURL=786.53e8d3f8.chunk.js.map