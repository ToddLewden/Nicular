function fader(){
    const to_fade = ['open_nav','main_container','header_bar','footer_bar'];
    for(let i = 0; i<to_fade.length;i++){
        let element = document.getElementById(to_fade[i]);
        if(element.classList.contains('fade-out')){
            element.classList.replace('fade-out','fade-in');
        }
        else if(element.classList.contains('fade-in')){
            element.classList.replace('fade-in','fade-out');   
        }
        else{
            element.classList.add('fade-out');
        }
    }
}




function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    fader()
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    fader()
}