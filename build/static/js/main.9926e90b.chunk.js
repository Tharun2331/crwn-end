(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return o}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"f",function(){return d}),n.d(t,"j",function(){return f}),n.d(t,"k",function(){return p}),n.d(t,"i",function(){return m});var r=n(8),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},i=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},u=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},o=function(){return{type:r.a.CHECK_USER_SESSION}},s=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},f=function(e){return{type:r.a.SIGN_UP_START,payload:e}},p=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},m=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},15:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return f}),n.d(t,"d",function(){return p}),n.d(t,"f",function(){return m});var r=n(3),a=n.n(r),c=n(11),i=n(37),u=n(32),o=n.n(u);n(91),n(94);o.a.initializeApp({apiKey:"AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",authDomain:"crwn-db.firebaseapp.com",databaseURL:"https://crwn-db.firebaseio.com",projectId:"crwn-db",storageBucket:"crwn-db.appspot.com",messagingSenderId:"850995411664",appId:"1:850995411664:web:7ddc01d597846f65"});var s=function(){var e=Object(i.a)(a.a.mark(function e(t,n){var r,i,u,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,u=t.email,o=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:i,email:u,createdAt:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}(),l=function(e){return e.docs.map(function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}}).reduce(function(e,t){return e[t.title.toLowerCase()]=t,e},{})},d=function(){return new Promise(function(e,t){var n=f.onAuthStateChanged(function(t){n(),e(t)},t)})},f=o.a.auth(),p=o.a.firestore(),m=new o.a.auth.GoogleAuthProvider;m.setCustomParameters({prompt:"select_account"});o.a},17:function(e,t,n){"use strict";t.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},20:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},29:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return o});var r=n(17),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},u=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(){return{type:r.a.CLEAR_CART}}},30:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return o});var r=n(12),a=function(e){return e.cart},c=Object(r.a)([a],function(e){return e.cartItems}),i=Object(r.a)([a],function(e){return e.hidden}),u=Object(r.a)([c],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),o=Object(r.a)([c],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)})},39:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return i});var r=n(20),a=(n(15),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),c=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},42:function(e,t,n){"use strict";var r=n(43),a=n(0),c=n.n(a),i=n(9),u=n(10);function o(){var e=Object(i.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return o=function(){return e},e}function s(){var e=Object(i.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return s=function(){return e},e}function l(){var e=Object(i.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return l=function(){return e},e}function d(){var e=Object(i.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return d=function(){return e},e}var f=Object(u.b)(d()),p=Object(u.b)(l()),m=Object(u.b)(s()),b=u.c.button(o(),function(e){return e.isGoogleSignIn?m:e.inverted?p:f});t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return c.a.createElement(b,n,t)}},44:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(9),i=n(10);function u(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return u=function(){return e},e}function o(){var e=Object(c.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return e},e}var s=i.c.div(o()),l=i.c.div(u());t.a=function(){return a.a.createElement(s,null,a.a.createElement(l,null))}},65:function(e,t,n){e.exports=n(96)},70:function(e,t,n){},8:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},81:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),i=n.n(c),u=n(24),o=n(50),s=(n(70),n(27)),l=n(12),d=n(22),f=n(52),p=n(53),m=n(63),b=n(54),E=n(64),O=n(9),h=n(10);function v(){var e=Object(O.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return v=function(){return e},e}function S(){var e=Object(O.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return S=function(){return e},e}function _(){var e=Object(O.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return _=function(){return e},e}var g=h.c.div(_()),j=h.c.div(S(),function(e){var t=e.imageUrl;return"url(".concat(t,")")}),x=h.c.h2(v()),y=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(m.a)(this,Object(b.a)(t).call(this))).state={hasErrored:!1},e}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?a.a.createElement(g,null,a.a.createElement(j,{imageUrl:"https://i.imgur.com/A040Lxr.png"}),a.a.createElement(x,null," Soory this page is broken ")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),t}(a.a.Component);function I(){var e=Object(O.a)(["\npadding: 10px 15px;\ncursor: pointer;\n"]);return I=function(){return e},e}function C(){var e=Object(O.a)(["\nwidth: 50%;\nheight: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: flex-end;\n\n@media screen and (max-width: 800px) {\nwidth: 80%;\n}\n"]);return C=function(){return e},e}function T(){var e=Object(O.a)(["\nheight: 100%;\nwidth: 70px;\npadding: 25px;\n\n@media screen and (max-width: 800px) {\n width: 50px;\n padding: 0;\n}\n\n"]);return T=function(){return e},e}function w(){var e=Object(O.a)(["\nheight: 70px;\nwidth: 100%;\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 25px;\n\n@media screen and (max-width: 800px) {\nheight: 60px;\npadding: 10px;\nmargin-bottom: 20px;\n}\n"]);return w=function(){return e},e}var N=h.c.div(w()),U=Object(h.c)(u.b)(T()),k=h.c.div(C()),R=Object(h.c)(u.b)(I());function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G=a.a.createElement("title",null,"Group"),F=a.a.createElement("desc",null,"Created with Sketch."),H=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),M=function(e){var t=e.svgRef,n=L(e,["svgRef"]);return a.a.createElement("svg",A({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),G,F,H)},P=a.a.forwardRef(function(e,t){return a.a.createElement(M,A({svgRef:t},e))}),D=(n.p,n(29)),z=n(30);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=a.a.createElement("g",null),K=a.a.createElement("g",null),W=a.a.createElement("g",null),Y=a.a.createElement("g",null),J=a.a.createElement("g",null),X=a.a.createElement("g",null),Z=a.a.createElement("g",null),Q=a.a.createElement("g",null),$=a.a.createElement("g",null),ee=a.a.createElement("g",null),te=a.a.createElement("g",null),ne=a.a.createElement("g",null),re=a.a.createElement("g",null),ae=a.a.createElement("g",null),ce=a.a.createElement("g",null),ie=function(e){var t=e.svgRef,n=V(e,["svgRef"]);return a.a.createElement("svg",q({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),B,K,W,Y,J,X,Z,Q,$,ee,te,ne,re,ae,ce)},ue=a.a.forwardRef(function(e,t){return a.a.createElement(ie,q({svgRef:t},e))}),oe=(n.p,n(81),Object(l.b)({itemCount:z.c})),se=Object(d.b)(oe,function(e){return{toggleCartHidden:function(){return e(Object(D.e)())}}})(function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(ue,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))}),le=n(42);function de(){var e=Object(O.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return de=function(){return e},e}function fe(){var e=Object(O.a)(["\n  width: 30%;\n"]);return fe=function(){return e},e}function pe(){var e=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return pe=function(){return e},e}var me=h.c.div(pe()),be=h.c.img(fe()),Ee=h.c.div(de()),Oe=a.a.memo(function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return a.a.createElement(me,null,a.a.createElement(be,{src:n,alt:"item"}),a.a.createElement(Ee,null,a.a.createElement("span",null,c),a.a.createElement("span",null,i," x $",r)))}),he=(n(82),Object(l.b)({cartItems:z.b})),ve=Object(s.f)(Object(d.b)(he)(function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return a.a.createElement(Oe,{key:e.id,item:e})}):a.a.createElement("span",{className:"empty-message"},"Your cart is empty")),a.a.createElement(le.a,{onClick:function(){n.push("/checkout"),r(Object(D.e)())}}," GO TO CHECKOUT "))})),Se=Object(l.a)([function(e){return e.user}],function(e){return e.currentUser}),_e=n(14),ge=Object(l.b)({currentUser:Se,hidden:z.a}),je=Object(d.b)(ge,function(e){return{signOutStart:function(){return e(Object(_e.g)())}}})(function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement(N,null,a.a.createElement(U,{to:"/"},a.a.createElement(P,{className:"logo"})),a.a.createElement(k,null,a.a.createElement(R,{to:"/shop"},"SHOP"),a.a.createElement(R,{to:"/contact"},"CONTACT"),t?a.a.createElement(R,{as:"div",onClick:r},"SIGN OUT"):a.a.createElement(R,{to:"/signin"},"SIGN IN"),a.a.createElement(se,null)),n?null:a.a.createElement(ve,null))}),xe=n(44);function ye(){var e=Object(O.a)(["\n\tbody {\n\t\tfont-family: 'Open Sans Condensed';\n        padding: 20px 40px;\n        \n\t\t@media screen and (max-width: 800px) {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: black;\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n"]);return ye=function(){return e},e}var Ie=Object(h.a)(ye()),Ce=n(59),Te=n.n(Ce);n(85);function we(){return a.a.createElement("div",null,a.a.createElement("div",{className:"container"},a.a.createElement(u.b,{to:"/"},a.a.createElement(P,{className:"logo"})),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Te.a.sendForm("service_00it3kc","template_9yjnagn",e.target,"user_7EV5ZVrZzP2a4cLHtWL26").then(function(e){console.log(e.text)},function(e){console.log(e.text)}),e.target.reset()},className:"forms"},a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"sub"},a.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",required:!0})),a.a.createElement("div",{className:"sub"},a.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email",required:!0})),a.a.createElement("div",{className:"sub"},a.a.createElement("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject",required:!0})),a.a.createElement("div",{className:"sub"},a.a.createElement("textarea",{className:"form-control",id:"",cols:"30",rows:"8",placeholder:"Your message",name:"message"})),a.a.createElement("div",{className:"sub"},a.a.createElement("input",{type:"submit",className:"form-control",value:"Send Message",required:!0}))))))}var Ne=Object(r.lazy)(function(){return n.e(3).then(n.bind(null,109))}),Ue=Object(r.lazy)(function(){return n.e(8).then(n.bind(null,107))}),ke=Object(r.lazy)(function(){return n.e(7).then(n.bind(null,108))}),Re=Object(r.lazy)(function(){return n.e(6).then(n.bind(null,110))}),Ae=Object(l.b)({currentUser:Se}),Le=Object(d.b)(Ae,function(e){return{checkUserSession:function(){return e(Object(_e.a)())}}})(function(e){var t=e.currentUser,n=e.checkUserSession;return Object(r.useEffect)(function(){n()},[n]),a.a.createElement("div",null,a.a.createElement(Ie,null),a.a.createElement(je,null),a.a.createElement(s.d,null,a.a.createElement(y,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(xe.a,null)},a.a.createElement(s.b,{exact:!0,path:"/",component:Ne}),a.a.createElement(s.b,{path:"/shop",component:Ue}),a.a.createElement(s.b,{path:"/contact",component:we}),a.a.createElement(s.b,{exact:!0,path:"/checkout",component:Re}),a.a.createElement(s.b,{exact:!0,path:"/signin",render:function(){return t?a.a.createElement(s.a,{to:"/"}):a.a.createElement(ke,null)}})))))}),Ge=n(18),Fe=(n(86),n(36)),He=n(61),Me=n(60),Pe=n.n(Me),De=n(11),ze=n(17),qe=n(62),Ve=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(De.a)({},e,{quantity:e.quantity-1}):e})},Be={hidden:!0,cartItems:[]},Ke=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case ze.a.TOGGLE_CART_HIDDEN:return Object(De.a)({},n,{hidden:!n.hidden});case ze.a.ADD_ITEM:return Object(De.a)({},n,{cartItems:(e=n.cartItems,t=r.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(De.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(qe.a)(e),[Object(De.a)({},t,{quantity:1})]))});case ze.a.REMOVE_ITEM:return Object(De.a)({},n,{cartItems:Ve(n.cartItems,r.payload)});case ze.a.CLEAR_ITEM_FROM_CART:return Object(De.a)({},n,{cartItems:n.cartItems.filter(function(e){return e.id!==r.payload.id})});case ze.a.CLEAR_CART:return Object(De.a)({},n,{cartItems:[]});default:return n}},We={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return(arguments.length>1?arguments[1]:void 0).type,e},Je=n(20),Xe={collections:null,isFetching:!1,errorMessage:void 0},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Je.a.FETCH_COLLECTIONS_START:return Object(De.a)({},e,{isFetching:!0});case Je.a.FETCH_COLLECTIONS_SUCCESS:return Object(De.a)({},e,{isFetching:!1,collections:t.payload});case Je.a.FETCH_COLLECTIONS_FAILURE:return Object(De.a)({},e,{isFetching:!1,errorMessage:t.payload});case Je.a.UPDATE_COLLECTIONS:return Object(De.a)({},e,{collections:t.payload});default:return e}},Qe=n(8),$e={currentUser:null,error:null},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe.a.SIGN_IN_SUCCESS:return Object(De.a)({},e,{currentUser:t.payload,error:null});case Qe.a.SIGN_OUT_SUCCESS:return Object(De.a)({},e,{currentUser:null,error:null});case Qe.a.SIGN_IN_FAILURE:case Qe.a.SIGN_OUT_FAILURE:case Qe.a.SIGN_UP_FAILURE:return Object(De.a)({},e,{error:t.payload});default:return e}},tt={key:"root",storage:Pe.a,whitelist:["cart"]},nt=Object(Ge.c)({user:et,cart:Ke,directory:Ye,shop:Ze}),rt=Object(Fe.a)(tt,nt),at=n(3),ct=n.n(at),it=n(4),ut=n(15),ot=n(39),st=ct.a.mark(ft),lt=ct.a.mark(pt),dt=ct.a.mark(mt);function ft(){var e,t,n;return ct.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=ut.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(it.b)(ut.b,t);case 7:return n=r.sent,r.next=10,Object(it.c)(Object(ot.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(it.c)(Object(ot.a)(r.t0.message));case 16:case"end":return r.stop()}},st,null,[[0,12]])}function pt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Je.a.FETCH_COLLECTIONS_START,ft);case 2:case"end":return e.stop()}},lt)}function mt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.a)([Object(it.b)(pt)]);case 2:case"end":return e.stop()}},dt)}var bt=ct.a.mark(wt),Et=ct.a.mark(Nt),Ot=ct.a.mark(Ut),ht=ct.a.mark(kt),vt=ct.a.mark(Rt),St=ct.a.mark(At),_t=ct.a.mark(Lt),gt=ct.a.mark(Gt),jt=ct.a.mark(Ft),xt=ct.a.mark(Ht),yt=ct.a.mark(Mt),It=ct.a.mark(Pt),Ct=ct.a.mark(Dt),Tt=ct.a.mark(zt);function wt(e,t){var n,r;return ct.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(it.b)(ut.c,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(it.c)(Object(_e.e)(Object(De.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(it.c)(Object(_e.d)(a.t0));case 15:case"end":return a.stop()}},bt,null,[[0,11]])}function Nt(){var e,t;return ct.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ut.a.signInWithPopup(ut.f);case 3:return e=n.sent,t=e.user,n.next=7,wt(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(it.c)(Object(_e.d)(n.t0));case 13:case"end":return n.stop()}},Et,null,[[0,9]])}function Ut(e){var t,n,r,a,c;return ct.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,ut.a.signInWithEmailAndPassword(n,r);case 4:return a=i.sent,c=a.user,i.next=8,wt(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(it.c)(Object(_e.d)(i.t0));case 14:case"end":return i.stop()}},Ot,null,[[1,10]])}function kt(){var e;return ct.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ut.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,wt(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(it.c)(Object(_e.d)(t.t0));case 14:case"end":return t.stop()}},ht,null,[[0,10]])}function Rt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ut.a.signOut();case 3:return e.next=5,Object(it.c)(Object(_e.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(it.c)(Object(_e.f)(e.t0));case 11:case"end":return e.stop()}},vt,null,[[0,7]])}function At(e){var t,n,r,a,c,i;return ct.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,u.prev=1,u.next=4,ut.a.createUserWithEmailAndPassword(n,r);case 4:return c=u.sent,i=c.user,u.next=8,Object(it.c)(Object(_e.k)({user:i,additionalData:{displayName:a}}));case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(it.c)(Object(_e.i)(u.t0));case 14:case"end":return u.stop()}},St,null,[[1,10]])}function Lt(e){var t,n,r;return ct.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,wt(n,r);case 3:case"end":return a.stop()}},_t)}function Gt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.GOOGLE_SIGN_IN_START,Nt);case 2:case"end":return e.stop()}},gt)}function Ft(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.EMAIL_SIGN_IN_START,Ut);case 2:case"end":return e.stop()}},jt)}function Ht(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.CHECK_USER_SESSION,kt);case 2:case"end":return e.stop()}},xt)}function Mt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.SIGN_OUT_START,Rt);case 2:case"end":return e.stop()}},yt)}function Pt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.SIGN_UP_START,At);case 2:case"end":return e.stop()}},It)}function Dt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.SIGN_UP_SUCCESS,Lt);case 2:case"end":return e.stop()}},Ct)}function zt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.a)([Object(it.b)(Gt),Object(it.b)(Ft),Object(it.b)(Ht),Object(it.b)(Mt),Object(it.b)(Pt),Object(it.b)(Dt)]);case 2:case"end":return e.stop()}},Tt)}var qt=ct.a.mark(Kt),Vt=ct.a.mark(Wt),Bt=ct.a.mark(Yt);function Kt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.c)(Object(D.b)());case 2:case"end":return e.stop()}},qt)}function Wt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.d)(Qe.a.SIGN_OUT_SUCCESS,Kt);case 2:case"end":return e.stop()}},Vt)}function Yt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.a)([Object(it.b)(Wt)]);case 2:case"end":return e.stop()}},Bt)}var Jt=ct.a.mark(Xt);function Xt(){return ct.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(it.a)([Object(it.b)(mt),Object(it.b)(zt),Object(it.b)(Yt)]);case 2:case"end":return e.stop()}},Jt)}var Zt=Object(He.a)(),Qt=[Zt],$t=Object(Ge.e)(rt,Ge.a.apply(void 0,Qt));Zt.run(Xt);var en=Object(Fe.b)($t);i.a.render(a.a.createElement(d.a,{store:$t},a.a.createElement(u.a,null,a.a.createElement(o.a,{persistor:en},a.a.createElement(Le,null)))),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9926e90b.chunk.js.map