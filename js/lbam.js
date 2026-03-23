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


document.addEventListener('DOMContentLoaded', function () {

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


    fetch('/data.json')
        .then(res => res.json())
        .then(data => {

            const container0 = document.getElementById('section0')
            if (container0) {
                data.patisseries.forEach(patisseries => {
                    if (patisseries.visible === true && patisseries.section === 0) {
                        const cardHtml = ` 
            <article class="card">
                <img src="/img/produit/${patisseries.picture}" alt="La patisserie${patisseries.name}" 
         data-default="/img/produit/default.webp">
                <h2>${patisseries.name}</h2>
                <p class="description">${patisseries.description}</p>
                <p class="seasonal">${patisseries.seasonal}</p>
            </article>
            `;
                        container0.innerHTML += cardHtml;
                    }
                });
                document.querySelectorAll('.card img').forEach(img => {
                    img.addEventListener('error', function () {
                        this.src = this.dataset.default;
                    });
                });
            }
            const container1 = document.getElementById('section1')
            if (container1) {
                data.patisseries.forEach(patisseries => {
                    if (patisseries.visible === true && patisseries.section === 1) {
                        const cardHtml = ` 
            <article class="card">
                <img src="/img/produit/${patisseries.picture}" alt="La patisserie${patisseries.name}" 
         data-default="/img/produit/default.webp">
                <h2>${patisseries.name}</h2>
                <p class="description">${patisseries.description}</p>
                <p class="seasonal">${patisseries.seasonal}</p>
            </article>
            `;
                        container1.innerHTML += cardHtml;
                    }
                });
                document.querySelectorAll('.card img').forEach(img => {
                    img.addEventListener('error', function () {
                        this.src = this.dataset.default;
                    });
                });
            }
            const container2 = document.getElementById('section2')
            if (container2) {
                data.patisseries.forEach(patisseries => {
                    if (patisseries.visible === true && patisseries.section === 2) {
                        const cardHtml = ` 
            <article class="card">
                <img src="/img/produit/${patisseries.picture}" alt="La patisserie${patisseries.name}" 
         data-default="/img/produit/default.webp">
                <h2>${patisseries.name}</h2>
                <p class="description">${patisseries.description}</p>
                <p class="seasonal">${patisseries.seasonal}</p>
            </article>
            `;
                        container2.innerHTML += cardHtml;
                    }
                });
                document.querySelectorAll('.card img').forEach(img => {
                    img.addEventListener('error', function () {
                        this.src = this.dataset.default;
                    });
                });
            }
            const container3 = document.getElementById('section3')
            if (container3) {
                data.patisseries.forEach(patisseries => {
                    if (patisseries.visible === true && patisseries.section === 3) {
                        const cardHtml = ` 
            <article class="card">
                <img src="/img/produit/${patisseries.picture}" alt="La patisserie${patisseries.name}" 
         data-default="/img/produit/default.webp">
                <h2>${patisseries.name}</h2>
                <p class="description">${patisseries.description}</p>
                <p class="seasonal">${patisseries.seasonal}</p>
            </article>
            `;
                        container3.innerHTML += cardHtml;
                    }
                });
                document.querySelectorAll('.card img').forEach(img => {
                    img.addEventListener('error', function () {
                        this.src = this.dataset.default;
                    });
                });
            }

        });

    var map = L.map('map', { scrollWheelZoom: false }).setView([46.393172, -0.854539], 10);
    map.once('focus', function () { map.scrollWheelZoom.enable(); });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const pinIcon = L.divIcon({
        className: '',
        html: '<div style="font-size:24px;line-height:1;">📍</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -26]
    });

    var marker1 = L.marker([46.362885, -0.85763], {icon: pinIcon}).addTo(map);
    marker1.bindPopup("<b>Boucherie Charcuterie Gouin</b><br>66 r Georges Clemenceau<br>85770 Vix").openPopup();

    var marker2 = L.marker([46.371874, -0.73918], {icon: pinIcon}).addTo(map);
    marker2.bindPopup("<b>L'Epicerie d'Isa (Coop)</b><br>14 Rue du Dr Daroux<br>85420 Maillezais").openPopup();

    var marker3 = L.marker([46.4771781, -0.8144931], {icon: pinIcon}).addTo(map);
    marker3.bindPopup("<b>Coop</b><br>Rue du Porteau<br>85200 Fontenay-le-Comte").openPopup();

    var marker4 = L.marker([46.421607971191406, -0.6815643906593323], {icon: pinIcon}).addTo(map);
    marker4.bindPopup("<b>Boulangerie 'Sucré & Salé'</b><br>10 Place du Forail<br>85240 Nieul-sur-l'Autise").openPopup();

    var marker5 = L.marker([46.2968228, -0.6918929], {icon: pinIcon}).addTo(map);
    marker5.bindPopup("<b>Epicerie 'Saveurs d'Ici et d'Ailleurs'</b><br>Place de l'Eglise<br>79210 Arçais").openPopup();

    var marker6 = L.marker([46.37175092717191, -0.7394391043447972], {icon: pinIcon}).addTo(map);
    marker6.bindPopup("<b>Marché Mercredis et Samedis</b><br>Square des Ardennais<br>85420 Maillezais").openPopup();

    var marker0 = L.marker([46.393172, -0.854539]).addTo(map);
    marker0.bindPopup("<b>La Boîte à Minute</b><br>74, rue du communal<br>85200 Montreuil").openPopup();

})
