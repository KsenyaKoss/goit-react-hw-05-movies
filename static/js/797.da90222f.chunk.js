"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{797:function(t,e,n){n.r(e);var r=n(439),c=n(689),a=n(87),u=n(791),s=n(866),i=n(184);e.default=function(){var t=(0,u.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],p=(0,a.lr)(),f=(0,r.Z)(p,2),h=f[0],l=f[1],m=h.get("query"),v=(0,c.TH)();(0,u.useEffect)((function(){m&&(0,s.mv)(m).then(o)}),[m]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;l({query:e.elements.search.value}),e.reset()},children:[(0,i.jsx)("input",{type:"text",name:"search"}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),m&&(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("ul",{children:n.map((function(t){var e=t.title,n=t.id;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"".concat(n),state:{from:v},children:e})},n)}))})]}),(0,i.jsx)(c.j3,{})]})}},866:function(t,e,n){n.d(e,{Hx:function(){return x},Mc:function(){return f},mv:function(){return l},uV:function(){return v},wr:function(){return o}});var r=n(861),c=n(757),a=n.n(c),u=n(243),s="https://api.themoviedb.org/3",i="27391c24609865799e74cd8cabdef0e3";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/trending/movie/week?api_key=").concat(i));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/search/movie?query=").concat(e,"&api_key=").concat(i));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data.cast,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=797.da90222f.chunk.js.map