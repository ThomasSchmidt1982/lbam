
fetch('/html/_nav.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('nav').innerHTML = html;
        const link = document.getElementById('link');
        if (link) {
            link.addEventListener('click', showResponsiveMenu);
        }
    } );

fetch('/html/_footer.html')
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