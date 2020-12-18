(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(n,t,e){"use strict";e.r(t);var r=e(22),i=e(12),c=e(18),a=e(97),u=e(98),o=e(43),l=e(0),d=e.n(l),f=e(9),s=e(10);function m(){var n=Object(f.a)(["\ndisplay: flex;\nflex-direction: column;\n"]);return m=function(){return n},n}var p=s.c.div(m()),b=e(99),v=e(27);function g(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media screen and (max-width: 800px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(f.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]);return j=function(){return n},n}var x=s.c.div(j()),O=s.c.h1(h()),w=s.c.div(g()),y=Object(v.f)(function(n){var t=n.title,e=n.items,r=n.history,i=n.match,c=n.routeName;return d.a.createElement(x,null,d.a.createElement(O,{onClick:function(){return r.push("".concat(i.path,"/").concat(c))}},t.toUpperCase()),d.a.createElement(w,null,e.filter(function(n,t){return t<4}).map(function(n){return d.a.createElement(b.a,{key:n.id,item:n})})))}),E=Object(i.b)({collections:a.b}),k=Object(r.b)(E)(function(n){var t=n.collections;return d.a.createElement(p,null,t.map(function(n){var t=n.id,e=Object(o.a)(n,["id"]);return d.a.createElement(y,Object.assign({key:t},e))}))}),U=Object(i.b)({isLoading:a.c}),z=Object(c.d)(Object(r.b)(U),u.a)(k);t.default=z},97:function(n,t,e){"use strict";e.d(t,"b",function(){return a}),e.d(t,"a",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return l});var r=e(12),i=function(n){return n.shop},c=Object(r.a)([i],function(n){return n.collections}),a=Object(r.a)([c],function(n){return n?Object.keys(n).map(function(t){return n[t]}):[]}),u=function(n){return Object(r.a)([c],function(t){return t?t[n]:null})},o=Object(r.a)([i],function(n){return n.isFetching}),l=Object(r.a)([i],function(n){return!!n.collections})},98:function(n,t,e){"use strict";var r=e(43),i=e(0),c=e.n(i),a=e(44);t.a=function(n){return function(t){var e=t.isLoading,i=Object(r.a)(t,["isLoading"]);return e?c.a.createElement(a.a,null):c.a.createElement(n,i)}}},99:function(n,t,e){"use strict";var r=e(0),i=e.n(r),c=e(22),a=e(42),u=e(29),o=e(9),l=e(10);function d(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return f=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return s=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return m=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px ;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var v=l.c.div(b()),g=Object(l.c)(a.a)(p()),h=l.c.div(m(),function(n){var t=n.imageUrl;return"url(".concat(t,")")}),j=l.c.div(s()),x=l.c.span(f()),O=l.c.span(d());t.a=Object(c.b)(null,function(n){return{addItem:function(t){return n(Object(u.a)(t))}}})(function(n){var t=n.item,e=n.addItem,r=t.name,c=t.price,a=t.imageUrl;return i.a.createElement(v,null,i.a.createElement(h,{className:"image",imageUrl:a}),i.a.createElement(j,null,i.a.createElement(x,null,r),i.a.createElement(O,null,c)),i.a.createElement(g,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))})}}]);
//# sourceMappingURL=4.ae8be2ea.chunk.js.map