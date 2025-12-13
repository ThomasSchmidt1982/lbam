
fetch('./html/nav.html')
    .then(res => res.text())
    .then(html => document.getElementById('nav').innerHTML = html )

fetch('./html/footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer').innerHTML = html )
