document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('#starRating i');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            currentRating = this.getAttribute('data-star');
            updateStars(currentRating);
        });

        star.addEventListener('mouseenter', function () {
            const ratingValue = this.getAttribute('data-star');
            highlightStars(ratingValue);
        });

        star.addEventListener('mouseleave', function () {
            highlightStars(currentRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-star')) <= rating) {
                star.classList.add('text-warning');
                star.classList.remove('text-muted');
            } else {
                star.classList.add('text-muted');
                star.classList.remove('text-warning');
            }
        });
    }

    function highlightStars(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-star')) <= rating) {
                star.classList.add('text-warning');
                star.classList.remove('text-muted');
            } else {
                star.classList.add('text-muted');
                star.classList.remove('text-warning');
            }
        });
    }
});
