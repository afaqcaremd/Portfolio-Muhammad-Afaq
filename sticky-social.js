(function () {
    if (document.getElementById('sticky-social')) return;

    var html =
        '<div id="sticky-social" class="sticky-social" aria-label="Quick contact">' +
            '<a href="https://wa.me/923021005535" class="sticky-social-btn sticky-social-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" aria-label="WhatsApp">' +
                '<i class="fab fa-whatsapp" aria-hidden="true"></i>' +
            '</a>' +
            '<a href="https://www.linkedin.com/in/afaq-springboot-angular" class="sticky-social-btn sticky-social-linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn profile" aria-label="LinkedIn">' +
                '<i class="fab fa-linkedin-in" aria-hidden="true"></i>' +
            '</a>' +
        '</div>';

    document.body.insertAdjacentHTML('beforeend', html);
})();
