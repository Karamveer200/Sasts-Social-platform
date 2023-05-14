(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),s=a.n(c),o=a(2),i=a(26),l=a(4),u=a(7),d=a(16),j=a.n(d),b=a(8),p=a(17),m="SET_ALERT",O="REMOVE_ALERT",h="REGISTER_SUCCESS",f="REGISTER_FAIL",x="USER_LOADED",g="AUTH_ERROR",v="LOGIN_SUCCESS",y="LOGIN_FAIL",N="LOGOUT",E="GET_PROFILE",S="GET_PROFILES",w="PROFILE_ERROR",C="CLEAR_PROFILE",A=a(118),R=function(e,t){return function(a){var n=Object(A.a)();a({type:m,payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return a({type:O,payload:n})}),5e4)}},T=a(47),k=a.n(T).a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});k.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var P=k,_=function(e){e?(P.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete P.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},I=function(){return function(){var e=Object(p.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&_(localStorage.token),e.prev=1,e.next=4,P.get("/auth");case 4:a=e.sent,t({type:x,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:g});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},D=a(0),L=function(e){var t=e.auth,a=t.isAuthenticated,r=t.loading,c=e.logout,s=Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsxs)(l.b,{to:"/profiles",children:[Object(D.jsx)("i",{className:"fas fa-users"})," ",Object(D.jsx)("span",{className:"",children:" Clients "})]})}),Object(D.jsx)("li",{children:Object(D.jsxs)(l.b,{to:"/dashboard",children:[Object(D.jsx)("i",{className:"fas fa-user-cog"}),Object(D.jsx)("span",{className:"hide-sm",children:" Dashboard "})]})}),Object(D.jsx)("li",{children:Object(D.jsxs)("a",{onClick:c,href:"#!",children:[Object(D.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(D.jsx)("span",{className:"hide-sm",children:" Logout "})]})})]}),o=Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(l.b,{to:"/register",children:"Register"})}),Object(D.jsx)("li",{children:Object(D.jsx)(l.b,{to:"/login",children:"Login"})})]});return Object(D.jsxs)("nav",{className:"navbar navbar-gradient",children:[Object(D.jsx)("h1",{children:Object(D.jsxs)(l.b,{to:"/",children:[Object(D.jsx)("i",{className:"fas fa-code"})," Karam Productions"]})}),!r&&Object(D.jsx)(n.Fragment,{children:a?s:o})]})};L.prototypes={logout:j.a.func.isRequired,auth:j.a.func.isRequired};var F=Object(u.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e({type:N}),e({type:C})}}})(L),U=a(6),G=a.p+"static/media/invoice.da141a8d.png",q=function(e){return e.isAuthenticated?Object(D.jsx)(U.a,{to:"/dashboard"}):Object(D.jsx)("section",{className:"",children:Object(D.jsxs)("div",{className:"dark-overlay",children:[Object(D.jsxs)("div",{className:"landing-inner",children:[Object(D.jsx)("h1",{className:"x-large",children:"Karam Productions"}),Object(D.jsx)("p",{className:"lead",children:"Create and manage invoices"}),Object(D.jsxs)("div",{className:"buttons",children:[Object(D.jsx)(l.b,{to:"/register",className:"btn btn-gradient round-btn-only margin2",children:"Sign Up"}),Object(D.jsx)(l.b,{to:"/login",className:"btn btn-light round-btn-only margin2",children:"Login"})]})]}),Object(D.jsx)("img",{src:G,alt:"",className:"invoiceImage"})]})})};q.protoTypes={isAuthenticated:j.a.bool};var M=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))(q),B=a(5),V=a(18),W=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(p.a)(Object(b.a)().mark((function a(n){var r,c,s;return Object(b.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={email:e,password:t},a.prev=1,a.next=4,P.post("/auth",r);case 4:c=a.sent,n({type:v,payload:c.data}),n(I()),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(1),(s=a.t0.response.data.errors)&&s.forEach((function(e){return n(R(e.msg,"danger"))})),n({type:y});case 14:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,r=Object(n.useState)({email:"",password:""}),c=Object(V.a)(r,2),s=c[0],i=c[1],u=s.email,d=s.password,j=function(e){return i(Object(o.a)(Object(o.a)({},s),{},Object(B.a)({},e.target.name,e.target.value)))};return a?Object(D.jsx)(U.a,{to:"/dashboard"}):Object(D.jsx)("div",{className:"fullHeightRoots",children:Object(D.jsxs)("div",{className:"blurred-box",children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Sign In"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Sign in your Account"]}),Object(D.jsxs)("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t(u,d)}(e)},children:[Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:u,onChange:function(e){return j(e)},className:"loginRegisterForm do"})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"password",placeholder:"Password",className:"loginRegisterForm do",name:"password",minLength:"6",value:d,onChange:function(e){return j(e)}})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary round-btn-only btn-blue-gradient",value:"Login"})]}),Object(D.jsxs)("p",{className:"my-1",children:["Don't have an account? ",Object(D.jsx)(l.b,{to:"/register",children:"Sign Up"})]})]})})})),H=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:R,register:function(e){return function(){var t=Object(p.a)(Object(b.a)().mark((function t(a){var n,r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.post("/users",e);case 3:n=t.sent,a({type:h,payload:n.data}),a(I()),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(r=t.t0.response.data.errors)&&r.forEach((function(e){return a(R(e.msg,"danger"))})),a({type:f});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)({name:"",email:"",password:"",password2:""}),a=Object(V.a)(t,2),r=a[0],c=a[1],s=r.name,i=r.email,u=r.password,d=r.password2,j=function(e){return c(Object(o.a)(Object(o.a)({},r),{},Object(B.a)({},e.target.name,e.target.value)))},m=function(){var t=Object(p.a)(Object(b.a)().mark((function t(a){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),u!==d?e.setAlert("Password Don't match","danger"):e.register({name:s,email:i,password:u});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.isAuthenticated?Object(D.jsx)(U.a,{to:"/dashboard"}):Object(D.jsxs)("div",{className:"fullHeightRoots",children:[Object(D.jsx)("h1",{className:"large text-primary ",children:"Sign Up"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(D.jsxs)("form",{className:"form",onSubmit:function(e){return m(e)},children:[Object(D.jsx)("div",{className:"form-group form-outline",children:Object(D.jsx)("input",{type:"text",className:"form-control loginRegisterForm do",placeholder:"Name",name:"name",value:s,onChange:function(e){return j(e)}})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"email",className:"loginRegisterForm do",placeholder:"Email Address",name:"email",value:i,onChange:function(e){return j(e)}})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"loginRegisterForm do",value:u,onChange:function(e){return j(e)}})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"loginRegisterForm do my-1",value:d,onChange:function(e){return j(e)}})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary round-btn-only btn-blue-gradient",value:"Register"})]}),Object(D.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(D.jsx)(l.b,{to:"/login",children:"Sign In"})]})]})})),K=(a(89),Object(u.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(D.jsx)("div",{className:"alert round-btn-only alert-".concat(e.alertType),children:e.msg},e.key)}))}))),Y=a(20),z=a.n(Y),J=function(){return function(){var e=Object(p.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/profile/me");case 3:a=e.sent,t({type:E,payload:a.data}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response.data.msg,t({type:w,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};var Q={company:"",companyInfo:"",streetAddress:"",cityDistrictStateAndCountry:"",contactNumber:"",email:"",gstinNumber:""},X=Object(u.b)((function(e){return{profile:e.profile}}),{createProfile:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var n=Object(p.a)(Object(b.a)().mark((function n(r){var c,s;return Object(b.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.post("/profile",e);case 3:c=n.sent,r({type:E,payload:c.data}),r(R(a?"Profile Updated":"Profile Created","success")),t.push("/dashboard"),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),(s=n.t0.response.data.errors)&&s.forEach((function(e){return r(R(e.msg,"danger"))})),r({type:w,payload:{msg:n.t0.response.statusText,status:n.t0.response.status}});case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},getCurrentProfile:J})((function(e){var t=e.profile,a=t.profile,r=t.loading,c=e.createProfile,s=e.getCurrentProfile,i=e.history,u=Object(n.useState)(Q),d=Object(V.a)(u,2),j=d[0],b=d[1];Object(n.useEffect)((function(){if(a||s(),!r&&a){var e=Object(o.a)({},Q);for(var t in a)t in e&&(e[t]=a[t]);b(e)}}),[r,s,a]);var p=j.company,m=j.companyInfo,O=j.streetAddress,h=j.cityDistrictStateAndCountry,f=j.contactNumber,x=j.email,g=j.gstinNumber,v=function(e){return b(Object(o.a)(Object(o.a)({},j),{},Object(B.a)({},e.target.name,e.target.value)))};return Object(D.jsxs)(z.a,{className:"scrollBarsRoot",children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Edit Your Business Details"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fas fa-user"})," ","  ","Add some changes to your profile"]}),Object(D.jsx)("small",{children:"* = required field"}),Object(D.jsxs)("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),c(j,i,!!a)}(e)},children:[Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:" Company Name",name:"company",value:p,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:"Company Description",name:"companyInfo",value:m,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:"Street Address",name:"streetAddress",value:O,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:"City, District, State and Country Address",name:"cityDistrictStateAndCountry",value:h,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:"Contact Number",name:"contactNumber",value:f,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:x,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("div",{className:"form-group",children:Object(D.jsx)("input",{type:"text",placeholder:"GSTIN Number",name:"gstinNumber",value:g,className:"round-btn-only",onChange:v,required:!0})}),Object(D.jsx)("input",{type:"submit",className:"btn btn-primary my-1 btn-blue-gradient round-btn-only",onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)}}),Object(D.jsx)(l.b,{className:"btn btn-primary round-btn-only btn-blue-gradient ml-20",to:"/dashboard",children:"Go Back"})]})]})})),Z=a.p+"static/media/bottomTransitionWave.1831ce45.svg",$=a(21),ee=a(50),te=a(52),ae=a(14),ne=[];var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return[].concat(Object(ae.a)(e),[t.payload]);case O:return e.filter((function(e){return e.id!==t.payload}));default:return e}},ce={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:case v:return localStorage.setItem("token",n.token),Object(o.a)(Object(o.a)(Object(o.a)({},e),n),{},{isAuthenticated:!0,loading:!1});case f:case y:case N:case g:case"ACCOUNT_DELETED":return localStorage.removeItem("token"),Object(o.a)(Object(o.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});case x:return Object(o.a)(Object(o.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});default:return e}},oe={profile:null,profiles:[],loading:!0,error:{},repos:[]};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E:case"UPDATE_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:n,loading:!1});case S:return Object(o.a)(Object(o.a)({},e),{},{profiles:n,loading:!1});case w:return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:n});case C:return Object(o.a)(Object(o.a)({},e),{},{profile:null,repos:[],loading:!1});case"GET_REPOS":return Object(o.a)(Object(o.a)({},e),{},{repos:n,loading:!1});default:return e}},le={posts:[],post:null,loading:!0,error:{}};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_POSTS":return Object(o.a)(Object(o.a)({},e),{},{posts:n,loading:!1});case"GET_POST":return Object(o.a)(Object(o.a)({},e),{},{post:n,loading:!1});case"ADD_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:[n].concat(Object(ae.a)(e.posts)),loading:!1});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==n})),loading:!1});case"POST_ERROR":return Object(o.a)(Object(o.a)({},e),{},{error:n,loading:!1});case"UPDATE_LIKES":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.map((function(e){return e._id===n.id?Object(o.a)(Object(o.a)({},e),{},{likes:n.likes}):e})),loading:!1});case"ADD_COMMENT":return Object(o.a)(Object(o.a)({},e),{},{post:Object(o.a)(Object(o.a)({},e.post),{},{comments:n}),loading:!1});case"REMOVE_COMMENT":return Object(o.a)(Object(o.a)({},e),{},{post:Object(o.a)(Object(o.a)({},e.post),{},{comments:e.post.comments.filter((function(e){return e._id!==n}))}),loading:!1});default:return e}},de=Object($.combineReducers)({alert:re,auth:se,profile:ie,post:ue}),je=[te.a],be=Object($.createStore)(de,{},Object(ee.composeWithDevTools)($.applyMiddleware.apply(void 0,je))),pe=a(117),me=function(){return Object(D.jsx)("div",{className:"spinnerParent",children:Object(D.jsx)(pe.a,{className:"spinnerSize"})})},Oe=function(){return Object(D.jsx)("div",{className:"dashboard-btns btn-blue-gradient-div mt-15",children:Object(D.jsxs)(l.b,{to:"/edit-profile",className:"btnblock btn-blue-gradient round-btn margin-adjust ",children:[Object(D.jsx)("i",{className:"fas fa-user-circle text-primary"})," Edit Profile"]})})},he=Object(u.b)((function(e){return{auth:e.auth,profile:e.profile}}),{getCurrentProfile:J})((function(e){var t=e.getCurrentProfile,a=e.auth.user,r=e.profile,c=r.profile,s=r.loading;return Object(n.useEffect)((function(){t()}),[t]),s&&null===c?Object(D.jsx)(me,{}):Object(D.jsx)(z.a,{className:"scrollBarsRoot",children:Object(D.jsx)("section",{className:"",children:Object(D.jsxs)(n.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary my-marginup-only",children:"Dashboard"}),Object(D.jsx)("div",{className:"lead",children:Object(D.jsx)("i",{className:"fas fa-user",children:Object(D.jsxs)("span",{className:"ml-10",children:[" ","Welcome",a&&a.name]})})}),Object(D.jsxs)("p",{className:"my-3",children:["Your email is ",a&&a.email]}),null!==c?Object(D.jsxs)(n.Fragment,{children:[Object(D.jsx)("div",{className:"",children:"as"}),Object(D.jsx)(Oe,{})]}):Object(D.jsxs)(n.Fragment,{children:[Object(D.jsx)("p",{children:"Please Create your Profile"}),Object(D.jsx)(l.b,{to:"/create-profile",className:"btn btn-gradient round-btn-only my-1",children:"Create Profile"})]})]})})})})),fe=["component","auth"],xe=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,r=a.loading,c=Object(i.a)(e,fe);return Object(D.jsx)(U.b,Object(o.a)(Object(o.a)({},c),{},{render:function(e){return n||r?Object(D.jsx)(t,Object(o.a)({},e)):Object(D.jsx)(U.a,{to:"/login"})}}))})),ge=function(e){var t=e.profile,a=t.user,n=a._id,r=a.name,c=(a.avatar,t.company);return Object(D.jsx)("div",{className:"profile bg-light2",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:r}),Object(D.jsx)("p",{children:c&&Object(D.jsxs)("span",{children:[" at ",c]})}),Object(D.jsx)(l.b,{to:"/profile/".concat(n),className:"btn btn-blue-contrast",children:"View Profile"})]})})},ve=Object(u.b)((function(e){return{profile:e.profile}}),{getProfiles:function(){return function(){var e=Object(p.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:C}),e.prev=1,e.next=4,P.get("/profile");case 4:a=e.sent,t({type:S,payload:a.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response.data.msg,t({type:w,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getProfiles,a=e.profile,r=a.profiles,c=a.loading;return Object(n.useEffect)((function(){t()}),[t]),Object(D.jsx)(n.Fragment,{children:c?Object(D.jsx)(me,{}):Object(D.jsxs)(n.Fragment,{children:[Object(D.jsx)("h1",{className:"large text-primary",children:"Profiles near you"}),Object(D.jsxs)("p",{className:"lead",children:[Object(D.jsx)("i",{className:"fab fa-connectdevelop"})," Browse and connect with people"]}),Object(D.jsx)("div",{className:"profiles",children:r.length>0?r.map((function(e){return Object(D.jsx)("div",{className:"","data-aos":"fade-right",children:Object(D.jsx)(ge,{profile:e},e._id)})})):Object(D.jsx)("h4",{children:"No profiles found..."})})]})})})),ye=a(53),Ne=a.n(ye),Ee=(a(107),["style"]),Se=function(){localStorage.token&&_(localStorage.token),Object(n.useEffect)((function(){be.dispatch(I()),Ne.a.init({duration:1e3,once:!0})}),[]);return Object(D.jsx)(u.a,{store:be,children:Object(D.jsxs)(l.a,{children:[Object(D.jsx)("div",{class:"bg"}),Object(D.jsxs)(z.a,{style:{height:"100vh",width:"100vw"},renderThumbVertical:function(e){var t=e.style,a=Object(i.a)(e,Ee);return Object(D.jsx)("div",Object(o.a)(Object(o.a)({},a),{},{style:Object(o.a)(Object(o.a)({},t),{},{width:"20px",backgroundColor:"#00000070",zIndex:1501})}))},children:[Object(D.jsx)(K,{}),Object(D.jsx)(F,{}),Object(D.jsx)(U.b,{exact:!0,path:"/",component:M}),Object(D.jsx)("section",{className:"container landing",children:Object(D.jsxs)(U.d,{children:[Object(D.jsx)(xe,{exact:!0,path:"/dashboard",component:he}),Object(D.jsx)(U.b,{exact:!0,path:"/login",component:W}),Object(D.jsx)(U.b,{exact:!0,path:"/register",component:H}),Object(D.jsx)(xe,{exact:!0,path:"/profiles",component:ve}),Object(D.jsx)(xe,{exact:!0,path:"/create-profile",component:X}),Object(D.jsx)(xe,{exact:!0,path:"/edit-profile",component:X})]})}),Object(D.jsx)("img",{src:Z,className:"bottomTransitionWave",alt:""})]})]})})};s.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(Se,{})}),document.getElementById("root"))},89:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.23157548.chunk.js.map