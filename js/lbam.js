
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


function showResponsiveMenu() {
    var menu = document.getElementById("responsive_menu");
    var icon = document.getElementById("burger");

    if (!menu || !icon) {
        console.error("Éléments introuvables");
        return;
    }

    // Toggle la classe 'open'
    menu.classList.toggle('open');
    icon.classList.toggle('open');

    // Gère le scroll du body
    if (menu.classList.contains('open')) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "";
    }
}