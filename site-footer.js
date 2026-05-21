(function () {
    if (document.getElementById('global-contact')) return;

    var html =
        '<section id="contact" class="contact-section">' +
            '<div class="container">' +
                '<div class="contact-card">' +
                    '<h2 class="contact-heading">Let\'s Work Together</h2>' +
                    '<p class="contact-desc">Open to new opportunities, freelance projects, and collaborations. Feel free to reach out!</p>' +
                    '<div class="contact-btns">' +
                        '<a href="mailto:afaqch5535@gmail.com" class="btn-cta btn-cta-email">' +
                            '<i class="fas fa-envelope"></i> afaqch5535@gmail.com' +
                        '</a>' +
                        '<a href="https://wa.me/923021005535" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta-whatsapp" title="Chat on WhatsApp">' +
                            '<i class="fab fa-whatsapp"></i> 0302 1005535' +
                        '</a>' +
                        '<a href="https://www.linkedin.com/in/afaq-springboot-angular" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta-linkedin">' +
                            '<i class="fab fa-linkedin"></i> LinkedIn' +
                        '</a>' +
                        '<a href="https://github.com/afaq-codes" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta-github">' +
                            '<i class="fab fa-github"></i> GitHub' +
                        '</a>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</section>' +
        '<footer class="footer site-footer">' +
            '<div class="container">' +
                '<div class="footer-social">' +
                    '<a href="https://github.com/afaq-codes" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github"></i></a>' +
                    '<a href="https://www.linkedin.com/in/afaq-springboot-angular" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin"></i></a>' +
                    '<a href="https://wa.me/923021005535" target="_blank" rel="noopener noreferrer" title="WhatsApp: 0302 1005535"><i class="fab fa-whatsapp"></i></a>' +
                    '<a href="mailto:afaqch5535@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>' +
                '</div>' +
                '<p class="mb-0"><strong>Muhammad Afaq</strong> · Full Stack Java and Angular Developer · &copy; 2026</p>' +
            '</div>' +
        '</footer>';

    var mount = document.getElementById('site-footer');
    if (mount) {
        mount.outerHTML = html;
    } else {
        document.body.insertAdjacentHTML('beforeend', html);
    }
})();
