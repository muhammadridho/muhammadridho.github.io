(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(e,t,a){"use strict";a.r(t);a(172),a(34);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(168),c=a.n(l),s=a(167),m=a(655),u=a.n(m),d=a(671),p=a.n(d),g=a(699),h=a.n(g).a.initializeApp({apiKey:"AIzaSyCPX8wLlahmv0yQuIkCXnhSElC6WZZJcOU",authDomain:"slider-profilepage.firebaseapp.com",databaseURL:"https://slider-profilepage.firebaseio.com",projectId:"slider-profilepage",storageBucket:"",messagingSenderId:"876005641058"}),M=p.a.createClass(h.database()),N=a(161),f=Object(N.b)("div",{target:"ezi824q0"})("position:fixed;bottom:1em;right:4.5em;display:flex;@media (max-width:47.9375em){width:100%;left:0;bottom:0;height:64px;justify-content:center;align-items:center;background-color:#1F80E7;}"),b=Object(N.b)("button",{target:"ezi824q1"})("width:32px;height:32px;border-radius:100%;background-color:#1F80E7;border:0px;display:flex;justify-content:center;align-items:center;+ button{margin-left:1em;}svg{font-size:28px;color:white;}@media (max-width:47.9375em){width:64px;height:64px;+ button{margin-left:3em;}svg{width:36px;}}"),y=a(210),E=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(f,null,o.a.createElement(b,{onClick:function(){return e.props.showQuestion()}},o.a.createElement(y.Grid,null)),o.a.createElement(b,{onClick:function(){return e.props.showAsk()}},o.a.createElement(y.HelpCircle,null)))},t}(o.a.Component),D=(a(244),a(48)),x=a.n(D),I=a(719),w=Object(N.b)("div",{target:"ejbuypf0"})("width:100%;height:100%;position:fixed;left:0;top:0;background-color:white;z-index:55;display:flex;justify-content:center;align-items:center;opacity:0;visibility:hidden;-webkit-transition:all 600ms cubic-bezier(0.19,1,0.22,1);transition:all 600ms cubic-bezier(0.19,1,0.22,1);overflow:scroll;&.active{opacity:1;visibility:visible;}.wrapper{width:100%;height:100vh;display:flex;justify-content:center;align-items:center;}@media (max-width:47.9375em){&.no-flex-mobile{.wrapper{padding-top:5em;display:block;}}}"),A=Object(N.b)("button",{target:"ejbuypf1"})("width:36px;height:36px;background-color:rgb(229,233,242);position:fixed;right:1.6em;top:1.6em;border-radius:100%;display:flex;justify-content:center;align-items:center;z-index:3;svg{font-size:28px;width:28px;}@media (max-width:47.9375em){width:28px;height:28px;}"),j=function(e){var t=e.children,a=e.active,n=e.closeEvent,i=e.className,r=void 0===i?"":i;return o.a.createElement(w,{className:(a?"active":"")+" "+r},o.a.createElement("div",{className:"wrapper"},o.a.createElement(A,{className:"btn",onClick:function(){return n()}},o.a.createElement(y.X,null)),t))},z=Object(N.b)("div",{target:"eirv7y20"})("max-width:500px;-webkit-transition:all 600ms cubic-bezier(0.19,1,0.22,1);transition:all 600ms cubic-bezier(0.19,1,0.22,1);transform:translateX(38%);label{display:block;font-size:15px;font-family:'maison_neuebook';}input{margin:.6em 0 1.5em 0;border:0;padding:.5em 0;border-bottom:3px solid #007AFF;width:250px;font-family:'maison_neuedemi';::placeholder{color:#C6B8B8;}:focus{outline:0px;}}button{display:block;margin:0 auto;font-size:15px;padding:.9em 2.4em;font-family:'maison_neuedemi';letter-spacing:.21px;border-radius:3px;&:first-of-type{margin-top:2em;}}&.is-done{transform:translateX(-50px);opacity:0;}"),T=Object(N.b)("button",{target:"eirv7y22"})("background-color:transparent;color:#007AFF;border:0;font-size:15px;font-family:'maison_neuedemi';"),v=Object(N.b)("div",{target:"eirv7y23"})("-webkit-transition:all 600ms cubic-bezier(0.19,1,0.22,1);transition:all 600ms cubic-bezier(0.19,1,0.22,1);opacity:0;font-family:'maison_neuebook';display:flex;flex-direction:column;justify-content:center;align-items:center;width:186px;p{font-size:15px;margin-bottom:.7em;}&.is-done{opacity:1;transform:translateX(-70%);}");function C(e,t){return Math.random()*(t-e)+e}var L=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isDone:!1,isClosed:!0,name:"",quest:""},t._submitAsk=function(){var e=x()(x()(t));setTimeout(function(){e.setState({isDone:!0})},900),t.props.submit(t.state.name,t.state.quest)},t._closeModal=function(){var e=x()(x()(t));t.props.closeModal(),setTimeout(function(){e.setState({isDone:!1})},600)},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.querySelectorAll("#component-2")[0],t=document.querySelectorAll("#filter-goo-2 feGaussianBlur")[0],a=["#DE8AA0","#8AAEDE","#FFB300","#60C7DA"];e.addEventListener("click",function(){var n=[];(r=new I.a({onUpdate:function(){t.setAttribute("x",0)}})).to(e.querySelectorAll(".button__bg"),.6,{scaleX:1.05}),r.to(e.querySelectorAll(".button__bg"),.9,{scale:1,ease:Elastic.easeOut.config(1.2,.4)},.6);for(var i=0;i<12;i++){n.push(document.createElement("span")),e.appendChild(n[i]),n[i].classList.add(i%2?"left":"right");var r,o=i%2?"-":"+",l=i%2?C(-1,1)*i/2:C(-1,1)*i,c=i<2?1:C(.4,.8);(r=new I.a({onComplete:function(e){n[e].parentNode.removeChild(n[e]),this.kill()},onCompleteParams:[i]})).set(n[i],{scale:c}),r.to(n[i],.6,{x:o+20,scaleX:3,ease:SlowMo.ease.config(.1,.7,!1)}),r.to(n[i],.1,{scale:c,x:o+"=25"},"-=0.1"),i>=2&&r.set(n[i],{backgroundColor:a[Math.round(C(0,3))]}),r.to(n[i],.6,{x:o+C(60,100),y:10*l,scale:.1,ease:Power3.easeOut}),r.to(n[i],.2,{opacity:0,ease:Power3.easeOut},"-=0.2")}})},a.render=function(){var e=this;return o.a.createElement(j,{active:this.props.show,closeEvent:function(){return e._closeModal()}},o.a.createElement(z,{className:this.state.isDone?"is-done":""},o.a.createElement("label",{for:"name"},"Nama kamu,"),o.a.createElement("input",{type:"text",placeholder:"udin, kali ?",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),o.a.createElement("label",{for:"name"},"Mau nanya nih, tentang"),o.a.createElement("input",{type:"text",placeholder:"kenapa suka teh ? (misalkan)",value:this.state.quest,onChange:function(t){return e.setState({quest:t.target.value})}}),o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",class:"svg-filters",style:{display:"none"}},o.a.createElement("defs",null,o.a.createElement("filter",{id:"filter-goo-2"},o.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"7",result:"blur"}),o.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),o.a.createElement("feComposite",{in:"SourceGraphic",in2:"goo"})))),o.a.createElement("button",{id:"component-2",className:"button button--2",style:{filter:"url('#filter-goo-2')"},onClick:function(){return e._submitAsk()}},"JAWAB DONG",o.a.createElement("span",{className:"button__bg"})),o.a.createElement(T,{onClick:function(){return e._closeModal()}},"Ngga jadi, deh")),o.a.createElement(v,{className:this.state.isDone?"is-done":""},o.a.createElement("div",{class:"emoji  emoji--haha"},o.a.createElement("div",{class:"emoji__face"},o.a.createElement("div",{class:"emoji__eyes"}),o.a.createElement("div",{class:"emoji__mouth"},o.a.createElement("div",{class:"emoji__tongue"})))),o.a.createElement("p",null,"Makasih udah nanya, ya !"),o.a.createElement(T,{onClick:function(){return e._closeModal()}},"OKE DO")))},t}(o.a.Component),O=(a(90),a(64),a(708),a(57),a(223)),k=a.n(O),S=Object(N.b)("div",{target:"e9c8lcl0"})("border:1px solid #E8E8E8;padding:1em;border-radius:3px;margin-bottom:1em;h3{font-family:'maison_neuedemi' !important;font-size:16px;margin-bottom:.5em;}p{font-size:16px;font-family:'maison_neuebook';line-height:22px;margin-bottom:0;}@media (max-width:47.9375em){margin-bottom:1em;}"),Q={transitionDuration:0},U={background:".my-bg-image-el"},P=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(j,{active:this.props.show,closeEvent:function(){return e.props.closeModal()},className:"no-flex-mobile"},o.a.createElement(k.a,{className:"container col",elementType:"ul",options:Q,disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:U},Object.values(this.props.list||{}).map(function(e){return o.a.createElement(S,{className:"col--m4 col--s12"},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,e.quest))})))},t}(o.a.Component),Y=Object(N.b)("div",{target:"e15ffl340"})("max-width:328px;margin:0 auto;position:relative;padding:3em 0;text-align:center;h3{font-size:28px;font-family:'maison_neuebold' !important;letter-spacing:6px;margin-bottom:.2em;color:#312F2F;}hr{width:320px;border-top:1px solid #EAEAEA;}p{font-size:16px;color:#B7B1B1;letter-spacing:.6px;margin-bottom:0;}.bg-img{position:absolute;z-index:3;top:50%;left:50%;transform:translate(-50%,-50%);}@media (max-width:47.9375em){max-width:240px;padding:6em 0;h3{font-size:19px;letter-spacing:5px;}p{font-size:11px;}hr{width:228px;margin:.3em;}}"),Z=Object(N.b)("div",{target:"e1edunva0"})("height:400px;display:flex;align-items:center;div{margin:0 auto;}"),B=function(){return o.a.createElement(Z,null,o.a.createElement(Y,null,o.a.createElement("h3",null,"FRONTSIDE THING"),o.a.createElement("hr",null),o.a.createElement("p",null,"FEEL, ANALYZE, CRAFT THE EXPERIENCE"),o.a.createElement("img",{src:a(710),className:"bg-img"})))},G=Object(N.b)("h5",{target:"eon39t00"})("font-family:'maison_neuebook';font-size:20px;max-width:242px;color:#4D4D4D;font-weight:300;line-height:26px;margin:0 auto;position:relative;span{font-family:'maison_neuebold';}&:before,&:after{position:absolute;content:'“';color:#E6E6E6;font-size:60px;z-index:-3;}&:before{top:6px;left:-18px;}&:after{content:'”';right:2px;bottom:-24px;}"),R=function(){return o.a.createElement(Z,null,o.a.createElement(G,null,"Nice things ",o.a.createElement("br",null),"is what can be ",o.a.createElement("span",null,"measured")," and can share ",o.a.createElement("span",null,"emotions")))},_=Object(N.b)("div",{target:"e12uckr70"})("margin:0 auto;position:relative;p{position:absolute;right:-5.5em;bottom:1.5em;font-size:32px;line-height:1em;letter-spacing:3px;}@media (max-width:47.9375em){p{right:.5em;bottom:-1.5em;}}"),F=function(){return o.a.createElement(Z,null,o.a.createElement(_,null,o.a.createElement("img",{src:a(711),alt:"devices"}),o.a.createElement("p",{className:"content-bold"},"Not",o.a.createElement("br",null)," Foreseeable",o.a.createElement("br",null)," Features")))},W=Object(N.b)("div",{target:"e189bv6a0"})("position:relative;p{position:absolute;bottom:-.6em;width:150px;letter-spacing:1px;font-size:23px;}"),X=function(){return o.a.createElement(Z,null,o.a.createElement(W,null,o.a.createElement("img",{src:a(712),alt:"abstract"}),o.a.createElement("p",{className:"content-bold"},"TO BE GOOD.")))},q=Object(N.b)("div",{target:"eaqxzrn0"})("width:135px;h5{font-size:28px;line-height:.2em;letter-spacing:1.5px;color:#666666;margin-bottom:.8em;&:first-child{padding-left:1em;span{margin-right:.3em;}}&:nth-child(2){color:white;-webkit-text-stroke-width:1.4px;-webkit-text-stroke-color:#1F80E7;span{margin-left:.5em;}}span,img{vertical-align:middle;}img{display:inline-block;margin-bottom:0;}}"),H=function(){return o.a.createElement(Z,null,o.a.createElement(q,null,o.a.createElement("h5",null,o.a.createElement("span",null,"WE "),o.a.createElement("img",{src:a(713)})),o.a.createElement("h5",null,o.a.createElement("img",{src:a(714)}),o.a.createElement("span",null,"ARE"))))},K=Object(N.b)("div",{target:"e1i29o3v0"})("max-width:204px;position:relative;hr{width:204px;border-top:4px solid #666666;margin-top:0;}p{line-height:1em;font-size:42px;}img{position:absolute;right:0em;bottom:-4em;z-index:-1;width:140px;}"),V=function(){return o.a.createElement(Z,null,o.a.createElement(K,null,o.a.createElement("hr",null),o.a.createElement("p",{className:"content-bold"},"WHY",o.a.createElement("br",null),"WE",o.a.createElement("br",null),"NEED",o.a.createElement("br",null)),o.a.createElement("img",{src:a(715),alt:"illus-ask"})))},J=Object(N.b)("div",{target:"e1b33zem0"})("width:280px;img,span{display:inline-block;}.layout-grid{&-1{width:216px;}&-2{width:110px;margin-right:.9em;img{margin-bottom:0;}p{text-align:right;margin:.3em 0 0 0;font-size:16px;}}&-3{vertical-align:top;width:153px;}}"),$=function(){return o.a.createElement(Z,null,o.a.createElement(J,null,o.a.createElement("img",{src:a(716),alt:"slide image",className:"layout-grid-1"}),o.a.createElement("span",{className:"layout-grid-2"},o.a.createElement("img",{src:a(717),alt:"slide image",className:"layout-grid-2"}),o.a.createElement("p",{className:"content-bold"},"VISCERAL")),o.a.createElement("img",{src:a(718),alt:"slide image",className:"layout-grid-3"})))},ee=function(e){function t(){var t;return(t=e.call(this)||this).addSlide=function(e){var a=Object.assign({},t.state.slide);a.num=e,t.setState({slide:a})},t.submitAsk=function(e,a){var n,i=Object.assign({},t.state.slide),r=Date.now();i.questions=Object.assign({},i.questions,((n={})[r]={name:e,quest:a},n)),t.setState({slide:i})},t.triggerModal=function(e,a){var n=Object.assign({},t.state.modal);n[e]=a,t.setState({modal:n})},t.state={slide:{num:1,content:{},asks:{}},modal:{ask:!1,question:!1},questions:{}},t}i()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.slideRef=M.syncState("slide",{context:this,state:"slide"})},a.componentDidMount=function(){var e=this;M.listenTo("slide",{context:this,then:function(t){e.slider.slickGoTo(t.num-1)}})},a.componentWillUnmount=function(){M.removeBinding(this.slideRef)},a.render=function(){var e=this;return o.a.createElement(s.c,{nofooter:!0},o.a.createElement(c.a,{title:"PRESENT | FRONTSIDE THINGS"}),o.a.createElement("div",{className:"container container--presentation"},o.a.createElement(u.a,Object.assign({ref:function(t){return e.slider=t}},{dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,draggable:!1}),o.a.createElement(B,null),o.a.createElement(V,null),o.a.createElement($,null),o.a.createElement(F,null),o.a.createElement(H,null),o.a.createElement(X,null),o.a.createElement(R,null))),o.a.createElement(L,{show:this.state.modal.ask,closeModal:function(){return e.triggerModal("ask",!1)},submit:function(t,a){return e.submitAsk(t,a)}}),o.a.createElement(E,{showAsk:function(){return e.triggerModal("ask",!0)},showQuestion:function(){return e.triggerModal("question",!0)}}),o.a.createElement(P,{show:this.state.modal.question,closeModal:function(){return e.triggerModal("question",!1)},list:this.state.slide.questions}))},t}(o.a.Component);t.default=ee},163:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(176),i={primary:"#1F80E7",secondary:"#7b8acc"},r={grey:"#F6F8F8",black:"#000",bg_color:"#f3f3f3",body_color:"#222",link_color:i.primary,link_color_hover:""+Object(n.a)(.15,i.primary)},o=["#f76262","#216583","#65c0ba","#35477d","#6c5b7b","#203541","#9951ff","#480032"],l={brand:i,colors:r,breakpoints:{xs:"400px",s:"600px",m:"900px",l:"1200px"},container:{base:"100rem",text:"55rem"},spacer:{horizontal:"2rem",vertical:"3rem"}};t.a=l},164:function(e,t){e.exports={pathPrefix:"/",siteTitle:"Ridho",siteTitleAlt:"Muhammad Ridho",siteUrl:"https://portfolio-emma.netlify.com",siteLanguage:"en",siteLogo:"/logos/logo-1024.png",siteDescription:"Software engineers who loves design",author:"LekoArts",userTwitter:"@emma",ogSiteName:"ridho",ogLanguage:"en_US",googleAnalyticsID:"UA-12345689-1",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Lato",bodyFontFamily:"Lato",baseFontSize:"18px"}},165:function(e,t,a){e.exports=a.p+"static/favicon-0d0710674f123a693fb0728d58e5ec6d.png"},167:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(161),c=Object(l.b)("div",{target:"e1oevc7p0"})("margin:0 auto;padding:0 ",function(e){return e.theme.spacer.horizontal},";max-width:",function(e){return e.theme.container[e.type]},";",function(e){return"text"===e.type&&Object(l.a)("p{font-size:1.25rem;letter-spacing:-0.003em;line-height:1.58;--baseline-multiplier:0.179;--x-height-multiplier:0.35;}")},";"),s=function(e){var t=e.children,a=e.type,n=e.className;return i.a.createElement(c,{className:n,type:a},t)},m=s;s.propTypes={children:o.a.node.isRequired,type:o.a.oneOf(["base","text"]),className:o.a.string},s.defaultProps={type:"base",className:null};var u=a(163),d=Object(l.b)("footer",{target:"ewiz1tx0"})("background-color:",u.a.colors.grey,";padding:3em ",function(e){return e.theme.spacer.horizontal},";text-align:center;a{text-decoration:none;color:",function(e){return e.theme.brand.primary},";}.container{h4,p{margin:0;}}.col{:first-child{text-align:left;}}@media screen and (max-width:767px){padding:3em 0;}"),p=Object(l.b)("ul",{target:"ewiz1tx1"})("list-style:none;margin-left:3em;li{margin:0 0 .4em 0;a{color:#43566A;&:first-child{margin-right:1em;}}}@media screen and (max-width:767px){margin:.5em 0 0 0;}"),g=function(){return i.a.createElement(d,null,i.a.createElement("div",{className:"container container--normal"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"col--m6"},i.a.createElement("h4",{className:"text-secondary-heading"},"Contact me"),i.a.createElement("p",null,"ulunmuhammadridho@gmail.com")),i.a.createElement("div",{className:"col--m6 flex flex--end in-mobile-column"},i.a.createElement("h4",{className:"text-secondary-heading"},"Follow me"),i.a.createElement(p,null,i.a.createElement("li",null,i.a.createElement("a",{href:""},"Dribble"),i.a.createElement("a",{href:""},"Github")),i.a.createElement("li",null,i.a.createElement("a",{href:""},"Linkedin"),i.a.createElement("a",{href:""},"Medium")),i.a.createElement("li",null))))))},h=Object(l.b)("div",{target:"e1jle6fg0"})("background:",function(e){return e.theme.brand.secondary},";color:#fff;margin-bottom:6rem;padding:6rem ",function(e){return e.theme.spacer.horizontal},";text-align:center;h1{margin-bottom:0;}z-index:9;"),M=function(e){var t=e.children;return i.a.createElement(h,null,i.a.createElement("h1",null,t))},N=M;M.propTypes={children:o.a.node.isRequired};var f=a(7),b=a.n(f),y=a(177),E=a(43),D=a(165),x=a.n(D),I=Object(l.b)("img",{target:"em0wb850"})("height:64px;margin:0;"),w=(a(172),function(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}),A=Object(l.b)("div",{target:"e12g0tm40"})("width:28px;height:28px;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;cursor:pointer;span{width:28px;height:2px;background-color:#1F1D1D;display:inline-block;position:relative;margin:.1em;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),opacity 0.55s ease;transform-origin:4px 0px;}&.is-opened{span{background-color:white;}span{transform:rotate(45deg) translate(-4px,-7px);}span:last-child{transform:rotate(-45deg) translate(0,0px);}}"),j=function(){function e(e){this.elm=e,this.path=e.querySelectorAll("path"),this.numPoints=10,this.duration=900,this.delayPointsArray=[],this.delayPointsMax=300,this.delayPerPath=250,this.timeStart=Date.now(),this.isOpened=!1,this.isAnimating=!1}var t=e.prototype;return t.toggle=function(){this.isAnimating=!0;for(var e=0;e<this.numPoints;e++)this.delayPointsArray[e]=Math.random()*this.delayPointsMax;!1===this.isOpened?this.open():this.close()},t.open=function(){this.isOpened=!0,this.elm.classList.add("is-opened"),this.timeStart=Date.now(),this.renderLoop()},t.close=function(){this.isOpened=!1,this.elm.classList.remove("is-opened"),this.timeStart=Date.now(),this.renderLoop()},t.updatePath=function(e){for(var t=[],a=0;a<this.numPoints;a++)t[a]=100*(1-w(Math.min(Math.max(e-this.delayPointsArray[a],0)/this.duration,1)));var n="";n+=this.isOpened?"M 0 0 V "+t[0]:"M 0 "+t[0];for(a=0;a<this.numPoints-1;a++){var i=(a+1)/(this.numPoints-1)*100,r=i-1/(this.numPoints-1)*100/2;n+="C "+r+" "+t[a]+" "+r+" "+t[a+1]+" "+i+" "+t[a+1]+" "}return n+=this.isOpened?"V 100 H 0":"V 0 H 0"},t.render=function(){if(this.isOpened)for(var e=0;e<this.path.length;e++)this.path[e].setAttribute("d",this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*e)));else for(e=0;e<this.path.length;e++)this.path[e].setAttribute("d",this.updatePath(Date.now()-(this.timeStart+this.delayPerPath*(this.path.length-e-1))))},t.renderLoop=function(){var e=this;this.render(),Date.now()-this.timeStart<this.duration+this.delayPerPath*(this.path.length-1)+this.delayPointsMax?requestAnimationFrame(function(){e.renderLoop()}):this.isAnimating=!1},e}(),z=function(e){function t(){return e.apply(this,arguments)||this}b()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.querySelector(".hamburger"),t=document.querySelectorAll(".global-menu__item"),a=document.querySelector(".shape-overlays"),n=new j(a);e.addEventListener("click",function(){if(n.isAnimating)return!1;if(n.toggle(),!0===n.isOpened){e.classList.add("is-opened");for(var a=0;a<t.length;a++)t[a].classList.add("is-opened")}else{e.classList.remove("is-opened");for(a=0;a<t.length;a++)t[a].classList.remove("is-opened")}})},a.render=function(){return i.a.createElement(A,{className:"hamburger action-link"},i.a.createElement("span",null),i.a.createElement("span",null))},t}(i.a.Component),T=Object(l.b)("header",{target:"e1hku6iy0"})("padding:1em 2em;margin:0 auto;position:fixed;width:100%;z-index:9;top:0;.container{align-items:center;display:flex;justify-content:space-between;a{line-height:0;}}@media screen and (max-width:767px){.container{width:100%;}}"),v=function(){return i.a.createElement(T,null,i.a.createElement("div",{className:"container"},i.a.createElement(E.Link,{to:"/"},i.a.createElement(I,{src:x.a})),i.a.createElement(z,null)))},C=a(178),L=a.n(C),O=function(e){function t(){return e.apply(this,arguments)||this}b()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=0,t=0,a=0,n=0,i=function(a){e=a.pageX,t=a.pageY,r()};var r=function(){var a=document.querySelector(".cursor-pointer");a.style.top=t+"px",a.style.left=e+"px"};L()(".action-link").hover(function(){L()(".cursor-pointer").addClass("active")},function(){L()(".cursor-pointer").removeClass("active")}),L()(document).ready(function(){var o=L()(window).width()>460?document:"body";L()(o).scroll(function(){var i,o;a!=L()(document).scrollLeft()&&(e-=a,a=L()(document).scrollLeft(),e+=a),n!=L()(document).scrollTop()&&(t-=n,n=L()(document).scrollTop(),t+=n),r(),i=L()(".js-first-section"),o=L()(".scroll-down"),i.length&&(i.get(0).getBoundingClientRect().top+45<0?o.addClass("hide"):o.removeClass("hide"))}),document.addEventListener("mousemove",i)})},a.render=function(){var e=this.props.children;return i.a.createElement(y.a,{theme:u.a},i.a.createElement(i.a.Fragment,null,i.a.createElement(K,null),i.a.createElement(v,null),e,i.a.createElement("div",{className:"content content--demo-1"},i.a.createElement("div",{className:"global-menu"},i.a.createElement("div",{className:"global-menu__wrap"},i.a.createElement("a",{className:"global-menu__item",href:"/"},"Me",i.a.createElement("span",null)),i.a.createElement("a",{className:"global-menu__item",href:"/present"},"Talk",i.a.createElement("span",null)))),i.a.createElement("svg",{className:"shape-overlays",viewBox:"0 0 100 100",preserveAspectRatio:"none"},i.a.createElement("path",{className:"shape-overlays__path"}),i.a.createElement("path",{className:"shape-overlays__path"}),i.a.createElement("path",{className:"shape-overlays__path"}))),!this.props.nofooter&&i.a.createElement(g,null),i.a.createElement("div",{className:"cursor-pointer"})))},t}(i.a.Component),k=O;O.propTypes={children:o.a.oneOfType([o.a.array,o.a.node]).isRequired};a(57);var S=a(179),Q=a.n(S),U=a(173),P=a.n(U),Y=Object(l.b)("div",{target:"e16fpdy20"})("display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));width:100%;"),Z=Object(l.b)("div",{target:"e16fpdy21"})("position:relative;&:before{content:'';display:block;padding-top:100%;}"),B=Object(l.b)("div",{target:"e16fpdy22"})("height:100%;left:0;position:absolute;top:0;width:100%;a{color:#fff;height:100%;left:0;opacity:0;padding:2rem;position:absolute;top:0;width:100%;z-index:10;transition:all 0.3s ease-in-out;text-decoration:none;&:hover{color:#fff;opacity:1;text-decoration:none;}}"),G=Object(l.b)("div",{target:"e16fpdy23"})("> div{height:100%;left:0;position:absolute !important;top:0;width:100%;> div{position:static !important;}}"),R=Object(l.b)("div",{target:"e16fpdy24"})("background-color:",function(e){return e.theme.brand.primary},";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1;"),_=function(e){var t=e.projectEdges;return i.a.createElement(Y,null,t.map(function(e){var t=P()(u.b);return i.a.createElement(Z,{key:e.node.fields.slug},i.a.createElement(B,null,i.a.createElement(G,null,i.a.createElement(Q.a,{fluid:e.node.frontmatter.cover.childImageSharp.fluid})),i.a.createElement(E.Link,{to:e.node.fields.slug},i.a.createElement(R,{style:{backgroundColor:t}}),i.a.createElement("h2",null,e.node.frontmatter.client),i.a.createElement("div",null,e.node.frontmatter.service))))}))};_.propTypes={projectEdges:o.a.array.isRequired};var F=a(168),W=a.n(F),X=a(164),q=a.n(X),H=function(e){var t,a,n,r,o=e.postNode,l=e.postPath,c=e.postSEO,s="/"===q.a.pathPrefix?"":q.a.pathPrefix;if(c){var m=o.frontmatter;t=m.title,a=o.excerpt,n=m.cover.childImageSharp.resize.src,r=q.a.siteUrl+s+l}else t=q.a.siteTitle,a=q.a.siteDescription,n=q.a.siteLogo;n=q.a.siteUrl+s+n;var u=q.a.siteUrl+q.a.pathPrefix,d=[{"@context":"http://schema.org","@type":"WebSite","@id":u,url:u,name:t,alternateName:q.a.siteTitleAlt?q.a.siteTitleAlt:""}];return c&&(d=[{"@context":"http://schema.org","@type":"BlogPosting","@id":r,url:r,name:t,alternateName:q.a.siteTitleAlt?q.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:n},description:a,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:q.a.author},publisher:{"@type":"Organization",name:q.a.author,logo:{"@type":"ImageObject",url:q.a.siteUrl+s+q.a.siteLogo}},isPartOf:u,mainEntityOfPage:{"@type":"WebSite","@id":u}}]),i.a.createElement(W.a,null,i.a.createElement("html",{lang:q.a.siteLanguage}),i.a.createElement("title",null,t),i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),i.a.createElement("meta",{property:"og:locale",content:q.a.ogLanguage}),i.a.createElement("meta",{property:"og:site_name",content:q.a.ogSiteName?q.a.ogSiteName:""}),i.a.createElement("meta",{property:"og:url",content:c?r:u}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:a}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:q.a.siteFBAppID?q.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:q.a.userTwitter?q.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:url",content:q.a.siteUrl}),i.a.createElement("meta",{name:"twitter:description",content:a}),i.a.createElement("meta",{name:"twitter:image",content:n}))},K=H;H.propTypes={postNode:o.a.object,postPath:o.a.string,postSEO:o.a.bool},a.d(t,"a",function(){return m}),a.d(t,!1,function(){return g}),a.d(t,"b",function(){return N}),a.d(t,"c",function(){return k}),a.d(t,!1,function(){return v}),a.d(t,!1,function(){}),a.d(t,"d",function(){return K})},710:function(e,t,a){e.exports=a.p+"static/circle-on-circle-8f05bb5c4cc8cb62cf60d6e6a855a27f.png"},711:function(e,t,a){e.exports=a.p+"static/devices-41417d26e3d1c368b71533a04cd6a7c6.png"},712:function(e,t,a){e.exports=a.p+"static/slide-abstract-0161236c6f509b86a0f101c0c76edc45.png"},713:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzhweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMzggMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NjEuMDAwMDAwLCAtMjk2LjAwMDAwMCkiIHN0cm9rZT0iIzFGODBFNyIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjUuMDAwMDAwLCAyOTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjA0NjE2NTQ0LDEyLjA5MiBDNy43MTQ1ODA4NiwxMi4wOTIgOS4xMzk2NDA4OSwxMS41MDA0MDMyIDEwLjMyMDUxODQsMTAuMzIwMzUyOSBDMTEuNTAxNTYxMyw5LjEzOTk3MTc2IDEyLjA5Miw3LjcxNDkxMTczIDEyLjA5Miw2LjA0NiBDMTIuMDkyLDQuMzc2OTIyODQgMTEuNTAxNTYxMywyLjk1MjUyNDU0IDEwLjMyMDUxODQsMS43NzE2NDcwNyBDOS4xMzk0NzU0NiwwLjU5MDc2OTYwNSA3LjcxNDU4MDg2LC03Ljk5MzYwNTc4ZS0xNSA2LjA0NjE2NTQ0LC03Ljk5MzYwNTc4ZS0xNSBDNC4zNzcyNTM3MSwtNy45OTM2MDU3OGUtMTUgMi45NTIxOTM2NywwLjU5MDc2OTYwNSAxLjc3MTMxNjIsMS43NzE2NDcwNyBDMC41OTA5MzUwNDEsMi45NTI2ODk5OCAyLjgxNTUyNTU5ZS0xMyw0LjM3NzA4ODI3IDIuODE1NTI1NTllLTEzLDYuMDQ2IEMyLjgxNTUyNTU5ZS0xMyw3LjcxNDkxMTczIDAuNTkwMjczMjk5LDkuMTM5OTcxNzYgMS43NzEzMTYyLDEwLjMyMDM1MjkgQzIuOTUyNjg5OTgsMTEuNTAwODk5NSA0LjM3NzA4ODI3LDEyLjA5MiA2LjA0NjE2NTQ0LDEyLjA5MiBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS4wNDk0MTU1LC0yLjIyMDQ0NjA1ZS0xNCBDMjcuMzc5NzE1MiwtMi4yMjA0NDYwNWUtMTQgMjUuOTUzNjI2NywwLjU5MDk5MDE0MiAyNC43NzIxNDI5LDEuNzcyMzA4NDQgQzIzLjU5MTgxNzYsMi45NTM3OTIyMyAyMyw0LjM3ODcyMjI2IDIzLDYuMDQ4MjU3IEMyMyw3LjcxNzc5MTc0IDIzLjU5MTgxNzYsOS4xNDMzODM3NiAyNC43NzIxNDI5LDEwLjMyNDIwNTYgQzI1Ljk1MzYyNjcsMTEuNTA1MzU4NCAyNy4zNzk3MTUyLDEyLjA5NjUxNCAyOS4wNDk0MTU1LDEyLjA5NjUxNCBDMzAuNzE3NzkxNywxMi4wOTY1MTQgMzIuMTQzODgwMiwxMS41MDQ2OTY0IDMzLjMyNTM2NCwxMC4zMjQyMDU2IEMzNC41MDY4NDc4LDkuMTQzMzgzNzYgMzUuMDk3NTA3LDcuNzE3NzkxNzQgMzUuMDk3NTA3LDYuMDQ4MjU3IEMzNS4wOTc1MDcsNC4zNzg1NTY3NiAzNC41MDY4NDc4LDIuOTUzNjI2NzQgMzMuMzI1MzY0LDEuNzcyMzA4NDQgQzMyLjE0Mzg4MDIsMC41OTA5OTAxNDIgMzAuNzE3NzkxNywtMi4yMjA0NDYwNWUtMTQgMjkuMDQ5NDE1NSwtMi4yMjA0NDYwNWUtMTQgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},714:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgNDIgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QYXRoPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjUuMDAwMDAwLCAtMzMzLjAwMDAwMCkiIGZpbGw9IiM2NjY2NjYiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2NS4wMDAwMDAsIDI5MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS4yODc3NDkyLDQzLjE3NzMxOTQgQzM4LjM0NDc2NTMsNDIuODgwNjgzNSAzNy40MjA4MTE2LDQyLjk1NzM1OTYgMzYuNTE0NTAwNCw0My4zOTg4MjgzIEMzNS42MDgxODkyLDQzLjg0MDI5NjkgMzUuMDA0NTc2NSw0NC41NDEwMzE2IDM0LjcwNDY1MzMsNDUuNDk5NDgzMiBDMzMuNzYyMjY0MSw0OC40NDgyMjI2IDMyLjAxNjI0NzMsNTAuODM0ODY0IDI5LjQ2ODk4MTYsNTIuNjU4NDM5MyBDMjYuOTIyOTA1Myw1NC40ODI1OTU1IDI0LjA2NDIxOTEsNTUuMzk1MTU3NiAyMC44OTQ1MDg3LDU1LjM5NTE1NzYgQzE3LjcyNTU5MTMsNTUuMzk1MTU3NiAxNC44Njc4OTYyLDU0LjQ4MjAxNDYgMTIuMzIwNjMwNSw1Mi42NTg0MzkzIEM5Ljc3Mzk1OTUsNTAuODM0MjgzMiA4LjAyODkzMzg0LDQ4LjQ0ODIyMjYgNy4wODU1NTM1LDQ1LjQ5OTQ4MzIgQzYuNzg0MDQ0NDYsNDQuNTQxMjI1MiA2LjE4OTM1MjA5LDQzLjg0MDI5NjkgNS4zMDMwNjIyMiw0My4zOTg4MjgzIEM0LjQxNjM3NTg5LDQyLjk1NzU1MzMgMy41MDE3MzkwMSw0Mi44ODA2ODM1IDIuNTU4MzU4NjcsNDMuMTc3MzE5NCBDMS41NzczMTQ0OCw0My40NzE2MzE5IDAuODYwNzEwMTcyLDQ0LjA1MjEyNDQgMC40MDc1NTQ1ODIsNDQuOTE3NDQxNyBDLTAuMDQ1MjA0NTQ2Nyw0NS43ODI3NTg5IC0wLjEyMDkyODcwOSw0Ni42Nzg2NjkyIDAuMTgxMzczMjQ4LDQ3LjU5ODM5NTUgQzEuNTc2NzE5NzksNTIuMDU5MTY1IDQuMTgwMjgzMDEsNTUuNjUxOTA2NSA3Ljk5MTA3MTc2LDU4LjM3OTMzMDcgQzExLjgwMjI1Nyw2MS4xMDY3NTQ5IDE2LjEwMzQ2ODcsNjIuNDY4OTE4IDIwLjg5NTEwMzQsNjIuNDY4OTE4IEMyNS42ODYxNDM0LDYyLjQ2ODkxOCAyOS45ODg1NDQ1LDYxLjEwNjc1NDkgMzMuNzk5NTMxNSw1OC4zNzkzMzA3IEMzNy42MDc5NDE1LDU1LjY1MDU1MTEgNDAuMjExNzAyOSw1Mi4wNTkxNjUgNDEuNjA3NjQ0MSw0Ny41OTgzOTU1IEM0MS45MTE1MzE5LDQ2LjY3ODY2OTIgNDEuODM1NjA5NSw0NS43ODI3NTg5IDQxLjM4MjQ1NCw0NC45MTc0NDE3IEM0MC45Mjc5MTA4LDQ0LjA1MjEyNDQgNDAuMjI5MzQ1NCw0My40NzMxODA5IDM5LjI4Nzc0OTIsNDMuMTc3MzE5NCBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},715:function(e,t,a){e.exports=a.p+"static/slides-ask-7f0bf4c0944fb3c2d3936edb5a1817a0.svg"},716:function(e,t,a){e.exports=a.p+"static/slides-img-1-1e6d6355dda6d95c9b1afe3aa7700bf1.png"},717:function(e,t,a){e.exports=a.p+"static/slides-img-3-8cdd65652f4eb9252773c82517265107.png"},718:function(e,t,a){e.exports=a.p+"static/slides-img-2-ec8c68a29ed672d146d7e7632140d7c7.png"}}]);
//# sourceMappingURL=component---src-pages-present-jsx-47d20d53bec184e9dbe0.js.map