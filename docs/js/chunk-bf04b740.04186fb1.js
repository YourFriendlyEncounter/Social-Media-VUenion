(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf04b740"],{1709:function(t,e,s){"use strict";var n=s("8787"),r=s.n(n);r.a},4787:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"feed"}},[t.checkUser?s("form",{attrs:{id:"form-new-post"},on:{submit:function(e){return e.preventDefault(),t.newPost(e)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPostText,expression:"newPostText"}],staticClass:"input-text",attrs:{id:"new-post-text",rows:"3",maxlength:"3000",placeholder:"Что интересного можете рассказать?"},domProps:{value:t.newPostText},on:{input:function(e){e.target.composing||(t.newPostText=e.target.value)}}}),t._v(" "),s("input",{staticClass:"custom-button",attrs:{type:"submit",id:"new-post-submit"}})]):t._e(),t._l(t.getPosts,(function(e){return s("div",{key:e.id,staticClass:"container-white post-generic"},[s("div",{staticClass:"post-author-info"},[t._m(0,!0),s("div",{staticClass:"post-author-name-date-block"},[s("p",[t._v(" "+t._s(t.getAuthorById(e.user).name)+" "+t._s(t.getAuthorById(e.user).lastName))]),s("p",[t._v(" "+t._s(t.getRelativeDate(e.dateTimeAdded))+" ")])])]),s("p",{staticClass:"post-text"},[t._v(t._s(e.text))])])}))],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-author-photo-block"},[n("img",{attrs:{src:s("6364"),width:"48"}})])}],o=(s("4160"),s("fb6a"),s("b64b"),s("d3b7"),s("25f0"),s("159b"),s("f3db")),i=s("d719"),a=s.n(i),u={computed:{getAuthors:function(){return this.$store.getters.getUserList},checkUser:function(){return this.$store.getters.checkUser},getPosts:function(){return this.$store.getters.getPosts.slice().reverse()}},methods:{getAuthorById:function(t){var e=this,s=null;return Object.keys(this.getAuthors).forEach((function(n){var r=e.getAuthors[n];r.id==t&&(s=r)})),null==s?{name:"[Deleted]",lastName:""}:s},newPost:function(){var t=this;if(this.newPostText.length<3)a.a.error("Нельзя опубликовать пост, длиной менее 3 символов.");else{var e=new o["a"](this.newPostText,(new Date).toString(),this.newPostImages,!1,0,0,this.$store.getters.user.id);this.$store.dispatch("newPost",e).then((function(){t.sumbitStatus="ok",t.$router.push("/"),a.a.success("Пост опубликован."),t.newPostText="",t.newPostImages=[]})).catch((function(e){t.sumbitStatus=e.message}))}},getRelativeDate:function(t){var e=new Date(t),s=new Date,n=s-e,r=" мин. назад";if(n=Math.round(n/1e3/60),n>=60){if(n/=60,n=Math.floor(n),r=" ч. назад",n>=24)return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()+" "+(e.getHours()<10?"0":"")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()}else if(0===n)return"Только что";return n+r}},data:function(){return{newPostText:"",newPostImages:[]}}},c=u,l=(s("1709"),s("2877")),d=Object(l["a"])(c,n,r,!1,null,"9bf665a0",null);e["default"]=d.exports},8787:function(t,e,s){},fb6a:function(t,e,s){"use strict";var n=s("23e7"),r=s("861d"),o=s("e8b5"),i=s("23cb"),a=s("50c4"),u=s("fc6a"),c=s("8418"),l=s("b622"),d=s("1dde"),f=s("ae40"),h=d("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),v=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!h||!g},{slice:function(t,e){var s,n,l,d=u(this),f=a(d.length),h=i(t,f),g=i(void 0===e?f:e,f);if(o(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!o(s.prototype)?r(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return v.call(d,h,g);for(n=new(void 0===s?Array:s)(m(g-h,0)),l=0;h<g;h++,l++)h in d&&c(n,l,d[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-bf04b740.04186fb1.js.map