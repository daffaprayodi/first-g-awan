// If Mobile View
var mobile = window.matchMedia("(max-width: 700px)");
if (mobile.matches) {
    // $('.container-mobile-hide').removeClass('container');
    // $('.container-mobile-hide').addClass('container-mobile');
    $('.container-mobile-visible').addClass('container');
    $('.navbar-gcp-mobile').addClass('fixed-top');
}


// Product Buy Section
$(document).ready(function() {
    $('[data-bs-toggle="collapse"]').click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).html("Hide Detail &nbsp; <i class='fas fa-chevron-up'></i>");
        } else {
            $(this).html("See Detail &nbsp; <i class='fas fa-chevron-down'></i>");
        }
    });
});

// Validate Form
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()