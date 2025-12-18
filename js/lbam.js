fetch('/html/_nav.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('nav').innerHTML = html;
        const link = document.getElementById('link');
        if (link) {
            link.addEventListener('click', showResponsiveMenu);
        }
    });

fetch('/html/_footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer').innerHTML = html)

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


fetch('/data.json')
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById('patisseries-list')

        data.patisseries.forEach(patisseries => {
            if (patisseries.stock === true) {
                const cardHtml = ` 
            <article class="card">
                <img src="/img/produit/${patisseries.picture}" alt="La patisserie${patisseries.name}" 
         data-default="/img/produit/default.jpg">
                <h2>${patisseries.name}</h2>
                <p>${patisseries.description}</p>
                <p class="tarif">${patisseries.price}</p>
            </article>
            `;
                container.innerHTML += cardHtml;
            }
        });
        document.querySelectorAll('.card img').forEach(img => {
            img.addEventListener('error', function() {
                this.src = this.dataset.default;
            });
        });
    })
    .catch(error => console.error('Erreur : ', error));

