"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[446],{446:function(t,n,e){e.r(n);var r=e(439),c=e(791),a=e(866),u=e(689),i=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],o=(0,u.UO)().id;return(0,c.useEffect)((function(){(0,a.uV)(o).then(s)}),[o]),(0,i.jsx)(i.Fragment,{children:0===e.length?(0,i.jsx)("h3",{children:"There is no such information"}):(0,i.jsx)("ul",{children:e.map((function(t){var n=t.profile_path,e=t.name,r=t.character,c=t.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:"img",width:50}),(0,i.jsx)("p",{children:e}),(0,i.jsx)("p",{children:r})]},c)}))})})}},866:function(t,n,e){e.d(n,{Hx:function(){return w},Mc:function(){return f},mv:function(){return l},uV:function(){return m},wr:function(){return o}});var r=e(861),c=e(757),a=e.n(c),u=e(243),i="https://api.themoviedb.org/3",s="27391c24609865799e74cd8cabdef0e3";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(s));case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(s));case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,r=e.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=446.661bb3c8.chunk.js.map