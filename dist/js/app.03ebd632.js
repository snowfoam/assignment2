(function(e){function t(t){for(var r,a,s=t[0],i=t[1],c=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3061849e":"4073fe3e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3061849e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3061849e":"bd1e702e"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],f=c.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=s(e);var d=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("66b9");var r=n("b650"),a=(n("4056"),n("44bf")),o=(n("be7f"),n("565f")),u=(n("5246"),n("6b41")),s=(n("3647"),n("ea47")),i=(n("0653"),n("34e9")),c=(n("c194"),n("7744")),f=(n("a44c"),n("e27c")),d=(n("4ddd"),n("9f14")),l=(n("8fec"),n("7bd9")),m=(n("9a83"),n("f564")),h=(n("537a"),n("ac28")),p=(n("a52c"),n("2ed4")),v=(n("c3a6"),n("ad06")),g=(n("9cb7"),n("66fd")),b=(n("5852"),n("d961")),y=(n("2994"),n("2bdd")),k=(n("da3c"),n("0b33")),w=(n("bda7"),n("5e46")),O=(n("8a58"),n("e41f")),j=(n("0cc8"),n("3104")),I=(n("ab71"),n("58e6")),S=(n("e930"),n("8f80")),q=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},N=[],P=(n("7c55"),n("2877")),A={},C=Object(P["a"])(A,x,N,!1,null,null,null),L=C.exports,_=n("8c4f"),T=function(e){return function(t){return n.e("chunk-3061849e").then(function(){var r=[n("1b03")("./".concat(e))];t.apply(null,r)}.bind(this)).catch(n.oe)}};q["a"].use(_["a"]);var E=[{path:"/",name:"boot",component:T("Welcome/Boot")},{path:"/welcome",name:"welcome",component:T("Welcome/Welcome")},{path:"/login",name:"login",component:T("Login/Login")},{path:"/register",name:"register",component:T("Register/Register")},{path:"/home",name:"home",component:T("Home/Home"),redirect:"/home/message",children:[{path:"message",name:"Message",component:T("Home/Message")},{path:"friends",name:"Friends",component:T("Home/Friends")},{path:"article",name:"Dynamic",component:T("Home/Article")}]},{path:"/chat_one",name:"chat",component:T("Chat/Chat"),children:[{path:":from/:to",name:"chatone",component:T("Chat/One")}]},{path:"/article/detail",name:"articleDetail",component:T("Home/articleDetail")}],U=new _["a"]({routes:E}),H=U,F=n("2f62"),B=(n("d3b7"),n("c24f")),G=n("c276"),J={state:{userId:"",token:Object(G["a"])(),hasGetInfo:!1,nickName:"",avatar:"",sex:"",age:"",level:"",signature:"",favor:"",friends:[],isAdmin:""},mutations:{setUserId:function(e,t){e.userId=t},setavatar:function(e,t){e.avatar=t},setToken:function(e,t){e.token=t,Object(G["b"])(t)},setHasGetInfo:function(e,t){e.hasGetInfo=t},setNickName:function(e,t){e.nickName=t},setSex:function(e,t){e.sex=t},setAge:function(e,t){e.age=t},setLevel:function(e,t){e.level=t},setFavor:function(e,t){e.favor=t},setFriends:function(e,t){e.friends=t},setIsAdmin:function(e,t){e.isAdmin=t},setSignature:function(e,t){e.signature=t}},actions:{handlegetcode:function(e,t){e.commit;var n=t.userEmail;return new Promise((function(e,t){sendcode({userEmail:n}).then((function(t){t.data,t.data.status;e(t.data)})).catch((function(e){t(e)}))}))},handleLogin:function(e,t){var n=e.commit,r=t.email,a=t.password;return new Promise((function(e,t){Object(B["d"])({email:r,password:a}).then((function(t){var r=t.data.code;200===r?(n("setToken",t.data.token),e(t.data)):e(t.data)})).catch((function(e){t(e)}))}))},handleLogOut:function(e){e.state;var t=e.commit;return new Promise((function(e,n){t("setToken",""),e()}))},getUserInfo:function(e){e.state;var t=e.commit;return new Promise((function(e,n){Object(B["c"])().then((function(n){var r=n.data.data;200===n.data.code?(t("setUserId",r._id),t("setHasGetInfo",!0),t("setNickName",r.nickName),t("setSex",r.sex),t("setAge",r.age),t("setLevel",r.level),t("setFavor",r.favor),t("setFriends",r.friends),t("setIsAdmin",r.isAdmin),t("setSignature",r.signature),t("setavatar",r.avatar),e(n)):e(n)})).catch((function(e){n(e)}))}))},updatedUserInfo:function(e,t){e.commit;return new Promise((function(e,n){Object(B["h"])(t).then((function(t){e(t)})).catch((function(e){return n(e)}))}))}},getters:{userInfo:function(e){var t={nickName:e.nickName,avatar:e.avatar,sex:e.sex,age:e.age,level:e.level,signature:e.signature,favor:e.favor,userId:e.userId,friends:e.friends};return t},hasGetInfo:function(e){return e.hasGetInfo},token:function(e){return e.token},_id:function(e){return e.userId}}};q["a"].use(F["a"]);var M=new F["a"].Store({state:{},mutations:{},actions:{},modules:{user:J}}),D=(n("5cfb"),n("5132")),R=n.n(D);q["a"].use(new R.a({debug:!0,connection:"http://localhost:8000",vuex:{store:M}})),q["a"].use(r["a"]).use(a["a"]).use(o["a"]).use(u["a"]).use(s["a"]).use(i["a"]).use(c["a"]).use(f["a"]).use(d["a"]).use(l["a"]).use(m["a"]).use(h["a"]).use(p["a"]).use(v["a"]).use(g["a"]).use(b["a"]).use(y["a"]).use(k["a"]).use(w["a"]).use(O["a"]).use(j["a"]).use(I["a"]).use(S["a"]),q["a"].config.productionTip=!1,new q["a"]({router:H,store:M,render:function(e){return e(L)}}).$mount("#app")},"66df":function(e,t,n){"use strict";n("b64b"),n("d3b7");var r=n("d4ec"),a=n("bee2"),o=n("bc3a"),u=n.n(o),s=n("c276"),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:baseURL;Object(r["a"])(this,e),this.baseUrl=t,this.queue={}}return Object(a["a"])(e,[{key:"getInsideConfig",value:function(){var e=Object(s["a"])()||"";""!==e&&(e=" "+e);var t={baseURL:this.baseUrl,headers:{Authorization:"Bearer"+e},withCredentials:!0};return t}},{key:"destroy",value:function(e){delete this.queue[e],Object.keys(this.queue).length}},{key:"interceptors",value:function(e,t){var n=this;e.interceptors.request.use((function(e){return Object.keys(n.queue).length,n.queue[t]=!0,e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){n.destroy(t);var r=e.data,a=e.status;return{data:r,status:a}}),(function(e){n.destroy(t);var r=e.response;if(!r){var a=JSON.parse(JSON.stringify(e)),o=a.request,u=o.statusText,s=o.status,i=a.config;r={statusText:u,status:s,request:{responseURL:i.url}}}return Promise.reject(e)}))}},{key:"request",value:function(e){var t=u.a.create();return e=Object.assign(this.getInsideConfig(),e),this.interceptors(t,e.url),t(e)}}]),e}(),c=i,f={baseUrl:{pro:"http://localhost:8000/",dev:"http://localhost:8000/"}},d=f.baseUrl.pro,l=new c(d);t["a"]=l},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},c24f:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"h",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"i",(function(){return m}));var r=n("66df"),a=n("c276"),o=function(e){var t=e.email,n=e.password,a={email:t,password:n};return r["a"].request({url:"/auth/signin",data:a,method:"post"})},u=function(e){var t=e.email,n=e.password,a=e.nickName,o=e.sex,u=e.age,s=e.favor;return r["a"].request({url:"/auth/signup",data:{email:t,password:n,nickName:a,sex:o,age:u,favor:s},method:"post"})},s=function(e){var t=e.email;return r["a"].request({url:"/auth/code",data:{email:t},method:"post"})},i=function(e){var t=e.code;return r["a"].request({url:"/auth/checkCode",data:{code:t},method:"post"})},c=function(){return r["a"].request({url:"/user/token",method:"get"})},f=function(e){return r["a"].request({url:"/user/userinfo",data:e,method:"put"})},d=function(e){return r["a"].request({url:"/user/".concat(e),method:"get"})},l=function(e){return r["a"].request({url:"/friend/create",data:e,method:"post"})},m=function(e){return r["a"].request({url:"upload",data:e,method:"post",headers:{"content-type":"multipart/form-data",Authorization:"Bearer "+Object(a["a"])()}})}},c276:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r="token",a=function(e){localStorage.removeItem(r),localStorage.setItem(r,JSON.stringify(e))},o=function(){var e=JSON.parse(localStorage.getItem(r));return e||!1}}});
//# sourceMappingURL=app.03ebd632.js.map