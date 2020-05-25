/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("open_nav").style.display = "none"
    document.getElementById("main_container").classList.add("fade-out");
    document.getElementById("header_container").classList.add("fade-out");
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open_nav").style.display = "inline-block";
    document.getElementById("main_container").classList.replace("fade-out","fade-in");
    document.getElementById("header_container").classList.replace("fade-out","fade-in");

}