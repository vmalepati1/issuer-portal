(this["webpackJsonp@blocktransfer/issuer-portal"]=this["webpackJsonp@blocktransfer/issuer-portal"]||[]).push([[0],{101:function(e,t){e.exports={chunkArray:function(e,t){return e.reduce((function(e,a,n){return n%t===0?e.push([a]):e[e.length-1].push(a),e}),[])}}},148:function(e,t,a){e.exports=a.p+"static/media/logo-192x192.edf25cc2.png"},150:function(e,t,a){(function(t){var n=a(174),r=(a(175),n.join(t,"../../master-identity-catalog-records")+"/master-identity-account-mapping.txt");e.exports={BT_ISSUERS:["GDRM3MK6KMHSYIT4E2AG2S2LWTDBJNYXE4H72C7YTTRWOWX5ZBECFWO7"],USD_ASSETS:[{type:"credit_alphanum4",code:"USDC",issuer:"GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN"}],HORIZON_INST:"https://horizon.stellar.org",MAX_SEARCH:"limit=200",STREET_NAME_ACCOUNTS:["GAQKSRI4E5643UUUMJT4RWCZVLY25TBNZXDME4WLRIF5IPOLTLV7N4N6"],MICR_TXT:r,BT_API_SERVER:"https://api.blocktransfer.com",BT_WELL_KNOWN:"https://blocktransfer.com/.well-known"}}).call(this,"/")},152:function(e,t,a){e.exports=a.p+"static/media/react-hero-logo.9394d800.svg"},156:function(e,t,a){e.exports=a.p+"static/media/bootstrap-5-logo.6aae84ab.svg"},157:function(e,t,a){e.exports=a.p+"static/media/react-logo.b779e4fd.svg"},158:function(e,t,a){e.exports=a.p+"static/media/laravel-logo.32442a8e.svg"},160:function(e,t,a){e.exports=a.p+"static/media/react-logo-transparent.f7d45c01.svg"},163:function(e,t,a){e.exports=a(243)},168:function(e,t,a){},233:function(e,t,a){e.exports=a.p+"static/media/themesberg.105e5059.svg"},243:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),s=a(31),o=(a(168),a(169),a(6)),m=a(106),i=a(10),u={path:"/"},d={path:"/investors"},h={path:"/activity"},E={path:"/login"},f={path:"/examples/404"},b=a(148),p=a.n(b),g=a(251),N=a(264),v=a(252),x=a(13),y=a(9);function S(){return r.a.createElement("main",{className:"vh-100"},r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("div",{className:"login-header"},r.a.createElement("h5",{className:"m-0"},"Authentication")),r.a.createElement("div",{className:"bg-primary"},r.a.createElement(g.a,{className:"ms-2 mt-3",src:p.a,height:"50px",rounded:!0})),r.a.createElement("div",{className:"bg-primary login-container d-flex"},r.a.createElement(N.a,{border:"light",className:"shadow-sm shadow-sm"},r.a.createElement(N.a.Header,null,r.a.createElement("h4",{className:"center-block text-center"},"Connect your security key")),r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"d-flex align-items-center flex-column"},r.a.createElement(v.a,{variant:"secondary",size:"sm",className:"me-2"},r.a.createElement(x.a,{icon:y.h,className:"me-1"})," Login")))))))}var k=a(17),O=a(254),j=a(149),w=a(260),C=a(266),T=a(253),I=a(14),L=a(61),A=a.n(L),_=a(62),F=a.n(_),P=function(e){var t=e.series,a=void 0===t?[]:t,n=e.labels,c=void 0===n?[]:n,l=e.donutWidth,s={low:0,high:8,donutWidth:void 0===l?20:l,donut:!0,donutSolid:!0,fullWidth:!0,showLabel:!1,labelInterpolationFnc:function(e){return e}},o=[F()()];return r.a.createElement(A.a,{data:{labels:c,series:a},options:Object(I.a)(Object(I.a)({},s),{},{plugins:o}),type:"Pie",className:"ct-golden-section chart"})},M=a(255),B=a(256),R=(a(244),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=r.a.useState(a),c=Object(o.a)(n,2),l=c[0],s=c[1],m=Math.ceil(e.length/t),i=function(){s(1===l?l:l-1)},u=function(){s(l===m?l:l+1)},d=r.a.useMemo((function(){var a=(l-1)*t,n=a+t;return e.slice(a,n)}),[e,l,t]),h=r.a.useMemo((function(){for(var e=[],t=function(t){var a=l===t;e.push(r.a.createElement(C.a.Item,{active:a,key:t,onClick:function(){s(t)}},t))},a=1;a<=m;a++)t(a);return e}),[l,m]);return{activeItem:l,onPrevItem:i,onNextItem:u,groupedItems:d,paginationItems:h}}),U=a(101),D=function(e){var t;return t=e.displayLink?r.a.createElement(N.a.Link,{href:"#top",className:"text-quaternary fw-bold align-self-center text-center text-md-end"},r.a.createElement(x.a,{icon:y.f,className:"ms-2"})):r.a.createElement(N.a.Link,{href:"#top",className:"invisible text-quaternary fw-bold align-self-center text-center text-md-end"},r.a.createElement(x.a,{icon:y.f,className:"ms-2"})),r.a.createElement("div",{className:"d-flex w-75 fixed-stat"},r.a.createElement("div",{className:"d-inline-block align-self-center"},r.a.createElement(x.a,{icon:e.statIcon,size:"lg"})),r.a.createElement("div",{className:"d-block ms-auto"},r.a.createElement("div",{className:"d-flex flex-column align-items-end"},r.a.createElement("h4",{className:"mb-0 text-right"},e.statNumber),r.a.createElement("label",{className:"mb-0 d-block text-right"},e.statName))),t)},H=function(e){var t=e.poolName,a=e.poolShares.toLocaleString("en-US");return r.a.createElement("div",{className:"d-flex w-75"},r.a.createElement("div",{className:"d-block ms-auto"},r.a.createElement("label",{className:"mb-0"},a," in ",t," pool")),r.a.createElement(N.a.Link,{href:"#top",className:"text-quaternary fw-bold"},r.a.createElement(x.a,{icon:y.f,className:"ms-2"})))},z=function(e){var t=e.companyName,a=e.class,n=e.par,c=e.sharesOutstanding.toLocaleString("en-US"),l=e.sharesAtDTC.toLocaleString("en-US"),s=e.treasuryShares.toLocaleString("en-US"),o=e.restrictedShares.toLocaleString("en-US"),m=e.reservedShares.toLocaleString("en-US"),i=e.authorizedShares.toLocaleString("en-US"),u=e.dsppShares,d=e.pendingIPOShares,h=e.regAShares,E=e.regCFShares,f=e.privatePlacementShares,b=e.shelfShares;return r.a.createElement(N.a,{border:"light",className:"shadow-sm text-white bg-primary"},r.a.createElement(N.a.Header,null,r.a.createElement("h4",{className:"center-block text-center"},t," Stock"),r.a.createElement("h5",{className:"center-block text-center"},"Class ",a,", ",n," par ")),r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"d-flex align-items-center flex-column"},r.a.createElement(D,{statIcon:y.b,statName:"shares outstanding",statNumber:c,displayLink:!0}),r.a.createElement(D,{statIcon:y.g,statName:"shares at DTC",statNumber:l,displayLink:!0}),r.a.createElement(D,{statIcon:y.a,statName:"treasury shares",statNumber:s,displayLink:!0}),r.a.createElement(D,{statIcon:y.j,statName:"restricted shares",statNumber:o,displayLink:!1}),r.a.createElement(D,{statIcon:y.e,statName:"reserved shares",statNumber:m,displayLink:!1}),e.dsppShares>0?r.a.createElement(H,{poolName:"DSPP",poolShares:u}):r.a.createElement(r.a.Fragment,null),e.pendingIPOShares>0?r.a.createElement(H,{poolName:"pending IPO",poolShares:d}):r.a.createElement(r.a.Fragment,null),r.a.createElement(H,{poolName:"Reg A offering",poolShares:h}),r.a.createElement(H,{poolName:"Reg CF offering",poolShares:E}),r.a.createElement(H,{poolName:"private placement",poolShares:f}),r.a.createElement(H,{poolName:"shelf registration",poolShares:b}),r.a.createElement(D,{statIcon:y.i,statName:"authorized shares",statNumber:i,displayLink:!0}))))},W=function(e){var t=T.a[e.nationCode];return r.a.createElement("div",{className:"d-flex w-90 fixed-stat",style:{overflow:"auto"}},r.a.createElement("div",{className:"align-self-end mb-2 ms-5"},r.a.createElement(t,{title:e.nationCode,className:"... flag"})),r.a.createElement("div",{className:"d-block ms-auto"},r.a.createElement("label",{className:"mb-0 d-block text-right bold-name"},e.name),r.a.createElement("label",{className:"mb-0 d-block text-right"},Math.round(e.numShares).toString()," shares"),r.a.createElement("label",{className:"mb-0 d-block text-right"},"(",(100*e.percent).toFixed(3),"%)")))},J=function(e){var t=e.investors,a=t.slice(0,10),n=t.slice(10),c=Object(U.chunkArray)(a,2);return r.a.createElement(N.a,{border:"light",className:"shadow-sm shadow-sm"},r.a.createElement(N.a.Header,null,r.a.createElement("h4",{className:"center-block text-center"},"Class ",e.class," Registered Holders")),r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"d-block"},c.map((function(t,a){return r.a.createElement(O.a,{className:"mt-1 mb-1",key:a},t.map((function(t){return r.a.createElement(j.a,{id:"holder-col",col:"d-flex justify-content-center align-items-center",key:t.account_id},r.a.createElement(W,{name:t.legalName,numShares:t.balance,percent:t.balance/e.sharesOutstanding,nationCode:t.citizen}))})))})),n.length>0&&r.a.createElement("div",{className:"collapse",id:"collapsedShareholders"},Object(U.chunkArray)(n,2).map((function(t,a){return r.a.createElement(O.a,{className:"mt-1 mb-1"},t.map((function(t){return r.a.createElement(j.a,{id:"holder-col",col:"d-flex justify-content-center align-items-center",key:t.account_id},r.a.createElement(W,{name:t.legalName,numShares:t.balance,percent:t.balance/e.sharesOutstanding,nationCode:t.citizen}))})))}))),n.length>0&&r.a.createElement("button",{className:"btn btn-secondary centered-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsedShareholders","aria-expanded":"false","aria-controls":"collapsedShareholders"},"View All"))))},V=function(e){var t=T.a[e.nationCode];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex w-90 fixed-stat my-2"},r.a.createElement(t,{title:e.nationCode,className:"... flag align-self-center"}),r.a.createElement("h5",{class:"align-self-center m-0 p-0 ms-4"},e.holderName),r.a.createElement("div",{className:"d-block ms-auto"},r.a.createElement(O.a,{className:"text-right"},r.a.createElement(j.a,null,r.a.createElement("label",null,e.quantityAndUnits),r.a.createElement("label",{class:"ms-3 bold-name"},(100*e.percentOwned).toFixed(3),"%"),r.a.createElement("button",{type:"button",class:"btn px-1 py-0"},r.a.createElement(x.a,{icon:y.f})))),r.a.createElement(O.a,{className:"text-right"},r.a.createElement("label",null,e.holderAddress)))))},q=function(e){var t=e.investors,a=R(t,9),n=(a.activeItem,a.onPrevItem),c=a.onNextItem,l=a.groupedItems,s=a.paginationItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{border:"light",className:"shadow-sm shadow-sm"},r.a.createElement(N.a.Header,null,r.a.createElement("div",{class:"d-flex holder-header"},r.a.createElement("div",{className:"d-flex align-items-center left-search-bar"},r.a.createElement(w.a,{className:"form-inline"},r.a.createElement(w.a.Control,{type:"text",placeholder:"Name"}))),r.a.createElement("div",{class:"center-holder-title"},r.a.createElement("h4",{className:"center-block text-center p-0 m-0"},"Class ",e.class," Stockholders")),r.a.createElement("div",{class:"right-download"},r.a.createElement("button",{type:"button",class:"btn d-flex justify-content-end align-items-center"},r.a.createElement(x.a,{icon:y.d}))))),r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"d-block"},l.map((function(t,a){return r.a.createElement(V,{key:a,nationCode:t.citizen?t.citizen:"US",holderName:t.legalName||"undefined",quantityAndUnits:t.balance||"undefined",percentOwned:t.balance&&e.sharesOutstanding?t.balance/e.sharesOutstanding:"undefined",holderAddress:t.address&&t.address.street1?t.address.street1:"undefined"})})),r.a.createElement(C.a,{size:"md",className:"mt-3 pagination justify-content-center"},r.a.createElement(C.a.Prev,{disabled:!1,onClick:n},"Previous"),s,r.a.createElement(C.a.Next,{onClick:c},"Next"))))))},K=function(e){var t=e.title,a=e.data,n=void 0===a?[]:a,c=n.map((function(e){return e.label})),l=n.map((function(e){return e.value}));return r.a.createElement(j.a,null,r.a.createElement("div",{class:"d-flex align-items-center flex-row justify-content-center"},r.a.createElement(P,{series:l,labels:c})),r.a.createElement("div",{class:"d-flex align-items-center flex-row justify-content-center"},r.a.createElement("div",null,r.a.createElement("h5",{className:"mt-2 text-center"},t),n.map((function(e){return r.a.createElement("h6",{key:"circle-element-".concat(e.id),className:"fw-normal text-white"},null!=e.icon?r.a.createElement(x.a,{icon:e.icon,className:"icon icon-xs text-".concat(e.color," w-20 me-1")}):r.a.createElement(r.a.Fragment,null)," ".concat(e.label," "),"".concat(e.value,"%"))})))))},X=function(e){var t={};e.investors.forEach((function(e){if(e.address&&e.address.subdivision){var a=e.address.subdivision;t[a]=(t[a]||0)+1}}));var a=e.investors.length,n=Object.keys(t).map((function(e){return{id:e,label:e,value:t[e]/a*100,color:"secondary",icon:null}}));return r.a.createElement(N.a,{border:"light",className:"shadow-sm text-white bg-primary"},r.a.createElement(N.a.Header,null,r.a.createElement("h4",{className:"center-block text-center"},"Registered Trends")),r.a.createElement(N.a.Body,{class:"p-0"},r.a.createElement("div",{className:"d-flex align-items-center flex-column justify-content-center chart-container"},r.a.createElement("div",null,r.a.createElement(K,{title:"State",data:n})))))},G=function(e){var t=e.activity;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{border:"light",className:"shadow-sm shadow-sm"},r.a.createElement(N.a.Header,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"align-self-center"},r.a.createElement("h4",{className:"center-block text-center p-0 m-0"},"Class A Stock")),r.a.createElement(O.a,{className:"align-self-center"},r.a.createElement(j.a,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(M.a,{bg:"tertiary"},"Transfers")),r.a.createElement(j.a,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(M.a,{bg:"tertiary"},"Trades")),r.a.createElement(j.a,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(M.a,{bg:"tertiary"},"Options")),r.a.createElement(j.a,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(M.a,{bg:"tertiary"},"Conversions"))))),r.a.createElement(N.a.Body,null,r.a.createElement(B.a,{responsive:!0},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{className:"border-0"},"Date"),r.a.createElement("th",{className:"border-0"},"Activity"),r.a.createElement("th",{className:"border-0"},"Link"))),r.a.createElement("tbody",null,t.map((function(e,t){var a=new Date(e.timestamp).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"border-0 fw-bold"},a),r.a.createElement("td",{className:"border-0"},"transfer"==e.type?"".concat(e.from," transferred ").concat(e.amount," ").concat(e.asset," to ").concat(e.to):"".concat(e.from," sold ").concat(e.total_base," ").concat(e.asset," to ").concat(e.to)+" for $".concat(e.total_usd.toFixed(2)," at $").concat(e.price_per_share.toFixed(2)," per share")),r.a.createElement("td",{className:"border-0"},r.a.createElement("button",{type:"button",className:"btn px-1 py-0"},r.a.createElement(x.a,{icon:y.f}))))})))))))},Y=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)("max"),m=Object(o.a)(s,2),i=m[0],u=m[1],d=Object(n.useState)(!0),h=Object(o.a)(d,2),E=h[0],f=h[1],b=function(t){return u(t),f(!0),fetch("http://localhost:8080/get-activity/".concat(e.assetCode,"?timeframe=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var t=e.stats;l(t),f(!1)})).catch((function(e){console.error(e),l(null),f(!1)}))};return Object(n.useEffect)((function(){b("max")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{border:"light",className:"shadow-sm text-white bg-primary"},r.a.createElement(N.a.Header,null,r.a.createElement("h4",{className:"center-block text-center"},"Insights"),r.a.createElement("div",{className:"btn-group d-flex justify-content-center",role:"group","aria-label":"Timeframes"},r.a.createElement("button",{className:"btn mx-1 ".concat("today"===i?"btn-secondary active":"btn-tertiary"),style:{color:"white"},onClick:function(){return b("today")}},"Today"),r.a.createElement("button",{className:"btn mx-1 ".concat("week"===i?"btn-secondary active":"btn-tertiary"),style:{color:"white"},onClick:function(){return b("week")}},"Week"),r.a.createElement("button",{className:"btn mx-1 ".concat("month"===i?"btn-secondary active":"btn-tertiary"),style:{color:"white"},onClick:function(){return b("month")}},"Month"),r.a.createElement("button",{className:"btn mx-1 ".concat("quarter"===i?"btn-secondary active":"btn-tertiary"),style:{color:"white"},onClick:function(){return b("quarter")}},"Quarter"),r.a.createElement("button",{className:"btn mx-1 ".concat("year"===i?"btn-secondary active":"btn-tertiary"),style:{color:"white"},onClick:function(){return b("year")}},"Year"),r.a.createElement("button",{className:"btn mx-1 ".concat("max"===i?"btn-secondary active":"btn-tertiary"),style:{color:"white"},onClick:function(){return b("max")}},"Max"))),r.a.createElement(N.a.Body,{className:"pt-0"},r.a.createElement("div",null,E?r.a.createElement("div",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"d-block"},c.totalTransfers," transfers"),r.a.createElement("h5",{className:"d-block"},c.totalTrades," trades"))))))},Z=a(150);function Q(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],i=s[1];return Object(n.useEffect)((function(){fetch("http://localhost:8080/asset-class-data/".concat("DEMO")).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.error(e)}))}),[]),Object(n.useEffect)((function(){var e=a.map((function(e){return fetch("http://localhost:8080/get-top-investors/".concat(e.code)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var t=e.filter((function(e){return!Z.STREET_NAME_ACCOUNTS.includes(e.account_id)}));i((function(e){return[].concat(Object(k.a)(e),[t])}))})).catch((function(e){console.error(e),i((function(e){return[].concat(Object(k.a)(e),[null])}))}))}));Promise.all(e).catch((function(e){console.error(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,a.map((function(e,t){var a=m[t]||[];return a?r.a.createElement(O.a,{key:e.code},r.a.createElement(j.a,{className:"mb-4",xs:12,md:6},r.a.createElement(z,{companyName:e.companyName,class:e.class,par:e.par,sharesOutstanding:e.stats.outstandingShares,sharesAtDTC:e.stats.sharesInDTC,treasuryShares:e.stats.treasuryShares,restrictedShares:e.stats.restrictedShares,reservedShares:e.stats.reservedShares,authorizedShares:e.stats.authorizedShares,dsppShares:e.stats.dsppShares,pendingIPOShares:e.stats.pendingIPOShares,regAShares:e.stats.regAShares,regCFShares:e.stats.regCFShares,privatePlacementShares:e.stats.privatePlacementShares,shelfShares:e.stats.shelfShares})),r.a.createElement(j.a,{className:"mb-4",xs:12,md:6},r.a.createElement(J,{class:e.class,investors:a,sharesOutstanding:e.stats.outstandingShares}))):r.a.createElement(r.a.Fragment,null)})))}function $(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],i=s[1];return Object(n.useEffect)((function(){fetch("http://localhost:8080/asset-class-data/".concat("DEMO")).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.error(e)}))}),[]),Object(n.useEffect)((function(){var e=a.map((function(e){return fetch("http://localhost:8080/get-top-investors/".concat(e.code)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){i((function(t){return[].concat(Object(k.a)(t),[e])}))})).catch((function(e){console.error(e),i((function(e){return[].concat(Object(k.a)(e),[null])}))}))}));Promise.all(e).catch((function(e){console.error(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,a.map((function(e,t){var a=m[t]||[];return a?r.a.createElement(O.a,{className:"mb-3",key:t},r.a.createElement(j.a,null,r.a.createElement(q,{investors:a,class:e.class,sharesOutstanding:e.stats.outstandingShares})),r.a.createElement(j.a,null,r.a.createElement(X,{investors:a}))):r.a.createElement(r.a.Fragment,null)})))}function ee(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],i=s[1],u=Object(n.useState)([]),d=Object(o.a)(u,2),h=d[0],E=d[1];return Object(n.useEffect)((function(){fetch("http://localhost:8080/asset-class-data/".concat("DEMO")).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.error(e)}))}),[]),Object(n.useEffect)((function(){var e=a.map((function(e){return fetch("http://localhost:8080/get-activity/".concat(e.code)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var t=e.activity,a=e.stats;i((function(e){return[].concat(Object(k.a)(e),[t])})),E((function(e){return[].concat(Object(k.a)(e),[a])}))})).catch((function(e){console.error(e),i((function(e){return[].concat(Object(k.a)(e),[null])})),E((function(e){return[].concat(Object(k.a)(e),[null])}))}))}));Promise.all(e).catch((function(e){console.error(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,a.map((function(e,t){var a=m[t]||[],n=h[t]||[];return a&&n?r.a.createElement(O.a,{key:t},r.a.createElement(j.a,null,r.a.createElement(G,{activity:a})),r.a.createElement(j.a,null,r.a.createElement(Y,{insights:n,assetCode:e.code}))):r.a.createElement(r.a.Fragment,null)})))}var te=a(161),ae=a(265),ne=(a(262),a(261)),re=a(263),ce=(a(233),a(152)),le=a.n(ce),se=function(){var e=Object(i.g)(),t=(e.pathname,Object(n.useState)(!1)),a=Object(o.a)(t,2),c=a[0],l=a[1],m=c?"show":"",d=function(){return l(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{expand:!1,collapseOnSelect:!0,variant:"dark",className:"navbar-theme-primary px-4 d-md-none"},r.a.createElement(re.a.Brand,{className:"me-lg-5",as:s.b,to:u.path},r.a.createElement(g.a,{src:le.a,className:"navbar-brand-light"})),r.a.createElement(re.a.Toggle,{as:v.a,"aria-controls":"main-navbar",onClick:d},r.a.createElement("span",{className:"navbar-toggler-icon"}))),r.a.createElement(ae.a,{timeout:300,in:c,classNames:"sidebar-transition"},r.a.createElement(te.a,{className:"collapse ".concat(m," sidebar d-md-block bg-primary text-white")},r.a.createElement("div",{className:"sidebar-inner px-4 pt-3"},r.a.createElement("div",{className:"user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"},r.a.createElement(ne.a.Link,{className:"collapse-close d-md-none",onClick:d},r.a.createElement(x.a,{icon:y.k}))),r.a.createElement(ne.a,{className:"flex-column pt-3 pt-md-0"})))))},oe=a(257),me=function(e){return r.a.createElement(re.a,{variant:"dark",expanded:!0,className:"ps-0 pe-2 pb-0"},r.a.createElement(oe.a,{fluid:!0,className:"px-0"},r.a.createElement("div",{className:"d-flex justify-content-between w-100"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("h5",{className:"m-0"},e.title)))))},ie=a(155),ue=a.n(ie),de=a(259),he=a(258),Ee=a(156),fe=a.n(Ee),be=a(157),pe=a.n(be),ge=a(158),Ne=a.n(ge),ve=a(159),xe=function(e){var t=ue()().get("year"),a=e.showSettings,n=function(t){e.toggleSettings(t)};return r.a.createElement("div",null,a?r.a.createElement(N.a,{className:"theme-settings"},r.a.createElement(N.a.Body,{className:"pt-4"},r.a.createElement(v.a,{className:"theme-settings-close",variant:"close",size:"sm","aria-label":"Close",onClick:function(){n(!1)}}),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},r.a.createElement("p",{className:"m-0 mb-1 me-3 fs-7"},"Made with open source ",r.a.createElement("span",{role:"img","aria-label":"gratitude"},"\ud83d\udc99")),r.a.createElement(ve.a,{href:"https://github.com/themesberg/volt-react-dashboard","data-size":"large","data-show-count":"true","aria-label":"Star themesberg/volt-react-dashboard on GitHub"},"Star")),r.a.createElement(v.a,{href:"https://themesberg.com/product/dashboard/volt-react",target:"_blank",variant:"primary",className:"mb-3 w-100"},r.a.createElement(x.a,{icon:y.d,className:"me-1"})," Download"),r.a.createElement("p",{className:"fs-7 text-gray-700 text-center"},"Available in the following technologies:"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(N.a.Link,{href:"https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard",target:"_blank"},r.a.createElement(de.a,{placement:"top",trigger:["hover","focus"],overlay:r.a.createElement(he.a,null,"Bootstrap 5 \xb7 The most popular HTML, CSS, and JS library in the world.")},r.a.createElement(g.a,{src:fe.a,className:"image image-xs"}))),r.a.createElement(N.a.Link,{href:"https://themesberg.com/product/dashboard/volt-react",target:"_blank"},r.a.createElement(de.a,{placement:"top",trigger:["hover","focus"],overlay:r.a.createElement(he.a,null,"React \xb7 A JavaScript library for building user interfaces.")},r.a.createElement(g.a,{src:pe.a,className:"image image-xs"}))),r.a.createElement(N.a.Link,{href:"https://themesberg.com/product/laravel/volt-admin-dashboard-template",target:"_blank"},r.a.createElement(de.a,{placement:"top",trigger:["hover","focus"],overlay:r.a.createElement(he.a,null,"Laravel \xb7 Most popular PHP framework in the world.")},r.a.createElement(g.a,{src:Ne.a,className:"image image-xs"})))))):r.a.createElement(N.a,{className:"theme-settings theme-settings-expand",onClick:function(){n(!0)}},r.a.createElement(N.a.Body,{className:"p-3 py-2"},r.a.createElement("span",{className:"fw-bold h6"},r.a.createElement(x.a,{icon:y.c,className:"me-1 fs-7"})," Settings"))),r.a.createElement("footer",{className:"footer section py-5"},r.a.createElement(O.a,null,r.a.createElement(j.a,{xs:12,lg:6,className:"mb-4 mb-lg-0"},r.a.createElement("p",{className:"mb-0 text-center text-xl-left"},"Copyright \xa9 2019-","".concat(t," "),r.a.createElement(N.a.Link,{href:"https://themesberg.com",target:"_blank",className:"text-blue text-decoration-none fw-normal"},"Themesberg"))),r.a.createElement(j.a,{xs:12,lg:6},r.a.createElement("ul",{className:"list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0"},r.a.createElement("li",{className:"list-inline-item px-0 px-sm-2"},r.a.createElement(N.a.Link,{href:"https://themesberg.com/about",target:"_blank"},"About")),r.a.createElement("li",{className:"list-inline-item px-0 px-sm-2"},r.a.createElement(N.a.Link,{href:"https://themesberg.com/themes",target:"_blank"},"Themes")),r.a.createElement("li",{className:"list-inline-item px-0 px-sm-2"},r.a.createElement(N.a.Link,{href:"https://themesberg.com/blog",target:"_blank"},"Blog")),r.a.createElement("li",{className:"list-inline-item px-0 px-sm-2"},r.a.createElement(N.a.Link,{href:"https://themesberg.com/contact",target:"_blank"},"Contact")))))))},ye=a(160),Se=a.n(ye),ke=function(e){var t=e.show;return r.a.createElement("div",{className:"preloader bg-soft flex-column justify-content-center align-items-center ".concat(t?"":"show")},r.a.createElement(g.a,{className:"loader-element animate__animated animate__jackInTheBox",src:Se.a,height:40}))},Oe=["component"],je=["component","navbarTitle"],we=function(e){var t=e.component,a=Object(m.a)(e,Oe),c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return u(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),r.a.createElement(i.b,Object.assign({},a,{render:function(e){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(ke,{show:!s})," ",r.a.createElement(t,e)," ")}}))},Ce=function(e){var t=e.component,a=e.navbarTitle,c=Object(m.a)(e,je),l=Object(n.useState)(!1),s=Object(o.a)(l,2),u=s[0],d=s[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return d(!0)}),1e3);return function(){return clearTimeout(e)}}),[]);var h=Object(n.useState)((function(){return"false"!==localStorage.getItem("settingsVisible")})),E=Object(o.a)(h,2),f=E[0],b=E[1],p=function(){b(!f),localStorage.setItem("settingsVisible",!f)};return r.a.createElement(i.b,Object.assign({},c,{render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,{show:!u}),r.a.createElement(se,null),r.a.createElement("main",{className:"content"},r.a.createElement(me,{title:a}),r.a.createElement(t,e),r.a.createElement(xe,{toggleSettings:p,showSettings:f})))}}))},Te=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2);t[0],t[1];return r.a.createElement(i.d,null,r.a.createElement(we,{exact:!0,path:E.path,component:S}),r.a.createElement(Ce,{exact:!0,path:u.path,component:Q,navbarTitle:"Dashboard"}),r.a.createElement(Ce,{exact:!0,path:d.path,component:$,navbarTitle:"Investors"}),r.a.createElement(Ce,{exact:!0,path:h.path,component:ee,navbarTitle:"Activity"}),r.a.createElement(i.a,{to:f.path}))},Ie=function(){var e=Object(i.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"auto"})}),[e]),null};l.a.render(r.a.createElement(s.a,null,r.a.createElement(Ie,null),r.a.createElement(Te,null)),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.9c5f968d.chunk.js.map