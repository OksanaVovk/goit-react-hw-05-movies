"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[486],{486:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,c,i,a,o=e(885),s=e(871),u=e(791),f=e(523),l=e(63),p=e(168),d=e(444),h=d.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n"]))),m=d.ZP.li(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  padding-bottom: 10px;\n"]))),x=d.ZP.img(i||(i=(0,p.Z)(["\n  width: 150px;\n  margin-top: 20px;\n"]))),g=d.ZP.p(a||(a=(0,p.Z)(["\n  margin: 0px;\n  font-weight: bold;\n"]))),b=e(184),j=function(n){var t=n.castAr,e=l;return 0===t.length?(0,b.jsx)("p",{children:"We don't have any information for cast of this movie."}):(0,b.jsx)(h,{children:t.map((function(n){return(0,b.jsxs)(m,{children:[(0,b.jsx)(x,{src:null!==n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):e,alt:""}),(0,b.jsx)(g,{children:n.original_name}),(0,b.jsxs)(g,{children:["Character: ",(0,b.jsx)("span",{children:n.character})]})]},n.id)}))})},v=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],c=(0,s.UO)().movieId;return(0,u.useEffect)((function(){if(""!==c){var n="https://api.themoviedb.org/3/movie/".concat(c,"/credits?api_key=").concat("024bf82d4805f650033dc69997860333","&language=en-US");(0,f.Z)(n).then((function(n){r(n.cast)})).catch((function(n){return console.log(n)}))}}),[c]),(0,b.jsx)("section",{children:(0,b.jsx)(j,{castAr:e})})}},523:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(861),c=e(757),i=e.n(c);function a(n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},63:function(n,t,e){n.exports=e.p+"static/media/default.6e33a3c8cbe2cddf7375.png"}}]);
//# sourceMappingURL=486.8021b3cb.chunk.js.map