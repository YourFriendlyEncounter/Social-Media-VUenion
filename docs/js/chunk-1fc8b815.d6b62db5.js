(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc8b815"],{"0d4c":function(e,t,a){},"3ce8":function(e,t,a){"use strict";var s=a("0d4c"),i=a.n(s);i.a},"791c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"div-authorize-main"}},[e._m(0),a("div",{attrs:{id:"div-authorize"}},[a("div",{staticClass:"container-generic"},[a("form",{staticClass:"form-generic",attrs:{id:"form-registration"},on:{submit:function(t){return t.preventDefault(),e.createNewUser(t)}}},[a("h3",[e._v("Моментальная регистрация")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Ваше имя",name:"name",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"input-text",attrs:{type:"text",placeholder:"Ваша фамилия",name:"lastName",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-text",attrs:{type:"email",placeholder:"Ваш e-mail",name:"lastName",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Ваш пароль",name:"lastName",required:"true",minlength:"6",maxlength:"32"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("date-picker",{attrs:{required:!0,clearable:!1,editable:!1,placeholder:"Ваша дата рождения"},model:{value:e.birthDate,callback:function(t){e.birthDate=t},expression:"birthDate"}}),a("input",{staticClass:"custom-button",staticStyle:{"background-color":"#42cc8c"},attrs:{type:"submit",value:"Зарегистрироваться"}})],1)]),a("div",{staticClass:"container-generic"},[a("form",{staticClass:"form-generic",attrs:{id:"form-login"},on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[a("h3",[e._v("Уже есть аккаунт?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginEmail,expression:"loginEmail"}],staticClass:"input-text",attrs:{type:"email",placeholder:"Ваш e-mail",name:"lastName",required:"true",minlength:"3",maxlength:"32"},domProps:{value:e.loginEmail},on:{input:function(t){t.target.composing||(e.loginEmail=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginPassword,expression:"loginPassword"}],staticClass:"input-text",attrs:{type:"password",placeholder:"Ваш пароль",name:"lastName",required:"true",minlength:"6",maxlength:"32"},domProps:{value:e.loginPassword},on:{input:function(t){t.target.composing||(e.loginPassword=t.target.value)}}}),a("input",{staticClass:"custom-button",staticStyle:{"background-color":"#42cc8c"},attrs:{type:"submit",value:"Войти"}})])])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"div-authorize-leftside"}},[s("h1",[e._v("Оставайтесь на связи")]),s("p",[e._v("Присоединяйтесь к дружному сообществу VUenion всего за несколько кликов")]),s("img",{attrs:{src:a("6364"),width:"256"}})])}],n=(a("b0c0"),a("ec45")),r=(a("411c"),a("d719")),o=a.n(r),l=a("2147"),m={components:{DatePicker:n["a"]},methods:{createNewUser:function(){var e=this;if(this.name.length<3||this.name.length>32)o.a.error("Длина имени должна быть более 3 символов и не должна превышать 32.");else if(this.lastName.length<3||this.lastName.length>32)o.a.error("Длина фамилии должна быть более 3 символов и не должна превышать 32.");else if(null!=this.birthDate){var t={email:this.email,password:this.password,name:this.name,lastName:this.lastName,birthDate:this.birthDate};this.$store.dispatch("registerUser",t).then((function(){e.sumbitStatus="ok",e.$router.push("/"),o.a.success("Регистрация прошла успешно!")})).catch((function(t){e.sumbitStatus=t.message,l["a"].commit("setLoading",!1)}))}else o.a.error("Укажите вашу дату рождения.")},loginUser:function(){var e=this,t={email:this.loginEmail,password:this.loginPassword};this.$store.dispatch("loginUser",t).then((function(){e.sumbitStatus="ok",e.$router.push({path:"/feed"}),o.a.success("Добро пожаловать, "+e.$store.getters.getUserInfo.name+"!")})).catch((function(t){e.sumbitStatus=t.message}))}},data:function(){return{name:"",lastName:"",email:"",password:"",birthDate:null,loginEmail:"",loginPassword:""}}},u=m,c=(a("3ce8"),a("2877")),d=Object(c["a"])(u,s,i,!1,null,"3a53ff86",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1fc8b815.d6b62db5.js.map