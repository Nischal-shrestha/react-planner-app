(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,a){e.exports=a(401)},208:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(199),l=a.n(c),i=(a(208),a(17)),o=a(18),s=a(20),u=a(19),m=a(21),h=a(404),p=a(406),d=a(402),E=a(215),f=a(8),b=a(403),g=Object(f.b)(null,function(e){return{logOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(b.a,{to:"/project/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.logOut,href:"#logout"},"Log Out")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}),N=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(b.a,{to:"/signup"},"SignUp")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/signin"},"Login")))},j=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(g,{profile:a}):r.a.createElement(N,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},"Planner"),n))}),O=function(e){return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},r.a.createElement("li",null,"Notification"),r.a.createElement("li",null,"Notification"),r.a.createElement("li",null,"Notification"),r.a.createElement("li",null,"Notification")))))},v=a(81),C=a.n(v),S=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},C()(t.createdAt.toDate()).calendar())))},y=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(E.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(S,{project:e}))}))},w=a(23),I=a(13),R=a(405),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(y,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(O,null)))):r.a.createElement(R.a,{to:"/signin"})}}]),t}(n.Component),A=Object(I.d)(Object(f.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(F),P=Object(I.d)(Object(f.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted By ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,C()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(R.a,{to:"/signin"})}),U=a(27),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.trySignIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),k=Object(f.b)(function(e){return{authError:e.auth.error,auth:e.firebase.auth}},function(e){return{trySignIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_FAILED",err:e})})}}(t))}}})(L),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.trySignUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.error;return console.log(this.props),t.uid?r.a.createElement(R.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Register"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),_=Object(f.b)(function(e){return{auth:e.firebase.auth,error:e.auth.error}},function(e){return{trySignUp:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){return t({type:"SIGNUP_SUCCESS"})}).catch(function(e){return t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(x),G=a(36),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.create(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Project Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleInputChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(R.a,{to:"/signin"})}}]),t}(n.Component),D=Object(f.b)(function(e){return{auth:e.firebase.auth}},function(e){return{create:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(G.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(T),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{path:"/project/create",component:D}),r.a.createElement(d.a,{path:"/project/:id",component:P}),r.a.createElement(d.a,{path:"/signin",component:k}),r.a.createElement(d.a,{path:"/signup",component:_}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(202),B=a(55),W={error:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return console.log("LOGIN FAILED"),Object(G.a)({},e,{error:"Login Failed"});case"LOGIN_SUCCESS":return console.log("LOGIN SUCCESS",e),Object(G.a)({},e,{error:null});case"LOGOUT_SUCCESS":return console.log("LOGOUT SUCCESS"),e;case"SIGNUP_SUCCESS":return console.log("SIGNUP SUCCESS"),Object(G.a)({},e,{error:null});case"SIGNUP_ERROR":return console.log("SIGNUP ERROR",t.err.message),Object(G.a)({},e,{error:t.err.message});default:return e}},Y={projects:[{id:1,title:"help me find peach",content:"blah blah blah blah"},{id:2,title:"Collect all the stars",content:"blah blah blah blah"},{id:3,title:"Ride with yoshi",content:"blah blah blah blah"}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("CREATED PROJECT"),console.log(t.project),e;case"CREATE_PROJECT_ERROR":return console.log("CREATE_PROJECT_ERROR",t.err),e;default:return e}},Z=Object(I.c)({auth:K,project:Q,firestore:B.firestoreReducer,firebase:w.firebaseReducer}),$=a(82),q=a.n($);a(395),a(399);q.a.initializeApp({apiKey:"AIzaSyA170uLZ_GY1GnOtFo37FAkhQb5GKYewAw",authDomain:"ns-marioplan.firebaseapp.com",databaseURL:"https://ns-marioplan.firebaseio.com",projectId:"ns-marioplan",storageBucket:"ns-marioplan.appspot.com",messagingSenderId:"681017460549"}),q.a.firestore().settings({timestampsInSnapshots:!0});var H=q.a,M=Object(I.e)(Z,Object(I.d)(Object(I.a)(J.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(H),Object(w.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));M.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(f.a,{store:M},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[203,2,1]]]);
//# sourceMappingURL=main.03f2ffbd.chunk.js.map