(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,n,a){},108:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(45),i=a(11),u=a(3),c=a.n(u),o=a(37);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=[],t=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(t=(i=u.next()).done)&&(a.push(i.value),!n||a.length!==n);t=!0);}catch(c){r=!0,l=c}finally{try{t||null==u.return||u.return()}finally{if(r)throw l}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=a(22),p=a(43),d=(a(102),function(e){var n=e.handleChange,a=e.label,t=Object(p.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:n},t)),a?r.a.createElement("label",{className:"".concat(t.value.length?"shrink":""," form-input-label")},a):null)}),f=a(42),b=a(14),v=a(9),w=a(10);function h(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return h=function(){return e},e}function g(){var e=Object(v.a)(["\n  margin: 10px 0;\n"]);return g=function(){return e},e}function y(){var e=Object(v.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return e},e}var E=w.c.div(y()),j=w.c.h2(g()),x=w.c.div(h()),O=Object(m.b)(null,function(e){return{googleSignInStart:function(){return e(Object(b.c)())},emailSignInStart:function(n,a){return e(Object(b.b)({email:n,password:a}))}}})(function(e){var n=e.emailSignInStart,a=e.googleSignInStart,u=s(Object(t.useState)({email:"",password:""}),2),m=u[0],p=u[1],b=m.email,v=m.password,w=function(){var e=Object(o.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n(b,v);case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),h=function(e){var n=e.target,a=n.value,t=n.name;p(Object(i.a)({},m,Object(l.a)({},t,a)))};return r.a.createElement(E,null,r.a.createElement(j,null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:w},r.a.createElement(d,{name:"email",type:"email",handleChange:h,value:b,label:"email",required:!0}),r.a.createElement(d,{name:"password",type:"password",value:v,handleChange:h,label:"password",required:!0}),r.a.createElement(x,null,r.a.createElement(f.a,{type:"submit"}," Sign in "),r.a.createElement(f.a,{type:"button",onClick:a,isGoogleSignIn:!0},"Sign in with Google"))))});function S(){var e=Object(v.a)(["\n  margin: 10px 0;\n"]);return S=function(){return e},e}function C(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return C=function(){return e},e}var N=w.c.div(C()),I=w.c.h2(S()),k=Object(m.b)(null,function(e){return{signUpStart:function(n){return e(Object(b.j)(n))}}})(function(e){var n=e.signUpStart,a=s(Object(t.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),u=a[0],m=a[1],p=u.displayName,b=u.email,v=u.password,w=u.confirmPassword,h=function(){var e=Object(o.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),v===w){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:n({displayName:p,email:b,password:v});case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),g=function(e){var n=e.target,a=n.name,t=n.value;m(Object(i.a)({},u,Object(l.a)({},a,t)))};return r.a.createElement(N,null,r.a.createElement(I,null,"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:h},r.a.createElement(d,{type:"text",name:"displayName",value:p,onChange:g,label:"Display Name",required:!0}),r.a.createElement(d,{type:"email",name:"email",value:b,onChange:g,label:"Email",required:!0}),r.a.createElement(d,{type:"password",name:"password",value:v,onChange:g,label:"Password",required:!0}),r.a.createElement(d,{type:"password",name:"confirmPassword",value:w,onChange:g,label:"Confirm Password",required:!0}),r.a.createElement(f.a,{type:"submit"},"SIGN UP")))});function q(){var e=Object(v.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    width: unset;\n    align-items: center;\n    > *:first-child {\n      margin-bottom: 50px;\n    }\n  }\n"]);return q=function(){return e},e}var P=w.c.div(q());n.default=function(){return r.a.createElement(P,null,r.a.createElement(O,null),r.a.createElement(k,null))}}}]);
//# sourceMappingURL=7.2dc0e216.chunk.js.map