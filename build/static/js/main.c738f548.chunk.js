(this.webpackJsonplearnapp=this.webpackJsonplearnapp||[]).push([[0],{46:function(e,s,c){},73:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),n=c(35),r=c.n(n),l=(c(46),c(6)),i=c(8),o=c(14),j=c(74),d=c(75),m=c(21),b=function(e,s){switch(console.log(s,"action"),s.type){case"SIGNUP_SUCCESS":return console.log({state:e,action:s}),e;case"SIGNIN_SUCCESS":return void console.log({state:e,action:s});case"SIGNUP_FAIL":return console.log("FAIL"),[].concat(Object(m.a)(e),[s.state]);default:return e}},h=c(36),u=c.n(h),O="SIGNUP_SUCCESS",x=c(0),p=function(){var e=Object(a.useReducer)(b,[]),s=Object(i.a)(e,2);s[0],s[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"sign-mn-cont",children:Object(x.jsx)("div",{className:"sign-child-cont sn-2 p-2",children:Object(x.jsxs)(j.a,{onSubmit:function(e){e.preventDefault();var s=Object(i.a)(e.target.elements,2),c=s[0],a=s[1],t=document.querySelector("#e-error"),n=document.querySelector("#p-error");(function(){""===c.value?t.style.display="block":t.style.display="none";""===a.value?n.style.display="block":n.style.display="none";return""!==c.value&&""!==a.value})()&&function(e){console.log(e)}({type:"SIGNIN_SUCCESS",state:{email:c.value,password:a.value}})},className:"auth-form",children:[Object(x.jsx)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(x.jsx)(j.a.Label,{children:Object(x.jsx)("h3",{children:"Sign In"})})}),Object(x.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(j.a.Label,{children:"Email address"}),Object(x.jsx)(j.a.Control,{className:"sn-input",type:"email",placeholder:"Enter email"}),Object(x.jsx)(j.a.Text,{className:"text-muted mt-2",children:Object(x.jsxs)("small",{className:"error mb-0",id:"e-error",children:["Fill up your email ",Object(x.jsx)("i",{className:"fas fa-exclamation-circle"})]})})]}),Object(x.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(j.a.Label,{children:"Password"}),Object(x.jsx)(j.a.Control,{className:"sn-input",type:"password",autoComplete:"on",placeholder:"Password"}),Object(x.jsx)(j.a.Text,{className:"text-muted mt-2",children:Object(x.jsxs)("small",{className:"error mb-0",id:"p-error",children:["Fill up your password ",Object(x.jsx)("i",{className:"fas fa-exclamation-circle"})]})})]}),Object(x.jsx)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(x.jsx)(j.a.Text,{className:"text-muted",children:Object(x.jsx)(o.b,{to:"/Sign Up",children:"Forgot password"})})}),Object(x.jsx)(d.a,{className:"sn-btn",variant:"primary",type:"submit",children:"Submit"}),Object(x.jsx)(j.a.Group,{className:"mb-3 mt-3",controlId:"formBasicPassword",children:Object(x.jsxs)(j.a.Text,{className:"text-white",children:["Don't have an account? ",Object(x.jsx)(o.b,{to:"/SignUp",children:"Sign Up"})]})})]})})})})},N=function(){Object(l.f)();var e=Object(a.useReducer)(b,{}),s=Object(i.a)(e,2);s[0],s[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"sign-mn-cont",children:Object(x.jsx)("div",{className:"sign-child-cont sn-2 p-2",children:Object(x.jsxs)(j.a,{onSubmit:function(e){e.preventDefault();var s=Object(i.a)(e.target.elements,2),c=s[0],a=s[1],t=document.querySelector("#e-error"),n=document.querySelector("#p-error");(function(){""===c.value?t.style.display="block":t.style.display="none";""===a.value?n.style.display="block":n.style.display="none";return""!==c.value&&""!==a.value})()&&function(e,s){console.log(e,"in progress"),u.a.post("http://localhost:8000/auth/signUp",e).then((function(e){return console.log(e,"data"),s({type:O,payload:{type:O,state:e.data.message}})})).catch((function(e){if(console.log(e.response,"error"),e)return{type:"REGISTER_FAIL",payload:"error"}}))}({email:c.value,password:a.value})},className:"auth-form",children:[Object(x.jsx)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(x.jsx)(j.a.Label,{children:Object(x.jsx)("h3",{children:"Sign Up"})})}),Object(x.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(j.a.Label,{children:"Email address"}),Object(x.jsx)(j.a.Control,{className:"sn-input",type:"email",placeholder:"Enter email"}),Object(x.jsx)(j.a.Text,{className:"text-muted mt-2",children:Object(x.jsxs)("small",{className:"error mb-0",id:"e-error",children:["Fill up your email ",Object(x.jsx)("i",{className:"fas fa-exclamation-circle"})]})})]}),Object(x.jsxs)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(j.a.Label,{children:"Password"}),Object(x.jsx)(j.a.Control,{className:"sn-input",type:"password",placeholder:"Password"}),Object(x.jsx)(j.a.Text,{className:"text-muted mt-2",children:Object(x.jsxs)("small",{className:"error mb-0",id:"p-error",children:["Fill up your password ",Object(x.jsx)("i",{className:"fas fa-exclamation-circle"})]})})]}),Object(x.jsx)(j.a.Group,{className:"mb-3",controlId:"formBasicPassword"}),Object(x.jsx)(d.a,{className:"sn-btn",variant:"primary",type:"submit",children:"Submit"}),Object(x.jsx)(j.a.Group,{className:"mb-3 mt-3",controlId:"formBasicPassword",children:Object(x.jsxs)(j.a.Text,{className:"text-white",children:["Have have an account? ",Object(x.jsx)(o.b,{to:"/SignIn",children:"Sign In"})]})})]})})})})},v=function(){var e=localStorage.getItem("payload");return e?JSON.parse(e):void 0},f=c.p+"static/media/miracle.5b737656.png",g=c.p+"static/media/logo.0ca0cc78.png",S=c.p+"static/media/profile_image.9f133616.png",y=c.p+"static/media/sunset.dfff6659.png",_=function(e){var s=e.setThirdCol;return Object(x.jsxs)("div",{className:"c-col-3-nth-child",children:[Object(x.jsx)("span",{className:"user_close",onClick:function(){return s(!1)},children:"x"}),Object(x.jsx)("div",{className:"_gue_prof_img",style:{backgroundImage:"url(".concat(S,")")}}),Object(x.jsx)("h2",{children:"Aime Sanders"}),Object(x.jsx)("p",{children:"She's Here"}),Object(x.jsx)("button",{className:"user_btn",children:"Send a friend request"}),Object(x.jsxs)("div",{className:"_gue_description",children:[Object(x.jsx)("h4",{children:"Username"}),Object(x.jsx)("p",{children:"@Aimedars"}),Object(x.jsx)("h4",{children:"Location"}),Object(x.jsx)("p",{children:"Manchester, England"}),Object(x.jsx)("h4",{children:"Media"}),Object(x.jsx)("div",{className:"_gue_media_frame",children:Object(x.jsx)("div",{className:"_gue_media",style:{backgroundImage:"url(".concat(y,")")}})})]})]})},C=(c.p,c.p,function(e){var s=e.setSecondCol;return Object(x.jsxs)("div",{className:"users_res_container user-nth-container",children:[Object(x.jsx)("h4",{className:"title",children:"Messages"}),Object(x.jsxs)("div",{className:"chat-box",onClick:function(){return s(!0)},children:[Object(x.jsx)("div",{className:"chat-img"}),Object(x.jsxs)("div",{className:"chat-description",children:[Object(x.jsx)("h4",{children:"Paul Banters"}),Object(x.jsx)("p",{children:"How are you? What is up with you?"}),Object(x.jsx)("span",{children:"12:43AM"})]}),Object(x.jsx)("div",{className:"no-of-messages",children:"5"})]})]})}),I=c(39),w=c.n(I),k=c(40),F=function(){var e=Object(a.useState)(""),s=Object(i.a)(e,2),c=s[0],t=s[1],n=Object(a.useState)([]),r=Object(i.a)(n,2),l=r[0],o=r[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"col2-header col2-top-header",children:[Object(x.jsxs)("div",{className:"guest-case",children:[Object(x.jsx)("div",{className:"guest-img",style:{backgroundImage:"url(".concat(S,")")}}),Object(x.jsxs)("div",{className:"guest-description",children:[Object(x.jsx)("h4",{children:"Aime Sanders"}),Object(x.jsx)("p",{children:"She's Here"})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("i",{className:"fas fa-video"})})]}),Object(x.jsx)("div",{className:"_cht_showroom",children:l.map((function(e,s){return Object(x.jsx)("div",{className:"_mi_row",children:Object(x.jsxs)("div",{className:"_mi_cht",children:[e.message,Object(x.jsx)("span",{className:"_mi_time",children:e.time})]},s)})}))}),Object(x.jsx)("div",{className:"col2-header messageContainer",children:Object(x.jsxs)("div",{className:"mi-type",children:[Object(x.jsx)(k.a,{className:"autoResize",onChange:function(e){t(e.target.value,"value"),console.log(c,"user")},placeholder:"Type a messsage",minRows:2}),Object(x.jsx)("button",{onClick:function(){return o([].concat(Object(m.a)(l),[{message:c,time:w()().format("LT")}])),void console.log(l,"output")},children:Object(x.jsx)("i",{className:"fas fa-caret-right"})})]})})]})},T=function(e){var s=e.setThirdCol;return Object(x.jsxs)("div",{className:"users-container",children:[Object(x.jsx)("div",{className:"search-case width-100",children:Object(x.jsxs)("div",{className:"mi-search",children:[Object(x.jsx)("input",{type:"text",placeholder:"Find Users"}),Object(x.jsx)("button",{children:Object(x.jsx)("i",{className:"fas fa-search"})})]})}),Object(x.jsx)("div",{className:"users_res_container",children:Object(x.jsxs)("div",{className:"user",onClick:function(){return s(!0)},children:[Object(x.jsx)("div",{className:"users_img_cont",children:Object(x.jsx)("div",{className:"user_img",style:{backgroundImage:"url(".concat(S,")")}})}),Object(x.jsxs)("div",{className:"users_description",children:[Object(x.jsx)("h4",{children:"Aimie Sanders"}),Object(x.jsx)("p",{children:"I am cool and Awesome"})]})]})})]})},E=function(e){var s=e.setThirdCol;return Object(x.jsxs)("div",{className:"users_res_container user-nth-container",children:[Object(x.jsx)("h4",{className:"title",children:"Friends"}),Object(x.jsxs)("div",{className:"user frnds",children:[Object(x.jsx)("div",{className:"users_img_cont",children:Object(x.jsx)("div",{className:"user_img",style:{backgroundImage:"url(".concat(S,")")}})}),Object(x.jsxs)("div",{className:"users_description",onClick:function(){return s(!0)},children:[Object(x.jsx)("h4",{children:"Aimie Sanders"}),Object(x.jsx)("p",{children:"I am cool and Awesome."})]})]})]})},G=function(){Object(l.f)();var e=Object(a.useState)({}),s=Object(i.a)(e,2),c=(s[0],s[1]),t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],j=Object(a.useState)(!1),d=Object(i.a)(j,2),m=(d[0],d[1]),b=Object(a.useState)(!1),h=Object(i.a)(b,2),u=h[0],O=h[1];Object(a.useEffect)((function(){void 0!==v()&&c({email:v().email})}),[c]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"chat-container",children:[Object(x.jsxs)("div",{className:"c-col-1",children:[Object(x.jsxs)("div",{className:"c-col-nth-1",children:[Object(x.jsxs)("div",{className:"col-nth-option",children:[Object(x.jsx)("div",{className:"logo-img",onClick:function(){return m(!1)},children:Object(x.jsx)("img",{src:g,alt:"logo"})}),Object(x.jsx)("div",{className:"chat-prof-img",onClick:function(){return O(!0)},children:Object(x.jsx)("img",{src:f,alt:"prof image"})}),Object(x.jsx)("div",{className:"chat-nav",children:Object(x.jsxs)("div",{className:"chat-nav-opt",onClick:function(){return o(!1)},children:[Object(x.jsx)("i",{className:"fas fa-user-friends"}),Object(x.jsx)("p",{children:"Friends"})]})}),Object(x.jsx)("div",{className:"chat-nav",children:Object(x.jsxs)("div",{className:"chat-nav-opt",onClick:function(){return o(!0)},children:[Object(x.jsx)("i",{className:"fas fa-envelope"}),Object(x.jsx)("p",{children:"Messages"})]})})]}),Object(x.jsx)("div",{className:"chat-nav power_off",onClick:function(){return""},children:Object(x.jsxs)("div",{className:"chat-nav-opt",onClick:function(){return o(!0)},children:[Object(x.jsx)("i",{className:"fas fa-power-off"}),Object(x.jsx)("p",{children:"Log Out"})]})})]}),Object(x.jsxs)("div",{className:"c-col-nth-2",children:[Object(x.jsx)("div",{className:"search-case",children:Object(x.jsxs)("div",{className:"mi-search",children:[Object(x.jsx)("input",{type:"text",placeholder:"Search"}),Object(x.jsx)("button",{children:Object(x.jsx)("i",{className:"fas fa-search"})})]})}),Object(x.jsx)("div",{className:"chat-output",children:!0===r?Object(x.jsx)(C,{setSecondCol:m}):Object(x.jsx)(E,{setThirdCol:O})})]})]}),Object(x.jsx)("div",{className:"c-col-2",children:Object(x.jsx)(F,{})}),Object(x.jsx)("div",{className:"c-col-3",children:!0===u?Object(x.jsx)(_,{setThirdCol:O}):Object(x.jsx)(T,{setThirdCol:O})})]})})},P=function(){return Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/signIn",component:p}),Object(x.jsx)(l.a,{path:"/signUp",component:N}),Object(x.jsx)(l.a,{path:"/",component:G})]})},U=(c(72),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,n=s.getLCP,r=s.getTTFB;c(e),a(e),t(e),n(e),r(e)}))});r.a.render(Object(x.jsx)(o.a,{children:Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(P,{})})}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.c738f548.chunk.js.map