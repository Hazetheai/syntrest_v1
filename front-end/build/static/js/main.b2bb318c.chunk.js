(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7ZndTcMwFEaPmKAjeISO4BG6Qb0BbFBvQDdoN0BMkBHKBnSDsgH4ikblxzZURJG/kCN9L+lLTq5vfOvAzP/Gp+wQZpnSpbye4xFjkXLPRaBPhxBWhWe+S/RZIMA65URZwhJpnA11AatSoHFWlAWsQhGBJeUo98Th/LsEO/ISe0Qa23DkJR4QI5BvasdI3DAMy8y1x5QjIzGUSK4HnhiRoUSOmWtrBPHkm11SpjSS3CFGoLyrbxBjj/iM1WNvLxtHakOjbZIOAUxmT13G+kmmdyJ1GanecbwvpUnIGIH6316PENY7W/IiHYJEhA8jvpJ7RXv+wFBD47W8MAFuyS8thxAliQMiWCPX9pNA45iAbXi1U8ctDfMbgf6oqDns5gOfPx/U0mQl7OZ/evofJ98VjXJNFZrewSP1CpiAQwBPXiAiOEOduDx9jzCOmZnp8QbGIfKA/H1OQAAAAABJRU5ErkJggg=="},46:function(e,t,a){e.exports=a(78)},51:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(24),s=a.n(o),i=(a(51),a(22)),c=a.n(i),l=a(8),u=a(2),p=a(20),d=a(12),b=a.n(d),h=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},m=function(e){return{type:"SET_CURRENT_USER",payload:e}},O=function(){return function(e){localStorage.removeItem("synJwtToken"),console.log("Logout"),h(!1),e(m({}))}},j=(a(75),a(3)),g=a(4),f=a(6),x=a(5),v=a(7),w=a(0),y=function(e){return{type:"SET_CURRENT_USER",payload:e}},A=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(f.a)(this,Object(x.a)(t).call(this))).onSubmit=function(t){t.preventDefault(),e.props.loginOAuth(e.props.accessToken)},e.state={loading:!0},e}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loginOAuth(this.props.accessToken),this.props.auth.isAuthenticated&&this.props.history&&this.props.history.push("/profile"),console.log("this.props.history",this.props.history)}},{key:"componentWillReceiveProps",value:function(e){console.log("nextProps",e),console.log("this.props",this.props),e.auth.isAuthenticated&&this.props.history.push("/profile"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){return Object(w.a)("div",{css:{display:"flex",justifyContent:"center",alignItems:"center"}},Object(w.a)("h2",null,"Loading"),Object(w.a)("button",{onClick:this.onSubmit},"Continue"))}}]),t}(n.Component),k=Object(p.g)(Object(l.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginOAuth:function(e){return function(t){b.a.post("/oauthjwt/token",{token:e}).then(function(e){var a=e.data.token;localStorage.setItem("synJwtToken",a),h(a);var n=c()(a);t(y(n))}).catch(function(e){console.log(e),t({type:"GET_ERRORS",payload:e.response.data})})}}})(A)),C=a(17),S=a(21),E=a.n(S),R=function(e){return Object(w.a)("button",Object.assign({css:{backgroundColor:"black",color:"#008F11",cursor:"pointer",padding:"0.4rem 0.6rem 0.4rem 0.6rem",borderRadius:"0.5rem",border:"transparent",margin:"0.4rem",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all 0.2s",position:"relative",fontSize:"1.6rem","&:hover":{boxShadow:"0 1px 1px rgba(17, 17, 17, 0.2)","&::after":{transform:"scaleX(1.4)",opacity:0}},"&:active":{transform:"scale(0.97)"}}},e),e.text)},N=function(e){return Object(w.a)(R,Object.assign({text:"Lair",css:{color:"#333",backgroundColor:"#f5f5f5",borderColor:"#333",borderWidth:".4rem",width:"8rem",height:"4rem"}},e),Object(w.a)("i",{class:"fab fa-github"}))},F=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(f.a)(this,Object(x.a)(t).call(this))).onChange=function(t){e.setState(Object(C.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history&&this.props.history.push("/profile")}},{key:"componentWillReceiveProps",value:function(e){(e.auth.isAuthenticated||this.props.auth.isAuthenticated)&&this.props.history.push("/profile"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(w.a)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(w.a)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(w.a)(u.b,{to:"/home"},Object(w.a)(R,{text:"Back to home"})),Object(w.a)("p",null,"Don't have an account? "),Object(w.a)(u.b,{to:"/register"},Object(w.a)(R,{text:"Register"}," "))),Object(w.a)("h2",null,"Login"),Object(w.a)("form",{noValidate:!0,onSubmit:this.onSubmit},Object(w.a)("label",{htmlFor:"email"},"Email"),Object(w.a)("input",{onChange:this.onChange,value:this.state.email,error:e.email,type:"email",name:"login",inputMode:"email",placeholder:"email address",id:"email",className:E()("",{invalid:e.email||e.emailnotfound}),css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)("label",{htmlFor:"password"},"Password"),Object(w.a)("input",{onChange:this.onChange,value:this.state.password,error:e.password,type:"password",name:"login",id:"password",className:E()("",{invalid:e.password||e.passwordincorrect}),css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)(R,{type:"submit",text:"Login"}),Object(w.a)(u.b,{to:"/password/recover"},Object(w.a)("p",null,"Forgot your password? "))),Object(w.a)("div",null,Object(w.a)("a",{href:"https://github.com/login/oauth/authorize?client_id=".concat("b6c9aa608f1b3dfaac39")},Object(w.a)(N,{text:"Github"},Object(w.a)("i",{class:"fab fa-github"})," "))))}}]),t}(n.Component),I=Object(l.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){b.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("synJwtToken",a),h(a);var n=c()(a);t(m(n))}).catch(function(e){console.log(e),t({type:"GET_ERRORS",payload:e.response.data})})}}})(F),U=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(f.a)(this,Object(x.a)(t).call(this,e))).onChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,password:a.state.password,password2:a.state.password2};a.props.registerUser(t,a.props.history)},a.state={name:"",email:"",password:"",password2:"",errors:{}},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/home")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(w.a)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(w.a)("div",null,Object(w.a)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(w.a)(u.b,{to:"/home"},Object(w.a)(R,{text:"Back to home"})),Object(w.a)("p",null,"Already have an account? "),Object(w.a)(u.b,{to:"/login"},Object(w.a)(R,{text:"Login"}," "))),Object(w.a)("h2",null,"Sign up!"),Object(w.a)("h3",null,"Delicious data... Nom nom nom.")),Object(w.a)("form",{noValidate:!0,onSubmit:this.onSubmit},Object(w.a)("label",{htmlFor:"name"},"Name"),Object(w.a)("span",{className:"red-text"},e.name),Object(w.a)("input",{onChange:this.onChange,value:this.state.name,error:e.name,type:"text",name:"signup",placeholder:"your name",id:"name",className:E()("",{invalid:e.name}),css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)("label",{htmlFor:"email"},"Email"),Object(w.a)("span",{className:"red-text"},e.email),Object(w.a)("input",{onChange:this.onChange,value:this.state.email,error:e.email,type:"email",name:"signup",inputMode:"email",placeholder:"email address",id:"email",className:E()("",{invalid:e.email}),css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)("label",{htmlFor:"password"},"Password"),Object(w.a)("span",{className:"red-text"},e.password),Object(w.a)("input",{onChange:this.onChange,value:this.state.password,error:e.password,type:"password",name:"signup",id:"password",className:E()("",{invalid:e.password}),css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)("label",{htmlFor:"password2"},"Confirm password"),Object(w.a)("span",{className:"red-text"},e.password2),Object(w.a)("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,type:"password",name:"signup",id:"password2",className:E()("",{invalid:e.password2}),css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)(R,{type:"submit",text:"Sign up"})))}}]),t}(n.Component),T=Object(l.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){b.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(p.g)(U)),D=function(e){return Object(w.a)(R,{text:"More",css:{padding:"0.8rem 0.6rem 0.8rem 0.6rem",border:"solid 1px #333"}}," ")},L=function(e){return Object(w.a)(R,{text:"Save",css:{border:"solid 1px #333"}}," ")},B=function(e){return Object(w.a)(R,{text:"Share",css:{backgroundColor:"#d0d5db"}})},P=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(f.a)(this,Object(x.a)(t).call(this,e))).state={focused:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return Object(w.a)("div",Object.assign({css:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"32rem",width:"32rem",height:"56.8rem",border:"solid #777",borderRadius:"2rem",backgroundColor:"azure"}},this.props))}}]),t}(n.Component),W=function(e){return Object(w.a)(R,{text:"FS",css:{backgroundColor:"transparent",position:"absolute"}})},J=function(e){return Object(w.a)("div",{css:{display:"flex"}},Object(w.a)("img",Object.assign({src:e.src,alt:e.alt,css:{display:"block",width:"30rem",height:"35.4rem",backgroundColor:"#c4c4c4",borderRadius:"2rem"}},e)),Object(w.a)(W,{text:"FS"}))},_=function(e){return Object(w.a)("div",Object.assign({css:{display:"flex",flexDirection:"column",maxWidth:"90%"}},e),Object(w.a)("input",{type:"text",name:"comment",placeholder:"Write a comment",css:{margin:"0.5rem",borderRadius:"0.5rem",border:"transparent",backgroundColor:"#cec8c8",width:"25rem",fontSize:"1.5rem",fontFamily:"inherit",padding:"1rem 2rem",outline:"none",color:"#111"}}),Object(w.a)("p",{css:{margin:"0.5rem",borderRadius:"0.5rem",border:"transparent",backgroundColor:"#cec8c8",width:"25rem",fontSize:"1.5rem",fontFamily:"inherit",padding:"1rem 2rem",outline:"none",color:"#111"}}))},G=a(43),M=a.n(G),Q=function(e){return Object(w.a)("button",Object.assign({css:{backgroundColor:"#c0c0c0",color:"#008F11",cursor:"pointer",padding:"0.4rem 0.6rem 0.4rem 0.6rem",borderRadius:"0.5rem",border:"transparent",margin:"0.4rem",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all 0.2s",position:"relative",fontSize:"1.6rem","&:hover":{boxShadow:"0 .5px 1px rgba(17, 17, 17, 0.2)","&::after":{transform:"scaleX(1.4)",opacity:0}},"&:active":{transform:"scale(0.97)"}}},e),Object(w.a)(u.b,{to:"/home"},Object(w.a)("img",{src:M.a,alt:"Syntrest Logo",css:{width:"30px",height:"30px"}})))},H=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(f.a)(this,Object(x.a)(t).call(this,e))).state={focused:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return Object(w.a)("div",{css:{width:"75%",padding:"6px 15px",borderRadius:"10px",display:"inline-flex",backgroundColor:"#f4f4f4"}},Object(w.a)("input",{type:"text",name:"search",placeholder:"What's your dream machine?",css:{width:"100%",padding:"5px 10px",border:"1px solid #003B00",borderRadius:"10px"}}))}}]),t}(n.Component),z=function(e){return Object(w.a)(R,Object.assign({text:"+",css:{backgroundColor:"black"}},e))},X=function(e){return Object(w.a)(R,Object.assign({text:"Lair",css:{backgroundColor:"black"}},e))},Z=function(e){function t(){return Object(j.a)(this,t),Object(f.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return Object(w.a)("nav",{className:"Nav",css:{display:"inline-flex",flexWrap:"nowrap",padding:"5px",margin:"0 10px",width:"fit-content",justifySelf:"flex-end"}},this.props.auth.isAuthenticated?Object(w.a)(n.Fragment,null,Object(w.a)(z,{text:"+"})," ",Object(w.a)(u.b,{to:"/profile"},Object(w.a)(X,{text:"Lair"}))," "):Object(w.a)(u.b,{to:"/login"},Object(w.a)(R,{text:"Login"})),Object(w.a)(u.b,null))}}]),t}(n.Component),V=Object(l.b)(function(e){return{auth:e.auth}},{logoutUser:O})(Z),Y=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(f.a)(this,Object(x.a)(t).call(this,e))).state={userLoggedIn:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return Object(w.a)("header",{css:{position:"relative",top:"0",left:"0",minHeight:"25px",padding:"5px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}},Object(w.a)(Q,null),Object(w.a)(H,null),Object(w.a)(V,null))}}]),t}(n.Component),K=Object(l.b)(function(e){return{auth:e.auth}},{logoutUser:O})(Y),$=function(){return Object(w.a)("div",null,Object(w.a)("figure",{className:"masonry__brick",css:{flex:"auto",height:"25rem",minWidth:"15rem",margin:"0rem 0.8rem 0.8rem 0",borderRadius:"10px",overflow:"hidden",boxShadow:"$box-shadow","&:nth-child(4n + 1)":{width:"250px"},"&:nth-child(4n + 1):nth-child(4n + 2)":{width:"325px"},"&:nth-child(4n + 1):nth-child(4n + 3)":{width:"180px"},"&:nth-child(4n + 1):nth-child(4n + 4)":{width:"380px"},"&:hover":{opacity:"0.7"}}},Object(w.a)("img",{className:"masonry-image",src:"https://source.unsplash.com/400x300/?synth/",alt:"",css:{objectFit:"cover",width:"100%",height:"100%"}})))},q=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser(),console.log(localStorage.synJwtToken),console.log(a.props)},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return Object(w.a)("div",{css:{backgroundColor:"$color-grey-light-1",display:"flex",justifyContent:"center"}},this.props.auth.isAuthenticated?Object(w.a)(n.Fragment,null,Object(w.a)("b",null,"Hey there,")," ",e.name,Object(w.a)(R,{text:"Logout",onClick:this.onLogoutClick,css:{maxHeight:36}})):Object(w.a)(u.b,{to:"/login"},Object(w.a)(R,{text:"Login"})),Object(w.a)("section",{css:{backgroundColor:"$color-grey-light-1",display:"flex",justifyContent:"center",position:"relative",maxWidth:"80vw",margin:"auto"},className:"masonry-container"},Object(w.a)("div",{className:"masonry",css:{display:"flex",justifyContent:"center",flexFlow:"row wrap",width:"100%"}},Object(w.a)($,null),Object(w.a)($,null),Object(w.a)($,null),Object(w.a)($,null),Object(w.a)($,null))))}}]),t}(n.Component);u.b.defaultProps={to:"/"};var ee=Object(l.b)(function(e){return{auth:e.auth}},{logoutUser:O})(q),te=function(e){function t(){return Object(j.a)(this,t),Object(f.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return Object(w.a)("div",null,Object(w.a)("section",{className:"signupOrLogin",css:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},Object(w.a)(I,null)))}}]),t}(n.Component),ae=function(e){return Object(w.a)("nav",Object.assign({css:{display:"flex",margin:"2rem"}},e))},ne=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",submitted:!1},a.handleChange=function(e){a.setState({email:e.target.value})},a.sendPasswordResetEmail=function(e){e.preventDefault();var t=a.state.email;b.a.post("/reset_password/user/".concat(t)),a.setState({email:"",submitted:!0})},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.submitted;return console.log(this.state.submitted),Object(w.a)("div",null,Object(w.a)("h3",null,"Reset your password"),a?Object(w.a)("div",null,Object(w.a)("p",null,"If that account is in our system, we emailed you a link to reset your password."),Object(w.a)(u.b,{to:"/login"},"Return to sign in")):Object(w.a)("div",{className:"reset-password-form-wrapper"},Object(w.a)("p",null,"It happens to the best of us. Enter your email and we'll send you reset instructions."),Object(w.a)("form",{onSubmit:this.sendPasswordResetEmail},Object(w.a)("input",{onChange:this.handleChange,value:t,placeholder:"Email address",css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)(R,{text:"Submit"},"Send password reset email")),Object(w.a)(u.b,{to:"/login"},Object(w.a)(R,{text:"I remember my password"}))))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).state={password:"",confirmPassword:"",submitted:!1},a.handleChange=function(e){return function(t){a.setState(Object(C.a)({},e,t.target.value))}},a.updatePassword=function(e){e.preventDefault();var t=a.props,n=t.userId,r=t.token,o=a.state.password;b.a.post("/reset_password/receive_new_password/".concat(n,"/").concat(r),{password:o}).then(function(e){return console.log("RESPONSE FROM SERVER TO CLIENT:",e)}).catch(function(e){return console.log("SERVER ERROR TO CLIENT:",e)}),a.setState({submitted:!a.state.submitted})},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){console.log("props",this.props);var e=this.state.submitted;return Object(w.a)("div",null,Object(w.a)("h3",{style:{paddingBottom:"1.25rem"}},"Update your password"),e?Object(w.a)("div",{className:"reset-password-form-sent-wrapper"},Object(w.a)("p",null,"Your password has been saved."),Object(w.a)(u.b,{to:"/login",className:"ghost-btn"},"Sign back in")):Object(w.a)("div",{className:"reset-password-form-wrapper"},Object(w.a)("form",{onSubmit:this.updatePassword,style:{paddingBottom:"1.5rem"}},Object(w.a)("input",{onChange:this.handleChange("password"),value:this.state.password,placeholder:"New password",type:"password",css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)("input",{onChange:this.handleChange("confirmPassword"),value:this.state.confirmPassword,placeholder:"Confirm password",type:"password",css:{width:"200px",padding:"10px",border:"2px solid #008F11",margin:"5px",borderRadius:"5px"}}),Object(w.a)(R,{text:"Update Password",className:"btn-primary password-reset-btn"},"Update password"))))}}]),t}(n.Component),oe=a(44),se=Object(l.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(oe.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))}),ie=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(f.a)(this,Object(x.a)(t).call(this,e))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a.state={loading:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return Object(w.a)("div",null,Object(w.a)("section",{css:{backgroundColor:"$color-grey-light-1",display:"flex",justifyContent:"center",position:"relative",maxWidth:"80vw",margin:"auto"},className:"masonry-container"},this.props.auth.isAuthenticated?Object(w.a)("span",null,Object(w.a)("b",null,"Hey there,")," ",e.name):null,Object(w.a)(R,{text:"Logout",onClick:this.onLogoutClick}),Object(w.a)("div",{className:"masonry",css:{display:"flex",flexFlow:"row wrap",width:"100%"}},Object(w.a)($,null),Object(w.a)($,null),Object(w.a)($,null),Object(w.a)($,null),Object(w.a)($,null))))}}]),t}(n.Component),ce=Object(l.b)(function(e){return{auth:e.auth}},{logoutUser:O})(ie),le=a(18),ue=a(45),pe=a(31),de=a(77),be={isAuthenticated:!1,user:{},loading:!1},he={},me=Object(le.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(pe.a)({},e,{isAuthenticated:!de(t.payload),user:t.payload});case"USER_LOADING":return Object(pe.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),Oe=[ue.a],je=Object(le.e)(me,{},Object(le.d)(le.a.apply(void 0,Oe)));if(localStorage.synJwtToken){var ge=localStorage.synJwtToken;h(ge);var fe=c()(ge);console.log("decoded",fe),je.dispatch(m(fe));var xe=Date.now()/1e3;fe.exp<xe&&(je.dispatch(O()),window.location.href="./login")}var ve=function(){return r.a.createElement(l.a,{store:je},r.a.createElement(u.a,null," ",r.a.createElement("div",{className:"App"},r.a.createElement(K,null),r.a.createElement(p.b,{exact:!0,path:"/",component:te}),r.a.createElement(p.b,{exact:!0,path:"/register",component:T}),r.a.createElement(p.b,{exact:!0,path:"/login",component:I}),r.a.createElement(p.b,{exact:!0,path:"/home",component:ee}),r.a.createElement(p.b,{exact:!0,path:"/password/recover",component:ne}),r.a.createElement(p.b,{path:"/update-password/:userId/:token",render:function(e){var t=e.match;return r.a.createElement(re,{userId:t.params.userId,token:t.params.token})}}),r.a.createElement(p.b,{path:"/auth/github/callback/:accessToken",render:function(e){var t=e.match;return r.a.createElement(k,{accessToken:t.params.accessToken})}}),r.a.createElement(p.d,null,r.a.createElement(se,{exact:!0,path:"/profile",component:ce})),r.a.createElement(P,null,r.a.createElement(ae,null,r.a.createElement(D,{text:"More"}),r.a.createElement(B,{text:"Share"}),r.a.createElement(L,{text:"Save"})),r.a.createElement(J,null),r.a.createElement(_,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.b2bb318c.chunk.js.map