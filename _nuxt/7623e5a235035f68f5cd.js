(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(t,e,n){var o=n(198);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(26).default)("36f8d1e0",o,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o=n(140);n.n(o).a},198:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,"\n.stage-info {\n\tline-height: 1 !important;\n}\n.stage-info-chip {\n\tz-index: 0;\n}\n.inspection-time {\n\tfont-size: 70%;\n\topacity: 0.7;\n\tdisplay: flex;\n\tline-height: 1.5em;\n\tmargin-left: 0.5em;\n}\n.stage-info-right {\n\tmargin-left: 0.6rem;\n}\n.time-info {\n\tposition: relative;\n\talign-self: flex-end;\n}\n.time-spacer {\n\twidth: 0.8em;\n\ttext-align: center;\n\talign-self: flex-end;\n}\n",""])},200:function(t,e,n){var o=n(420);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(26).default)("d4be674c",o,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n(136);var o=n(132),s=n.n(o),i=(n(51),n(52),n(38),n(133)),a=n(147),r=n.n(a),l=n(148),c=n(182),U=n.n(c),F=n(194),u=n.n(F),L={props:["replay","stages","mode","time","cross","isXcross","oll","isOll2Look","pll","pllLooks","cll","rouxBlock","scrambleText"],data:function(){return{}},computed:{stagesInfo:function(){var t=this;return l.a.stagesData[this.mode||"cfop"].map(function(e,n,o){var a=e.id,c=e.name,U=e.color,F=e.dark,u=e.showInspection,L=t.stages[a]||{time:null},R=0===n?null:t.stages[o[n-1].id],D=R?R.time:null,B=(L.time||t.time)-(null===D?0:D),h=null!==L.time&&0!==L.sequence.length,v=h?L.sequence.length:null,m=h?(v/(B/1e3)).toFixed(2):null,p="roux"===t.mode&&R&&R.orientation?R.orientation.down:t.cross,f=h&&u?Object(i.g)({stage:L,cross:p,previousTime:D}):{inspection:null,execution:null},d=f.inspection,g=f.execution,b=[];"unknown"===a&&(t.cross&&b.push({text:"".concat(l.a.faceColors[t.cross].name," Cross"),color:l.a.faceColors[t.cross].color,textColor:Object(i.p)(l.a.faceColors[t.cross].color)}),t.isXcross&&b.push({text:"XCross",color:"#4A148C",textColor:Object(i.p)("#4A148C")})),"oll"===a&&(t.oll&&b.push({text:t.oll.name,color:"#f5f5f5",textColor:Object(i.p)("#f5f5f5")}),t.isOll2Look&&b.push({avatar:"2",text:"Look",color:"green",textColor:"white"})),"pll"===a&&(t.pll&&b.push({text:t.pll.name,color:"#FFEE58",textColor:Object(i.p)("#FFEE58")}),t.pllLooks&&t.pllLooks.length>1&&b.push({avatar:t.pllLooks.length.toString(),text:"Look",color:"green",textColor:"white"})),"cll"===a&&t.cll&&b.push({text:t.cll.name,color:"#FFEE58",textColor:Object(i.p)("#FFEE58")});var _="--";if(L.sequence)if(0===L.sequence.length)null!==L.time&&0===L.sequence.length&&(_="(Skipped)");else if(null!==t.cross){if(_=L.sequence.toString({cross:t.cross}),"unknown"===a){var x=Object(i.m)({from:t.cross,to:"D"});""!==x&&(_="".concat(x," ").concat(_))}}else if(null!==t.rouxBlock)if("unknown"===a){_=L.sequence.toString({rouxBlock:{side:L.orientation.left,bottomDirection:L.orientation.down},fixDirection:!1});var k=Object(i.n)({from:[L.orientation.left,L.orientation.down],to:["L","D"]});""!==k&&(_="".concat(k," ").concat(_))}else{var C=L.sequence.toText({rouxBlock:{side:R.orientation.left,bottomDirection:R.orientation.down},fixDirection:!0});if(_=C.text,null!==L.orientation){var S=[C.orientation.down,C.orientation.left,L.orientation.down,L.orientation.left].map(function(t){return Object(i.l)(t,{from:[R.orientation.left,R.orientation.down],to:["L","D"]})}),y=s()(S,4),w=y[0],O=y[1],T=y[2],z=y[3];r()("L"===O),r()("L"===z);var j=Object(i.n)({from:["L",w],to:["L",T]});""!==j&&(_+=" ".concat(j))}}else _=L.sequence.toString();return{id:a,name:c,infos:b,color:U,dark:F,sequenceText:_,time:Object(i.f)(B),moveCount:v,speed:m,inspectionTime:d&&Object(i.f)(d),executionTime:g&&Object(i.f)(g)}})},replayUrl:function(){var t=this,e=this.stagesInfo.map(function(e){var n=t.stages[e.id];if(!n.sequence||0===n.sequence.length)return null;var o=U()(l.a.stagesData,[t.mode],[]).find(function(t){var e=t.id;return n.id===e}),s=o?" // ".concat(o.name):"";return"".concat(e.sequenceText).concat(s)}).filter(function(t){return null!==t}).join("\n"),n=this.scrambleText;return"https://alg.cubing.net/?".concat(u.a.encode({alg:e,setup:n}))}}},R=(n(197),n(14)),D=Object(R.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.replay?n("v-btn",{attrs:{href:t.replayUrl,color:"success",target:"_blank"}},[t._v("\n\t\tReplay on alg.cubing.net\n\t")]):t._e(),t._v(" "),n("v-layout",{attrs:{wrap:""}},t._l(t.stagesInfo,function(e){return n("v-flex",{key:e.id,attrs:{id:e.id,xs12:"",lg4:"",xl3:""}},[n("v-card",{class:e.class,attrs:{dark:e.dark,color:e.color}},[n("v-card-title",[n("div",{style:{width:"100%"}},[n("h2",{staticClass:"display-1 font-weight-bold text-xs-left"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t"),t._l(e.infos,function(e){return n("v-chip",{key:e.id,staticClass:"stage-info-chip",style:{backgroundColor:e.color.startsWith("#")?e.color:"",color:e.textColor.startsWith("#")?e.textColor:""},attrs:{color:e.color.startsWith("#")?null:e.color,"text-color":e.textColor.startsWith("#")?null:e.textColor,small:""}},[e.avatar?n("v-avatar",{staticClass:"darken-3",attrs:{color:e.color.startsWith("#")?null:e.color,"text-color":e.textColor.startsWith("#")?null:e.textColor}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.avatar)+"\n\t\t\t\t\t\t\t\t")]):t._e(),t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t")],1)})],2),t._v(" "),n("v-layout",{staticClass:"stage-info headline ma-0"},[n("strong",{style:{color:"inherit"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.time)+"\n\t\t\t\t\t\t\t")]),t._v(" "),null!==e.inspectionTime?n("small",{staticClass:"inspection-time"},[n("span",{staticClass:"time-info"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.inspectionTime)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("span",{staticClass:"time-spacer"},[t._v("\n\t\t\t\t\t\t\t\t\t/\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("span",{staticClass:"time-info"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.executionTime)+"\n\t\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),null!==e.moveCount?n("div",{staticClass:"subheading stage-info-right"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.moveCount)+" turns\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),null!==e.speed?n("div",{staticClass:"subheading stage-info-right"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.speed)+" tps\n\t\t\t\t\t\t\t")]):t._e()],1),t._v(" "),n("div",{staticClass:"content text-xs-left"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.sequenceText)+"\n\t\t\t\t\t\t")])],1)])],1)],1)}))],1)},[],!1,null,null,null);D.options.__file="Stages.vue";e.a=D.exports},417:function(t){t.exports={generationUrl:"http://localhost:2014/scramble-legacy/#competitionName=Scrambles%20for%202018-09-05&rounds=i('eventID'-'333'_'round'-'1'_'scrambleSetCount'-1_'scrambleCount'-100_'extraScrambleCount'-0_'copies'-1)!&version=1.0",sheets:[{scrambles:["D2 L2 R D2 U2 F2 L U2 B2 D2 B2 U F' U F2 L2 D2 R2 D B2 L'","F' U2 L2 F U2 B' R2 U2 L D' F2 R' F2 L D2 B U2 R","U2 R' B2 L R' F2 R B2 U2 B' F' R U' R D' L D2 U B","B2 F' U2 B' R2 F L2 U2 F' L2 U B' U2 B2 R' D' L' D' R F' R","R U2 R' D2 L2 F2 L B2 R' D' B L B2 R2 D' U2 L2 U' B2 R","D B2 U L2 B2 U2 B2 U2 B R B' U2 L' F' D2 R2 B' F2 U R'","F2 B2 L2 U R U2 F2 U B' R2 U' L2 D2 R U2 L F2 R D2","R' B2 D2 B2 R2 B2 L' U2 L F2 R U B D2 F2 D R' B' F' L'","B D2 R' U2 F2 R2 U' L2 F R2 D L2 F' R2 L2 D2 F2 B' L2","L' U' R' L2 D' F2 R' U' L' F2 L' F' U2 F' U2 L2 B U2 B","L2 F2 R2 D U2 R2 D2 R2 U' F L2 R B' R D2 L F R2 D' L","R2 D2 R2 U' F D' F2 L F R' F2 R2 D2 B2 R2 B R2 F","R' F R' F2 B U L' B D R' F R U2 L2 B2 D2 R2 D2 L","R D2 F' U L D2 B' U2 L U F2 R2 U' D2 B2 R2 U2 D' F2 L2","U2 R' D R F D L2 B2 U F2 L D2 F' U2 B2 L2 B' R2 U2","U' R F' R L F2 U L' U F U2 R2 L2 F U2 L2 F R2 L2 B'","B' U2 D2 R U2 B U D L D R2 U' D2 R2 F2 R2 B2 L2 D' R2","B' R U2 R D2 L' F U2 F2 D' F U2 B2 R2 U' D2 L2 F2 U'","D2 F2 U2 L F2 R U2 L2 R U F L2 R' B F U' F L' D2 B'","R2 B' U2 L2 F' U2 B U2 B2 L B U' F2 U F L' U' B' R'","U2 L2 D2 U2 B F2 R2 B' L2 D U2 L' D B' R2 U2 F' D2 B'","R2 U' B2 D L2 R2 B2 F L2 D U2 R2 U R' U2 L R2 B U","L' F2 L' F2 D2 F2 L R D F2 R D' U' L U B2 F' D' R2","F2 L2 U2 B U2 B D2 L U F D2 L2 U2 B' L U2 F' U2","R' F' B' U B' R' D2 F R' U' L' B' U2 R2 B R2 L2 D2 F2","U2 L' F2 U' F U L' B L B2 D F2 R2 U F2 R2 U' B2 R2 U2","L2 B2 D L2 U2 B2 U' L2 D R' B2 D F' L' D L' U' B2 R' B'","U F' D R B' L U2 F2 B R' F U2 R' B2 R' F2 U2 L U2","L2 U2 R2 F2 L2 F' D2 U2 F' D L R U R U2 F' D' R' F L'","U2 B U R F L2 U D2 L F2 D L' B2 R2 L2 D2 L U2 B2 R","L R F2 D2 L U2 R D2 B2 D2 L' D' R' B U F2 U' L' B D'","B2 L2 F2 L2 D U B2 D' L' F2 R F D U' B U2 B2 L' D2 U'","R2 F2 L2 U' L2 U R2 U2 B2 U2 L' B2 D B' D F L2 B D R","R2 F2 U' L2 D' U2 B' U' B R B2 L2 R' U' F D' F2 R","B2 D2 R U2 L' R D2 B2 U L' D2 U2 B' D' U2 F' L B U","R L2 U L B' D' L' F B D' R2 L2 F D2 R2 U2 R2 B' U2 F R2","U D R' F2 R2 F' U B2 U2 R' B' L' U2 L D2 L' U2 F2 L2 B2","B' D2 B2 U2 R2 F' L2 B' U2 B R D L2 B2 F2 U' L' B' R U' R","D2 L2 U2 B' L2 R2 F D2 B2 L D2 R2 F2 D F2 L2 R' U'","U2 R F2 D2 L2 U2 R' D2 L D F L R U' F' L' F2 L B2","B R2 D2 R2 F R2 B' F' U2 L D2 L' B U B' L' B' F' R' F'","D2 B' F2 R2 B L2 F' D2 F2 U' L' F' L F2 R B2 L F L","B2 F2 R2 D2 U2 B' F D F2 L' B' L2 U2 F L2 D2 U' R'","F2 B2 L B U' R D B' D F2 R F2 R2 L2 U L2 F2 L2 D2","F' D2 F' L2 B' R2 U2 R2 B L' B2 U' R B D' R' B' R F2 L2","U L2 U' R' B U' D L' D' B2 U F' R2 D2 B U2 F2 L2 B' U2","B2 L2 R2 U' L2 F2 D B2 R2 U R D' F' L2 D' L R D'","R2 U F2 D2 L2 U F' D2 L D' F' U' B2 D2 R2 F2 B2 D' F2 U'","F2 U D2 F' L' U L U' R' D F2 L2 U2 L2 U L2 U' R2 U2 F2","F R' F2 D' R' D' F R U2 R' F2 B2 R2 U' R2 F2 U2 D F2 D","L2 F2 R D2 B2 R2 B2 L R' F' R D2 B L' U' F D' L D' U2","U2 R2 L U' B L2 U2 F2 R F U' B2 L2 U B2 U L2 U2 F2 D B2","F2 U2 B2 U2 R2 F2 U2 L2 U B D L' B' D' B2 D L' D2 F D2","L' U D' L B U R2 D' L B R' F2 L2 U' F2 U' R2 U' R2","F L U' R' L U' L' D2 B D2 R' F2 R2 D2 R' B2 R","D2 L2 B2 D' R U2 L F2 U B2 F' L B' R B U'","F L' U' D F2 L B D R' B R' U2 R L' D2 L' D2 B2 D2 R2","F' D2 B D' L2 F' U' F' D2 B' R' F2 U2 R2 F' U2 B2 L2 F'","D2 B2 F2 L' R' U2 B2 L2 U' L' B D2 L2 D2 F R2 B U2","F2 D2 F2 L2 D2 B D2 U2 B L B D' B2 R F' R U' L R","B R2 F2 L F2 B' D2 B' U' F2 L U' B2 U' B2 U' R2 F2 L2 D","L2 U' R D F D F2 L D' B' R' F2 U' F2 D2 F2 D' F2 D' R2","U' F2 R' D L F R F' L' B D B2 U2 R2 F' L2 U2 B'","D L2 F2 R2 D2 B2 U' R2 B2 F L' B' F2 R2 D' F' D2 B R2","R2 D2 L2 D B2 U2 L2 F2 L' D' L U' F2 L2 F' L' F2","L2 D L' F U' F D' L' F U R2 L2 D F2 R2 U' F2 U' F2 B2","B U2 F R2 B F2 R2 B2 D F D2 L F D' B U' L R2 U'","F2 D L B' R F' R2 F D L U B2 D2 R2 L2 U' R2 U D","U2 B2 D' L2 D B2 U R2 U2 B2 F' R' B' F L U' B2 L U' F","U2 B2 D2 B2 L2 D2 R F2 R' U2 L' D L2 U2 B2 F' L' R2 B' R","B2 L2 F2 D' F2 D L2 F2 U2 F2 U' L' B2 U' R' B D2 F' U' L' F2","R F' U2 B2 U' F' R' L D R2 F' R D2 R2 U2 F2","B2 F2 D' L2 U' F2 D F2 R F L' D' B2 L B U2 L2 F' U'","D2 B2 U' B2 D' B2 U' R2 F2 L F' L B2 D2 R2 D' F2 L U2 R2","F2 D' B2 D' U2 R2 F2 L' U2 B' R2 U F' L R B2 L' D' L","R F L2 B U2 F2 R D' L2 B U' B' R2 F' L2 B' R2 L2 F","L2 U D' R B' L2 B' U' R' F2 R' U D2 B2 R2 B2 R2 U2","B2 D' F B' U F' R2 U' L F R' L2 F' D2 L2 F' R2 B2 L2 B","B' L2 B R2 F2 L2 U2 B2 F' L2 R' B2 L' D U' R' U B' D2","D2 L' F U R D2 B R2 B D R' F2 D R2 B2 R2 U R2 U","B2 D2 L2 D L2 D' L2 U' F2 D2 R' D' R2 B' L D2 B D' F2 U'","L' U' D B' D' R' U R' U B' U2 R2 D2 R2 F' B' D2 F'","U' R2 L F' R' B' D' F' L B' D' R B2 R' U2 B2 R U2 D2","F R2 D2 B2 D2 R F' U' R' B2 L U2 F2 U2 D2 L2 U2 F' U2 B'","D2 B R' B2 R' D' F R D' B U2 D2 L' B2 U2 R L2 F2 B2 R","D B2 F2 R2 U R2 D' R2 B' F R D' F D' F' U' L' F D'","D2 B' U2 F2 D2 F' R2 U2 R2 B2 U' R B2 F L' D' B2 D R U","F2 L2 D2 F2 U L2 R' B2 F U' L2 B2 R2 B' D F D R","D L' D2 F' D L F U2 L U' B2 L2 F U2 L2 F R2","U2 L2 U2 L2 B' F' U2 F' D' F2 U2 L U' B F L F U' B'","L' D2 B2 L F2 R' F2 L U2 F' D2 L' D' R D L F U2","U2 L2 R F2 R' U2 R' B2 D2 L2 F' U B2 R2 D2 B U2 R F'","L' R' B2 L B2 U2 B2 L2 D2 F2 U F D2 R D U L2 F' R F2","U' B L2 B2 U2 R' U' L2 F2 D F L2 U2 B' R2 F U2 R2 F'","F2 R U R2 L F2 B' L' U' F U' F R2 B2 U2 R2 B' R2 B","L U2 R' F2 L2 R B2 U2 R2 U2 R' D U2 R D' U' L' F D B U2","U2 R' F2 L' B2 F2 R2 U2 R' B' L F U' F' D F' L2 U F2","R2 U2 L2 B' R2 F D2 B L2 B2 U' B2 L' U F2 L2 R2 U2","U2 F' R U B D' L B U2 F' B' L2 D R2 U B2 D2 B2 D'","B2 D' F2 U' B R2 L U L' B D' L2 D' F2 U2 L2 D2 R2"],extraScrambles:[],scrambler:"333",copies:1,title:"3x3x3 Cube Round 1",fmc:!1,group:"A",scrambleSetId:"333-1-set0",event:"333",round:1}],competitionName:"Scrambles for 2018-09-05",generationDate:"Sep 5, 2018 5:54:54 AM",version:"TNoodle-WCA-0.13.4"}},419:function(t,e,n){"use strict";var o=n(200);n.n(o).a},420:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,"\n.controls {\n\ttext-align: center;\n\tflex: 0 0 auto;\n}\n.controls .scramble {\n\t\tmax-width: 110vmin;\n\t\tfont-size: 8vmin;\n\t\tfont-weight: bold;\n\t\tline-height: 1.2em;\n\t\tmargin: 0 auto;\n}\n.controls .timer {\n\t\tfont-size: 20vmin;\n\t\tfont-weight: bold;\n\t\tline-height: 1em;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n}\n.controls .timer .v-dialog__activator {\n\t\tdisplay: flex;\n}\n.controls .solve-info {\n\t\tmargin: 0 0.2rem;\n}\n.times {\n\tflex: 1 1 0;\n\tpadding-top: 0 !important;\n\toverflow-y: auto;\n}\n",""])},421:function(t,e,n){"use strict";n.r(e);n(57),n(27);var o,s,i,a=n(3),r=n.n(a),l=n(15),c=n.n(l),U=n(142),F=n(133),u=(n(54),n(55),n(28),n(235)),L=n.n(u),R=n(409),D=n.n(R),B={_giiker:null,_moveHandlers:[],cube:null,isConnected:!1,connect:(o=r()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._giiker){t.next=2;break}return t.abrupt("return",this._giiker);case 2:return t.next=4,D.a.connect();case 4:return this._giiker=t.sent,this.cube=new L.a,this.isConnected=!0,this._giiker.on("move",function(t){e.cube.move(t.notation.replace(/2'$/,"2"));var n=!0,o=!1,s=void 0;try{for(var i,a=e._moveHandlers[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){(0,i.value)(t)}}catch(t){o=!0,s=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}}),t.abrupt("return",this._giiker);case 9:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),on:function(t,e){"move"===t?this._moveHandlers.push(e):this._giiker.on(t,e)},off:function(t,e){"move"===t?this._moveHandlers=this._moveHandlers.filter(function(t){return t!==e}):this._giiker.off(t,e)}},h=n(162),v=n(410),m=n.n(v),p=n(234),f=n(201),d=n(147),g=n.n(d),b=n(412),_=n.n(b),x=n(417),k=n(418),C=n.n(k),S={components:{Stages:f.a},data:function(){return{analyzerState:{mode:null,cross:null,rouxBlock:null,cubeStage:null,stages:{},oll:null,isOll2Look:!1,pll:null,pllLooks:[],cll:null},platform:"",isGiikerConnected:null,startTime:null,time:0,phase:"connect",isConnecting:!1,isDescriptionShown:!0,placeholderMoves:[],scramble:null,previousSolve:null,snackbar:"",isSnackbarShown:!1,isFirstSolve:!0,isDialogOpen:!1,isDeleteDialogOpen:!1}},computed:{scrambleMoves:function(){var t=this;if(null===this.scramble)return[];g()(this.placeholderMoves.length>=this.scramble.moves.length);var e=this.placeholderMoves.length-this.scramble.moves.length;return this.placeholderMoves.map(function(n,o){if(o<e)return{text:Object(F.i)(n),grey:!0};var s=t.scramble.moves[o-e];return o===e&&n.face===s.face?{text:Object(F.i)(n),grey:!1}:{text:Object(F.i)(s),grey:!1}})},isXcross:function(){return this.analyzerState.stages.f2l1&&null!==this.analyzerState.stages.f2l1.time&&0===this.analyzerState.stages.f2l1.sequence.length},displayTime:function(){return Object(F.f)(this.time)},moveCount:function(){return this.analyzer.getMoveCount()},speed:function(){return 0===this.time?(0).toFixed(2):(this.moveCount/(this.time/1e3)).toFixed(2)}},created:function(){this.noSleep=new m.a,this.isGiikerConnected=B.isConnected,B.isConnected&&(B.cube.isSolved()?this.phase="scramble":this.phase="prescramble",B.on("move",this.onGiikerMove))},mounted:function(){var t=_()(x.sheets[0].scrambles);this.scramble=h.a.fromScramble(t,{mode:"reduction"}),this.initialScramble=h.a.fromScramble(t,{mode:"reduction"}),this.placeholderMoves=this.scramble.moves.map(function(t){return c()({},t)}),this.isDialogOpen=!navigator.bluetooth&&"undefined"==typeof BluetoothDevice,this.platform=navigator.platform,this.analyzer=null},destroyed:function(){this.interval&&clearInterval(this.interval),B.isConnected&&B.off("move",this.onGiikerMove),this.noSleep&&this.noSleep.disable()},methods:{onClickConnect:function(){var t=this;this.isConnecting||(this.noSleep&&this.noSleep.enable(),this.isConnecting=!0,B.connect().then(function(){t.isGiikerConnected=!0,B.on("move",t.onGiikerMove),t.phase="scramble"},function(e){t.isSnackbarShown=!0,t.snackbar=e.message,t.isConnecting=!1}),console.time("scrambo.initialize took"),C.a.initialize(Math),console.timeEnd("scrambo.initialize took"))},onGiikerMove:function(t){var e=this,n=new Date;if("prescramble"!==this.phase){if("scramble"===this.phase)return this.scramble.unshift({face:t.face,amount:-t.amount}),this.scramble.length>this.placeholderMoves.length&&(this.placeholderMoves=this.scramble.moves.map(function(t){return c()({},t)})),void(0===this.scramble.length&&(this.phase="inspect",this.time=0));"inspect"===this.phase&&(this.startTime=new Date,this.analyzer=new p.a({scramble:this.initialScramble.moves}),this.analyzerState=this.analyzer.state,this.analyzer.on("statechange",function(t,n){e.$set(e.analyzerState,t,n),"cubeStage"===t&&e.scrollToStage()}),this.phase="solve",this.isFirstSolve=!1,this.isDescriptionShown=!1,this.interval=setInterval(this.onTick,1e3/30),this.scrollToStage()),"solve"===this.phase&&(this.time=n.getTime()-this.startTime.getTime(),this.analyzer.pushMoves([c()({time:this.time},t)]),B.cube.isSolved()&&this.finishSolve({isError:!1}))}else B.cube.isSolved()&&(this.phase="scramble")},onTick:function(){var t=new Date;this.time=t.getTime()-this.startTime.getTime()},scrollToStage:function(){var t=document.getElementById(this.analyzerState.cubeStage);t&&t.scrollIntoView({block:"end",inline:"nearest",behavior:"smooth"})},onClickReset:function(){"solve"===this.phase&&(this.finishSolve({isError:!0}),B.cube.identity())},finishSolve:(i=r()(regeneratorRuntime.mark(function t(e){var n,o,s,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.isError,clearInterval(this.interval),t.next=4,Object(U.i)(this.analyzer.toSolveEntry({date:this.startTime.getTime(),time:this.time,isError:n}));case 4:o=t.sent,s=o.solve,this.previousSolve=s,this.phase="scramble",this.isFirstSolve=!1,i=C.a.getRandomScramble().replace(/ +/g," ").trim(),this.scramble=h.a.fromScramble(i,{mode:"reduction"}),this.initialScramble=h.a.fromScramble(i,{mode:"reduction"}),this.placeholderMoves=this.scramble.moves.map(function(t){return c()({},t)}),document.getElementById("stages").scrollTop=0;case 14:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)}),onClickDelete:(s=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.previousSolve){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(U.a)(this.previousSolve);case 4:this.previousSolve=null,this.isDeleteDialogOpen=!1;case 6:case"end":return t.stop()}},t,this)})),function(){return s.apply(this,arguments)})},head:function(){return{title:"Smart Cube Timer"}}},y=(n(419),n(14)),w=Object(y.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"","grid-list-lg":"","pa-0":""}},[n("v-layout",{attrs:{column:"","fill-height":"","ma-0":""}},[n("v-flex",{staticClass:"controls"},[t.isFirstSolve?n("v-alert",{attrs:{type:"prescramble"===t.phase?"warning":"info"},model:{value:t.isDescriptionShown,callback:function(e){t.isDescriptionShown=e},expression:"isDescriptionShown"}},["connect"===t.phase?n("span",[t._v('\n\t\t\t\t\tMake sure GiiKER is solved state, and press "Connect Cube" to link cube.\n\t\t\t\t')]):t._e(),t._v(" "),"prescramble"===t.phase?n("span",[t._v("\n\t\t\t\t\tSolve the cube before starting scramble.\n\t\t\t\t")]):t._e(),t._v(" "),"scramble"===t.phase?n("span",[t._v("\n\t\t\t\t\tFollow the scramble. Keep in mind you should hold the cube white-top and green-front.\n\t\t\t\t")]):t._e(),t._v(" "),"inspect"===t.phase?n("span",[t._v("\n\t\t\t\t\tNow start solving when you're ready.\n\t\t\t\t")]):t._e()]):t._e(),t._v(" "),t.isGiikerConnected?t._e():n("v-btn",{attrs:{disabled:t.isConnecting,loading:t.isConnecting,color:"success",large:""},on:{click:t.onClickConnect}},[t._v("\n\t\t\t\tConnect Cube\n\t\t\t")]),t._v(" "),"scramble"===t.phase?n("div",{staticClass:"scramble"},t._l(t.scrambleMoves,function(e,o){return n("span",{key:o,style:{color:e.grey?"#CCC":""}},[t._v("\n\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t")])})):t._e(),t._v(" "),n("div",{staticClass:"timer"},["scramble"===t.phase&&null!==t.previousSolve?n("v-btn",{staticClass:"ma-0",attrs:{icon:"",flat:"",disabled:""}}):t._e(),t._v("\n\t\t\t\t"+t._s(t.displayTime)+"\n\t\t\t\t"),"scramble"===t.phase&&null!==t.previousSolve?n("v-dialog",{model:{value:t.isDeleteDialogOpen,callback:function(e){t.isDeleteDialogOpen=e},expression:"isDeleteDialogOpen"}},[n("v-btn",{staticClass:"ma-0",attrs:{slot:"activator",icon:"",flat:"",color:"red lighten-2"},slot:"activator"},[n("v-icon",{attrs:{dark:""}},[t._v("delete")])],1),t._v(" "),n("v-card",[n("v-card-text",[t._v("\n\t\t\t\t\t\t\tDelete solve?\n\t\t\t\t\t\t")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.isDeleteDialogOpen=!1}}},[t._v("\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"red lighten-1",flat:""},on:{click:t.onClickDelete}},[t._v("\n\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t")])],1)],1)],1):t._e()],1),t._v(" "),"solve"===t.phase?n("div",{staticClass:"timer-controls"},[n("v-btn",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"error"},on:{click:t.onClickReset}},[t._v("\n\t\t\t\t\tReset\n\t\t\t\t")])],1):t._e(),t._v(" "),"scramble"!==t.phase||t.isFirstSolve?t._e():n("div",{staticClass:"solve-infos"},[n("span",{staticClass:"solve-info subheading"},[t._v("\n\t\t\t\t\t"+t._s(t.moveCount)+" turns\n\t\t\t\t")]),t._v(" "),n("span",{staticClass:"solve-info subheading"},[t._v("\n\t\t\t\t\t"+t._s(t.speed)+" tps\n\t\t\t\t")])])],1),t._v(" "),n("v-flex",{staticClass:"times",attrs:{id:"stages"}},[n("stages",{attrs:{replay:!1,stages:t.analyzerState.stages,mode:t.analyzerState.mode||"cfop",time:t.time,cross:t.analyzerState.cross,"is-xcross":t.isXcross,oll:t.analyzerState.oll,"is-oll2look":t.analyzerState.isOll2Look,pll:t.analyzerState.pll,"pll-looks":t.analyzerState.pllLooks,"roux-block":t.analyzerState.rouxBlock,cll:t.analyzerState.cll}})],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Your browser is not supported")]),t._v(" "),n("v-card-text",[t._v("\n\t\t\t\tIt seems your browser doesn't support Web Bluetooth API.\n\t\t\t\tSo this timer cannot communicate with GiiKER and totally not works.\n\t\t\t")]),t._v(" "),t.platform.startsWith("Win")?n("v-card-text",[t._v("\n\t\t\t\tI guess you are using "),n("strong",[t._v("Windows")]),t._v(".\n\t\t\t\tYou can try Chrome Dev with new Bluetooth implementation but it's very beta.\n\t\t\t\tIf you are so smart to try out beta, follow "),n("a",{attrs:{target:"_blank",href:"https://github.com/hakatashi/smart-cube-timer/wiki/Windows-Guide"}},[t._v("\n\t\t\t\t\tthis instruction\n\t\t\t\t")]),t._v(" at your own risk.\n\t\t\t")]):t._e(),t._v(" "),t.platform.startsWith("iP")?n("v-card-text",[t._v("\n\t\t\t\tI guess you are using "),n("strong",[t._v(t._s(t.platform))]),t._v(".\n\t\t\t\tSome people says that this timer works with "),n("a",{attrs:{target:"_blank",href:"https://itunes.apple.com/us/app/webble/id1193531073"}},[t._v("\n\t\t\t\t\tWebBLE browser\n\t\t\t\t")]),t._v(" ($1.99) but I don't guarantee.\n\t\t\t\tTry at your own risk.\n\t\t\t")]):t._e(),t._v(" "),t.platform.startsWith("Mac")?n("v-card-text",[t._v("\n\t\t\t\tI guess you are using "),n("strong",[t._v("Mac")]),t._v(".\n\t\t\t\tDownload "),n("a",{attrs:{target:"_blank",href:"https://www.google.com/chrome/"}},[t._v("\n\t\t\t\t\tlatest Google Chrome\n\t\t\t\t")]),t._v(" and it should help.\n\t\t\t")]):t._e(),t._v(" "),t.platform.startsWith("Android")||t.platform.match(/linux/i)?n("v-card-text",[t._v("\n\t\t\t\tI guess you are using "),n("strong",[t._v("Android")]),t._v(".\n\t\t\t\tDownload "),n("a",{attrs:{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.android.chrome"}},[t._v("\n\t\t\t\t\tlatest Google Chrome\n\t\t\t\t")]),t._v(" and it should help.\n\t\t\t")]):t._e(),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(e){t.isDialogOpen=!1}}},[t._v("\n\t\t\t\t\tClose\n\t\t\t\t")])],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:5e3,color:"error",bottom:"","multi-line":""},model:{value:t.isSnackbarShown,callback:function(e){t.isSnackbarShown=e},expression:"isSnackbarShown"}},[t._v("\n\t\t"+t._s(t.snackbar)+"\n\t\t"),n("v-btn",{attrs:{flat:""},on:{click:function(e){t.isSnackbarShown=!1}}},[t._v("\n\t\t\tClose\n\t\t")])],1)],1)},[],!1,null,null,null);w.options.__file="index.vue";e.default=w.exports}}]);