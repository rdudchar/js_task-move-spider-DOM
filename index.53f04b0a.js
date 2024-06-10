var e=document.querySelector(".wall"),t=document.querySelector(".spider");e.addEventListener("click",function(n){if(t||(t=document.querySelector(".spider"))){var c=n.clientX-e.getBoundingClientRect().left-t.offsetWidth/2,o=n.clientY-e.getBoundingClientRect().top-t.offsetHeight/2;t.style.transform="translate(".concat(c,"px, ").concat(o,"px)")}});
//# sourceMappingURL=index.53f04b0a.js.map
