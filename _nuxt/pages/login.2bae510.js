(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(e,t,r){"use strict";r.r(t);r(10);var n=r(2),o=(r(45),{layout:"default",middleware:["guest"],mounted:function(){if(this.$store.getters["auth/authUser"])return this.$router.replace("/")},data:function(){return{email:"john.doe@example.com",password:"secret"}},methods:{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("auth/loginUser",{email:e.email,password:e.password});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("error: ",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}}),l=r(23),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Login")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("div",{staticClass:"container"},[e._m(0),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter Email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e._m(1),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter Password",name:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"submit",disabled:!e.password}},[e._v("Login")])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"email"}},[t("b",[this._v("Email")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"password"}},[t("b",[this._v("Password")])])}],!1,null,"37cf4f15",null);t.default=component.exports}}]);