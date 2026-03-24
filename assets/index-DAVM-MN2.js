import{_ as c}from"./main-JLoh3lRi.js";const o=await c(()=>import("/pagefind/pagefind.js"),[]),i=document.getElementById("full-search-input"),r=document.getElementById("full-search-results");async function l(n){if(!n||n.length<2){r.innerHTML='<div class="col-12"><p class="text-muted">Enter a search term above to find content.</p></div>';return}r.innerHTML='<div class="col-12"><div class="spinner-border" role="status"><span class="visually-hidden">Searching...</span></div></div>';try{const t=await o.search(n,{limit:20});if(t.results.length===0){r.innerHTML='<div class="col-12"><p class="text-muted">No results found for "'+n+'"</p></div>';return}const s=await Promise.all(t.results.map(async a=>{const e=await a.data();return`
            <div class="col-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><a href="${e.url}" class="text-decoration-none">${e.meta.title}</a></h5>
                  ${e.excerpt?'<p class="card-text small text-muted">'+e.excerpt+"</p>":""}
                  <a href="${e.url}" class="btn btn-sm btn-outline-primary">View Page</a>
                </div>
              </div>
            </div>
          `}));r.innerHTML='<div class="col-12 mb-3"><h6 class="text-muted">'+t.results.length+" result(s) found</h6></div>"+s.join("")}catch(t){console.error("Search error:",t),r.innerHTML='<div class="col-12"><p class="text-danger">An error occurred while searching.</p></div>'}}if(i){const t=new URLSearchParams(window.location.search).get("q");t&&l(t),i.addEventListener("input",s=>{const a=s.target.value.trim();if(a.length>=2){const e=new URL(window.location);e.searchParams.set("q",a),window.history.replaceState({},"",e),l(a)}else if(a.length===0){const e=new URL(window.location);e.searchParams.delete("q"),window.history.replaceState({},"",e),r.innerHTML='<div class="col-12"><p class="text-muted">Enter a search term above to find content.</p></div>'}}),i.addEventListener("keydown",s=>{s.key==="Enter"&&s.preventDefault()})}
