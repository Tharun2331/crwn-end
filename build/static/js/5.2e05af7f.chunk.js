(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(n,t,e){"use strict";e.r(t);var r=e(22),i=e(12),c=e(18),a=e(97),u=e(98),o=e(0),l=e.n(o),d=e(99),f=e(9),m=e(10);function s(){var n=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(f.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return p=function(){return n},n}function b(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return b=function(){return n},n}var g=m.c.div(b()),v=m.c.h2(p()),j=m.c.div(s()),h=Object(r.b)(function(n,t){return{collection:Object(a.a)(t.match.params.collectionId)(n)}})(function(n){var t=n.collection,e=t.title,r=t.items;return l.a.createElement(g,null,l.a.createElement(v,null,e),l.a.createElement(j,null,r.map(function(n){return l.a.createElement(d.a,{key:n.id,item:n})})))}),O=Object(i.b)({isLoading:function(n){return!Object(a.d)(n)}}),x=Object(c.d)(Object(r.b)(O),u.a)(h);t.default=x},97:function(n,t,e){"use strict";e.d(t,"b",function(){return a}),e.d(t,"a",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return l});var r=e(12),i=function(n){return n.shop},c=Object(r.a)([i],function(n){return n.collections}),a=Object(r.a)([c],function(n){return n?Object.keys(n).map(function(t){return n[t]}):[]}),u=function(n){return Object(r.a)([c],function(t){return t?t[n]:null})},o=Object(r.a)([i],function(n){return n.isFetching}),l=Object(r.a)([i],function(n){return!!n.collections})},98:function(n,t,e){"use strict";var r=e(43),i=e(0),c=e.n(i),a=e(44);t.a=function(n){return function(t){var e=t.isLoading,i=Object(r.a)(t,["isLoading"]);return e?c.a.createElement(a.a,null):c.a.createElement(n,i)}}},99:function(n,t,e){"use strict";var r=e(0),i=e.n(r),c=e(22),a=e(42),u=e(29),o=e(9),l=e(10);function d(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return f=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return m=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return s=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px ;\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var g=l.c.div(b()),v=Object(l.c)(a.a)(p()),j=l.c.div(s(),function(n){var t=n.imageUrl;return"url(".concat(t,")")}),h=l.c.div(m()),O=l.c.span(f()),x=l.c.span(d());t.a=Object(c.b)(null,function(n){return{addItem:function(t){return n(Object(u.a)(t))}}})(function(n){var t=n.item,e=n.addItem,r=t.name,c=t.price,a=t.imageUrl;return i.a.createElement(g,null,i.a.createElement(j,{className:"image",imageUrl:a}),i.a.createElement(h,null,i.a.createElement(O,null,r),i.a.createElement(x,null,c)),i.a.createElement(v,{onClick:function(){return e(t)},inverted:!0},"Add to cart"))})}}]);
//# sourceMappingURL=5.2e05af7f.chunk.js.map