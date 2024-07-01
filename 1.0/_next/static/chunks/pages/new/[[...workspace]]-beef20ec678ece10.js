(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return a(5790)}])},5790:function(e,l,a){"use strict";a.r(l),a.d(l,{__N_SSG:function(){return m},default:function(){return f}});var s=a(5893),t=a(9008),r=a.n(t),i=a(7294),n=a(3162),o=a(8813),c=a(3157),d=a(1163),u=JSON.parse('{"wZ":[{"description":"MuseScore Studio is a free and open-source music notation program.","docker_registry":"https://docker.tobimobi.ch/","name":"docker.tobimobi.ch/musescore","image_src":"musescore.svg","categories":["Multimedia"],"friendly_name":"Musescore","architecture":["amd64","arm64"],"compatibility":["1.13.x","1.14.x","1.15.x"],"uncompressed_size_mb":2200,"sha":"736c4dcd734fe70de230806635ef2c8ad46228b8"}]}'),m=!0;function f(e){let{workspace:l}=e,t=(0,i.useRef)(null),m=(0,i.useRef)(null),f=(0,i.useRef)(null),[b,h]=(0,i.useState)(null),[x,g]=(0,i.useState)(null),[v,j]=(0,i.useState)(null),[w,y]=(0,i.useState)("png"),[N,_]=(0,i.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,i.useState)(k);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===l)f.current.value="",t.current.value="",m.current.value="",h(null),g(null),j(null),S(k);else if(l&&l[0]){let e=u.wZ.find(e=>e.name===atob(l[0]));if(delete e.sha,f.current.value=e.description,t.current.value=e.name,m.current.value=e.friendly_name,e.categories){let a=[];e.categories.map(e=>a.push({label:e,value:e})),h(a)}if(e.architecture){let s=[];e.architecture.map(e=>s.push({label:e,value:e})),g(s)}_("../../icons/"+e.image_src),S({...C,...e})}},[l]);let O={control:(e,l)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,l){let{data:a}=l;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=R(e.friendly_name)+"."+w,S(e)}},[w]);let E=e=>{let l={...C};l.categories=e.map(e=>e.value),S(l);let a=[];l.categories.map(e=>a.push({label:e,value:e})),h(a)},I=e=>{let l={...C};l.architecture=e.map(e=>e.value),S(l);let a=[];l.architecture.map(e=>a.push({label:e,value:e})),g(a)};function R(e){var l=e.toString().toLowerCase();return(l=(l=(l=l.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let L=()=>{var e=a(5733);let l=new e,s=l.folder(C.friendly_name);if(s.file("workspace.json",JSON.stringify(C,null,2)),v)s.file(C.image_src,v.file);else if(N){let t=fetch(N).then(e=>e.blob());s.file(C.image_src,t)}l.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,R(C.friendly_name)+".zip")})},M=e=>{let l={...C};l[e.target.name]=e.target.value,"icon"===e.target.name&&(delete l.icon,j({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),_(null)),l.friendly_name&&(l.image_src=R(l.friendly_name)+"."+w),S(l)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Kasm Workspaces"}),(0,s.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:M,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{ref:m,name:"friendly_name",onChange:M,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,s.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:E,styles:O,value:b}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{ref:f,name:"description",onChange:M,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{ref:t,name:"name",onChange:M,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,s.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:I,styles:O,value:x}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)(p,{workspace:C,icon:v,inlineImage:N}),(0,s.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,s.jsx)("button",{onClick:L,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function p(e){let{workspace:l,icon:a,inlineImage:t}=e,[r,n]=(0,i.useState)(!1),o=null;if(a){let c=new Blob([a.file]);o=URL.createObjectURL(c),l.image_src=o}return(0,s.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,s.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,s.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:l.image_src,onError(e){null!==t&&(e.target.src=t)},alt:l.friendly_name}),(0,s.jsxs)("div",{className:"flex-col pl-28",children:[(0,s.jsx)("div",{className:"font-bold",children:l.friendly_name||"Friendly Name"}),(0,s.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["tobimobi"," ",(0,s.jsx)("span",{children:void 0})]}),(0,s.jsx)("div",{className:" h-8"})]}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[l.architecture&&l.architecture.map((e,l)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+l)),l.categories.map((e,l)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+l))]}),!1]}),(0,s.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,s.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,s.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,s.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,s.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,s.jsx)("div",{className:"font-bold",children:l.friendly_name})," ",l.description]}),(0,s.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,s.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,s.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);