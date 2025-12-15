
fetch('./html/nav.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('nav').innerHTML = html;
        const burger = document.getElementById('burger');
        if (burger) {
            burger.addEventListener('click', showResponsiveMenu);
        }
    } );

fetch('./html/footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer').innerHTML = html )


function showResponsiveMenu(){
    var menu = document.getElementById("responsive_menu");
    var icon = document.getElementById("burger");

    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        document.body.style.overflowY = "hidden";
    } else {
        menu.className = "";
        icon.className = "";
        document.body.style.overflowY = "";
    }
}