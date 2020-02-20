// dom refs
   const $div = document.getElementById('div');

// function definitions
function update(elem, content, clas){
   console.log("update() invoked");
    let p = document.createElement('p');
    p.textContent = content;
    elem.appendChild(p);

    if(clas){ p.className = clas;}
}
function hide(elem){
   elem.style.display = "none";
}
function show(elem){
   elem.style.display = "block";
}

update($div,"hello world","distinct" );

