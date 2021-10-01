const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('navlinks');


// document.onclick = function(e){
//     if(e.target.id !=='sidebar' && e.target.id !== 'toggle'){
//         toggle.classList.remove('active');
//         sidebar.classList.remove('active');
//     }
// }

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