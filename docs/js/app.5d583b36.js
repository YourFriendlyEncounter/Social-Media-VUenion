(function(e){function t(t){for(var n,a,o=t[0],u=t[1],c=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1a0ef45d":"a01ebd39","chunk-d2198018":"1a1bdf62","chunk-e29e016a":"a5c68b94"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-1a0ef45d":1,"chunk-d2198018":1,"chunk-e29e016a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1a0ef45d":"0a3c6aa8","chunk-d2198018":"61aef270","chunk-e29e016a":"d3c35cf3"}[e]+".css",s=u.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],d=c.getAttribute("data-href");if(d===n||d===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0dd2":function(e,t){e.exports="data:image/png;base64,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"},"0f74":function(e,t,r){},"11b4":function(e,t,r){"use strict";var n=r("0f74"),a=r.n(n);a.a},1495:function(e,t){e.exports="data:image/png;base64,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"},1771:function(e,t,r){var n={"./anonymous.svg":"2456","./friends.png":"0dd2","./groups.png":"5fba","./house.png":"1495","./logo.png":"cf05","./messages.png":"f83a","./newUser.svg":"6364","./web.svg":"c31f"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="1771"},2147:function(e,t,r){"use strict";r("4160"),r("b0c0"),r("b64b"),r("d3b7"),r("25f0"),r("159b"),r("96cf");var n=r("1da1"),a=r("59ca"),s=r.n(a),i=r("d4ec"),o=function e(t){Object(i["a"])(this,e),this.id=t},u=function e(){Object(i["a"])(this,e)},c=r("d719"),d=r.n(c),l=r("41cb");t["a"]={state:{user:null,userInfo:null,loadingCurrentUser:!0,loadingUserInfos:!0,userInfoList:[]},mutations:{setUser:function(e,t){e.user=t},setUserInfo:function(e,t){e.userInfo=t},setLoadingCurrentUser:function(e,t){e.loadingCurrentUser=t},setLoadingUserInfos:function(e,t){e.loadingUserInfos=t},setUserInfoList:function(e,t){e.userInfoList=t}},actions:{loadUserInfos:function(e){var t=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("clearError"),t("setLoadingUserInfos",!0),e.prev=2,e.next=5,s.a.database().ref("userInfos").once("value");case 5:r=e.sent,n=r.val(),a=[],Object.keys(n).forEach((function(e){var t=n[e],r=new u;r.id=t.id,r.comrades=t.comrades,r.name=t.name,r.lastName=t.lastName,r.birthDate=t.birthDate,r.image=t.image,r.status=t.status,r.about=t.about,a.push(r)})),t("setUserInfoList",a),t("setLoadingUserInfos",!1),e.next=19;break;case 13:throw e.prev=13,e.t0=e["catch"](2),t("setLoadingUserInfos",!1),t("setError",e.t0.message),d.a.error(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))()},registerUser:function(e,t){var r=e.commit,a=t.email,i=t.password,c=t.name,l=t.lastName,f=t.birthDate;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,n,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("clearError"),e.prev=1,e.next=4,s.a.auth().createUserWithEmailAndPassword(a,i);case 4:return t=e.sent,r("setUser",new o(t.user.uid)),n=new u,n.id=t.user.uid,n.name=c,n.lastName=l,n.birthDate=f.toString(),n.comrades=[],n.image="",n.status="",n.about="",e.next=17,s.a.database().ref("userInfos/"+t.user.uid).set(n);case 17:r("setUserInfo",n),e.next=33;break;case 20:e.prev=20,e.t0=e["catch"](1),r("setError",e.t0.message),m="",e.t1=e.t0.message,e.next="The email address is already in use by another account."===e.t1?27:29;break;case 27:return m="Данный email-адрес уже используется другим аккаунтом.",e.abrupt("break",31);case 29:return m=e.t0.message,e.abrupt("break",31);case 31:throw d.a.error(m),e.t0;case 33:case"end":return e.stop()}}),e,null,[[1,20]])})))()},loginUser:function(e,t){var r=e.commit,a=t.email,i=t.password;return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,n,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("clearError"),e.prev=1,e.next=4,s.a.auth().signInWithEmailAndPassword(a,i);case 4:return t=e.sent,e.next=7,s.a.database().ref("userInfos/"+t.user.uid).once("value");case 7:n=e.sent,n=n.val(),r("setUser",new o(t.user.uid)),r("setUserInfo",n),e.next=28;break;case 13:e.prev=13,e.t0=e["catch"](1),r("setError",e.t0.message),u="",e.t1=e.t0.message,e.next="The password is invalid or the user does not have a password."===e.t1?20:"There is no user record corresponding to this identifier. The user may have been deleted."===e.t1?22:24;break;case 20:return u="Пароль неверный. Проверьте правильность написания.",e.abrupt("break",26);case 22:return u="Пользователя с данным email не существует.",e.abrupt("break",26);case 24:return u=e.t0.message,e.abrupt("break",26);case 26:throw d.a.error(u),e.t0;case 28:case"end":return e.stop()}}),e,null,[[1,13]])})))()},loggedUser:function(e,t){var r=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("setLoadingCurrentUser",!0),e.prev=1,e.next=4,s.a.database().ref("userInfos/"+t.uid).once("value");case 4:return e.next=6,e.sent.val();case 6:n=e.sent,r("setUser",new o(t.uid)),r("setUserInfo",n),e.next=16;break;case 11:throw e.prev=11,e.t0=e["catch"](1),r("serError",e.t0.message),d.a.error(e.t0.message),e.t0;case 16:return e.prev=16,l["a"].push({path:"/feed"}),r("setLoadingCurrentUser",!1),e.finish(16);case 20:case"end":return e.stop()}}),e,null,[[1,11,16,20]])})))()},changeUserInfo:function(e,t){var r=e.commit;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r("setLoadingCurrentUser",!0),e.next=4,s.a.database().ref("userInfos/"+t.id).set(t);case 4:d.a.success("Информация профиля изменена."),l["a"].push({name:"UserProfile",params:{id:t.id}}),e.next=13;break;case 8:throw e.prev=8,e.t0=e["catch"](0),r("serError",e.t0.message),d.a.error(e.t0.message),e.t0;case 13:return e.prev=13,r("setLoadingCurrentUser",!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,8,13,16]])})))()}},getters:{user:function(e){return e.user},checkUser:function(e){return null!==e.user},getUserInfo:function(e){return e.userInfo},getUserList:function(e){return e.userInfoList},getLoadingCurrentUser:function(e){return e.loadingCurrentUser},getLoadingUserInfos:function(e){return e.loadingUserInfos},getUserById:function(e,t){return function(e){var r=t.getUserList,n={name:"[Deleted]",lastName:""};return Object.keys(r).forEach((function(t){var a=r[t];a.id===e&&(n=a)})),n}}}}},2456:function(e,t,r){e.exports=r.p+"img/anonymous.f560b71b.svg"},"2cc7":function(e,t,r){},"336f":function(e,t,r){},"41cb":function(e,t,r){"use strict";r("b0c0"),r("d3b7");var n=r("2b0e"),a=r("8c4f"),s=r("4360"),i=r("d719"),o=r.n(i),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"edit-profile"}},[r("h1",{attrs:{id:"h-edit-profile"}},[e._v("Редактировать профиль")]),r("form",{staticClass:"form-generic container-generic",attrs:{id:"form-edit-profile-main"},on:{submit:function(t){return t.preventDefault(),e.submitEdit(t)}}},[r("div",{staticClass:"simple-flex input-text",staticStyle:{"margin-bottom":"1rem"}},[r("p",{staticStyle:{"margin-right":".5rem"}},[e._v("Фото профиля: ")]),r("input",{attrs:{type:"file",accept:"image/jpeg,image/jpg,image/png,image/gif"},on:{click:function(t){return t.preventDefault(),e.sayUnimplemented(t)}}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Имя",minlength:"3",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Фамилия",minlength:"3",required:""},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.status,expression:"user.status"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Статус",required:""},domProps:{value:e.user.status},on:{input:function(t){t.target.composing||e.$set(e.user,"status",t.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.about,expression:"user.about"}],staticClass:"input-text",attrs:{rows:"3",maxlength:"3000",id:"textarea-about",placeholder:"О себе"},domProps:{value:e.user.about},on:{input:function(t){t.target.composing||e.$set(e.user,"about",t.target.value)}}}),r("input",{staticClass:"custom-button",staticStyle:{"background-color":"#42cc8c"},attrs:{type:"submit"}})])])},c=[],d={computed:{getCurrentPageUser:function(){return this.$store.getters.getUserById(this.id)}},methods:{sayUnimplemented:function(){o.a.error("Извините, пока что эта функция недоступна.")},submitEdit:function(){this.user.name.length<3||this.user.lastName.length<3?o.a.error("Имя, фамилия пользователя не должны быть короче 3 символов"):this.user.about.length>3e3?o.a.error("Информация о себе не должна быть длиннее 3000 символов."):(this.user.image||(this.user.image=""),this.user.comrades||(this.user.comrades=[]),this.$store.dispatch("changeUserInfo",this.user))}},props:{id:String},data:function(){return{user:null}},beforeMount:function(){var e=this.getCurrentPageUser;this.user=e}},l=d,f=(r("11b4"),r("2877")),m=Object(f["a"])(l,u,c,!1,null,"8725515a",null),p=m.exports;n["default"].use(a["a"]);t["a"]=new a["a"]({mode:"history",base:"/Social-Media/",routes:[{path:"/feed",name:"Feed",component:function(){return r.e("chunk-d2198018").then(r.bind(null,"4787"))}},{path:"/",name:"Authorization",component:function(){return r.e("chunk-e29e016a").then(r.bind(null,"791c"))},beforeEnter:function(e,t,r){s["a"].getters.checkUser?r("/feed"):r()}},{path:"/users/:id",name:"UserProfile",component:function(){return r.e("chunk-1a0ef45d").then(r.bind(null,"5da9"))},beforeEnter:function(e,t,r){"[Deleted]"!=s["a"].getters.getUserById(e.params.id).name?r():o.a.error("Данный пользователь недоступен.")},props:!0},{path:"/users/:id/edit",name:"EditProfile",component:p,beforeEnter:function(e,t,r){e.params.id==s["a"].getters.user.id?r():o.a.error("Доступ отклонён.")},props:!0}]})},4360:function(e,t,r){"use strict";var n=r("2b0e"),a=r("2f62"),s=r("2147"),i=(r("4160"),r("b64b"),r("159b"),r("5530")),o=(r("96cf"),r("1da1")),u=r("59ca"),c=r.n(u),d=r("f3db"),l=r("d719"),f=r.n(l),m={state:{posts:[]},mutations:{loadPosts:function(e,t){e.posts=t},newPost:function(e,t){e.posts.push(t)}},actions:{loadPosts:function(e){var t=e.commit;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("clearError"),t("setLoading",!0),e.prev=2,e.next=5,c.a.database().ref("posts").once("value");case 5:r=e.sent,n=r.val(),a=[],Object.keys(n).forEach((function(e){var t=n[e];a.push(new d["a"](t.text,t.dateTimeAdded,t.images,t.edited,t.likes,t.dislikes,t.user,e))})),t("loadPosts",a),t("setLoading",!1),e.next=27;break;case 13:e.prev=13,e.t0=e["catch"](2),t("setLoading",!1),t("setError",e.t0.message),s="",e.t1=e.t0.message,e.next="The email address is already in use by another account."===e.t1?21:23;break;case 21:return s="Данный email-адрес уже используется другим аккаунтом.",e.abrupt("break",25);case 23:return s=e.t0.message,e.abrupt("break",25);case 25:throw f.a.error(s),e.t0;case 27:case"end":return e.stop()}}),e,null,[[2,13]])})))()},newPost:function(e,t){var r=e.commit,n=e.getters;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("clearError"),r("setLoading",!0),e.prev=2,a=new d["a"](t.text,t.dateTimeAdded,t.images,t.edited,t.likes,t.dislikes,n.user.id),e.next=6,c.a.database().ref("posts").push(a);case 6:s=e.sent,r("newPost",Object(i["a"])({},a,{id:s.key})),r("setLoading",!1),e.next=25;break;case 11:e.prev=11,e.t0=e["catch"](2),r("setLoading",!1),r("setError",e.t0.message),o="",e.t1=e.t0.message,e.next="The email address is already in use by another account."===e.t1?19:21;break;case 19:return o="Данный email-адрес уже используется другим аккаунтом.",e.abrupt("break",23);case 21:return o=e.t0.message,e.abrupt("break",23);case 23:throw f.a.error(o),e.t0;case 25:case"end":return e.stop()}}),e,null,[[2,11]])})))()}},getters:{getPosts:function(e){return e.posts}}},p={state:{loading:!1,error:null},mutations:{setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{setLoading:function(e,t){var r=e.commit;r("setLoading",t)},setError:function(e,t){var r=e.commit;r("setError",t)},clearError:function(e){var t=e.commit;t("clearError")}},getters:{loading:function(e){return e.loading},error:function(e){return e.error}}};n["default"].use(a["a"]);t["a"]=new a["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{common:p,user:s["a"],post:m}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLoading?r("div",{attrs:{id:"div-loading"}},[r("div",{attrs:{id:"loading-inside"}},[r("Loading")],1)]):r("div",{attrs:{id:"app"}},[r("Header"),r("div",{attrs:{id:"main-content"}},[e.checkUser?r("LeftSideBar"):e._e(),r("div",{attrs:{id:"main-content-center"}},[r("router-view",{key:e.$route.fullPath})],1),e.checkUser?r("RightSideBar"):e._e()],1),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v(" Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/dinosoftlabs",title:"DinosoftLabs"}},[e._v("DinosoftLabs")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[e._v("Freepik")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/good-ware",title:"Good Ware"}},[e._v("Good Ware")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/prettycons",title:"prettycons"}},[e._v("prettycons")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/surang",title:"surang"}},[e._v("surang")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/mynamepong",title:"mynamepong"}},[e._v("mynamepong")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("VUenion")]),r("div"),r("div",{attrs:{id:"div-auth"}},[e.checkUser?r("div",{attrs:{id:"div-auth-authorized"}},[r("h4",[e._v("Добро пожаловать, "+e._s(e.getUserInfo.name)+"! ")]),r("a",{staticStyle:{color:"white",cursor:"pointer","margin-left":".2rem"},on:{click:e.unlogUser}},[e._v("Выйти")])]):r("div",{attrs:{id:"div-auth-not-authorized"}},[r("router-link",{attrs:{to:"/"}},[e._v("Войти / Зарегистрироватсья")])],1)])])},o=[],u=r("59ca"),c=r.n(u),d={methods:{unlogUser:function(){c.a.auth().signOut(),this.$store.commit("setUser",null),this.$store.commit("setUserInfo",null),this.$router.push("/")}},computed:{checkUser:function(){return this.$store.getters.checkUser},getUser:function(){return this.$store.getters.user},getUserInfo:function(){return this.$store.getters.getUserInfo}}},l=d,f=(r("a250"),r("2877")),m=Object(f["a"])(l,i,o,!1,null,"aabc6efc",null),p=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"left-side-bar"}},[n("h4",[e._v("Главное меню")]),n("hr"),e._l(e.options,(function(t){return n("router-link",{key:t.name,staticClass:"container-link",attrs:{to:{name:t.link,params:{id:e.getUserID}}}},[n("img",{staticClass:"img-icon",attrs:{src:r("1771")("./"+t.image)}}),n("h4",[e._v(e._s(t.name))])])})),n("hr")],2)},h=[],v={data:function(){return{options:[{name:"Лента",image:"web.svg",link:"Feed"},{name:"Моя страница",image:"house.png",link:"UserProfile"},{name:"Товарищи",image:"friends.png",link:"Feed"},{name:"Сообщения",image:"messages.png",link:"Feed"},{name:"Группы",image:"groups.png",link:"Feed"}]}},computed:{getUserID:function(){return this.$store.getters.user.id}}},A=v,b=(r("d6cd"),Object(f["a"])(A,g,h,!1,null,"a73b72ea",null)),w=b.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Список товарищей")]),r("hr"),e._l(e.getFriendsFilteredByOnline,(function(t){return r("router-link",{key:t.id,staticClass:"link-friend",attrs:{to:t.link}},[r("div",{staticClass:"container-generic div-friend",staticStyle:{padding:"0.25rem 0.5rem"}},[r("h4",{staticClass:"h-name"},[e._v(e._s(t.name+" "+t.lastName))]),t.isOnline?r("p",{staticClass:"p-online"},[e._v("Online")]):r("p",{staticClass:"p-offline"},[e._v("Offline")])])])})),r("hr")],2)},y=[],B=(r("99af"),{data:function(){return{friends:[{id:0,name:"NameOne",lastName:"LastNameOne",link:"",isOnline:!0},{id:1,name:"NameTwo",lastName:"LastNameTwo",link:"",isOnline:!1},{id:2,name:"NameThree",lastName:"LastNameThree",link:"",isOnline:!0}]}},computed:{getFriendsFilteredByOnline:function(){return this.friends.concat().sort((function(e,t){return t.isOnline-e.isOnline}))}}}),k=B,x=(r("9d1c"),Object(f["a"])(k,U,y,!1,null,"2c00767a",null)),C=x.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lds-spinner"},[r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div")])}],O=(r("e505"),{}),E=Object(f["a"])(O,I,L,!1,null,"5081cfde",null),Q=E.exports,P={name:"App",components:{Header:p,LeftSideBar:w,RightSideBar:C,Loading:Q},computed:{checkUser:function(){return this.$store.getters.checkUser},getUser:function(){return this.$store.getters.user},isLoading:function(){return this.$store.getters.getLoadingCurrentUser||this.$store.getters.getLoadingUserInfos}}},S=P,N=(r("034f"),Object(f["a"])(S,a,s,!1,null,null,null)),Y=N.exports,F=r("41cb"),T=r("2f62"),J=r("4360"),R=r("d719"),j=r.n(R);r("e4db"),r("ea7b"),r("66ce"),r("741f"),r("588e");n["default"].use(T["a"]),n["default"].use(j.a),n["default"].config.productionTip=!1,new n["default"]({router:F["a"],store:J["a"],render:function(e){return e(Y)},created:function(){var e=this,t={apiKey:"AIzaSyBoFRDJ8fnZLp__tAKH4K3itDXnqWuh5m0",authDomain:"social-media-vuenion.firebaseapp.com",databaseURL:"https://social-media-vuenion.firebaseio.com",projectId:"social-media-vuenion",storageBucket:"social-media-vuenion.appspot.com",messagingSenderId:"1079493678730",appId:"1:1079493678730:web:65b950d29e5f926aca7f73"};c.a.initializeApp(t),c.a.auth().onAuthStateChanged((function(t){t?e.$store.dispatch("loggedUser",t):e.$store.commit("setLoadingCurrentUser",!1),e.$store.dispatch("loadPosts"),e.$store.dispatch("loadUserInfos")}))}}).$mount("#app")},"5fba":function(e,t,r){e.exports=r.p+"img/groups.5ef85549.png"},6364:function(e,t,r){e.exports=r.p+"img/newUser.1d03149b.svg"},"85ec":function(e,t,r){},"9d1c":function(e,t,r){"use strict";var n=r("336f"),a=r.n(n);a.a},a250:function(e,t,r){"use strict";var n=r("ba3e"),a=r.n(n);a.a},a8bd:function(e,t,r){},ba3e:function(e,t,r){},c31f:function(e,t,r){e.exports=r.p+"img/web.925fa024.svg"},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},d6cd:function(e,t,r){"use strict";var n=r("2cc7"),a=r.n(n);a.a},e505:function(e,t,r){"use strict";var n=r("a8bd"),a=r.n(n);a.a},f3db:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("d4ec"),a=function e(t,r,a,s,i,o){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;Object(n["a"])(this,e),this.text=t,this.dateTimeAdded=r,this.images=a,this.edited=s,this.likes=i,this.dislikes=o,this.user=u,this.id=c}},f83a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARMSURBVHic7ZdrT9t2FIefv0NCyygVq0bXFEQ6RtJ2e1GpWzVBYam0fYRp7ydV+1DbPsG0T7BJI4DaXcq4BAiUlUJKLnZCWhIQkJv3AszVgG9JgPl5hezj4/N7fIxicHFxcXFxcXFxcflfIgDUH/s+5db7PyF4CHgaPFOtKYMY4032qfj+eVQC4I+lX4ilNrj84QGaiCVL/L38M4BQv+vyI1USQJW7H0a473/S4AFry2xqlLlUHyBR9dyW8JV8u6ck5tJhoonhRs5XU2IHwgP4Sj7pSIlgQR64lBJiyRFiB8LvclQAaBKmE5H6TFYHZpKjxNL96OTVEwAgeCkPXopNmEmOMJ8+9uQ1ThIA+6/Dxd2E2eQo8/pPXuM0AbAjYZCplYu3CTPJEeZOfvIaZwkAEPyrDDC5cnE2YWftH2MgnxEBAIJXysXYhP3wwki5UQFwETZh2lx4MCcAtE2YjJ8/CdPJEV6aCw/mBQAIXmXPl4RowlJ4sCYAzpOEaGKEBdlSeLAuADQJE/HfbPSwx0xy2E54sCcAQLCY/YqxpSGbfcwzEY8wnx7ARniwL2CH5Vy4rhIm4hEWs19iMzw4JQB2JLyog4TxvfCO4JwAgHiNJYzHI7x2Ljw4LQBAVu4gT//qeF9l+neS6YDTbZ0V4KvI9CoS+aWvkSeGHOubiUZYW3pCUPHiKycd64uTApqqOYLKOoIuAPIrYeTxIdt95WiEd8va2vvpzRTxVjO2++7ijABJXScoywi159DxfMKeBDkaIb98+J2X1AAhOYensma578F2tjsItUhQmcej3tM9b1WCPHk8/P49Q4Qyr5HULdN9j2BPgKBCKPMP3srDU+vMSpAnI+TfnP7f3lN9QFCZQlAy3FcH6wIEKj2Z53jLXxiqzyfCpA1IMBJew1t5RK/yF1A1VK+DdQGB1WGulh6buqZwhgQz4TWay/30rI6auuYA1gR054Zo3bb2g6SQCCOPDR07biW8Rsv2IN254z0NYF6APz9M21bYys32yKcOS7ATXqNtK0znmunP8yZT1TcLz7ixPmD2JrrkU2HU3dehkAg70rN9Y5CSNIx8bdDoJcYFtG/8SUfhEQ58ge3hVPB9BB2FfiriGdnWPiMXGHsFrm+O07n2ALMb0xg83Mp/RvvWCyPFZwto3Z6h620QaLY7WR3x0Zm7z7WtqbMKTxfQUlzgzqofwXuOjVY/WujOBbhanDut6GQBzeVlPspeB9qdnqxuCNr4OPsBV8qLJ5XoC/BW0gQVD4KOmg1XP27Qq1zBV07onTwuwFPNEVI2gM5aT1ZH/AQzJb3P6MMCPGqBuzqftZcBoQbold8iVd4dPCxR9BZ3/lI3CaYXkU74rL0MeNQg95QVJHUTgKK3KFQQPPXPEpILeCufN3jE+lCSxpm/2Sx+SH0iCVAJZL/BW6kC5UbPVgfKeKvb3F79ttGDuLi4uLi4uLi4uDSQ/wA8A8OptVh5iAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.5d583b36.js.map