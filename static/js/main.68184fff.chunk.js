(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(43)},18:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(18),n(1)),s=n.n(i),l=n(12),u=n(5),p=n(4);n(42);var m=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("Click Start to transcode"),i=Object(u.a)(o,2),m=i[0],d=i[1],f=Object(p.createFFmpeg)({log:!0}),v=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d("Loading ffmpeg-core.js"),e.next=3,f.load();case 3:return d("Start transcoding"),e.t0=f,e.next=7,Object(p.fetchFile)("/flame.avi");case 7:return e.t1=e.sent,e.t0.FS.call(e.t0,"writeFile","test.avi",e.t1),e.next=11,f.run("-i","test.avi","test.mp4");case 11:d("Complete transcoding"),t=f.FS("readFile","test.mp4"),c(URL.createObjectURL(new Blob([t.buffer],{type:"video/mp4"})));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("p",null),r.a.createElement("video",{src:n,controls:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:v},"Start"),r.a.createElement("p",null,m))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.68184fff.chunk.js.map