const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('navlinks');
let dots = document.getElementById('dots');
let moreText = document.getElementById('more');
let btnText = document.getElementById('myBtn');
let dots1 = document.getElementById('dots1');
let moreText1 = document.getElementById('more1');
let btnText1 = document.getElementById('myBtn1');
let dots2 = document.getElementById('dots2');
let moreText2 = document.getElementById('more2');
let btnText2 = document.getElementById('myBtn2');
// document.onclick = function(e){
//     if(e.target.id !=='sidebar' && e.target.id !== 'toggle'){
//         toggle.classList.remove('active');
//         sidebar.classList.remove('active');
//     }
// }

function readMore(){
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function readMore1(){
    if(dots1.style.display === "none"){
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read More";
        moreText1.style.display = "none";
    }else{
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";
    }
}

function readMore2(){
    if(dots2.style.display === "none"){
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read More";
        moreText2.style.display = "none";
    }else{
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
    }
}


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// dropdown
function dropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for(i=0; i<dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}