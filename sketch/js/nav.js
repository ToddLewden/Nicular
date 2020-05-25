function fader(element){
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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    fader(document.getElementById('open_nav'));
    fader(document.getElementById("main_container"));
    fader(document.getElementById("header_bar"));
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    fader(document.getElementById('open_nav'));
    fader(document.getElementById("main_container"));
    fader(document.getElementById("header_bar"));
}