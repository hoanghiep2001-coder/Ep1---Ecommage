$(document).ready(function () {
    // banner animate
    // End banner aniamte

    // window on scroll
        var currentPosition = $('html').scrollTop();
        var gallery = $('.body__container-gallery-row').offset().top;
        var thumbnail1 = $('.body__container-thumbnail-row:first-child').offset().top;
        var thumbnail2 = $('.body__container-thumbnail-row:last-child').offset().top;

        // Thumbnail
        if (thumbnail1) {
            function loading(ms) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, ms)
                });
            }
            loading(500)
            .then(function () {
                $('.body__container-thumbnail-row-col:first-child').addClass('from-left');
                return loading(500)
            })
            .then(function() {
                $('.body__container-thumbnail-row-col:nth-child(2)').addClass('from-right');
                return loading(500)
            })
        }   

        if (thumbnail2) {
            function loading(ms) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, ms)
                });
            }
            loading(500)
            .then(function () {
                $('.body__container-thumbnail-row-col:nth-child(3)').addClass('from-left');
                return loading(500)
            })
            .then(function() {
                $('.body__container-thumbnail-row-col:nth-child(4)').addClass('from-right');
                return loading(500)
            })
        }
        // End animate Thumbnail

        // Gallery
        if (gallery) {
            function loading(ms) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, ms)
                });
            }
            loading(500)
            .then(function () {
                $('.body__container-gallery-row-col:first-child').addClass('from-left');
                return loading(500)
            })
            .then(function() {
                $('.body__container-gallery-row-col:nth-child(2)').addClass('from-down');
                return loading(500)
            })
            .then(function() {
                $('.body__container-gallery-row-col:nth-child(3)').addClass('from-up');
                return loading(500)
            })
            .then(function() {
                $('.body__container-gallery-row-col:nth-child(4)').addClass('from-right');
                return loading(500)
            })
        }
        // End animate Gallery
    // End window on scroll
});