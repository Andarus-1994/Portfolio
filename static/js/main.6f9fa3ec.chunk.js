(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/natureProject.1f6d9b8b.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/project1.fe02a396.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/project3.72764b78.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/searchusers.8ab84e02.jpg"},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=(a(71),a(15)),o=(a(4),a(3)),s=a(7);var m=function(e){var t=e.title,a=e.message,l=(e.left,e.background),c=Object(n.useState)(!1),m=Object(i.a)(c,2),u=m[0],d=m[1],E={backgroundColor:l};return r.a.createElement("div",{className:"test",style:E,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},u&&r.a.createElement("div",{style:{position:"absolute",top:"5%",left:"80%",height:"50px",width:"50px",color:"rgb(14, 57, 88)",borderRadius:"50%",padding:"7px",zIndex:"5"}},r.a.createElement(o.a,{icon:s.h,size:"2x"})),r.a.createElement("div",{className:"wrapBox"},r.a.createElement("h1",{className:"titleBox"},t)),r.a.createElement("p",null,a," "))},u=a(24),d=a(25),E=a(28),g=a(27),p=a(29),h=a(13),b=(a(76),a(49)),f=a.n(b),v=a(32),y=a.n(v),N=a(50),C=a.n(N),x=a(51),A=a.n(x),S=a(52),w=a.n(S),j=a(53),k=a.n(j),T=function(e){function t(){return Object(u.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(h.c,{className:"provider",infinite:"true",isPlaying:"true",naturalSlideWidth:40,naturalSlideHeight:35,totalSlides:6},r.a.createElement(h.e,null,r.a.createElement(h.d,{index:0}," ",r.a.createElement("img",{src:f.a,alt:""})),r.a.createElement(h.d,{index:1},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement(h.d,{index:2},r.a.createElement("img",{src:A.a,alt:""})),r.a.createElement(h.d,{index:3},r.a.createElement("img",{src:w.a,alt:""})),r.a.createElement(h.d,{index:4},r.a.createElement("img",{src:k.a,alt:""})),r.a.createElement(h.d,{index:5},r.a.createElement("img",{src:C.a,alt:""}))),r.a.createElement(h.a,{className:"back"}," ",r.a.createElement("i",{className:"left"})),r.a.createElement(h.b,{className:"forward"},r.a.createElement("i",{className:"right"})))}}]),t}(r.a.Component),O=a(26),B=a(6),L=a.n(B),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).state={opened:!1},a.toggleBox=a.toggleBox.bind(Object(O.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"toggleBox",value:function(){var e=this.state.opened;this.setState({opened:!e})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=this.state.opened;return n||(t=r.a.createElement("button",{className:"moreButton",onClick:this.toggleBox}," ",r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Click here to find out!")),r.a.createElement("div",null,r.a.createElement("div",null,t),n&&r.a.createElement(L.a,null,r.a.createElement("div",{className:"containerHome2"},a)))}}]),t}(r.a.Component),U=a(18);var M=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-content"},r.a.createElement("ul",{className:"footer-social-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"s",className:"facebook"},r.a.createElement(o.a,{icon:U.a,size:"3x"})," ")),r.a.createElement("li",null,r.a.createElement("a",{href:"s",className:"instagram"},r.a.createElement(o.a,{icon:U.c,size:"3x"})," ")),r.a.createElement("li",null,r.a.createElement("a",{href:"s",className:"twitter"},r.a.createElement(o.a,{icon:U.d,size:"3x"})," ")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Andarus-1994",className:"gitHub"},r.a.createElement(o.a,{icon:U.b,size:"3x"})," ")))),r.a.createElement("div",{className:"footer-bottom"},"\xa9 Andarus.com | Copyrights reserved from 2020 made by Andrei"))},H=a(54),P=function(){return r.a.createElement(H.a,{className:"ContentLoader",speed:1,width:700,height:850,interval:.5,viewBox:"0 0 400 160",backgroundColor:"rgb(74, 138, 175)",foregroundColor:"rgb(46, 118, 167)"},r.a.createElement("rect",{x:"180",y:"36",rx:"3",ry:"3",width:"196",height:"26"}),r.a.createElement("rect",{x:"189",y:"71",rx:"3",ry:"3",width:"187",height:"86"}),r.a.createElement("rect",{x:"266",y:"39",rx:"3",ry:"3",width:"33",height:"0"}),r.a.createElement("rect",{x:"166",y:"04",rx:"3",ry:"3",width:"223",height:"22"}))},Q=a(14),R=a(56),I=a.n(R),W=function(){return{type:"FETCH_USERS_REQUEST"}},K=function(e){return{type:"FETCH_USERS_SUCCESS",payload:e}},Y=function(e){return{type:"FETCH_USERS_FAILURE",payload:e}};var J=function(){var e,t=Object(Q.d)((function(e){return e.colored})),a=Object(Q.c)();Object(n.useEffect)((function(){localStorage.setItem("color",t)}),[t]),document.body.style.backgroundColor=t;var l=document.createElement("style");return l.type="text/css",l.innerHTML=".side-menu li { \n          border-top-color:".concat(t,";\n          border-bottom-color:").concat(t,";\n     }\n     .About .btnDisplay{\n      background-color: ").concat(t,";\n     }\n     \n     "),"rgb(80, 147, 185)"===t&&(e=".infoAbout .containerAbout{\n        background-color: rgb(63, 132, 172);\n       }\n       .infoAbout .containerAbout .download{\n        background-color: rgb(29, 100, 158);\n       }\n       "),"rgb(59, 120, 155)"===t&&(e=".infoAbout .containerAbout{\n          background-color: rgb(38, 102, 139);\n        }\n        .infoAbout .containerAbout .download{ \n          background-color: rgb(13, 84, 141);\n      }\n        "),l.innerHTML=l.innerHTML+e,document.body.appendChild(l),r.a.createElement("div",null,r.a.createElement("button",{className:"darkMode",onClick:function(){return"rgb(80, 147, 185)"===t&&a({type:"CHANGE_COLOR_DARK"}),void("rgb(59, 120, 155)"===t&&a({type:"CHANGE_COLOR_LIGHT"}))}},"rgb(80, 147, 185)"===t&&r.a.createElement(o.a,{icon:s.f,size:"2x"}),"rgb(59, 120, 155)"===t&&r.a.createElement(o.a,{icon:s.i,size:"2x"})))};var G=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){function e(e){l(e.isLoaded)}var t=window.performance.getEntriesByType("navigation");window.onload=function(){e(!1)},t.length>0&&t[0].loadEventEnd>0?e(!1):console.log("Document is not loaded")}),[]),a?r.a.createElement(P,null):r.a.createElement("div",{className:"Home"},r.a.createElement(J,null),r.a.createElement(L.a,null,r.a.createElement("div",{className:"homeCover"},r.a.createElement("center",null,r.a.createElement("h1",{className:"titleHome"},r.a.createElement("span",{className:"homie"},"Welcome"),", to my Portfolio Website")),r.a.createElement("br",null),r.a.createElement("div",{className:"containerCarousel"},r.a.createElement(T,null)))),r.a.createElement("div",{className:"containerHome"},r.a.createElement("div",{className:"whatTitle"},"Why do I like ",r.a.createElement("span",null,"WEB Development?")),r.a.createElement(D,null,[{id:0,title:"Creativity",message:"I\u2019d get to create beautiful things for the internet, and use up all my creative juices on typography pairings, color schemes, and giving websites that certain mark of myself.",background:"rgb(17, 92, 141)"},{id:1,title:"Community",message:"The fact that there is a big community sharing ideas, new technologies, new thoughts and diffrents points of view. ",background:"rgb(27, 90, 133)"},{id:2,title:"Passion",message:"Because I am doing this out of passion and it feels like I am not even working.",background:"rgb(19, 102, 156)"}].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(m,{title:e.title,message:e.message,left:e.left,background:e.background}))})))),r.a.createElement(M,null))};var X=function(e){var t=e.title,n=e.img,l=e.url,c=e.url1;return r.a.createElement("div",{className:"Project"},r.a.createElement("h2",null,t),r.a.createElement("img",{src:a(96)("./".concat(n.toLowerCase(),".jpg")),alt:"project"}),r.a.createElement("a",{href:l,title:t},"Demo"),r.a.createElement("a",{href:c,title:t+" code"},"Code"))};var z=function(){return r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"containerProjects"},[{id:0,title:"Company Website",img:"bms2",url:"https://andarus-1994.github.io/Website1/",url1:"https://github.com/Andarus-1994/Website1"},{id:1,title:"Search Users",img:"searchUsers",url:"https://andarus-1994.github.io/SearchUsers/",url1:"https://github.com/Andarus-1994/SearchUsers/tree/master"},{id:2,title:"Project 3",img:"Project1",url:"https://andarus-1994.github.io/Website1/"},{id:3,title:"Project 4",img:"project3",url:"https://andarus-1994.github.io/Website1/"}].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(X,{title:e.title,img:e.img,url:e.url,url1:e.url1}))}))))};var Z=function(){return r.a.createElement("div",{className:"work"},r.a.createElement(J,null),r.a.createElement(L.a,null,r.a.createElement("h1",null,"My Projects"),r.a.createElement("div",{className:"gap"}),r.a.createElement(z,null)),r.a.createElement("div",{className:"gap"}),r.a.createElement(M,null))},V=a(36),F=a.n(V),q=a(57),_=a(33),$=a.n(_),ee=a(58),te=a.n(ee),ae=a(59),ne=a.n(ae);var re=function(e){var t=e.text;return e.text2,r.a.createElement("div",{className:"infoAbout"},r.a.createElement("div",{className:"containerAbout"},r.a.createElement("img",{src:$.a,alt:"img"}),r.a.createElement(L.a,null,r.a.createElement("p",{className:"titleDescriptionAbout"},"Junior Web Developer"),r.a.createElement("p",{className:"hi"},r.a.createElement("span",null,"Hi!")," My name is ",r.a.createElement("b",null,"Andrei"),t," ",r.a.createElement("b",null,"Web Developer.")),r.a.createElement("p",{className:"focus"}," My ",r.a.createElement("b",null,"focus")," at the moment is to grow my skills in the ",r.a.createElement("b",null,"Web Programming Languages")," that I know and also to exceed my limits by learning new ones.")),r.a.createElement(te.a,null,r.a.createElement("div",{className:"download"},r.a.createElement("a",{href:ne.a,download:"CV.docx"},"Download CV ",r.a.createElement(o.a,{icon:s.c}))))))};var le=function(){var e=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=200-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),n)},r.a.createElement("div",{className:"AboutAnimate"},function(){for(var t=document.getElementsByClassName("typewrite"),a=0;a<t.length;a++){var n=t[a].getAttribute("data-type"),r=t[a].getAttribute("data-period");n&&new e(t[a],JSON.parse(n),r)}var l=document.createElement("style");l.type="text/css",l.innerHTML=".typewrite > .wrap { border-right: 0.1em solid rgb(13, 47, 63); }",document.body.appendChild(l)}(),r.a.createElement("h1",null,r.a.createElement("div",{className:"typewrite","data-period":"2000","data-type":"".concat(ce)},r.a.createElement("span",{className:"wrap"}))))},ce='[  "I Love Design.", "I am Creative.", "I Love to Develop.", "I love WEB!" ]';var ie=function(e){return r.a.createElement("div",{id:e.id,onDragLeave:function(e){"board"===e.target.className&&(e.target.style.backgroundColor="rgba(27, 53, 68, 0.637)")},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.getData("card_id"),a=document.getElementById(t);if(a.style.display="block","board"===e.target.className){var n=e.target;e.target.style.backgroundColor="rgba(27, 53, 68, 0.637)",n.appendChild(a)}else e.target.closest(".board").appendChild(a)},onDragOver:function(e){e.preventDefault(),"board"===e.target.className&&(e.target.style.backgroundColor="rgb(13, 49, 70)")},className:e.className},r.a.createElement("h1",{style:{left:"".concat(e.left)}},e.title),e.children)};var oe=function(e){return r.a.createElement("div",{id:e.id,className:e.className,draggable:e.draggable,onDragStart:function(e){var t=e.target;e.dataTransfer.setData("card_id",t.id),setTimeout((function(){t.style.display="none"}),0)},onDragOver:function(e){e.stopPropagation()}},e.children)},se=a(108);var me=function(){var e,t=Object(Q.d)((function(e){return e.opener})),a=Object(Q.c)();!0===t&&(e="visible"),!1===t&&(e="hidden");var n={visibility:e,margin:"0 auto",width:"215px",color:"rgb(30, 85, 117)",pointerEvents:"none"};return r.a.createElement("div",null,r.a.createElement("div",{className:"flexbox"},r.a.createElement(ie,{id:"board-1",className:"board",title:"Languages",left:"-5%"},r.a.createElement("h3",{disabled:!0},"Move!"),r.a.createElement(oe,{id:t?"card-1":"card-11",className:"card",draggable:"true"},r.a.createElement("p",null,"HTML")),r.a.createElement(oe,{id:t?"card-6":"card-61",className:"card",draggable:"true"},r.a.createElement("p",null,"CSS")),r.a.createElement(oe,{id:t?"card-5":"card-51",className:"card",draggable:"true"},r.a.createElement("p",null,"JAVASCRIPT")),r.a.createElement(oe,{id:t?"card-8":"card-81",className:"card",draggable:"true"},r.a.createElement("p",null,"PHP"))),r.a.createElement(ie,{id:"board-2",className:"board",title:"Frameworks",left:"-3%"},r.a.createElement(oe,{id:t?"card-2":"card-21",className:"card",draggable:"true",bounds:"parent"},r.a.createElement("p",null,"React")),r.a.createElement(oe,{id:t?"card-9":"card-91",className:"card",draggable:"true",bounds:"parent"},r.a.createElement("p",null,"Laravel"))),r.a.createElement(ie,{id:"board-3",className:"board",title:"Plans to learn",left:"-5%"},r.a.createElement(oe,{id:t?"card-3":"card-31",className:"card",draggable:"true",bounds:"parent"},"Angular"),r.a.createElement(oe,{id:t?"card-4":"card-41",className:"card",draggable:"true",bounds:"parent"},r.a.createElement("p",null,"ASP.Net")),r.a.createElement(oe,{id:"card-7",className:"card",draggable:"true"}))),r.a.createElement("button",{className:"btnDisplay",onClick:function(){return a({type:"PRESS_BUTTON"})}},"Press me!"),r.a.createElement("div",{style:{marginTop:"30px",width:"100%",height:"50px"}},r.a.createElement(se.a,{in:t,timeout:350,classNames:"example",unmountOnExit:!0},r.a.createElement("p",{style:n},"You can press the button..."))))};var ue=Object(Q.b)((function(e){return{userData:e.user}}),(function(e){return{fetchUsers:function(){return e((function(e){e(W()),I.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var a=t.data;e(K(a))})).catch((function(t){e(Y(t.message))}))}))}}}))((function(e){var t=e.userData,a=e.fetchUsers,l=["1","10"],c=r.a.useState({value:"all"}),m=Object(i.a)(c,2),u=m[0],d=m[1];Object(n.useEffect)((function(){a()}),[a]);var E,g=u.value,p=0,h=u.value;return E=h.toString(),l=E.split("-"),t.loading?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{id:"typing-loader"})):t.error?r.a.createElement("h2",null,t.error):r.a.createElement("div",null,r.a.createElement("div",{className:"centralize-About"},r.a.createElement("label",null,"Search:"),r.a.createElement("input",{className:"inputUsers",id:"myInput",type:"text",defaultValue:"All",onChange:function(e){g=e.target.value},onKeyDown:function(e){13===e.keyCode&&(d({value:e.target.value.replace(/^0+/,"")}),console.log(u))}}),r.a.createElement("button",{className:"searchButton",onClick:function(){d({value:g.replace(/^0+/,"")})}},r.a.createElement(o.a,{icon:s.g,size:"1x"}),r.a.createElement("span",{className:"tooltiptext"},"Search")),r.a.createElement("div",null,'Example of search: "3-7","All" and also by name .'),r.a.createElement("p",{style:{fontSize:"3rem",fontFamily:"Spartan, sans-serif",marginTop:"15px"}},"Find people by Name or ID")),r.a.createElement("div",{className:"boxSearch"},t&&t.users&&t.users.map((function(e){return l[1]||(l[1]=h),""===h.toString()?null:e.name.toString().toLowerCase().includes(h.toString().toLowerCase())||e.id.toString()===h.toString()?r.a.createElement("div",{className:"searchContent",key:e.id,id:p+=1},r.a.createElement(L.a,null,r.a.createElement("p",null,e.id,".",r.a.createElement("b",null," ",e.name),"  with e-mail: ",e.email,"  and lives in the city: ",r.a.createElement("u",null,e.address.city))),"  "):"all"===h.toString().toLocaleLowerCase()?r.a.createElement("div",{className:"searchContent",key:e.id,id:p+=1},r.a.createElement(L.a,null,r.a.createElement("p",null,e.id,".",r.a.createElement("b",null," ",e.name)," with e-mail: ",e.email,"  and lives in the city: ",r.a.createElement("u",null,e.address.city)))):l[0].toString()<=e.id&&e.id<=l[1].toString()||l[0].toString()>=e.id&&e.id>=l[1].toString()?r.a.createElement("div",{className:"searchContent",key:e.id,id:p+=1},r.a.createElement(L.a,null,r.a.createElement("p",null,e.id,". ",r.a.createElement("b",null," ",e.name)," with e-mail: ",e.email,"  and lives in the city: ",r.a.createElement("u",null,e.address.city)))):null}))),0===p&&r.a.createElement("h2",null,"Nothing found"))})),de=a(60),Ee=a.n(de);var ge=function(){Object(n.useEffect)((function(){c()}),[]);var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(){var e=Object(q.a)(F.a.mark((function e(){var t,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),l(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"About"},r.a.createElement(J,null),r.a.createElement(L.a,null,r.a.createElement("h2",null,"About")),[{id:0,text:" and I'm trying to become a proffesional",text2:"blablablabla"}].map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(re,{text:e.text,text2:e.text2}))})),r.a.createElement(le,null),r.a.createElement("div",{className:"centralize-About"},r.a.createElement(Ee.a,null,r.a.createElement(me,null))),r.a.createElement("div",{className:"gap"}),a.map((function(e){return r.a.createElement("img",{key:e.id,src:e.url,alt:e.name,className:"cat"})})),r.a.createElement(ue,null),r.a.createElement(M,null))},pe=a(12),he=a(61),be=a.n(he);var fe=function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("img",{src:be.a,alt:""}),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(pe.b,{to:"/Portfolio",exact:!0,activeClassName:"active",className:"inactive"},r.a.createElement("li",null,"   Home ")),r.a.createElement(pe.b,{to:"/about",activeClassName:"active",className:"inactive"},r.a.createElement("li",null,"   About")),r.a.createElement(pe.b,{to:"/work",activeClassName:"active",className:"inactive"},r.a.createElement("li",null,"   Work")))))};var ve=function(){return r.a.createElement("div",{className:"side-bar"},r.a.createElement("div",{className:"side-menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{icon:s.a,size:"2x",className:"arrow"})),r.a.createElement(pe.b,{to:"/Portfolio",exact:!0,activeClassName:"active",className:"inactive"},r.a.createElement("li",null,"  ",r.a.createElement(o.a,{icon:s.d,size:"2x"})," ",r.a.createElement("span",{className:"home"},"Home"))),r.a.createElement(pe.b,{to:"/about",exact:!0,activeClassName:"active",className:"inactive"},r.a.createElement("li",null,r.a.createElement(o.a,{icon:s.e,size:"2x",className:"infoIcon"}),r.a.createElement("span",{className:"info"},"About "))),r.a.createElement(pe.b,{to:"/work",exact:!0,activeClassName:"active",className:"inactive"},r.a.createElement("li",null," ",r.a.createElement(o.a,{icon:s.b,size:"2x"}),r.a.createElement("span",{className:"work"},"Work"))))),r.a.createElement("a",{className:"linkSide",href:"https://github.com/Andarus-1994/"}," ",r.a.createElement("div",{className:"gitHubSpecial"},r.a.createElement(o.a,{icon:U.b,size:"3x"})," ",r.a.createElement("span",null," My Github!"))))},ye=a(17);var Ne=Object(ye.f)((function(e){var t=e.history,a=e.children;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),r.a.createElement(n.Fragment,null,a)})),Ce=function(){return r.a.createElement("h1",{className:"noMatch"},"404 Not Found Wrong adress!")};var xe=function(){return r.a.createElement(pe.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(fe,null),r.a.createElement(ve,null),r.a.createElement(Ne,null,r.a.createElement(ye.c,null,r.a.createElement(ye.a,{path:"/about",component:ge}),r.a.createElement(ye.a,{path:"/work",component:Z}),r.a.createElement(ye.a,{path:"/Portfolio",exact:!0,component:G}),r.a.createElement(ye.a,{component:Ce})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=a(16),Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRESS_BUTTON":return!e;default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgb(80, 147, 185)",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLOR_DARK":return"rgb(59, 120, 155)";case"CHANGE_COLOR_LIGHT":return"rgb(80, 147, 185)";default:return e}},Te=a(64),Oe={loading:!1,users:[],error:""},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_REQUEST":return Object(Te.a)({},e,{loading:!0});case"FETCH_USERS_SUCCESS":return{loading:!1,users:t.payload,error:""};case"FETCH_USERS_FAILURE":return{loading:!1,users:[],error:t.payload};default:return e}},Le=Object(Ae.c)({counter:Se,isLogged:we,opener:je,colored:ke,user:Be}),De=a(63),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,Me=Object(Ae.e)(Le,Ue(Object(Ae.a)(De.a)));c.a.render(r.a.createElement(Q.a,{store:Me},r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,a){e.exports=a.p+"static/media/project2.a589e8f7.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/right.6b3357db.jpg"},4:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/project3.62c618d1.png"},50:function(e,t,a){e.exports=a.p+"static/media/dog.19b93e84.png"},51:function(e,t,a){e.exports=a.p+"static/media/img_Carousel1.5a457da7.png"},52:function(e,t,a){e.exports=a.p+"static/media/img_carusel5.d866330a.png"},53:function(e,t,a){e.exports=a.p+"static/media/natureProject.e47c5a96.png"},59:function(e,t,a){e.exports=a.p+"static/media/CV.a94dff28.docx"},61:function(e,t){e.exports="data:image/png;base64,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"},66:function(e,t,a){e.exports=a(106)},71:function(e,t,a){},96:function(e,t,a){var n={"./about.jpg":97,"./bms2.jpg":98,"./laptop.jpg":99,"./natureProject.jpg":100,"./project1.jpg":101,"./project2.jpg":32,"./project3.jpg":102,"./right.jpg":33,"./searchusers.jpg":103};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=96},97:function(e,t,a){e.exports=a.p+"static/media/about.563fa5f6.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/bms2.e61b081f.jpg"},99:function(e,t,a){e.exports=a.p+"static/media/laptop.1590470b.jpg"}},[[66,1,2]]]);
//# sourceMappingURL=main.6f9fa3ec.chunk.js.map