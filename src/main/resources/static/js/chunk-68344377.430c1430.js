(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68344377"],{"20d6":function(e,t,n){"use strict";var r=n("5ca1"),a=n("0a49")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},2614:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},[n("Header"),n("div",{staticClass:"alert",domProps:{innerHTML:e._s(e.$store.getters.announcement)}}),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{offset:e.isFullScreen?0:3,xs:24,sm:24,lg:e.isFullScreen?24:18}},[n("List",{ref:"List"})],1)],1),e.$store.getters.showDocument&&null!==e.$store.state.config.readme?n("el-card",{staticClass:"box-card",class:e.isFullScreen?"":"center-box-card"},[n("markdown-render",{attrs:{text:e.$store.state.config.readme}})],1):e._e()],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticClass:"demo-form-inline zfile-header",attrs:{inline:!0,size:"mini"}},[e.$store.getters.searchEnable?n("el-form-item",[n("el-input",{attrs:{placeholder:"搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1):e._e(),n("el-form-item",[n("el-breadcrumb",{attrs:{separator:"/","separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/main"}}},[e._v("首页")]),e._l(e.breadcrumbData,(function(t){return n("el-breadcrumb-item",{key:t.path,attrs:{to:{path:"/main"+t.fullPath}}},[e._v(e._s(t.name))])}))],2)],1)],1)},o=[],s=(n("7f7f"),n("df7c")),c=n.n(s),l={name:"Header",data:function(){return{search:"",breadcrumbData:[],searching:!1}},created:function(){this.buildBreadcrumbData()},methods:{buildBreadcrumbData:function(){this.breadcrumbData=[];var e=this.$route.params.pathMatch;e=e||"/";while("/"!==e){var t=c.a.basename(e);this.breadcrumbData.unshift({name:t,fullPath:e}),e=c.a.resolve(e,"../")}}},watch:{"$route.fullPath":function(){this.buildBreadcrumbData()},search:function(e){var t=this;clearTimeout(this.timer),this.timer=setTimeout((function(){t.$store.commit("updateSearchParam",e)}),150)},"$store.state.currentDirectory":function(e){var t=this.$store.state.config,n="";t.viewConfig&&(n=" | "+this.$store.state.config.viewConfig.siteName),"/"===e.name||""===e.name?document.title="首页"+n:document.title=e.name+n}}},u=l,f=(n("ec01"),n("2877")),h=Object(f["a"])(u,i,o,!1,null,"38be2320",null),m=h.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"List"}},[n("el-table",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.infiniteHandler,expression:"infiniteHandler"}],ref:"fileTable",staticClass:"transition-box",attrs:{id:"ListTable","infinite-scroll-distance":"1","infinite-scroll-immediate":"true",data:this.$store.getters.tableData,height:e.$store.getters.showDocument&&null!==e.$store.state.config.readme?"50vh":"83vh",size:e.$store.getters.tableSize,"cell-class-name":"table-cursor"},on:{"cell-mouse-enter":e.updateInfoHover,"cell-mouse-leave":e.updateInfoLeave,"row-click":e.openFolder,"row-contextmenu":e.showMenu}},[n("el-table-column",{attrs:{prop:"name",label:"文件名","label-class-name":"table-header-left","min-width":"100%"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#"+t.row.icon}})]),e._v("\n                "+e._s(t.row.name)+"\n            ")]}}])}),n("el-table-column",{attrs:{prop:"time",label:"修改时间","class-name":"hidden-xs-only","min-width":"20%"}}),n("el-table-column",{attrs:{prop:"size",label:"大小","class-name":"hidden-xs-only",formatter:this.common.fileSizeFilter,"min-width":"15%"}}),e.$store.getters.showOperator?n("el-table-column",{attrs:{label:"操作","min-width":"15%"},scopedSlots:e._u([{key:"default",fn:function(t){return["FILE"===t.row.type?n("div",[n("i",{staticClass:"el-icon-download operator-btn",on:{click:function(t){return t.stopPropagation(),e.download(t)}}}),n("i",{staticClass:"el-icon-copy-document operator-btn hidden-sm-and-down",on:{click:function(t){return t.stopPropagation(),e.directlink(t)}}})]):e._e()]}}],null,!1,1022246414)}):e._e()],1),n("el-dialog",{attrs:{id:"textDialog","destroy-on-close":!0,title:e.currentClickRow.name,visible:e.dialogTextVisible,top:"5vh",width:"90%"},on:{"update:visible":function(t){e.dialogTextVisible=t},opened:e.initTextDialog}},[n("TextPreview",{ref:"textDialog",attrs:{file:e.currentClickRow}})],1),n("el-dialog",{attrs:{id:"videoDialog","destroy-on-close":!0,title:e.currentClickRow.name,visible:e.dialogVideoVisible},on:{"update:visible":function(t){e.dialogVideoVisible=t}}},[e.dialogVideoVisible?n("video-player",{ref:"videoPlayer",attrs:{data:e.currentClickRow}}):e._e()],1),n("audio-player",{attrs:{"file-list":this.$store.getters.filterFileByType("audio"),"audio-index":e.currentClickTypeIndex("audio")}}),n("v-contextmenu",{ref:"contextmenu"},[n("v-contextmenu-item",{on:{click:e.preview}},[n("i",{staticClass:"el-icon-view"}),n("label",{domProps:{innerHTML:e._s("FILE"===e.hoverRow.type?"预览":"打开")}})]),n("v-contextmenu-item",{directives:[{name:"show",rawName:"v-show",value:"FILE"===e.hoverRow.type,expression:"hoverRow.type === 'FILE'"}],on:{click:e.download}},[n("i",{staticClass:"el-icon-download"}),n("label",[e._v("下载")])]),n("v-contextmenu-item",{directives:[{name:"show",rawName:"v-show",value:"FILE"===e.hoverRow.type,expression:"hoverRow.type === 'FILE'"}],on:{click:e.directlink}},[n("i",{staticClass:"el-icon-copy-document"}),n("label",[e._v("复制直链")])])],1)],1)},p=[],v=(n("20d6"),n("ac4d"),n("8a81"),n("ac6a"),n("f559"),n("e05f"),n("4360")),b=function(){return n.e("chunk-f8511272").then(n.bind(null,"5912"))},g=function(){return n.e("chunk-1f0cfb2a").then(n.bind(null,"3f22"))},w=function(){return n.e("chunk-28547ac9").then(n.bind(null,"7901"))},y="/main",x={components:{VideoPlayer:b,TextPreview:g,AudioPlayer:w},created:function(){var e=this.$route.params.pathMatch;this.searchParam.path=e||"/"},data:function(){return{loading:!1,hoverRow:{},dialogTextVisible:!1,dialogVideoVisible:!1,searchParam:{path:"",password:"",page:1},currentClickRow:{},contextMenuDataAxis:{x:null,y:null}}},watch:{"searchParam.path":{deep:!0,handler:function(e){this.$store.state.searchParam&&"/"===e||(this.searchParam.page=1,this.loadingConfig(),this.getList())}},"$route.fullPath":function(){this.searchParam.path=this.$route.params.pathMatch},"$store.state.searchParam":function(e){var t,n,r=this;this.$route.fullPath.startsWith("/main")||this.$router.push("/main"),this.searchParam.page=1,this.searchParam.path="/",e?(t="api/search",n={name:e,page:this.searchParam.page}):(t="api/list",n=this.searchParam),this.$http.get(t,{params:n}).then((function(e){r.searchParam.page++,v["a"].commit("tableData",e.data.data)}))}},methods:{showMenu:function(){event.preventDefault(),this.$refs.contextmenu.show({top:event.clientY,left:event.clientX}),this.$refs.contextmenu.$el.hidden=!1},getList:function(){var e=this,t=this;this.$http.get("api/list",{params:this.searchParam}).then((function(n){var r=n.data.data;if(r){var a=t.searchParam.path;if(""!==a&&"/"!==a){var i=e.$route.params.pathMatch;i=i||"/";var o=c.a.basename(c.a.resolve(i,"../"));r.unshift({name:o||"/",path:c.a.resolve(a,"../"),type:"BACK"})}t.searchParam.page++,t.loading=!0,v["a"].commit("tableData",r);var s={path:a,name:c.a.basename(a),icon:"el-icon-my-folder",url:e.common.removeDuplicateSeparator(window.location.host+"/#/main/"+a)};v["a"].commit("currentDirectory",s)}else e.searchParam.password&&e.$message.error("密码错误, 请重新输入!"),e.popPassword()}))},popPassword:function(){var e=this;this.$prompt("请输入密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValidator:function(e){return!!e},inputErrorMessage:"密码不能为空."}).then((function(t){var n=t.value;n!==e.searchParam.password&&(e.searchParam.password=n),e.getList()})).catch((function(){e.$router.push(y+c.a.resolve(e.searchParam.path,"../"))}))},updateInfoHover:function(e){this.hoverRow=e,v["a"].commit("hoverRow",e)},updateInfoLeave:function(){v["a"].commit("hoverRow",null)},loadingConfig:function(){this.$http.get("api/config",{params:{path:this.searchParam.path}}).then((function(e){v["a"].commit("updateConfig",e.data.data)}))},openFolder:function(e){if(this.currentClickRow=e,"FILE"===e.type){if("ftp"===this.$store.getters.storageStrategy)return this.$message({message:"FTP 模式, 不支持预览功能, 已自动调用下载",type:"warning"}),void this.download();var t=this.common.getFileType(e.name);switch(t){case"video":this.openVideo();break;case"image":this.openImage();break;case"text":this.openText();break;case"audio":this.openAudio();break;default:this.download()}}else{var n;n="BACK"===e.type?e.path:this.common.removeDuplicateSeparator(e.path+"/"+e.name),0!==n.indexOf("/")&&(n="/"+n),this.$router.push(y+n)}},openImage:function(){var e=[],t=!0,n=!1,r=void 0;try{for(var a,i=this.$store.getters.filterFileByType("image")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;e.push({alt:o.name,src:o.url})}}catch(s){n=!0,r=s}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}this.layer.photos({photos:{data:e,start:this.currentClickTypeIndex("image")},anim:5,shade:.5})},openAudio:function(){},openText:function(){this.dialogTextVisible=!0},openVideo:function(){this.dialogVideoVisible=!0},initTextDialog:function(){this.$refs.textDialog.init()},preview:function(){this.openFolder(this.hoverRow)},download:function(){window.location.href=this.hoverRow.url},directlink:function(){var e=this,t=this.common.removeDuplicateSeparator(this.$store.getters.domain+"/directlink/"+this.hoverRow.path+"/"+encodeURI(this.hoverRow.name));this.$copyText(t).then((function(){e.$message.success("复制成功")}),(function(){e.$message.error("复制失败")}))},infiniteHandler:function(){var e,t,n=this;if(!this.loading)return!0;this.$store.state.searchParam?(e="api/search",t={name:this.$store.state.searchParam,page:this.searchParam.page}):(e="api/list",t=this.searchParam),this.$http.get(e,{params:t}).then((function(e){var t=e.data.data;v["a"].commit("appendTableData",t),n.searchParam.page++}))}},computed:{currentClickTypeIndex:function(){var e=this;return function(t){var n=e.currentClickRow;return"FILE"!==n.type?-1:"{}"===JSON.stringify(n)?0:(t=t||e.common.getFileType(n.name),e.$store.getters.filterFileByType(t).findIndex((function(e){return e.name===n.name})))}}}},P=x,$=(n("94e3"),Object(f["a"])(P,d,p,!1,null,"9e7ae082",null)),k=$.exports,S=n("f786"),C={name:"Main",components:{List:k,Header:m,MarkdownRender:S["a"]},watch:{"$store.state.config.viewConfig.customJs":function(e){var t=document.createElement("script");t.type="text/javascript",t.text=e,document.getElementsByTagName("head")[0].appendChild(t)},"$store.state.config.viewConfig.customCss":function(e){var t=document.createElement("style");t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)}},computed:{isFullScreen:function(){return this.common.isMobile()||"center"!==this.$store.getters.layout}}},T=C,E=(n("c266"),Object(f["a"])(T,r,a,!1,null,null,null));t["default"]=E.exports},"287b":function(e,t,n){},"290c":function(e,t,n){},"2eff":function(e,t,n){},"37c8":function(e,t,n){t.f=n("2b4c")},"3a72":function(e,t,n){var r=n("7726"),a=n("8378"),i=n("2d00"),o=n("37c8"),s=n("86cc").f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:o.f(e)})}},"67ab":function(e,t,n){var r=n("ca5a")("meta"),a=n("d3f4"),i=n("69a8"),o=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("79e5")((function(){return c(Object.preventExtensions({}))})),u=function(e){o(e,r,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[r].i},h=function(e,t){if(!i(e,r)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[r].w},m=function(e){return l&&d.NEED&&c(e)&&!i(e,r)&&u(e),e},d=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:h,onFreeze:m}},"7bbc":function(e,t,n){var r=n("6821"),a=n("9093").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return a(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):a(r(e))}},"8a81":function(e,t,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("9e1e"),o=n("5ca1"),s=n("2aba"),c=n("67ab").KEY,l=n("79e5"),u=n("5537"),f=n("7f20"),h=n("ca5a"),m=n("2b4c"),d=n("37c8"),p=n("3a72"),v=n("d4c0"),b=n("1169"),g=n("cb7c"),w=n("d3f4"),y=n("4bf8"),x=n("6821"),P=n("6a99"),$=n("4630"),k=n("2aeb"),S=n("7bbc"),C=n("11e9"),T=n("2621"),E=n("86cc"),F=n("0d58"),D=C.f,O=E.f,_=S.f,I=r.Symbol,R=r.JSON,j=R&&R.stringify,L="prototype",A=m("_hidden"),M=m("toPrimitive"),V={}.propertyIsEnumerable,N=u("symbol-registry"),B=u("symbols"),H=u("op-symbols"),z=Object[L],J="function"==typeof I&&!!T.f,W=r.QObject,K=!W||!W[L]||!W[L].findChild,Y=i&&l((function(){return 7!=k(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=D(z,t);r&&delete z[t],O(e,t,n),r&&e!==z&&O(z,t,r)}:O,G=function(e){var t=B[e]=k(I[L]);return t._k=e,t},Q=J&&"symbol"==typeof I.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof I},U=function(e,t,n){return e===z&&U(H,t,n),g(e),t=P(t,!0),g(n),a(B,t)?(n.enumerable?(a(e,A)&&e[A][t]&&(e[A][t]=!1),n=k(n,{enumerable:$(0,!1)})):(a(e,A)||O(e,A,$(1,{})),e[A][t]=!0),Y(e,t,n)):O(e,t,n)},X=function(e,t){g(e);var n,r=v(t=x(t)),a=0,i=r.length;while(i>a)U(e,n=r[a++],t[n]);return e},q=function(e,t){return void 0===t?k(e):X(k(e),t)},Z=function(e){var t=V.call(this,e=P(e,!0));return!(this===z&&a(B,e)&&!a(H,e))&&(!(t||!a(this,e)||!a(B,e)||a(this,A)&&this[A][e])||t)},ee=function(e,t){if(e=x(e),t=P(t,!0),e!==z||!a(B,t)||a(H,t)){var n=D(e,t);return!n||!a(B,t)||a(e,A)&&e[A][t]||(n.enumerable=!0),n}},te=function(e){var t,n=_(x(e)),r=[],i=0;while(n.length>i)a(B,t=n[i++])||t==A||t==c||r.push(t);return r},ne=function(e){var t,n=e===z,r=_(n?H:x(e)),i=[],o=0;while(r.length>o)!a(B,t=r[o++])||n&&!a(z,t)||i.push(B[t]);return i};J||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var e=h(arguments.length>0?arguments[0]:void 0),t=function(n){this===z&&t.call(H,n),a(this,A)&&a(this[A],e)&&(this[A][e]=!1),Y(this,e,$(1,n))};return i&&K&&Y(z,e,{configurable:!0,set:t}),G(e)},s(I[L],"toString",(function(){return this._k})),C.f=ee,E.f=U,n("9093").f=S.f=te,n("52a7").f=Z,T.f=ne,i&&!n("2d00")&&s(z,"propertyIsEnumerable",Z,!0),d.f=function(e){return G(m(e))}),o(o.G+o.W+o.F*!J,{Symbol:I});for(var re="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ae=0;re.length>ae;)m(re[ae++]);for(var ie=F(m.store),oe=0;ie.length>oe;)p(ie[oe++]);o(o.S+o.F*!J,"Symbol",{for:function(e){return a(N,e+="")?N[e]:N[e]=I(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),o(o.S+o.F*!J,"Object",{create:q,defineProperty:U,defineProperties:X,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne});var se=l((function(){T.f(1)}));o(o.S+o.F*se,"Object",{getOwnPropertySymbols:function(e){return T.f(y(e))}}),R&&o(o.S+o.F*(!J||l((function(){var e=I();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))}))),"JSON",{stringify:function(e){var t,n,r=[e],a=1;while(arguments.length>a)r.push(arguments[a++]);if(n=t=r[1],(w(t)||void 0!==e)&&!Q(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Q(t))return t}),r[1]=t,j.apply(R,r)}}),I[L][M]||n("32e9")(I[L],M,I[L].valueOf),f(I,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"94e3":function(e,t,n){"use strict";var r=n("2eff"),a=n.n(r);a.a},ac4d:function(e,t,n){n("3a72")("asyncIterator")},c266:function(e,t,n){"use strict";var r=n("287b"),a=n.n(r);a.a},d4c0:function(e,t,n){var r=n("0d58"),a=n("2621"),i=n("52a7");e.exports=function(e){var t=r(e),n=a.f;if(n){var o,s=n(e),c=i.f,l=0;while(s.length>l)c.call(e,o=s[l++])&&t.push(o)}return t}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){n=t+1;break}}else-1===r&&(a=!1,r=t+1);return-1===r?"":e.slice(n,r)}function a(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(a(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===i(e,-1);return e=n(a(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(a(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),i=r(n.split("/")),o=Math.min(a.length,i.length),s=o,c=0;c<o;c++)if(a[c]!==i[c]){s=c;break}var l=[];for(c=s;c<a.length;c++)l.push("..");return l=l.concat(i.slice(s)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!a){r=i;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,a=!0,i=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===r&&(a=!1,r=o+1),46===s?-1===t?t=o:1!==i&&(i=1):-1!==t&&(i=-1);else if(!a){n=o+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("f28c"))},e05f:function(e,t,n){},ec01:function(e,t,n){"use strict";var r=n("290c"),a=n.n(r);a.a},f559:function(e,t,n){"use strict";var r=n("5ca1"),a=n("9def"),i=n("d2c8"),o="startsWith",s=""[o];r(r.P+r.F*n("5147")(o),"String",{startsWith:function(e){var t=i(this,e,o),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return s?s.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);