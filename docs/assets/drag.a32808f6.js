import{_ as g,d as c,r as o,b as i,o as n,c as u,a as _,j as v,F as m,k as f,e as p,g as b}from"./index.6878e069.js";const h=c({setup(l){const a=o();return i(()=>{a.value.addEventListener("dragover",e=>{e.preventDefault()}),a.value.addEventListener("drop",e=>{e.preventDefault(),Array.from(e.dataTransfer.items).forEach(t=>{if(t.kind==="file"){const d=t.getAsFile(),r=URL.createObjectURL(d),s=new Image;s.src=r,s.style.maxHeight="100%",s.style.maxWidth="100%",e.target.innerText="",e.target.appendChild(s)}})})}),(e,t)=>(n(),u("article",null,[_("p",{draggable:"true",ref_key:"dragImageRef",ref:a,class:"drag-image"},"\u62D6\u653E\u56FE\u7247\u55BD",512)]))}});var k=g(h,[["__scopeId","data-v-f4ed5f44"]]);const y=f('<article class="drag-block" data-v-11ca59b2><div id="drag-item1" class="drag-item" style="background-color:cadetblue;" draggable="true" data-v-11ca59b2> huohuo </div><div id="drag-item2" class="drag-item" style="background-color:gray;" draggable="true" data-v-11ca59b2> huohuo </div><div id="drag-item3" class="drag-item" style="background-color:skyblue;" draggable="true" data-v-11ca59b2> huohuo </div><div id="drag-item4" class="drag-item" style="background-color:yellowgreen;" draggable="true" data-v-11ca59b2> huohuo </div><div id="drag-item5" class="drag-item" style="background-color:whitesmoke;" draggable="true" data-v-11ca59b2> huohuo </div><div id="drag-item6" class="drag-item" style="background-color:khaki;" draggable="true" data-v-11ca59b2> huohuo </div></article><article class="drag-container" data-v-11ca59b2></article>',2),E=[y],x=c({setup(l){const a=o();return i(()=>{a.value.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",e.target.id),e.target.className}),a.value.addEventListener("dragover",e=>{e.preventDefault()}),a.value.addEventListener("dragenter",e=>{e.target.className}),a.value.addEventListener("drop",e=>{var t,d;if(e.target.className==="drag-container"||e.target.className==="drag-block"){const r=(t=e.dataTransfer)==null?void 0:t.getData("text/plain");e.target.appendChild(document.getElementById(r))}if(e.target.className==="drag-item"){const r=(d=e.dataTransfer)==null?void 0:d.getData("text/plain");e.target.parentElement.insertBefore(document.getElementById(r),e.target.nextElementSibling)}})}),(e,t)=>(n(),u(m,null,[_("section",{ref_key:"dragRef",ref:a},E,512),v(k)],64))}});var B=g(x,[["__scopeId","data-v-11ca59b2"]]);const D=c({setup(l){return(a,e)=>(n(),p(b(B)))}});export{D as default};