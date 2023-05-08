(globalThis["webpackChunkbooking_books"]=globalThis["webpackChunkbooking_books"]||[]).push([[692],{3369:(o,t,e)=>{"use strict";e.d(t,{Z:()=>a});const i=[{id:1,title:"The Cat in the Hat",cover:"cover1.jpeg",puntuation:4.5,author:"Dr. Seuss",tags:["children","funny"],price:230.99,description:"A classic children's book about two mischievous siblings, Sally and her brother, who get into all sorts of trouble with a tall, mischievous, and magical cat wearing a red and white-striped hat."},{id:2,title:"Moon",cover:"cover2.jpeg",puntuation:5,author:"Oliver Jeffers",tags:["infantil","risa"],price:312.99,description:"A heartwarming children's book about a girl who goes on an adventure to save the moon after it falls from the sky and gets stuck in a tree."},{id:3,title:"The Girl in Red",cover:"cover3.jpeg",puntuation:4,author:"Christina Henry",tags:["horror","thriller"],price:224.99,description:"A suspenseful retelling of the classic Little Red Riding Hood story, featuring a young woman named Red who must navigate a post-apocalyptic world full of danger and betrayal."},{id:4,title:"The arsonist",cover:"cover4.jpeg",puntuation:4.5,author:"Stephanie Oakes",tags:["horror","thriller"],price:399.99,description:"A gripping thriller about a young woman named Molly who sets out to uncover the truth about her father, a convicted arsonist, and the secrets he has been keeping from her."},{id:5,title:"Harry Potter and the Goblet of Fire",cover:"cover5.jpg",puntuation:4.5,author:"J.K. Rowling",tags:["infanitl","sci-fi"],price:299.99,description:"The fourth book in the beloved Harry Potter series, following the young wizard as he competes in the dangerous Triwizard Tournament and uncovers a dark plot against him."},{id:6,title:"A short history of Biology",cover:"cover6.jpg",puntuation:3.5,author:"John Gribbin",tags:["ciencia","historia"],price:418.99,description:"A fascinating exploration of the history of biology, from the earliest discoveries about the natural world to the cutting-edge research being done today."},{id:7,title:"Biology Student book",cover:"cover7.jpg",puntuation:2.5,author:"David Brooker",tags:["ciencia","historia"],price:189.5,description:"A comprehensive textbook for students of biology, covering topics such as cell biology, genetics, evolution, and ecology."},{id:8,title:"The Invisible Cloud",cover:"cover8.png",puntuation:4.5,author:"Adam Higginbotham",tags:["historia","ciencia"],price:299.99,description:"A gripping account of the Chernobyl disaster, from the explosion at the nuclear power plant to the aftermath of the disaster and its impact on the world."},{id:9,title:"Español Libro de Lectura",cover:"cover9.png",puntuation:1.5,author:"Luisa Fernanda",tags:["español","lectura"],price:249.99,description:"Un libro de lectura para estudiantes de español, que cubre temas como la gramática, la ortografía, y la literatura."},{id:10,title:"Econocmics Student Book",cover:"cover10.jpg",puntuation:5,author:"Matthew Taylor",tags:["economia","negocios"],price:399.99,description:"A comprehensive textbook for students of economics, covering topics such as microeconomics, macroeconomics, and international trade."}],a=i},5692:(o,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>U});var i=e(9835),a=e(6970),r=e(499),A=e(3369),n=e(8339);const s=o=>((0,i.dD)("data-v-104e06d8"),o=o(),(0,i.Cn)(),o),c={class:"left"},l=["src"],p={class:"validation"},g={class:"tags q-my-xs"},u=s((()=>(0,i._)("div",{class:"text-bold text-h6"},"Puntuación",-1))),d={class:"center"},m={class:"title text-h5"},h=s((()=>(0,i._)("span",{class:"text-bold"},"Título:",-1))),k={class:"author text-h6 text-grey"},Q={class:"description text-h6"},E={class:"right"},T={class:"precio text-h6"},J=s((()=>(0,i._)("span",{class:"text-bold"},"Precio",-1))),B=s((()=>(0,i._)("span",{class:"text-bold"},"Vendido por:",-1))),S={class:"condition text-h6"},x=s((()=>(0,i._)("span",{class:"text-bold"},"Condición: ",-1))),b={class:"text-primary"},w=(0,i.aZ)({__name:"Book",setup(o){const t=(0,n.yj)(),s=parseInt(t.params.id),w=Math.floor(12*Math.random())+1,R=Math.random()>.5?"Como nuevo":"Con apuntes",F=(0,r.qj)({currentBook:A.Z.find((o=>o.id===s))});return(o,t)=>{const A=(0,i.up)("q-chip"),n=(0,i.up)("q-rating"),s=(0,i.up)("q-separator"),L=(0,i.up)("q-btn"),v=(0,i.up)("q-card"),I=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(I,{id:"book",class:"flex flex-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"card"},{default:(0,i.w5)((()=>{var v;return[(0,i._)("section",c,[(0,i._)("img",{src:e(8497)(`./${null===(v=F.currentBook)||void 0===v?void 0:v.cover}`)},null,8,l),(0,i._)("div",p,[(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(F.currentBook.tags,(o=>((0,i.wg)(),(0,i.j4)(A,{key:o,size:"lg",color:"primary",class:"q-px-md","text-color":"white",dense:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(o),1)])),_:2},1024)))),128))]),u,(0,i.Wm)(n,{modelValue:F.currentBook.puntuation,"onUpdate:modelValue":t[0]||(t[0]=o=>F.currentBook.puntuation=o),readonly:"",icon:"book",color:"warning",size:"lg"},null,8,["modelValue"])])]),(0,i.Wm)(s,{vertical:"",class:"sep-center"}),(0,i._)("section",d,[(0,i._)("div",m,[h,(0,i.Uk)(" "+(0,a.zw)(F.currentBook.title),1)]),(0,i._)("div",k," Escrito por: "+(0,a.zw)(F.currentBook.author),1),(0,i.Wm)(s,{class:"q-my-lg"}),(0,i._)("div",Q,(0,a.zw)(F.currentBook.description),1)]),(0,i.Wm)(s,{vertical:"",class:"sep-center"}),(0,i._)("section",E,[(0,i._)("div",T,[J,(0,i._)("span",null,"$ "+(0,a.zw)(F.currentBook.price)+" MXN",1)]),(0,i._)("div",{class:"sellers text-h6 text-grey q-my-md"},[B,(0,i.Uk)(" "+(0,a.zw)(w)+" vendedores ")]),(0,i._)("div",S,[x,(0,i._)("span",b,(0,a.zw)((0,r.SU)(R)),1)]),(0,i.Wm)(s,{class:"q-my-lg"}),(0,i.Wm)(L,{color:"primary",label:"Comprar Ahora",class:"full-width"}),(0,i.Wm)(L,{color:"grey",label:"Regresar",class:"q-mt-sm full-width",onClick:t[1]||(t[1]=t=>o.$router.go(-1))})])]})),_:1})])),_:1})}}});var R=e(1639),F=e(9885),L=e(4458),v=e(7691),I=e(1570),y=e(926),j=e(9379),C=e(9984),f=e.n(C);const D=(0,R.Z)(w,[["__scopeId","data-v-104e06d8"]]),U=D;f()(w,"components",{QPage:F.Z,QCard:L.Z,QChip:v.Z,QRating:I.Z,QSeparator:y.Z,QBtn:j.Z})},8843:(o,t,e)=>{o.exports=e.p+"img/cover1.fbafad05.jpeg"},6253:(o,t,e)=>{o.exports=e.p+"img/cover10.2855613e.jpg"},4074:(o,t,e)=>{o.exports=e.p+"img/cover2.94d914f7.jpeg"},4896:(o,t,e)=>{o.exports=e.p+"img/cover3.d265fccd.jpeg"},9605:o=>{o.exports="data:image/jpeg;base64,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"},9493:(o,t,e)=>{o.exports=e.p+"img/cover5.6eec03ac.jpg"},1916:(o,t,e)=>{o.exports=e.p+"img/cover6.def9d24b.jpg"},2934:(o,t,e)=>{o.exports=e.p+"img/cover7.6b103128.jpg"},9015:(o,t,e)=>{o.exports=e.p+"img/cover8.3e27fd55.png"},9244:(o,t,e)=>{o.exports=e.p+"img/cover9.cb820706.png"},8497:(o,t,e)=>{var i={"./cover1.jpeg":8843,"./cover10.jpg":6253,"./cover2.jpeg":4074,"./cover3.jpeg":4896,"./cover4.jpeg":9605,"./cover5.jpg":9493,"./cover6.jpg":1916,"./cover7.jpg":2934,"./cover8.png":9015,"./cover9.png":9244};function a(o){var t=r(o);return e(t)}function r(o){if(!e.o(i,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return i[o]}a.keys=function(){return Object.keys(i)},a.resolve=r,o.exports=a,a.id=8497}}]);