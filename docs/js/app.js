(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0dd2":function(e,t){e.exports="data:image/png;base64,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"},1495:function(e,t){e.exports="data:image/png;base64,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"},1771:function(e,t,r){var n={"./anonymous.svg":"2456","./friends.png":"0dd2","./groups.png":"5fba","./house.png":"1495","./logo.png":"cf05","./messages.png":"f83a","./newUser.svg":"6364","./web.svg":"c31f"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="1771"},2456:function(e,t,r){e.exports=r.p+"anonymous.svg"},"336f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{attrs:{id:"main-content"}},[e.checkUser?r("LeftSideBar"):e._e(),r("div",{attrs:{id:"main-content-center"}},[r("router-view")],1),e.checkUser?r("RightSideBar"):e._e()],1),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v(" Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/dinosoftlabs",title:"DinosoftLabs"}},[e._v("DinosoftLabs")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[e._v("Freepik")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/good-ware",title:"Good Ware"}},[e._v("Good Ware")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/prettycons",title:"prettycons"}},[e._v("prettycons")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/surang",title:"surang"}},[e._v("surang")]),e._v(", "),r("a",{attrs:{href:"https://www.flaticon.com/authors/mynamepong",title:"mynamepong"}},[e._v("mynamepong")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("VUenion")]),r("div"),r("div",{attrs:{id:"div-auth"}},[e.checkUser?r("div",{attrs:{id:"div-auth-authorized"}},[r("h4",[e._v("Добро пожаловать, "+e._s(e.getUserInfo.name)+"! ")]),r("a",{staticStyle:{color:"white",cursor:"pointer","margin-left":".2rem"},on:{click:e.unlogUser}},[e._v("Выйти")])]):r("div",{attrs:{id:"div-auth-not-authorized"}},[r("router-link",{attrs:{to:"/"}},[e._v("Войти / Зарегистрироватсья")])],1)])])},o=[],u=r("59ca"),c=r.n(u),l={methods:{unlogUser:function(){c.a.auth().signOut(),this.$store.commit("setUser",null),this.$store.commit("setUserInfo",null),this.$router.push("/")}},computed:{checkUser:function(){return this.$store.getters.checkUser},getUser:function(){return this.$store.getters.user},getUserInfo:function(){return this.$store.getters.getUserInfo}}},d=l,m=(r("a250"),r("2877")),f=Object(m["a"])(d,i,o,!1,null,"aabc6efc",null),p=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"left-side-bar"}},[n("h4",[e._v("Главное меню")]),n("hr"),e._l(e.options,(function(t){return n("router-link",{key:t.name,staticClass:"container-link",attrs:{to:t.link}},[n("img",{staticClass:"img-icon",attrs:{src:r("1771")("./"+t.image)}}),n("h4",[e._v(e._s(t.name))])])})),n("hr")],2)},h=[],v={data:function(){return{options:[{name:"Лента",image:"web.svg",link:"/feed"},{name:"Моя страница",image:"house.png",link:"/feed"},{name:"Товарищи",image:"friends.png",link:"/feed"},{name:"Сообщения",image:"messages.png",link:"/feed"},{name:"Группы",image:"groups.png",link:"/feed"}]}},methods:{}},A=v,b=(r("ee03"),Object(m["a"])(A,g,h,!1,null,"7f46b858",null)),w=b.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Список товарищей")]),r("hr"),e._l(e.getFriendsFilteredByOnline,(function(t){return r("router-link",{key:t.id,staticClass:"link-friend",attrs:{to:t.link}},[r("div",{staticClass:"container-generic div-friend",staticStyle:{padding:"0.25rem 0.5rem"}},[r("h4",{staticClass:"h-name"},[e._v(e._s(t.name+" "+t.lastName))]),t.isOnline?r("p",{staticClass:"p-online"},[e._v("Online")]):r("p",{staticClass:"p-offline"},[e._v("Offline")])])])})),r("hr")],2)},B=[],y=(r("99af"),{data:function(){return{friends:[{id:0,name:"NameOne",lastName:"LastNameOne",link:"",isOnline:!0},{id:1,name:"NameTwo",lastName:"LastNameTwo",link:"",isOnline:!1},{id:2,name:"NameThree",lastName:"LastNameThree",link:"",isOnline:!0}]}},computed:{getFriendsFilteredByOnline:function(){return this.friends.concat().sort((function(e,t){return t.isOnline-e.isOnline}))}}}),k=y,U=(r("9d1c"),Object(m["a"])(k,x,B,!1,null,"2c00767a",null)),C=U.exports,P={name:"App",components:{Header:p,LeftSideBar:w,RightSideBar:C},computed:{checkUser:function(){return this.$store.getters.checkUser},getUser:function(){return this.$store.getters.user}}},O=P,I=(r("034f"),Object(m["a"])(O,a,s,!1,null,null,null)),Q=I.exports,L=r("8c4f"),E=r("2f62"),N=(r("4160"),r("b0c0"),r("b64b"),r("d3b7"),r("25f0"),r("159b"),r("96cf"),r("1da1")),S=r("d4ec"),T=function e(t){Object(S["a"])(this,e),this.id=t},Y=function e(t,r,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;Object(S["a"])(this,e),this.id=t,this.name=r,this.lastName=n,this.birthDate=a,this.image=s},F=r("d719"),J=r.n(F),R={state:{user:null,userInfo:null,loading:!1,userInfoList:[]},mutations:{setUser:function(e,t){e.user=t},setUserInfo:function(e,t){e.userInfo=t},setLoading:function(e,t){e.loading=t},setUserInfoList:function(e,t){e.userInfoList=t}},actions:{loadUserInfos:function(e){var t=e.commit;return Object(N["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("clearError"),t("setLoading",!0),e.prev=2,e.next=5,c.a.database().ref("userInfos").once("value");case 5:r=e.sent,n=r.val(),a=[],Object.keys(n).forEach((function(e){var t=n[e];a.push(new Y(t.id,t.name,t.lastName,t.birthDate))})),t("setUserInfoList",a),t("setLoading",!1),e.next=19;break;case 13:throw e.prev=13,e.t0=e["catch"](2),t("setLoading",!1),t("setError",e.t0.message),J.a.error(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))()},registerUser:function(e,t){var r=e.commit,n=t.email,a=t.password,s=t.name,i=t.lastName,o=t.birthDate;return Object(N["a"])(regeneratorRuntime.mark((function e(){var t,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("clearError"),r("setLoading",!0),e.prev=2,e.next=5,c.a.auth().createUserWithEmailAndPassword(n,a);case 5:return t=e.sent,r("setUser",new T(t.user.uid)),u=new Y(t.user.uid,s,i,o.toString()),e.next=10,c.a.database().ref("userInfos/"+t.user.uid).set(u);case 10:r("setUserInfo",u),r("setLoading",!1),e.next=28;break;case 14:e.prev=14,e.t0=e["catch"](2),r("setLoading",!1),r("setError",e.t0.message),l="",e.t1=e.t0.message,e.next="The email address is already in use by another account."===e.t1?22:24;break;case 22:return l="Данный email-адрес уже используется другим аккаунтом.",e.abrupt("break",26);case 24:return l=e.t0.message,e.abrupt("break",26);case 26:throw J.a.error(l),e.t0;case 28:case"end":return e.stop()}}),e,null,[[2,14]])})))()},loginUser:function(e,t){var r=e.commit,n=t.email,a=t.password;return Object(N["a"])(regeneratorRuntime.mark((function e(){var t,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("clearError"),r("setLoading",!0),e.prev=2,e.next=5,c.a.auth().signInWithEmailAndPassword(n,a);case 5:return t=e.sent,e.next=8,c.a.database().ref("userInfos/"+t.user.uid).once("value");case 8:s=e.sent,s=s.val(),r("setUser",new T(t.user.uid)),r("setUserInfo",s),r("setLoading",!1),e.next=31;break;case 15:e.prev=15,e.t0=e["catch"](2),r("setLoading",!1),r("setError",e.t0.message),i="",e.t1=e.t0.message,e.next="The password is invalid or the user does not have a password."===e.t1?23:"There is no user record corresponding to this identifier. The user may have been deleted."===e.t1?25:27;break;case 23:return i="Пароль неверный. Проверьте правильность написания.",e.abrupt("break",29);case 25:return i="Пользователя с данным email не существует.",e.abrupt("break",29);case 27:return i=e.t0.message,e.abrupt("break",29);case 29:throw J.a.error(i),e.t0;case 31:case"end":return e.stop()}}),e,null,[[2,15]])})))()},loggedUser:function(e,t){var r=e.commit;return Object(N["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.database().ref("userInfos/"+t.uid).once("value");case 2:return e.next=4,e.sent.val();case 4:n=e.sent,r("setUser",new T(t.uid)),r("setUserInfo",n);case 7:case"end":return e.stop()}}),e)})))()}},getters:{user:function(e){return e.user},checkUser:function(e){return null!==e.user},getUserInfo:function(e){return e.userInfo},getUserList:function(e){return e.userInfoList}}},V=r("5530"),M=function e(t,r,n,a,s,i){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;Object(S["a"])(this,e),this.text=t,this.dateTimeAdded=r,this.images=n,this.edited=a,this.likes=s,this.dislikes=i,this.user=o,this.id=u},j={state:{posts:[]},mutations:{loadPosts:function(e,t){e.posts=t},newPost:function(e,t){e.posts.push(t)}},actions:{loadPosts:function(e){var t=e.commit;return Object(N["a"])(regeneratorRuntime.mark((function e(){var r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("clearError"),t("setLoading",!0),e.prev=2,e.next=5,c.a.database().ref("posts").once("value");case 5:r=e.sent,n=r.val(),a=[],Object.keys(n).forEach((function(e){var t=n[e];a.push(new M(t.text,t.dateTimeAdded,t.images,t.edited,t.likes,t.dislikes,t.user,e))})),t("loadPosts",a),t("setLoading",!1),e.next=27;break;case 13:e.prev=13,e.t0=e["catch"](2),t("setLoading",!1),t("setError",e.t0.message),s="",e.t1=e.t0.message,e.next="The email address is already in use by another account."===e.t1?21:23;break;case 21:return s="Данный email-адрес уже используется другим аккаунтом.",e.abrupt("break",25);case 23:return s=e.t0.message,e.abrupt("break",25);case 25:throw J.a.error(s),e.t0;case 27:case"end":return e.stop()}}),e,null,[[2,13]])})))()},newPost:function(e,t){var r=e.commit,n=e.getters;return Object(N["a"])(regeneratorRuntime.mark((function e(){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r("clearError"),r("setLoading",!0),e.prev=2,a=new M(t.text,t.dateTimeAdded,t.images,t.edited,t.likes,t.dislikes,n.user.id),e.next=6,c.a.database().ref("posts").push(a);case 6:s=e.sent,r("newPost",Object(V["a"])({},a,{id:s.key})),r("setLoading",!1),e.next=25;break;case 11:e.prev=11,e.t0=e["catch"](2),r("setLoading",!1),r("setError",e.t0.message),i="",e.t1=e.t0.message,e.next="The email address is already in use by another account."===e.t1?19:21;break;case 19:return i="Данный email-адрес уже используется другим аккаунтом.",e.abrupt("break",23);case 21:return i=e.t0.message,e.abrupt("break",23);case 23:throw J.a.error(i),e.t0;case 25:case"end":return e.stop()}}),e,null,[[2,11]])})))()}},getters:{getPosts:function(e){return e.posts}}},H={state:{loading:!1,error:null},mutations:{setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{setLoading:function(e,t){var r=e.commit;r("setLoading",t)},setError:function(e,t){var r=e.commit;r("setError",t)},clearError:function(e){var t=e.commit;t("clearError")}},getters:{loading:function(e){return e.loading},error:function(e){return e.error}}};n["default"].use(E["a"]);var q=new E["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{common:H,user:R,post:j}}),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"feed"}},[r("form",{attrs:{id:"form-new-post"},on:{submit:function(t){return t.preventDefault(),e.newPost(t)}}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newPostText,expression:"newPostText"}],staticClass:"input-text",attrs:{id:"new-post-text",rows:"3",maxlength:"3000",placeholder:"Что интересного можете рассказать?"},domProps:{value:e.newPostText},on:{input:function(t){t.target.composing||(e.newPostText=t.target.value)}}}),e._v(" "),r("input",{staticClass:"custom-button",attrs:{type:"submit",id:"new-post-submit"}})]),e._l(e.getPosts,(function(t){return r("div",{key:t.id,staticClass:"container-white post-generic"},[r("div",{staticClass:"post-author-info"},[e._m(0,!0),r("div",{staticClass:"post-author-name-date-block"},[r("p",[e._v(" "+e._s(e.getAuthorById(t.user).name)+" "+e._s(e.getAuthorById(t.user).lastName))]),r("p",[e._v(" "+e._s(e.getRelativeDate(t.dateTimeAdded))+" ")])])]),r("p",{staticClass:"post-text"},[e._v(e._s(t.text))])])}))],2)},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-author-photo-block"},[n("img",{attrs:{src:r("6364"),width:"48"}})])}],z=(r("fb6a"),{computed:{getPosts:function(){return this.$store.getters.getPosts.slice().reverse()},getAuthors:function(){return this.$store.getters.getUserList}},methods:{getAuthorById:function(e){var t=this,r=null;return Object.keys(this.getAuthors).forEach((function(n){var a=t.getAuthors[n];a.id==e&&(r=a)})),null==r?{name:"[Deleted]",lastName:""}:r},newPost:function(){var e=this;if(this.newPostText.length<3)J.a.error("Нельзя опубликовать пост, длиной менее 3 символов.");else{var t=new M(this.newPostText,(new Date).toString(),this.newPostImages,!1,0,0,this.$store.getters.user.id);this.$store.dispatch("newPost",t).then((function(){e.sumbitStatus="ok",e.$router.push("/"),J.a.success("Пост опубликован."),e.newPostText="",e.newPostImages=[]})).catch((function(t){e.sumbitStatus=t.message}))}},getRelativeDate:function(e){var t=new Date(e),r=new Date,n=r-t,a=" мин. назад";if(n=Math.round(n/1e3/60),n>=60){if(n/=60,n=Math.floor(n),a=" ч. назад",n>=24)return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()}else if(0===n)return"Только что";return n+a}},data:function(){return{newPostText:"",newPostImages:[]}}}),X=z,W=(r("5eca"),Object(m["a"])(X,D,K,!1,null,"32990e89",null)),Z=W.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"div-authorize-main"}},[e._m(0),r("div",{attrs:{id:"div-authorize"}},[r("div",{staticClass:"container-generic"},[r("form",{staticClass:"form-generic",attrs:{id:"form-registration"},on:{submit:function(t){return t.preventDefault(),e.createNewUser(t)}}},[r("h3",[e._v("Моментальная регистрация")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Ваше имя",name:"name",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Ваша фамилия",name:"lastName",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-text",attrs:{type:"email",placeholder:"Ваш e-mail",name:"lastName",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Ваш пароль",name:"lastName",required:"true",minlength:"6",maxlength:"32"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("date-picker",{attrs:{required:!0,clearable:!1,editable:!1,placeholder:"Ваша дата рождения"},model:{value:e.birthDate,callback:function(t){e.birthDate=t},expression:"birthDate"}}),r("input",{staticClass:"custom-button",staticStyle:{"background-color":"#42cc8c"},attrs:{type:"submit",value:"Зарегистрироваться"}})],1)]),r("div",{staticClass:"container-generic"},[r("form",{staticClass:"form-generic",attrs:{id:"form-login"},on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[r("h3",[e._v("Уже есть аккаунт?")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginEmail,expression:"loginEmail"}],staticClass:"input-text",attrs:{type:"email",placeholder:"Ваш e-mail",name:"lastName",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.loginEmail},on:{input:function(t){t.target.composing||(e.loginEmail=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginPassword,expression:"loginPassword"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Ваш пароль",name:"lastName",required:"true",minlength:"6",maxlength:"32"},domProps:{value:e.loginPassword},on:{input:function(t){t.target.composing||(e.loginPassword=t.target.value)}}}),r("input",{staticClass:"custom-button",staticStyle:{"background-color":"#42cc8c"},attrs:{type:"submit",value:"Войти"}})])])])])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"div-authorize-leftside"}},[n("h1",[e._v("Оставайтесь на связи")]),n("p",[e._v("Присоединяйтесь к дружному сообществу VUenion всего за несколько кликов")]),n("img",{attrs:{src:r("6364"),width:"256"}})])}],$=r("ec45"),ee=(r("411c"),{components:{DatePicker:$["a"]},methods:{createNewUser:function(){var e=this;if(this.name.length<3||this.name.length>32)J.a.error("Длина имени должна быть более 3 символов и не должна превышать 32.");else if(this.lastName.length<3||this.lastName.length>32)J.a.error("Длина фамилии должна быть более 3 символов и не должна превышать 32.");else if(null!=this.birthDate){var t={email:this.email,password:this.password,name:this.name,lastName:this.lastName,birthDate:this.birthDate};this.$store.dispatch("registerUser",t).then((function(){e.sumbitStatus="ok",e.$router.push("/"),J.a.success("Регистрация прошла успешно!")})).catch((function(t){e.sumbitStatus=t.message}))}else J.a.error("Укажите вашу дату рождения.")},loginUser:function(){var e=this,t={email:this.loginEmail,password:this.loginPassword};this.$store.dispatch("loginUser",t).then((function(){e.sumbitStatus="ok",e.$router.push("/feed"),J.a.success("Добро пожаловать, "+t.email)})).catch((function(t){e.sumbitStatus=t.message}))}},data:function(){return{name:"",lastName:"",email:"",password:"",birthDate:null,loginEmail:"",loginPassword:""}}}),te=ee,re=(r("d5fa"),Object(m["a"])(te,G,_,!1,null,"4f946579",null)),ne=re.exports;n["default"].use(L["a"]);var ae=new L["a"]({mode:"history",base:"/Social-Media/",routes:[{path:"/feed",name:"Feed",component:Z,beforeEnter:function(e,t,r){q.getters.checkUser?r():r("/")}},{path:"/",name:"Authorization",component:ne,beforeEnter:function(e,t,r){q.getters.checkUser?r("/feed"):r()}}]});r("e4db"),r("ea7b"),r("66ce"),r("741f"),r("588e");n["default"].use(E["a"]),n["default"].use(J.a),n["default"].config.productionTip=!1,new n["default"]({router:ae,store:q,render:function(e){return e(Q)},created:function(){var e=this,t={apiKey:"AIzaSyBoFRDJ8fnZLp__tAKH4K3itDXnqWuh5m0",authDomain:"social-media-vuenion.firebaseapp.com",databaseURL:"https://social-media-vuenion.firebaseio.com",projectId:"social-media-vuenion",storageBucket:"social-media-vuenion.appspot.com",messagingSenderId:"1079493678730",appId:"1:1079493678730:web:65b950d29e5f926aca7f73"};c.a.initializeApp(t),c.a.auth().onAuthStateChanged((function(t){t&&e.$store.dispatch("loggedUser",t),e.$store.dispatch("loadPosts"),e.$store.dispatch("loadUserInfos")}))}}).$mount("#app")},"5eca":function(e,t,r){"use strict";var n=r("be75"),a=r.n(n);a.a},"5fba":function(e,t,r){e.exports=r.p+"img/groups.png"},"60d8":function(e,t,r){},6364:function(e,t,r){e.exports=r.p+"newUser.svg"},"85ec":function(e,t,r){},8986:function(e,t,r){},"9d1c":function(e,t,r){"use strict";var n=r("336f"),a=r.n(n);a.a},a250:function(e,t,r){"use strict";var n=r("ba3e"),a=r.n(n);a.a},ba3e:function(e,t,r){},be75:function(e,t,r){},c31f:function(e,t,r){e.exports=r.p+"web.svg"},cf05:function(e,t,r){e.exports=r.p+"img/logo.png"},d5fa:function(e,t,r){"use strict";var n=r("8986"),a=r.n(n);a.a},ee03:function(e,t,r){"use strict";var n=r("60d8"),a=r.n(n);a.a},f83a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARMSURBVHic7ZdrT9t2FIefv0NCyygVq0bXFEQ6RtJ2e1GpWzVBYam0fYRp7ydV+1DbPsG0T7BJI4DaXcq4BAiUlUJKLnZCWhIQkJv3AszVgG9JgPl5hezj4/N7fIxicHFxcXFxcXFxcflfIgDUH/s+5db7PyF4CHgaPFOtKYMY4032qfj+eVQC4I+lX4ilNrj84QGaiCVL/L38M4BQv+vyI1USQJW7H0a473/S4AFry2xqlLlUHyBR9dyW8JV8u6ck5tJhoonhRs5XU2IHwgP4Sj7pSIlgQR64lBJiyRFiB8LvclQAaBKmE5H6TFYHZpKjxNL96OTVEwAgeCkPXopNmEmOMJ8+9uQ1ThIA+6/Dxd2E2eQo8/pPXuM0AbAjYZCplYu3CTPJEeZOfvIaZwkAEPyrDDC5cnE2YWftH2MgnxEBAIJXysXYhP3wwki5UQFwETZh2lx4MCcAtE2YjJ8/CdPJEV6aCw/mBQAIXmXPl4RowlJ4sCYAzpOEaGKEBdlSeLAuADQJE/HfbPSwx0xy2E54sCcAQLCY/YqxpSGbfcwzEY8wnx7ARniwL2CH5Vy4rhIm4hEWs19iMzw4JQB2JLyog4TxvfCO4JwAgHiNJYzHI7x2Ljw4LQBAVu4gT//qeF9l+neS6YDTbZ0V4KvI9CoS+aWvkSeGHOubiUZYW3pCUPHiKycd64uTApqqOYLKOoIuAPIrYeTxIdt95WiEd8va2vvpzRTxVjO2++7ijABJXScoywi159DxfMKeBDkaIb98+J2X1AAhOYensma578F2tjsItUhQmcej3tM9b1WCPHk8/P49Q4Qyr5HULdN9j2BPgKBCKPMP3srDU+vMSpAnI+TfnP7f3lN9QFCZQlAy3FcH6wIEKj2Z53jLXxiqzyfCpA1IMBJew1t5RK/yF1A1VK+DdQGB1WGulh6buqZwhgQz4TWay/30rI6auuYA1gR054Zo3bb2g6SQCCOPDR07biW8Rsv2IN254z0NYF6APz9M21bYys32yKcOS7ATXqNtK0znmunP8yZT1TcLz7ixPmD2JrrkU2HU3dehkAg70rN9Y5CSNIx8bdDoJcYFtG/8SUfhEQ58ge3hVPB9BB2FfiriGdnWPiMXGHsFrm+O07n2ALMb0xg83Mp/RvvWCyPFZwto3Z6h620QaLY7WR3x0Zm7z7WtqbMKTxfQUlzgzqofwXuOjVY/WujOBbhanDut6GQBzeVlPspeB9qdnqxuCNr4OPsBV8qLJ5XoC/BW0gQVD4KOmg1XP27Qq1zBV07onTwuwFPNEVI2gM5aT1ZH/AQzJb3P6MMCPGqBuzqftZcBoQbold8iVd4dPCxR9BZ3/lI3CaYXkU74rL0MeNQg95QVJHUTgKK3KFQQPPXPEpILeCufN3jE+lCSxpm/2Sx+SH0iCVAJZL/BW6kC5UbPVgfKeKvb3F79ttGDuLi4uLi4uLi4uDSQ/wA8A8OptVh5iAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.js.map