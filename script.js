document.getElementById('button').addEventListener('click', function() {
    const image = document.querySelector('wrapper-holder');
    

    // Toggle between sliding left and rbight
    if (image.classList.contains('next-right')) {
        image.classList.remove('next-right');
        image.classList.add('next   -left');
    } else {
        image.classList.remove('next-left');
        image.classList.add('next-right');
    }
});
