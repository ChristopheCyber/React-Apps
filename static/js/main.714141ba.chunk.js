(this["webpackJsonpshow-cards"]=this["webpackJsonpshow-cards"]||[]).push([[0],{240:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(12),c=n.n(a),s=n(45),r=n.n(s),o=(n(55),n(46)),l=n(47),d=n(49),u=n(48),m=(n(56),n(57),n(58),function(e){return Object(i.jsxs)("div",{className:"card-container "+e.cardProp3+"-card",children:[Object(i.jsxs)("strong",{children:[" ",e.cardProp2.name," "]}),console.log("In Card ",e.cardProp2.id,"=>",e.cardProp2.name,"prop1.cardProp3=>",e.cardProp3),Object(i.jsx)("img",{src:n(59)("./img".concat(e.cardProp2.id,".jpg")).default,alt:"Pic ".concat(e.cardProp2.id)}),Object(i.jsx)("span",{children:Object(i.jsxs)("a",{href:e.cardProp2.website,target:"_blank",rel:"noopener noreferrer",children:[Object(i.jsx)("strong",{children:"Website Info: "}),e.cardProp2.cardname]})}),Object(i.jsx)("strong",{children:" Pic content : "}),Object(i.jsxs)("span",{children:["One of my skills","img-class"===e.cardProp3?".":" (filtered)"]})]})}),p=n(21),g=n.n(p),f={fpsLimit:60,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"grab"},onHover:{enable:!0,mode:"push"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:50,duration:.6}}},particles:{color:{value:"#ff0000",animation:{enable:!0,speed:40,sync:!0}},links:{color:"#ffffff",distance:150,enable:!0,opacity:0,width:1},collisions:{enable:!0},move:{direction:"random",enable:!0,outMode:"out",random:!0,speed:2,straight:!0},number:{density:{enable:!0,value_area:1e3},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:7}},detectRetina:!0},j={detectRetina:!0,fpsLimit:60,interactivity:{detectsOn:"window",events:{onclick:{enable:!0,mode:"push"},onHover:{mode:"trail",enable:!0}},modes:{repulse:{distance:100,duration:.2},trail:{delay:.08,quantity:1.5,particles:{color:{value:"#ff0000",animation:{enable:!0,speed:150,sync:!0}},collisions:{enable:!0},links:{enable:!0},move:{outMode:"out",speed:1},size:{value:5,animation:{enable:!0,speed:4,minimumValue:1,sync:!0,startValue:"min",destroy:"max"}}}},push:{particles_nb:34},remove:{particles_nb:20,duration:.2,distance:10}},resize:!0},particles:{color:{color:"random",animation:{enable:!0,sync:!1,speed:50},value:"#f00"},links:{color:"random",distance:150,enable:!0,opacity:1,width:1},collisions:{enable:!0},move:{direction:"random",enable:!0,outMode:"bounce",random:!0,speed:2,straight:!1},number:{density:{enable:!0}},opacity:{animation:{enable:!0,minimumValue:.3,speed:.5},value:.8,random:{enable:!0,minimumValue:.3}},size:{animation:{enable:!0,minimumValue:1,speed:3},value:3,random:{enable:!0,minimumValue:1}}}},h=function(e){return Object(i.jsxs)("div",{className:"card-list-divStyle "+e.cardsPropImg+"-list",children:[Object(i.jsx)("div",{id:"tsparticles",children:Object(i.jsx)(g.a,{options:j})}),e.cardsProp1.map((function(t){return Object(i.jsx)(m,{cardProp2:t,cardProp3:e.cardsPropImg},t.id)}))]})},b=(n(240),function(e){var t=e.propPlaceHolder,n=e.handleChangeFct;return Object(i.jsx)("input",{className:"search-box",type:"search",name:"search1",placeholder:t,onChange:n})}),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).methodHandleChange=function(e){console.log("Change Event !!!"),i.setState({searchTxt1:e.target.value},(function(){console.log("in Event deb searchTxt1=",i.state.searchTxt1," classAnim=",t),function(e){console.log("in fctClassAnim()=> eltSearch=",e);var i=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));console.log("in fctClassAnim()=> filteredCards2.length=",i.length),t=i.length<n.length?"card-list-filtered":"img-class";console.log("in fctClassAnim()=> filteredCards2.length=",i.length,"=> classAnim=",t),console.log("document.querySelector('.img-class')=",document.querySelector(".img-class"))}(i.state.searchTxt1),console.log("in Event fin1 classAnim=",t,"; this.state.picContentType=",i.state.picContentType),i.setState({picContentType:t},console.log("in Event fin2 classAnim= ",t,"; this.state.picContentType= ",i.state.picContentType,"; constPicContentType= ",a))}));var t="img-class",n=i.state.cards,a=i.state.picContentType},i.state={cards:[],searchTxt1:"",picContentType:"img-class"},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/json-data-users.json").then((function(e){return e.json()})).then((function(t){return e.setState({cards:t})}))}},{key:"render",value:function(){var e,t=this.state,n=t.cards,a=t.searchTxt1,c=t.picContentType,s=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));console.log("const filteredCards.length=",s.length),e=s.length>1?" ( "+s.length+" cards in list now ) ":" ( "+s.length+" card in list now ) ";var r="bigLow-search";return s.length<n.length&&(r="bigLow-search-filtered"),Object(i.jsxs)("div",{className:"App img-class",children:[Object(i.jsx)("h1",{children:" Cards Selection Board "}),Object(i.jsx)("label",{children:Object(i.jsx)("i",{className:"bigLow js-grid",children:"Search in cards titles ->"})}),Object(i.jsx)(b,{propPlaceHolder:"Type text for Searching",handleChangeFct:this.methodHandleChange}),Object(i.jsx)("label",{children:Object(i.jsxs)("i",{className:"bigLow "+r,children:["\xa0 ",e]})}),Object(i.jsx)(h,{cardsProp1:s,cardsPropImg:c}),Object(i.jsx)("div",{id:"tsparticles",children:Object(i.jsx)(g.a,{options:f})})]})}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){var i={"./img1.jpg":60,"./img10.jpg":61,"./img11.jpg":62,"./img12.jpg":63,"./img12b.jpg":64,"./img13.jpg":65,"./img2.jpg":66,"./img3.jpg":67,"./img4.jpg":68,"./img4c.jpg":69,"./img5.jpg":70,"./img6.jpg":71,"./img7.jpg":72,"./img8.jpg":73,"./img8b.jpg":74,"./img9.jpg":75};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=c,e.exports=a,a.id=59},60:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img1.031af203.jpg"},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img10.f9a102f8.jpg"},62:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img11.f5eb563c.jpg"},63:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img12.76e7df93.jpg"},64:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img12b.e4572e82.jpg"},65:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img13.5752f586.jpg"},66:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img2.f6bfd64c.jpg"},67:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img3.a06785df.jpg"},68:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img4.961cedf9.jpg"},69:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img4c.9f69afa7.jpg"},70:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img5.53c9eda6.jpg"},71:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img6.78cd670d.jpg"},72:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img7.86b7169b.jpg"},73:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img8.f83c1d3e.jpg"},74:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img8b.0f3e8ebe.jpg"},75:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img9.5b3672d2.jpg"}},[[241,1,2]]]);
//# sourceMappingURL=main.714141ba.chunk.js.map