(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eac663f"],{"0510":function(t,e,s){"use strict";var n=s("a420"),i=s.n(n);i.a},"23cb5":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-section"},[t.checkUser&&t.allowPosting?s("NewPublication",{attrs:{placeholder:"Что интересного можете рассказать?",field:t.field}}):t._e(),s("div",{staticClass:"target-publications",staticStyle:{"margin-bottom":"2rem"}},[t._l(t.getPosts,(function(e){return s("Publication",{key:e.id,attrs:{post:e,allowCommentsOnWall:t.allowCommentsOnWall}})})),t.loadedItemsCountLastTime>0?s("button",{staticClass:"custom-button",on:{click:t.loadNewPage}},[t._v("Загрузить ещё")]):t._e()],2)],1)},i=[],r=(s("4de4"),s("caad"),s("fb6a"),s("45fc"),s("2532"),s("3ca3"),s("ddb0"),s("96cf"),s("1da1")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-white post-generic"},[s("div",{staticClass:"post-author-info"},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticClass:"post-author-photo-block"},[s("img",{attrs:{src:t.getUserImageURL(t.post.user).link,width:"48",height:"48"}})]),s("div",{staticClass:"post-author-name-date-block"},[s("router-link",{staticClass:"link-user",class:{"is-admin-name":t.getAuthorById(t.post.user).isAdmin},attrs:{to:{name:"UserProfile",params:{id:t.post.user}}}},[t._v(" "+t._s(t.getAuthorById(t.post.user).name)+" "+t._s(t.getAuthorById(t.post.user).lastName)+" ")]),s("p",[t._v(" "+t._s(t.getRelativeDate(t.post.dateTimeAdded))+" ")])],1)]),t.getUser.id==t.post.user||t.isUserAdmin?s("a",{staticClass:"post-delete",attrs:{href:"#"},on:{click:function(e){return t.deletePostOrComment(t.post)}}},[t._v("X")]):t._e()]),s("p",{staticClass:"post-text"},[t._v(t._s(t.post.text))]),t.post.images?s("div",[s("hr"),s("div",{staticClass:"post-images"},t._l(t.getImagesForPost,(function(t){return s("div",{key:t.link,staticClass:"post-image"},[s("a",{attrs:{href:t.link}},[s("img",{attrs:{src:t.link,width:"96",height:"64"}})])])})),0)]):t._e(),s("hr"),s("Rating",{attrs:{post:t.post,canAddComment:t.allowCommentsOnWall}}),s("div",{staticClass:"post-comment-section"},[t.getComments(t.post.id).length>0?s("div",[s("hr"),t._l(t.getComments(t.post.id),(function(e){return s("Comment",{key:e.id,attrs:{comment:e,deletePostOrComment:t.deletePostOrComment,getUserImageURL:t.getUserImageURL,getAuthorById:t.getAuthorById,getRelativeDate:t.getRelativeDate,isUserAdmin:t.isUserAdmin,isReply:!1}})}))],2):t._e(),t.checkUser&&t.post.showComment?s("NewComment",{attrs:{post:t.post,userImage:t.getUserImageURL(t.getUser.id).link,field:t.post.field}}):t._e()],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"div-likes-dislikes"},[n("p",{staticClass:"p-difference"},[t._v(t._s(t.getDifference))]),n("div",{staticClass:"tooltip"},[n("div",{staticClass:"div-tooltip-inside"},[n("h2",[t._v(t._s(t.getRatesCount(t.post.liked)))])]),n("button",{staticClass:"button-transparent-clickable button-like",class:{"is-post-liked":t.isPostLiked(t.post)},on:{click:function(e){return t.toggleLikePost(t.post)}}},[n("img",{attrs:{src:s("8e44"),width:"24"}})])]),n("div",{staticClass:"tooltip"},[n("div",{staticClass:"div-tooltip-inside"},[n("h2",[t._v(t._s(t.getRatesCount(t.post.disliked)))])]),n("button",{staticClass:"button-transparent-clickable button-dislike",class:{"is-post-disliked":t.isPostDisliked(t.post)},on:{click:function(e){return t.toggleDislikePost(t.post)}}},[n("img",{attrs:{src:s("fcd3"),width:"24"}})])]),t.canAddComment?n("button",{staticClass:"button-transparent-clickable button-comment",class:{"is-post-liked":1==t.post.showComment},on:{click:t.showCommentClicked}},[n("img",{attrs:{src:s("e306"),width:"24"}})]):t._e()])])},u=[],l=s("d719"),d=s.n(l),m={methods:{getRatesCount:function(t){return void 0==t?0:t.length},isPostLiked:function(t){return!(!t.liked||!this.checkUser)&&t.liked.includes(this.getUser.id)},isPostDisliked:function(t){return!(!t.disliked||!this.checkUser)&&t.disliked.includes(this.getUser.id)},toggleLikePost:function(t){if(!this.isLoadingLikes)if(this.checkUser){this.isPostDisliked(t)&&this.toggleDislikePost(t);var e=this.isPostLiked(t),s=this.getUser.id;this.$store.dispatch("changeLikes",{post:t,userID:s,isToRemove:e})}else d.a.error("Авторизуйтесь, чтобы оставлять отзывы.")},toggleDislikePost:function(t){if(!this.isLoadingLikes)if(this.checkUser){this.isPostLiked(t)&&this.toggleLikePost(t);var e=this.isPostDisliked(t),s=this.getUser.id;this.$store.dispatch("changeDislikes",{post:t,userID:s,isToRemove:e})}else d.a.error("Авторизуйтесь, чтобы оставлять отзывы.")},showCommentClicked:function(){void 0==this.post.showComment&&(this.post.showComment=!1),this.post.showComment=!this.post.showComment,this.$store.dispatch("changeComponentKey")}},computed:{getUser:function(){return this.$store.getters.user},checkUser:function(){return this.$store.getters.checkUser},getDifference:function(){var t=this.getRatesCount(this.post.liked)-this.getRatesCount(this.post.disliked);return t>0&&(t="+"+t),t},isLoadingLikes:function(){return this.$store.getters.isLoadingLikes}},props:{post:Object,canAddComment:Boolean}},g=m,h=(s("0510"),s("2877")),f=Object(h["a"])(g,c,u,!1,null,"2b917899",null),p=f.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-comment-new",class:{"is-reply-newcomment":t.isReply}},[s("div",{staticClass:"post-commment-image-block"},[s("img",{attrs:{src:t.userImage,width:"32",height:"32"}})]),s("form",{staticClass:"form-new-comment",on:{submit:function(e){return e.preventDefault(),t.newComment(t.post)}}},[s("input",{ref:"commentText",staticClass:"input-text",attrs:{type:"text",placeholder:"Напишите своё мнение..."}}),t._m(0)])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button-transparent-clickable",staticStyle:{height:"34px",margin:"0 0 0 4px"}},[n("img",{attrs:{src:s("1959"),width:"32",height:"32"}})])}],w=(s("d3b7"),s("25f0"),s("d4ec")),C=function t(e,s,n,i,r,o){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"post",u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null;Object(w["a"])(this,t),this.text=e,this.dateTimeAdded=s,this.images=n,this.edited=i,this.liked=r,this.disliked=o,this.user=a,this.id=l,this.type=c,this.target=u},b={props:{post:Object,userImage:String,isReply:Boolean,field:String},methods:{newComment:function(t){var e=this,s=this.output=this.$refs.commentText.value;if(s.length<3)d.a.error("Нельзя опубликовать комментарий, длиной менее 3 символов.");else{var n=new C;n.text=s,n.dateTimeAdded=(new Date).toString(),n.images=[],n.edited=!1,n.liked=[],n.disliked=[],n.user=this.$store.getters.user.id,n.type="comment",n.target=t.id,n.field=this.field,this.$store.dispatch("newPost",n).then((function(){e.sumbitStatus="ok",e.$refs.commentText.value="",t.showComment=!1})).catch((function(t){e.sumbitStatus=t.message}))}}}},U=b,x=(s("6191"),Object(h["a"])(U,v,k,!1,null,"593d26ae",null)),P=x.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-comment-outer",class:{"is-reply":t.isReply}},[s("div",{staticClass:"post-comment"},[s("div",{staticClass:"post-comment-inner"},[t.getUser.id==t.comment.user||t.isUserAdmin?s("a",{staticClass:"post-comment-delete",attrs:{href:"#"},on:{click:function(e){return t.deletePostOrComment(t.comment)}}},[t._v("X")]):t._e(),s("div",{staticClass:"post-author-photo-block"},[s("img",{attrs:{src:t.getUserImageURL(t.comment.user).link,width:"32",height:"32"}})]),s("div",{staticClass:"post-author-name-date-block"},[s("router-link",{staticClass:"link-user",class:{"is-admin-name":t.getAuthorById(t.comment.user).isAdmin},attrs:{to:{name:"UserProfile",params:{id:t.comment.user}}}},[t._v(" "+t._s(t.getAuthorById(t.comment.user).name)+" "+t._s(t.getAuthorById(t.comment.user).lastName)+" ")]),s("p",[t._v(" "+t._s(t.getRelativeDate(t.comment.dateTimeAdded))+" ")])],1),s("p",{staticStyle:{"margin-left":"0.5rem","max-width":"70%"}},[t._v(t._s(t.comment.text))])]),s("div",[s("Rating",{attrs:{post:t.comment,canAddComment:!t.isReply}})],1)]),t.isReply?t._e():s("div",{staticClass:"post-comment-replies"},t._l(t.getReplies,(function(e){return s("Comment",{key:e.id,attrs:{comment:e,deletePostOrComment:t.deletePostOrComment,getUserImageURL:t.getUserImageURL,getAuthorById:t.getAuthorById,getRelativeDate:t.getRelativeDate,isUserAdmin:t.isUserAdmin,isReply:!0}})})),1),t.comment.showComment?s("NewComment",{attrs:{post:t.comment,userImage:t.getUserImageURL(t.getUser.id).link,isReply:!0,field:t.comment.field}}):t._e()],1)},R=[],I={name:"Comment",components:{Rating:p,Comment:_,NewComment:P},computed:{checkUser:function(){return this.$store.getters.checkUser},getUser:function(){var t=this.$store.getters.user;return t||{id:""}},getReplies:function(){var t=this;return this.$store.getters.getPosts.slice().filter((function(e){return e.target==t.comment.id}))}},props:{comment:Object,deletePostOrComment:Function,getUserImageURL:Function,getAuthorById:Function,getRelativeDate:Function,isUserAdmin:Boolean,isReply:Boolean}},A=I,L=(s("8224"),Object(h["a"])(A,y,R,!1,null,"1a9ff850",null)),_=L.exports,$={components:{Rating:p,NewComment:P,Comment:_},methods:{getAuthorById:function(t){var e=this.$store.getters.getUserById(t);return e||{name:"[Гость]",isAdmin:!1}},getUserImageURL:function(t){var e=this.getUserAvatarImageURLs.slice().filter((function(e){return e.id==t}))[0];if(!e){var n=s("2f65");e={id:"",link:n("./anonymous.svg")}}return e},getRelativeDate:function(t){var e=new Date(t),s=new Date,n=s-e,i=" мин. назад";if(n=Math.round(n/1e3/60),n>=60){if(n/=60,n=Math.floor(n),i=" ч. назад",n>=24)return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()+" "+(e.getHours()<10?"0":"")+e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()}else if(0===n)return"Только что";return n+i},getComments:function(t){return this.$store.getters.getPosts.slice().filter((function(e){return"comment"==e.type&&e.target==t}))},deletePostOrComment:function(t){var e;e="comment"==t.type?"комментарий":"пост",confirm("Вы уверены, что хотите удалить этот "+e+"? Это действие нельзя будет отменить.")&&this.$store.dispatch("deletePost",t)}},props:{post:Object,allowCommentsOnWall:Boolean},computed:{getAuthors:function(){return this.$store.getters.getUserList},checkUser:function(){return this.$store.getters.checkUser},getUser:function(){var t=this.$store.getters.user;return t||{id:""}},isUserAdmin:function(){var t=this.$store.getters.getUserInfo;return!!t&&t.isAdmin},getUserAvatarImageURLs:function(){return this.$store.getters.getLoadedUserAvatarURLs},getImagesForPost:function(){var t=this;return this.$store.getters.getLoadedImagesURLs.filter((function(e){return e.id==t.post.id}))}}},O=$,D=(s("3c7b"),Object(h["a"])(O,o,a,!1,null,"62ad3c13",null)),S=D.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{attrs:{id:"form-new-post"},on:{submit:function(e){return e.preventDefault(),t.newPost(e)}}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPostText,expression:"newPostText"}],staticClass:"input-text",attrs:{id:"new-post-text",rows:"3",maxlength:"3000",placeholder:t.placeholder},domProps:{value:t.newPostText},on:{input:function(e){e.target.composing||(t.newPostText=e.target.value)}}}),t._v(" "),s("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"-webkit-fill-available"}},[s("div",[s("input",{ref:"file",staticClass:"input-text",attrs:{type:"file",id:"new-post-images",accept:"image/jpeg,image/jpg,image/png,image/gif",multiple:""},on:{change:function(e){return t.handleFileUpload()}}})]),s("input",{staticClass:"custom-button",attrs:{type:"submit",id:"new-post-submit"}})])])},B=[],j={props:{placeholder:String,field:String},computed:{},methods:{handleFileUpload:function(){this.newPostImages=this.$refs.file.files},newPost:function(){var t=this;if(this.newPostText.length<3)d.a.error("Нельзя опубликовать пост, длиной менее 3 символов.");else if(this.newPostImages.length>10)d.a.error("Нельзя опубликовать более 10 картинок в одном посте.");else{var e={};e.text=this.newPostText,e.dateTimeAdded=(new Date).toString(),e.images=this.newPostImages.length>0,e.edited=!1,e.liked=[],e.disliked=[],e.user=this.$store.getters.user.id,e.type="post",e.target=this.field,e.field=this.field,this.$store.dispatch("newPost",e).then((function(s){if(t.sumbitStatus="ok",e.images)for(var n=0;n<t.newPostImages.length;n++){var i="posts/"+s+"/"+n,r=t.newPostImages[n],o=s;t.$store.dispatch("sendFile",{link:i,file:r,id:o})}t.newPostText="",t.newPostImages=[]})).catch((function(e){t.sumbitStatus=e.message}))}}},data:function(){return{newPostText:"",newPostImages:[]}}},E=j,N=(s("d7e8"),Object(h["a"])(E,T,B,!1,null,"82ed01f6",null)),F=N.exports,M={components:{Publication:S,NewPublication:F},props:{field:String,allowPosting:Boolean,allowCommentsOnWall:Boolean},data:function(){return{imagesAlreadyLoaded:Boolean,page:1,itemsPerPage:5,loadedItemsCountLastTime:1}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0==t.getPosts.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.loadEverything();case 4:if(document.documentElement.getBoundingClientRect().bottom!=window.innerHeight||0==t.loadedItemsCountLastTime){e.next=10;break}return t.page++,e.next=8,t.loadEverything();case 8:e.next=4;break;case 10:t.$store.commit("setInterval",setInterval(Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoading){e.next=4;break}return e.next=3,t.loadEverything(!0);case 3:console.log("Данные подгружены для "+t.field);case 4:case"end":return e.stop()}}),e)}))),5e3)),window.onscroll=function(){t.infiniteScroll()};case 12:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.$store.commit("stopInterval")},computed:{checkUser:function(){return this.$store.getters.checkUser},getPosts:function(){var t=this;return this.$store.getters.getPosts.slice().filter((function(e){return e.field==t.field&&"comment"!=e.type})).reverse()},getLoadedUsers:function(){return this.$store.getters.getUserList},getUserAvatarImageURLs:function(){return this.$store.getters.getLoadedUserAvatarURLs},getLoadedImagesURLs:function(){return this.$store.getters.getLoadedImagesURLs},isLoading:function(){return this.$store.getters.loading}},methods:{loadNewPage:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.page++,e.next=3,t.loadEverything();case 3:case"end":return e.stop()}}),e)})))()},infiniteScroll:function(){var t=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;t&&this.loadNewPage()},getAuthorById:function(t){return this.$store.getters.getUserById(t)},loadPosts:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loadPosts",{field:t.field,page:t.page,itemsPerPage:t.itemsPerPage});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},loadUserInfo:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$store.dispatch("loadUserInfo",{userID:t});case 2:case"end":return s.stop()}}),s)})))()},loadUserAvatar:function(t){this.$store.dispatch("loadUserAvatarURL",{user:t})},loadPostImages:function(t){this.$store.dispatch("loadPostImagesURLs",{post:t})},loadEverything:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n,i,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(t){s.next=6;break}return s.next=3,e.loadPosts();case 3:e.loadedItemsCountLastTime=s.sent,s.next=8;break;case 6:return s.next=8,e.loadPosts();case 8:n=e.getPosts,i=regeneratorRuntime.mark((function t(s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$store.getters.getDeletedUserIDs.includes(n[s].user)&&!e.getLoadedUsers.some((function(t){return t.id===n[s].user}))){t.next=5;break}return t.next=3,e.loadImages(n[s]);case 3:t.next=9;break;case 5:return t.next=7,e.loadUserInfo(n[s].user);case 7:return t.next=9,e.loadImages(n[s]);case 9:case"end":return t.stop()}}),t)})),r=0;case 11:if(!(r<n.length)){s.next=16;break}return s.delegateYield(i(r),"t0",13);case 13:r++,s.next=11;break;case 16:case"end":return s.stop()}}),s)})))()},loadImages:function(t){if(1!=t.images||this.getLoadedImagesURLs.some((function(e){return e.id==t.id}))||this.loadPostImages(t),!this.getUserAvatarImageURLs.some((function(e){return e.id==t.user}))){var e=this.getAuthorById(t.user);e&&this.loadUserAvatar(e)}}}},H=M,W=Object(h["a"])(H,n,i,!1,null,null,null);e["a"]=W.exports},2532:function(t,e,s){"use strict";var n=s("23e7"),i=s("5a34"),r=s("1d80"),o=s("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"2f65":function(t,e,s){var n={"./anonymous.svg":"2456","./newUser.svg":"6364","./web.svg":"c31f"};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=r,t.exports=i,i.id="2f65"},"3c7b":function(t,e,s){"use strict";var n=s("aeef"),i=s.n(n);i.a},"3ca3":function(t,e,s){"use strict";var n=s("6547").charAt,i=s("69f3"),r=s("7dd0"),o="String Iterator",a=i.set,c=i.getterFor(o);r(String,"String",(function(t){a(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),s=e.string,i=e.index;return i>=s.length?{value:void 0,done:!0}:(t=n(s,i),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,s){var n=s("861d"),i=s("c6b6"),r=s("b622"),o=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,s){var n=s("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"60c9":function(t,e,s){},6191:function(t,e,s){"use strict";var n=s("a4c5"),i=s.n(n);i.a},6547:function(t,e,s){var n=s("a691"),i=s("1d80"),r=function(t){return function(e,s){var r,o,a=String(i(e)),c=n(s),u=a.length;return c<0||c>=u?t?"":void 0:(r=a.charCodeAt(c),r<55296||r>56319||c+1===u||(o=a.charCodeAt(c+1))<56320||o>57343?t?a.charAt(c):r:t?a.slice(c,c+2):o-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"78a9":function(t,e,s){},8224:function(t,e,s){"use strict";var n=s("78a9"),i=s.n(n);i.a},a420:function(t,e,s){},a4c5:function(t,e,s){},ab13:function(t,e,s){var n=s("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},aeef:function(t,e,s){},caad:function(t,e,s){"use strict";var n=s("23e7"),i=s("4d64").includes,r=s("44d2"),o=s("ae40"),a=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d7e8:function(t,e,s){"use strict";var n=s("60c9"),i=s.n(n);i.a},ddb0:function(t,e,s){var n=s("da84"),i=s("fdbc"),r=s("e260"),o=s("9112"),a=s("b622"),c=a("iterator"),u=a("toStringTag"),l=r.values;for(var d in i){var m=n[d],g=m&&m.prototype;if(g){if(g[c]!==l)try{o(g,c,l)}catch(f){g[c]=l}if(g[u]||o(g,u,d),i[d])for(var h in r)if(g[h]!==r[h])try{o(g,h,r[h])}catch(f){g[h]=r[h]}}}},fb6a:function(t,e,s){"use strict";var n=s("23e7"),i=s("861d"),r=s("e8b5"),o=s("23cb"),a=s("50c4"),c=s("fc6a"),u=s("8418"),l=s("b622"),d=s("1dde"),m=s("ae40"),g=d("slice"),h=m("slice",{ACCESSORS:!0,0:0,1:2}),f=l("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!g||!h},{slice:function(t,e){var s,n,l,d=c(this),m=a(d.length),g=o(t,m),h=o(void 0===e?m:e,m);if(r(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?i(s)&&(s=s[f],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return p.call(d,g,h);for(n=new(void 0===s?Array:s)(v(h-g,0)),l=0;g<h;g++,l++)g in d&&u(n,l,d[g]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-5eac663f.93020e45.js.map