import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const r=document.querySelector(".feedback-form");let o={email:"",message:""};const s=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;o=e,console.log(o);for(const t in e)r.elements[t].value=e[t]}catch(e){console.log(e)}};s();const n=e=>{const{target:t}=e,l=t.value.trim(),a=t.name;o[a]=l,localStorage.setItem("feedback-form-state",JSON.stringify(o))};r.addEventListener("input",n);const m=e=>{e.preventDefault();const{currentTarget:t}=e;if(!o.email||!o.message){alert("Fill please all fields");return}console.log(o),t.reset(),localStorage.removeItem("feedback-form-state")};r.addEventListener("submit",m);
//# sourceMappingURL=2-form.js.map
