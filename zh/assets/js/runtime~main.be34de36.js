(()=>{"use strict";var e,a,f,d,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,d,b)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({4:"3ddbfab3",336:"10462bbd",384:"3a332aed",400:"bfb16af5",480:"5e1e286c",552:"bd594172",720:"a30efae9",776:"665ae452",1072:"11c0ada5",1140:"8e18f14d",1370:"52c399f0",1624:"418597ff",1696:"261743cf",1744:"306a8c6c",1964:"b907f69c",2020:"7281aaa9",2140:"93b6c9d9",2176:"04e3ad0c",2232:"ba291406",2392:"6875c492",2632:"c4f5d8e4",2682:"ce7e3582",2756:"cd8de3c5",2856:"31d4e9f0",2860:"ab51c8b4",3032:"22b9a0fe",3048:"8d96fca0",3160:"96414c26",3240:"1c28c6e3",3296:"359750f5",3556:"99b2bb09",3568:"61f99801",3624:"b0eb1d2c",3700:"8ff2f6e4",3732:"4483f9ee",3752:"4164c12a",3836:"ba889988",4204:"1f391b9e",4264:"4f0c76f0",4304:"5e95c892",4592:"384a53ab",4666:"a94703ab",4820:"1de83d15",4888:"a0b00eca",4908:"7e4d8bae",4976:"a6aa9e1f",5112:"927d70e2",5120:"6f203a4b",5240:"21f2b21b",5272:"6e321c1b",5310:"18d0b73f",5512:"814f3328",5696:"935f2afb",5740:"ab9a747e",5760:"0812f22b",5840:"26c7ec19",6116:"ed8292c3",6140:"4fa9b183",6268:"a3e176af",6344:"ccc49370",6500:"a7bd4aaa",6752:"17896441",6844:"db6a28d8",7028:"9e4087bc",7426:"f5e74672",7576:"a6839fb2",7652:"393be207",7704:"09acc0d3",7716:"643af4d7",8120:"5c8e9584",8216:"c92adecb",8340:"1e2bc20d",8412:"01a85c17",8444:"dbc8f67a",8496:"21d2bb92",8704:"4fefef7d",8904:"eddaffdc",9108:"0383bada",9384:"67480b11",9512:"9b02eea9",9704:"a14b1805",9720:"80daed4c",9744:"6b00b6d6",9896:"4166a6d9",9904:"1802dd02",9956:"35f33ff3",9980:"1fa8b824"}[e]||e)+"."+{4:"fbfff93f",336:"b40902bc",384:"3fc6626c",400:"5c92625a",480:"0c63e5ca",552:"95ecd57c",720:"f9897cf0",776:"78051caa",1072:"18174931",1140:"42d382ea",1370:"016cf62d",1624:"f574c507",1696:"ac3b4231",1744:"0b4af5f1",1824:"0b68f9a3",1964:"d7d2ae64",2020:"97a1c08e",2140:"41ed0084",2176:"72794586",2232:"863f73dc",2392:"b3992636",2632:"cd1e0a76",2682:"6808990b",2756:"42772048",2856:"2814bcc8",2860:"9a5a2320",3032:"bee8cacc",3048:"bb546e93",3052:"4f3a55ca",3160:"313542a2",3240:"cfe414ca",3296:"2e22f6ad",3556:"ea2a25c8",3568:"d5f928e7",3624:"04c51c56",3700:"fcbb99b7",3732:"c62e4b9e",3752:"21dbbcdd",3836:"f2bef536",4204:"48b9c3fd",4264:"00159ef0",4304:"8a1bf775",4552:"a9f67257",4592:"adaabc52",4666:"ccedb8f3",4820:"2224d3cb",4888:"b2ebf7d6",4908:"dfc0bc6c",4976:"3790f941",5112:"aa4fc350",5120:"851b84ac",5240:"01b3d881",5272:"d2ce8b18",5310:"43772713",5512:"eee8fac8",5696:"275f70be",5740:"2a914e76",5760:"50052b2b",5840:"3c477311",6116:"9c0f4ba9",6140:"12efb433",6268:"e5c0a50c",6344:"e4bda4e5",6500:"3c221e5e",6752:"7f251471",6844:"faccc9a5",7028:"6d632022",7426:"8b7065b0",7576:"b993b886",7652:"63b40f32",7704:"9313875f",7716:"48c20eaf",8120:"2f964d89",8216:"91c10740",8340:"5a5898ac",8412:"aa88e5da",8444:"c72cbc48",8496:"aebacb00",8704:"7b48109f",8904:"c7cd2417",9108:"256274ae",9384:"a8661656",9512:"796c0466",9704:"115da215",9720:"ae4d4d39",9744:"0ba92112",9896:"12b3a0c2",9904:"e39ed70d",9956:"f689f459",9980:"f7c56798"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="fluid-website-demo:",r.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/zh/",r.gca=function(e){return e={17896441:"6752","3ddbfab3":"4","10462bbd":"336","3a332aed":"384",bfb16af5:"400","5e1e286c":"480",bd594172:"552",a30efae9:"720","665ae452":"776","11c0ada5":"1072","8e18f14d":"1140","52c399f0":"1370","418597ff":"1624","261743cf":"1696","306a8c6c":"1744",b907f69c:"1964","7281aaa9":"2020","93b6c9d9":"2140","04e3ad0c":"2176",ba291406:"2232","6875c492":"2392",c4f5d8e4:"2632",ce7e3582:"2682",cd8de3c5:"2756","31d4e9f0":"2856",ab51c8b4:"2860","22b9a0fe":"3032","8d96fca0":"3048","96414c26":"3160","1c28c6e3":"3240","359750f5":"3296","99b2bb09":"3556","61f99801":"3568",b0eb1d2c:"3624","8ff2f6e4":"3700","4483f9ee":"3732","4164c12a":"3752",ba889988:"3836","1f391b9e":"4204","4f0c76f0":"4264","5e95c892":"4304","384a53ab":"4592",a94703ab:"4666","1de83d15":"4820",a0b00eca:"4888","7e4d8bae":"4908",a6aa9e1f:"4976","927d70e2":"5112","6f203a4b":"5120","21f2b21b":"5240","6e321c1b":"5272","18d0b73f":"5310","814f3328":"5512","935f2afb":"5696",ab9a747e:"5740","0812f22b":"5760","26c7ec19":"5840",ed8292c3:"6116","4fa9b183":"6140",a3e176af:"6268",ccc49370:"6344",a7bd4aaa:"6500",db6a28d8:"6844","9e4087bc":"7028",f5e74672:"7426",a6839fb2:"7576","393be207":"7652","09acc0d3":"7704","643af4d7":"7716","5c8e9584":"8120",c92adecb:"8216","1e2bc20d":"8340","01a85c17":"8412",dbc8f67a:"8444","21d2bb92":"8496","4fefef7d":"8704",eddaffdc:"8904","0383bada":"9108","67480b11":"9384","9b02eea9":"9512",a14b1805:"9704","80daed4c":"9720","6b00b6d6":"9744","4166a6d9":"9896","1802dd02":"9904","35f33ff3":"9956","1fa8b824":"9980"}[e]||e,r.p+r.u(e)},(()=>{var e={296:0,4556:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(29|455)6$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>d=e[a]=[f,b]));f.push(d[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,b,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();