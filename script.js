function Gallery() {
    console.log("Galerie");
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img.setAttribute('imagess', true);

        img.addEventListener('mouseover',function () {img.classList.add('hovered')});
        img.addEventListener('mouseleave', function() { img.classList.remove('hovered')});

        img.addEventListener('focus', function(){ img.classList.add('hovered')});
        img.addEventListener('blur', function(){ img.classList.remove('hovered')});
    }
}

window.addEventListener('load', Gallery);
