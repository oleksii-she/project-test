const e=document.querySelector(".gallery_list");!async function(){try{await(await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=bef2e1469ade062164db331fc6ab2f25&media_type=all&time_window=week")).json().then((a=>async function(a){console.log(a);const t=await a.map((e=>`   <li class="gallery_item"><a href="">\n        <img class="gallery_img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.original_title}"/></a>\n          <div><h2 class="gallery_title">${e.name}<span>ganre</span></h2></div>\n      </li>`)).join("");e.innerHTML=t}(a.results)))}catch{console.error()}}();
//# sourceMappingURL=index.40d514a4.js.map
