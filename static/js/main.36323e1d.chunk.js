(this["webpackJsonpgames-database"]=this["webpackJsonpgames-database"]||[]).push([[0],{220:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(37),o=n.n(c),l=n(16),i=n(3),s=n(14),u=n(83),m=n(1);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={games:null,gamesRange:{}};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={loading:!1};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={category:"games"};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={platforms:null,platformsRange:{}};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={title:""};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={sortedAt:"",range:null,searchText:""},D=Object(s.c)({games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GAMES":return p({},e,{games:t.payload});case"SET_GAMES_RANGE":return p({},e,{gamesRange:t.payload});default:return e}},platforms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLATFORMS":return h({},e,{platforms:t.payload});case"SET_PLATFORMS_RANGE":return h({},e,{platformsRange:t.payload});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_START":return b({},e,{loading:!0});case"LOADING_END":return b({},e,{loading:!1});default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CATEGORY":return y({},e,{category:t.payload});default:return e}},title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TITLE":return w({},e,{title:t.payload});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_ASC":return A({},e,{sortedAt:"asc"});case"SORT_DESC":return A({},e,{sortedAt:"desc"});case"SORT_RANGE":return A({},e,{range:t.payload});case"SORT_RESET":return A({},e,{sortedAt:T.sortedAt});case"QUERY_SEARCH":return A({},e,{searchText:t.payload});case"FILTER_RESET":return T;default:return e}}}),C=n(15),N=n(7),x=n(9),L=n.n(x),I=n(26),G=n.n(I),k=function(e){var t,n=e.children,r=e.disabled,c=e.typeColor,o=e.size,l=e.type,i=e.onClick,s=L()((t={},Object(m.a)(t,G.a.button,!0),Object(m.a)(t,G.a[c],c),Object(m.a)(t,G.a[o],o),Object(m.a)(t,G.a.disabled,r),t));return a.a.createElement("button",{onClick:i,type:l,disabled:r,className:s},n)};k.defaultProps={children:"",disabled:!1,typeColor:"primary",size:"large",type:"button"};var F=k,B=n(84),M=n.n(B),W=function(e){var t=e.label,n=e.value,r=e.onChange,c=e.options,o="".concat(t,"-").concat(Math.random());return a.a.createElement("div",{className:M.a.Select},a.a.createElement("label",{htmlFor:o},t),a.a.createElement("select",{id:o,value:n,onChange:function(e){r(e.target.value)}},c.map((function(e,t){return a.a.createElement("option",{key:e.value+t,value:e.value},e.text)}))))};W.defaultProps={label:"Label",value:"",onChange:function(){return null},options:[]};var Y=W,z=n(20),V=n.n(z),H=n(85),U=n.n(H),X=n(86),Q=n.n(X);var q=n(39),J=n.n(q);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){var t=e.category,n=e.sortRangeAction,c=e.range,o=function(){var e=Object(i.e)((function(e){return e.category.category})),t=Object(i.e)((function(e){return e.games.games})),n=Object(i.e)((function(e){return e.platforms.platforms})),a=Object(r.useState)(null),c=Object(N.a)(a,2),o=c[0],l=c[1];Object(r.useEffect)((function(){(t||n)&&s()}),[e]);var s=function(){var r="games"===e?"rating":"games_count",a="games"===e?t.results:n.results,c=V()(U()(a,(function(e){return e[r]})),r).toString(),o=V()(Q()(a,(function(e){return e[r]})),r).toString();l({minRange:c,maxRange:o,step:(0^+c)===+c?"1":"0.01"})};return o}(),l=Object(r.useState)(null),s=Object(N.a)(l,2),u=s[0],m=s[1],f="".concat(t,"-").concat(Math.random());Object(r.useEffect)((function(){o&&(m(o),n(o))}),[o]),Object(r.useEffect)((function(){c||(m(o),n(o))}),[c]);return a.a.createElement(r.Fragment,null,u&&a.a.createElement("div",{className:J.a.range},a.a.createElement("div",{className:J.a.rangeItem},a.a.createElement("label",{htmlFor:f},"Min ",t),a.a.createElement("input",{value:u.minRange,min:o.minRange,max:o.maxRange,step:o.step,type:"number",id:f,onChange:function(e){var t=e.target.value;m(Z({},u,{minRange:t}))}})),a.a.createElement("div",{className:J.a.rangeItem},a.a.createElement("label",{htmlFor:f},"Max ",t),a.a.createElement("input",{value:u.maxRange,min:o.minRange,max:o.maxRange,step:o.step,type:"number",id:f,onChange:function(e){var t=e.target.value;m(Z({},u,{maxRange:t}))}})),a.a.createElement("div",null,a.a.createElement(F,{typeColor:"success",size:"small",onClick:function(){n(u)}},"Apply"))))},ee={sortRangeAction:function(e){return{type:"SORT_RANGE",payload:e}}};$.defaultProps={category:"games",sortRangeAction:function(){return null}};var te=Object(i.c)((function(e){return{category:e.category.category,range:e.filter.range}}),ee)($),ne=n(87),re=n.n(ne),ae=function(e){var t=e.type,n=e.label,r=e.value,c=e.onChange,o=e.placeholder,l=L()(Object(m.a)({},re.a.Input,!0)),i="".concat(t,"-").concat(Math.random());return a.a.createElement("div",{className:l},a.a.createElement("label",{htmlFor:i},n),a.a.createElement("input",{id:i,type:t,value:r,onChange:c,placeholder:o}))};ae.defaultProps={label:"Label",value:"",onChange:function(){return null},type:"text",placeholder:"type something"};var ce=ae,oe=n(88),le=n.n(oe),ie=[{text:"ASC",value:"asc"},{text:"DESC",value:"desc"},{text:"Default",value:""}],se=[{text:"Games",value:"games"},{text:"Platforms",value:"platforms"}],ue=function(e){var t=e.category,n=e.sortedAt,c=e.searchText,o=e.changeCategoryAction,l=e.sortingAction,i=e.querySearchAction,s=e.filterResetAction;Object(r.useEffect)((function(){i("")}),[t]);return a.a.createElement("div",{className:le.a.filter},a.a.createElement(Y,{value:t,label:"Chose category",onChange:o,options:se}),a.a.createElement(Y,{value:n,label:"Sort",onChange:l,options:ie}),a.a.createElement(te,null),a.a.createElement(ce,{value:c,label:"Search",placeholder:"Enter the text",onChange:function(e){i(e.target.value)}}),a.a.createElement(F,{typeColor:"warning",size:"small",onClick:function(){s()}},"Reset filter"))},me={changeCategoryAction:function(e){return{type:"SELECT_CATEGORY",payload:e}},sortingAction:function(e){return function(t){switch(e){case"asc":t({type:"SORT_ASC"});break;case"desc":t({type:"SORT_DESC"});break;default:t({type:"SORT_RESET"})}}},querySearchAction:function(e){return{type:"QUERY_SEARCH",payload:e}},filterResetAction:function(){return{type:"FILTER_RESET"}}};ue.defaultProps={category:"",sortedAt:"",searchText:"",changeCategoryAction:function(){return null},sortingAction:function(){return null},querySearchAction:function(){return null},filterResetAction:function(){return null}};var fe=Object(i.c)((function(e){return{category:e.category.category,sortedAt:e.filter.sortedAt,searchText:e.filter.searchText}}),me)(ue),pe=n(40),ge=n.n(pe),de=function(){var e,t=Object(r.useState)(!1),n=Object(N.a)(t,2),c=n[0],o=n[1],l=L()((e={},Object(m.a)(e,ge.a.aside,!0),Object(m.a)(e,ge.a.visible,c),e));return a.a.createElement("aside",{className:l},a.a.createElement("div",{className:ge.a.toggleBtn},a.a.createElement(F,{size:"small",onClick:function(){o(!c)}},c?"Close":"Open"," filter")),a.a.createElement(fe,null))},be=n(25),Oe=function(e){var t=e.children,n=e.row,r=e.vCentered,c=e.hCentered,o=e.vEnd,l=e.hEnd,i=L()({"is-flex":!0,"direction-row":n,"direction-column":!n,"is-v-centered":r,"is-h-centered":c,"is-v-end":o,"is-h-end":l});return a.a.createElement("div",{className:i},t)};Oe.defaultProps={row:!0,vCentered:!1,hCentered:!1,vEnd:!1,hEnd:!1};var Ee=Oe,ye=n(27),ve=n.n(ye);var _e=function(e){var t,n=e.item,r=e.src,c=e.small,o=L()((t={},Object(m.a)(t,ve.a.image,!0),Object(m.a)(t,ve.a.small,c),Object(m.a)(t,ve.a.normal,!c),t)),l=function(e){return a.a.createElement("div",{className:ve.a.info},e)};return a.a.createElement(a.a.Fragment,null,n?a.a.createElement("div",{className:o},a.a.createElement("img",{src:n.background_image||n.image_background,alt:n.alt}),"rating"in n?l("Rating: ".concat(n.rating)):"games_count"in n?l("Games count: ".concat(n.games_count)):null):a.a.createElement("div",{className:o},a.a.createElement("img",{src:r,alt:"img"})))},he=n(89),je=n.n(he),Pe=function(e){var t=e.item,n=e.category;return a.a.createElement("div",{className:je.a.listItem},a.a.createElement("div",null,a.a.createElement(_e,{item:t}),a.a.createElement("div",null,a.a.createElement("span",null,t.name),t.released?a.a.createElement("div",null,a.a.createElement("span",null,"Released at: ",t.released)):null)),a.a.createElement(Ee,{hEnd:!0},a.a.createElement(l.b,{to:"/view/".concat(n,"/").concat(t.id)},a.a.createElement(F,{size:"small",typeColor:"success"},"View"))))};Pe.defaultProps={item:{released:"2015-05-18",name:"name",id:1},category:be.string};var we=Pe,Se=n(91),Re=n.n(Se).a.create({baseURL:"https://rawg-video-games-database.p.rapidapi.com/",headers:{"x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com","x-rapidapi-key":"115ecc13d1msh99d3e41d85d9e9ep1bd89fjsn9289472a9c29"}}),Ae=function(){return function(e,t){var n=t().category.category;e({type:"LOADING_START"}),Re.get(n).then((function(t){Object(i.b)((function(){e({type:"LOADING_END"}),e({type:"FETCH_GAMES",payload:t.data})}))})).catch((function(t){e({type:"LOADING_END"}),console.log(t)}))}},Te=function(){return function(e){e({type:"LOADING_START"}),Re.get("platforms").then((function(t){Object(i.b)((function(){e({type:"LOADING_END"}),e({type:"FETCH_PLATFORMS",payload:t.data})}))})).catch((function(t){e({type:"LOADING_END"}),console.log(t)}))}},De=function(e){return{type:"SET_TITLE",payload:e}},Ce=n(92),Ne=n.n(Ce);function xe(e){var t=Object(r.useState)(null),n=Object(N.a)(t,2),a=n[0],c=n[1],o=Object(i.e)((function(e){return e.category.category})),l=Object(i.e)((function(e){return e.filter}),i.d),s=l.range,u=l.sortedAt,m=l.searchText;Object(r.useEffect)((function(){m||u||s||c(null),e&&e.length&&p()}),[e,l]);var f=function(){return"games"===o?"rating":"games_count"},p=function(){var t=e.filter((function(e){return function(e,t){return new RegExp("".concat(e),"i").test(t.name)}(m,e)&&function(e){return s&&e[f()]>=s.minRange&&e[f()]<=s.maxRange}(e)})),n=u?Ne()(t,[f()],[u]):t;c(n)};return{sortedList:a}}var Le=n(93),Ie=n.n(Le),Ge=function(e){var t=e.games,n=e.platforms,c=e.category,o=e.fetchGames,l=e.fetchPlatforms,i=e.changeTitleAction,s=Object(r.useState)([]),u=Object(N.a)(s,2),m=u[0],f=u[1],p=xe(m).sortedList;Object(r.useEffect)((function(){t||o()}),[]),Object(r.useEffect)((function(){"platforms"!==c||n||l(),c&&(f(function(){switch(c){case"games":return t?t.results:[];case"platforms":return n?n.results:[];default:return[]}}()),i(function(){switch(c){case"games":return"All games";case"platforms":return"All platforms";default:return"No data"}}()))}),[c]);return a.a.createElement("div",null,a.a.createElement("div",{className:Ie.a.list},(p||m).map((function(e){return a.a.createElement(we,{category:c,key:e.id,item:e})}))))},ke={fetchGames:Ae,fetchPlatforms:Te,changeTitleAction:De};Ge.defaultProps={games:null,platforms:null,category:"",fetchGames:function(){return null},fetchPlatforms:function(){return null},changeTitleAction:function(){return null}};var Fe=Object(i.c)((function(e){return{category:e.category.category,games:e.games.games,platforms:e.platforms.platforms}}),ke)(Ge),Be=n(94),Me=n.n(Be),We=function(){return a.a.createElement("div",{className:Me.a.mainPage},a.a.createElement(de,null),a.a.createElement("section",null,a.a.createElement(Fe,null)))},Ye=n(51),ze=n.n(Ye),Ve=function(){return a.a.createElement("div",{className:ze.a.center},a.a.createElement("div",{className:ze.a.Loader},a.a.createElement("div",null),a.a.createElement("div",null)))},He=n(95),Ue=n.n(He),Xe=function(e){var t=e.title;return a.a.createElement("div",{className:Ue.a.title},a.a.createElement("h1",null,t))};Xe.defaultProps={title:"title"};var Qe=Xe,qe=(n(220),n(96)),Je=n.n(qe),Ke=n(52),Ze=n.n(Ke);function $e(e){var t=e.item,n=e.title;return a.a.createElement("div",{className:Ze.a.screenshotsList},a.a.createElement("h3",null,n),a.a.createElement("div",{className:Ze.a.screenshotsWrapper},t.map((function(e){return a.a.createElement(_e,{key:e.id,src:e.image,small:!0})}))))}$e.defaultProps={item:[],title:"title"};var et=$e,tt=n(97),nt=n.n(tt);et.defaultProps={item:[],title:"title"};var rt=function(e){var t=e.item,n=e.title;return a.a.createElement("div",{className:nt.a.itemDescription},a.a.createElement("h3",null,n),t.map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement(_e,{src:e.image_background,small:!0}),a.a.createElement("span",null,e.name))})))};function at(e){var t=e.item;return a.a.createElement(a.a.Fragment,null,a.a.createElement(et,{item:t.short_screenshots,title:"Short screenshots"}),a.a.createElement(rt,{item:t.genres,title:"Genres"}))}at.defaultProps={item:{short_screenshots:[],genres:[]}};var ct=at;function ot(e){var t=e.item;return a.a.createElement("div",null,a.a.createElement("p",null,"Platform name: ",t.name),a.a.createElement("p",null,"Games count: ",t.games_count))}ot.defaultProps={item:{name:"name",games_count:2}};var lt=ot,it=n(41),st=n.n(it),ut=function(e){var t=e.games,n=e.platforms,c=e.fetchGames,o=e.fetchPlatforms,i=e.changeTitleAction,s=Object(r.useState)(null),u=Object(N.a)(s,2),m=u[0],f=u[1],p=Object(C.g)(),g=p.category,d=p.id,b=function(e){return Je()(V()(e,"results"),(function(e){return+e.id===+d}))};return Object(r.useEffect)((function(){var e=function(){switch(g){case"games":return b(t);case"platforms":return b(n);default:return{}}}();f(e)}),[t,n]),Object(r.useEffect)((function(){m&&i(m.name)}),[m]),Object(r.useEffect)((function(){"games"!==g||t||c(),"platforms"!==g||n||o()}),[]),a.a.createElement("div",null,a.a.createElement("div",{className:st.a.btnRow},a.a.createElement(l.b,{to:"/"},a.a.createElement(F,{size:"small"},"Back home"))),a.a.createElement("div",{className:st.a.viewPage},a.a.createElement("div",{className:st.a.imgWrapper},m&&a.a.createElement(_e,{src:m.background_image||m.image_background})),m&&function(){switch(g){case"games":return a.a.createElement(ct,{item:m});case"platforms":return a.a.createElement(lt,{item:m});default:return a.a.createElement("div",null,"No Data")}}()))},mt={fetchGames:Ae,fetchPlatforms:Te,changeTitleAction:De};ut.defaultProps={games:null,platforms:null,fetchGames:function(){return null},fetchPlatforms:function(){return null},changeTitleAction:function(){return null}};var ft=Object(i.c)((function(e){return{games:e.games.games,platforms:e.platforms.platforms}}),mt)(ut);var pt=Object(i.c)((function(e){return{loading:e.loading.loading,title:e.title.title}}))((function(e){var t=e.loading,n=e.title,r=a.a.createElement(C.d,null,a.a.createElement(C.b,{path:"/",exact:!0},a.a.createElement(We,null)),a.a.createElement(C.b,{path:"/view/:category/:id"},a.a.createElement(ft,null)),a.a.createElement(C.a,{to:"/"}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(Qe,{title:n}),t?a.a.createElement(Ve,null):r)})),gt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.d,dt=Object(s.e)(D,gt(Object(s.a)(u.a)));o.a.render(a.a.createElement(i.a,{store:dt},a.a.createElement(l.a,null,a.a.createElement(pt,null))),document.getElementById("root"))},26:function(e,t,n){e.exports={button:"Button_button__2aYCC",disabled:"Button_disabled__2YYmo",small:"Button_small__3cKw8",large:"Button_large__35uMx",success:"Button_success__2_c7Y",default:"Button_default__3UUTD",warning:"Button_warning__2Z7-l",primary:"Button_primary__3gWSU"}},27:function(e,t,n){e.exports={image:"Img_image__2yvVr",normal:"Img_normal__3fCir",small:"Img_small__2TPQi",info:"Img_info__2W3lR"}},39:function(e,t,n){e.exports={range:"Range_range__2PqxG",rangeItem:"Range_rangeItem__d-fNH"}},40:function(e,t,n){e.exports={aside:"Aside_aside__24IWy",visible:"Aside_visible__38RlQ",toggleBtn:"Aside_toggleBtn__2WrJp"}},41:function(e,t,n){e.exports={viewPage:"ViewPage_viewPage__RVugo",imgWrapper:"ViewPage_imgWrapper__2Dif3",btnRow:"ViewPage_btnRow__1FL9Q"}},51:function(e,t,n){e.exports={Loader:"Loader_Loader__1_BHr","lds-ripple":"Loader_lds-ripple__3fAy9",center:"Loader_center__3CX51"}},52:function(e,t,n){e.exports={screenshotsList:"ScreenshotsList_screenshotsList__BgYmT",screenshotsWrapper:"ScreenshotsList_screenshotsWrapper__3zzKR"}},84:function(e,t,n){e.exports={Select:"Select_Select__1efG5"}},87:function(e,t,n){e.exports={Input:"Input_Input__1TjDT",invalid:"Input_invalid__1rA8X"}},88:function(e,t,n){e.exports={filter:"Filter_filter__VX77f"}},89:function(e,t,n){e.exports={listItem:"ListItem_listItem__1Md3C"}},93:function(e,t,n){e.exports={list:"List_list__34NCx"}},94:function(e,t,n){},95:function(e,t,n){e.exports={title:"Title_title__1sPY8"}},97:function(e,t,n){e.exports={itemDescription:"DescriptionList_itemDescription__3N7xm"}},98:function(e,t,n){e.exports=n(227)}},[[98,1,2]]]);
//# sourceMappingURL=main.36323e1d.chunk.js.map