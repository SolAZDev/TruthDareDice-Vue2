(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9c212104"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],r=s[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=s[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"386c":function(t,e,r){},"4ea8":function(t,e,r){},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"},bf6d:function(t,e,r){"use strict";var a=r("386c"),s=r.n(a);s.a},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{staticClass:"justify-center",attrs:{app:"",color:"grey darken-3",dark:""}},[r("div",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%"}},[r("div",{staticClass:"headline"},[t._v("Truth or Dare or Dice")])])]),r("v-content",[r("router-view")],1)],1)},n=[],i=(r("d3b7"),r("ac1f"),r("1276"),r("96cf"),r("1da1")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},c=[],l=a["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),u=l,f=r("2877"),d=r("6544"),h=r.n(d),v=r("62ad"),p=r("a523"),m=r("adda"),g=r("0fd9"),y=Object(f["a"])(u,o,c,!1,null,null,null),b=y.exports;h()(y,{VCol:v["a"],VContainer:p["a"],VImg:m["a"],VRow:g["a"]});var x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",{staticClass:"flex-column ma-0 fill-height"},[r("v-col",[r("v-card",[r("v-row",{staticClass:"fill-height"},[r("v-col",{staticClass:"flex-grow-1"},[r("v-card-title",{attrs:{grow:""}},[r("div",{staticClass:"headline"},[t._v("Players")])]),r("v-card-subtitle",[t._v("Who's playing? ("+t._s(t.players.length)+" in game)")])],1),r("v-col",{staticClass:"flex-grow-0 align-center"},[r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"grey darken-2"},on:{click:function(e){t.confPlayers=!t.confPlayers}}},[r("v-icon",[t._v(t._s(t.confPlayers?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.confPlayers,expression:"confPlayers"}]},[r("v-card-text",[t._v("Add, Edit or Remove Players")]),r("v-simple-table",[r("tbody",t._l(t.players,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"flex-grow-1"},[r("v-text-field",{attrs:{label:"Name",autofocus:""},model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"player.name"}})],1),r("td",{staticClass:"flex-grow-0"},[r("v-btn",{staticClass:"mx-2 text-right",attrs:{fab:"",dark:"",small:"",color:"gray"},on:{click:function(r){return t.removePlayer(e.id)}}},[r("v-icon",[t._v("mdi-minus")])],1)],1)])})),0),r("v-btn",{staticClass:"mx-2 text-right",attrs:{fab:"",dark:"",color:"gray"},on:{click:function(e){return t.addPlayer()}}},[r("v-icon",[t._v("mdi-plus ")])],1)],1)],1)])],1)],1),r("v-col",[r("v-card",[r("v-row",{staticClass:"fill-height"},[r("v-col",{staticClass:"flex-grow-accent-1"},[r("v-card-title",{staticClass:"headline"},[t._v("Game Settings")]),r("v-card-subtitle",[t._v("Difficutly and Game length")])],1),r("v-col",{staticClass:"flex-grow-0 align-content-center"},[r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"grey darken-2"},on:{click:function(e){t.confGame=!t.confGame}}},[r("v-icon",[t._v(t._s(t.confGame?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.confGame,expression:"confGame"}],attrs:{id:"config"}},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{xs:"3",sm:"2"}},[r("div",{staticClass:"title"},[t._v("Difficutly")]),r("div",{staticClass:"subtitle-2"},[t._v(t._s(t.difficultyText[t.difficulty]))])]),r("v-col",{attrs:{xs:"9",sm:"10"}},[r("v-slider",{attrs:{min:"0",max:"3",ticks:"always","tick-size":"4",step:"1"},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}})],1)],1),r("v-row",[r("v-col",{staticClass:"text-center",attrs:{xs:"3",sm:"2"}},[r("div",{staticClass:"headline"},[t._v("Truns")]),r("div",{staticClass:"subtitle-2"},[t._v(t._s(t.turns))])]),r("v-col",{attrs:{xs:"9",sm:"10"}},[r("v-slider",{attrs:{min:"5",max:"100"},model:{value:t.turns,callback:function(e){t.turns=e},expression:"turns"}})],1)],1)],1)])],1)],1),r("v-col",{attrs:{"align-center":"","justify-center":""}},[r("v-row",[r("v-col",{attrs:{cols:"5"}}),r("v-col",{attrs:{cols:"2"}},[r("v-btn",{staticClass:"mx-2",attrs:{raised:"",large:"",color:"primary",disabled:!t.validNames},on:{click:function(e){return t.beginGame()}}},[t._v("Begin Game")])],1),r("v-col",{attrs:{cols:"5"}})],1)],1)],1)],1)],1)},C=[],w=(r("4de4"),r("4160"),r("c975"),r("a434"),r("b0c0"),r("5319"),r("159b"),r("5530")),_=r("2f62"),P=a["a"].extend({name:"GameSetup",data:function(){return{confPlayers:!0,confGame:!1,difficultyText:["Normal / Safe","Sexy (NSFW Warning)","Hot (NSFW)","Progressive (NSFW)"]}},created:function(){},computed:Object(w["a"])({validNames:function(){var t=this,e=!1;return this.players.length>1&&(e=!0,this.players.forEach((function(r){t.isEmptyOrWhiteSpace(r.name)&&(e=!1)}))),e}},Object(_["c"])({players:function(t){return t.players},difficulty:function(t){return t.difficulty},turns:function(t){return t.maxTurns}})),methods:{isEmptyOrWhiteSpace:function(t){return!(t.replace(/\s/g,"").length>0)},addPlayer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.players.push({id:this.players.length,name:t,score:0})},removePlayer:function(t){this.players.splice(this.players.indexOf(this.players.filter((function(e){return e.id==t}))[0]),1)},beginGame:function(){var t={};t.players=this.players,t.turns=this.turns,t.difficulty=this.difficulty,this.$store.dispatch("setupGame",t),this.$router.push("/Game")}}}),k=P,D=(r("bf6d"),r("8336")),j=r("b0af"),T=r("99d9"),S=r("0789"),V=r("132d"),A=r("1f4f"),R=r("ba0d"),G=r("8654"),O=Object(f["a"])(k,x,C,!1,null,"acaf1c7a",null),$=O.exports;h()(O,{VBtn:D["a"],VCard:j["a"],VCardSubtitle:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:v["a"],VContainer:p["a"],VExpandTransition:S["a"],VIcon:V["a"],VRow:g["a"],VSimpleTable:A["a"],VSlider:R["a"],VTextField:G["a"]});var E=a["a"].extend({name:"App",components:{HelloWorld:b,GameSetup:$},created:function(){this.getGameData()},methods:{getGameData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAndParse("data/Truths.txt");case 2:return e.t0=e.sent,e.next=5,t.getAndParse("data/Dares.txt");case 5:return e.t1=e.sent,e.next=8,t.getAndParse("data/DaresSexy.txt");case 8:return e.t2=e.sent,e.next=11,t.getAndParse("data/DaresHot.txt");case 11:return e.t3=e.sent,e.next=14,t.getAndParse("data/DicePlace.txt");case 14:return e.t4=e.sent,e.next=17,t.getAndParse("data/DiceAction.txt");case 17:e.t5=e.sent,r={truths:e.t0,daresSafe:e.t1,daresSexy:e.t2,daresHot:e.t3,dicePlace:e.t4,diceAction:e.t5},console.log(r),t.$store.dispatch("setGameData",r);case 21:case"end":return e.stop()}}),e)})))()},getAndParse:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.text().then((function(t){return t.split("\n")}));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()}}}),N=E,q=r("7496"),M=r("40dc"),W=r("a75b"),F=Object(f["a"])(N,s,n,!1,null,null,null),B=F.exports;h()(F,{VApp:q["a"],VAppBar:M["a"],VContent:W["a"]});var H=r("9483");function L(t){var e=Math.floor(Math.random()*t);return e}function I(t,e){var r=!1,a=-1;while(!r)a=L(t),r=a!=e;return a}Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].use(_["a"]);var U=new _["a"].Store({state:{players:[],maxTurns:0,difficulty:0,progressive:!1,data:{}},getters:{getPlayer:function(t){return function(e){return t.players.filter((function(t){return t.id==e}))[0]}},getPlayerCount:function(t){return t.players.length},getRandomPlayer:function(t){return t.players.filter((function(e){return e.id==L(t.players.length)}))[0]},getPlayers:function(t){return t.players},getTurns:function(t){return t.maxTurns},getDifficulty:function(t){return t.difficulty},getProgressive:function(t){return t.progressive},getRandom:function(t){return function(t){return L(t)}},getTruthArray:function(t){return t.data.truths},getDare:function(t){return function(e){var r="",a=[];switch(e){case 0:a=t.data.daresSafe;break;case 1:a=t.data.daresSexy;break;case 2:case 3:a=t.data.daresHot;break}var s=L(a.length);return console.log("Requesting Dare at Level: "+e+"ID: "+s),r=a[s],console.log(r),r}},getDiceArea:function(t){return t.data.dicePlace},getDiceAct:function(t){return t.data.diceAction}},mutations:{setPlayers:function(t,e){t.players=e},scoreUp:function(t,e){t.players.filter((function(t){return t.id==e}))[0].score++},setTurns:function(t,e){t.maxTurns=e},setDifficulty:function(t,e){t.difficulty=e,e>=3&&(t.progressive=!0)},setNewDifficulty:function(t,e){t.difficulty=e},setData:function(t,e){t.data=e},resetScores:function(t){t.players.forEach((function(t){t.score=0}))}},actions:{setupGame:function(t,e){console.log("Setting up "+e),t.commit("setPlayers",e.players),t.commit("setTurns",e.turns),t.commit("setDifficulty",e.difficulty)},setDifficulty:function(t,e){t.commit("setNewDifficulty",e)},scoreUp:function(t,e){t.commit("scoreUp",e)},setGameData:function(t,e){t.commit("setData",e)},resetScores:function(t){t.commit("resetScores")}},modules:{}}),J=r("f309");a["a"].use(J["a"]);var z=new J["a"]({}),Q=r("8c4f"),K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:""}},[t.ready?r("v-row",{staticClass:"align-start grow-1"},[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"text-center",attrs:{raised:""}},[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("b",{staticClass:"headline"},[t._v(t._s(t.playerName))])]),r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"headline",domProps:{innerHTML:t._s(t.todRequest)}},[t._v(t._s(t.todRequest))])])],1)],1)],1)],1):t._e(),r("v-row",{staticClass:"justify-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"justify-center"},[r("v-col",{staticClass:"text-center"},[r("v-btn",{attrs:{raised:"",large:"",color:"primary"},on:{click:function(e){return t.getTruth()}}},[t._v("Truth")])],1),r("v-col",{staticClass:"text-center"},[r("v-btn",{attrs:{raised:"",large:"",color:"primary",disabled:t.difficulty<1},on:{click:function(e){return t.rollDice()}}},[t._v("Dice")])],1),r("v-col",{staticClass:"text-center"},[r("v-btn",{attrs:{raised:"",large:"",color:"primary"},on:{click:function(e){return t.getDare()}}},[t._v("Dare")])],1)],1)],1),r("v-col",{attrs:{cols:"12"}},[r("v-row",[r("v-col",{attrs:{cols:"3"}}),r("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[r("v-btn",{attrs:{raised:"",large:"",color:"primary",disabled:!t.canContinue},on:{click:function(e){return t.decline()}}},[t._v("Decline")])],1),r("v-col",{attrs:{cols:"2"}}),r("v-col",{staticClass:"text-center",attrs:{cols:"2"}},[r("v-btn",{attrs:{raised:"",large:"",color:"primary",disabled:!t.canContinue},on:{click:function(e){return t.accept()}}},[t._v("Accept")])],1),r("v-col",{attrs:{cols:"3"}})],1)],1)],1),r("v-footer",{staticClass:"full-width align-end"})],1)},X=[],Y=(r("4d63"),r("25f0"),a["a"].extend({data:function(){return{ready:!1,canContinue:!1,maxTurn:0,activeTurn:0,activePlayerData:{},activePlayer:-1,playerCount:0,todRequest:""}},created:function(){this.maxTurn=this.$store.getters.getTurns,this.playerCount=this.$store.getters.getPlayerCount,this.nextTurn()},computed:Object(w["a"])({playerName:function(){return this.$store.getters.getPlayer(this.activePlayer).name},gameProgress:function(){return Math.round(100*this.activeTurn/this.maxTurn)}},Object(_["b"])({truths:"getTruthArray",players:"getPlayers",difficulty:"getDifficulty",dPlace:"getDiceArea",dAct:"getDiceAct"})),methods:{getTruth:function(){this.todRequest=this.parseReplacements(this.truths[L(this.truths.length)]),this.canContinue=!0},getDare:function(){this.todRequest=this.parseReplacements(this.$store.getters.getDare(this.difficulty)),this.canContinue=!0},rollDice:function(){var t=this.dPlace[L(this.dPlace.length)],e=this.dAct[L(this.dAct.length)];this.todRequest=this.parseReplacements("# "+e+" @'s "+t),this.canContinue=!0},randomPlayer:function(){var t=I(this.players.length,this.activePlayer),e=this.players[t];return e},parseReplacements:function(t){return t.replace(new RegExp("#","ig"),"<b>"+this.playerName+"</b>").replace(new RegExp("@","ig"),"<b>"+this.randomPlayer().name+"</b>").replace(new RegExp("%","g"),"<b>"+Math.round(Math.random()*(this.difficulty/4)*10)+"</b>")},accept:function(){this.$store.dispatch("scoreUp",this.activePlayer),console.log("Accepted, point granted"),this.nextTurn()},decline:function(){console.log("Declined"),this.nextTurn()},nextTurn:function(){this.canContinue=!1,this.activePlayer++,this.activePlayer>this.playerCount-1&&(this.activeTurn++,this.activePlayer=0),this.activeTurn>this.maxTurn&&this.endGame(),this.activePlayerData=this.$store.getters.getPlayer(this.activePlayer),this.todRequest="Truth or Dare?",console.log("Turn "+this.activeTurn+" - Player: "+this.activePlayerData.name),this.setDifficulty(),this.ready=!0},endGame:function(){console.log("GAMEOVER"),this.$store.getters.getProgressive&&this.$store.dispatch("setDifficulty",3),this.$router.push("/Results")},setDifficulty:function(){if(this.$store.getters.getProgressive){var t=this.$store.getters.getDifficulty;this.gameProgress<100&&(t=2),this.gameProgress<50&&(t=1),this.gameProgress<20&&(t=0),console.log("Progress is at "+this.gameProgress+"%, so the new difficutly is "+t),this.$store.dispatch("setDifficulty",t)}}}})),Z=Y,tt=r("553a"),et=Object(f["a"])(Z,K,X,!1,null,null,null),rt=et.exports;h()(et,{VBtn:D["a"],VCard:j["a"],VCol:v["a"],VContainer:p["a"],VFooter:tt["a"],VRow:g["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height"},[r("v-card",{staticClass:"flex-grow-1",attrs:{raised:""}},[r("div",{staticClass:"headline text-center header"},[t._v("Results")]),r("v-divider",{staticStyle:{margin:"15px 20px"}}),r("v-simple-table",{staticClass:"text-center"},[r("thead",[r("td",{staticClass:"flex-grow-1"},[t._v("Player")]),r("td",{staticClass:"flex-grow-0"},[t._v("Score")])]),t._l(t.players,(function(e){return r("tbody",{key:e.id},[r("td",{staticClass:"flex-grow-1"},[r("div",{staticClass:"subtitle-1"},[t._v(t._s(e.name))])]),r("td",{staticClass:"flex-grow-0"},[r("div",{staticClass:"subtitle-1"},[t._v(t._s(e.score))])])])}))],2)],1),r("v-row",{staticClass:"justify-center align-center"},[r("v-col",{staticClass:"text-center"},[r("v-btn",{attrs:{raised:"",large:"",disabled:t.players.lenght<1},on:{click:function(e){return t.resume()}}},[t._v("Continue Game")])],1),r("v-col",{staticClass:"text-center"},[r("v-btn",{attrs:{raised:"",large:"",disabled:t.players.lenght<1},on:{click:function(e){return t.restart()}}},[t._v("Restart Game")])],1),r("v-col",{staticClass:"text-center"},[r("v-btn",{attrs:{raise:"",large:""},on:{click:function(e){return t.setup()}}},[t._v("Back to Setup")])],1)],1)],1)},st=[],nt=a["a"].extend({computed:Object(w["a"])({},Object(_["b"])({players:"getPlayers"})),methods:{resume:function(){this.$router.push("/Game")},restart:function(){this.$store.dispatch("resetScores"),this.resume()},setup:function(){this.$router.push("/")}}}),it=nt,ot=(r("fc1d"),r("ce7e")),ct=Object(f["a"])(it,at,st,!1,null,"03f4cb66",null),lt=ct.exports;h()(ct,{VBtn:D["a"],VCard:j["a"],VCol:v["a"],VContainer:p["a"],VDivider:ot["a"],VRow:g["a"],VSimpleTable:A["a"]}),a["a"].use(Q["a"]);var ut=[{path:"/",name:"Game Setup",component:$},{path:"/Game",name:"Truth or Dare or Dice",component:rt},{path:"/Results",name:"Game Results",component:lt},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],ft=new Q["a"]({routes:ut}),dt=ft;a["a"].config.productionTip=!1,new a["a"]({store:U,vuetify:z,router:dt,render:function(t){return t(B)}}).$mount("#app")},fc1d:function(t,e,r){"use strict";var a=r("4ea8"),s=r.n(a);s.a}});
//# sourceMappingURL=app.d23aa0a7.js.map