(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae72b4fa"],{"3ba2":function(t,e,r){},"5da9":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"personal-page"}},[r("div",{attrs:{id:"personal-page-top"}},[r("div",{attrs:{id:"personal-page-image"}},[r("img",{staticStyle:{"min-height":"128","max-height":"300"},attrs:{id:"img-avatar",width:"200"}}),t.isUserMe?r("button",{staticClass:"custom-button",attrs:{id:"button-edit-profile"},on:{click:t.editProfile}},[t._v("Редактировать профиль")]):t._e()]),r("div",{attrs:{id:"personal-page-text-info"}},[r("h2",[t._v(" "+t._s(t.user.name)+" "+t._s(t.user.lastName))]),r("p",[t._v(" "+t._s(t.getInfo.status)+" ")]),r("p",[t._v(" "+t._s(t.getBirthDate)+" ")])])]),r("h2",[t._v("О себе:")]),r("p",[t._v(" "+t._s(t.getInfo.about)+" ")]),r("h2",{staticStyle:{"margin-bottom":"0.5rem"}},[t._v("Лента: ")]),r("PostSection",{attrs:{field:t.user.id,allowPosting:t.user.allowWallPublications||t.isUserMe,allowCommentsOnWall:t.user.allowCommentsOnWall}})],1)},a=[],n=(r("7db0"),r("9911"),r("96cf"),r("1da1")),i=r("23cb5"),o={components:{PostSection:i["a"]},computed:{getCurrentPageUser:function(){return this.$store.getters.getUserById(this.id)},getAuthors:function(){return this.$store.getters.getUserList},getInfo:function(){var t={};return t.about=this.user.about,t.about||(t.about="Подробная информация о себе отсутствует."),t.status=this.user.status,t.status||(t.status="Статус отсутствует."),t},isUserMe:function(){return this.id==this.$store.getters.user.id},getBirthDate:function(){var t=new Date(this.user.birthDate),e=Math.floor((new Date-t.getTime())/31536e6);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()+" ("+e+" лет)"}},methods:{editProfile:function(){this.$router.push({name:"EditProfile",params:{id:this.id}})},findImageURL:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.user.image){e.next=5;break}s=r("2f65"),document.getElementById("img-avatar").setAttribute("src",s("./anonymous.svg")),e.next=15;break;case 5:if(a=t.$store.getters.getLoadedUserAvatarURLs.find((function(e){return e.id==t.user.id})),!a){e.next=10;break}document.getElementById("img-avatar").setAttribute("src",a.link),e.next=15;break;case 10:return n="userAvatars/"+t.id,e.next=13,t.$store.dispatch("getImage",n);case 13:i=e.sent,document.getElementById("img-avatar").setAttribute("src",i);case 15:case"end":return e.stop()}}),e)})))()}},data:function(){return{user:null}},props:{id:String},beforeMount:function(){this.user=this.getCurrentPageUser},mounted:function(){this.findImageURL()}},u=o,c=(r("8524"),r("2877")),d=Object(c["a"])(u,s,a,!1,null,"3ed540ae",null);e["default"]=d.exports},8524:function(t,e,r){"use strict";var s=r("3ba2"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-ae72b4fa.97cd2d02.js.map