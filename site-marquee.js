(function () {
    if (document.getElementById('portfolio-marquee')) return;

    var hero = document.querySelector('.hero-section, .hero-demo');
    if (!hero) return;

    var items = [
        { icon: 'fa-code', text: 'Full Stack Developer' },
        { icon: 'fa-server', text: 'Java & Spring Boot' },
        { icon: 'fa-laptop-code', text: 'Angular & TypeScript' },
        { icon: 'fa-hospital', text: 'CareMD Healthcare SaaS' },
        { icon: 'fa-cash-register', text: 'RynoDesk POS Platform' },
        { icon: 'fa-sitemap', text: 'Enterprise ERP Systems' },
        { icon: 'fa-database', text: 'PostgreSQL & Flyway' },
        { icon: 'fa-cloud', text: 'Multi-Tenant Architecture' },
        { icon: 'fa-plug', text: 'REST APIs & Microservices' },
        { icon: 'fa-briefcase', text: '3+ Years Experience' },
        { icon: 'fa-layer-group', text: '7 Production Projects' },
        { icon: 'fa-building', text: 'SecopTech & CareMD' },
        { icon: 'fa-heartbeat', text: 'Healthcare & RCM' },
        { icon: 'fa-store', text: 'Retail & E-Commerce' },
        { icon: 'fa-graduation-cap', text: 'Education Management' },
        { icon: 'fa-shield-halved', text: 'JWT & Role-Based Access' },
        { icon: 'fa-bolt', text: 'WebSocket Real-Time' },
        { icon: 'fa-map-marker-alt', text: 'Based in Pakistan' }
    ];

    function buildGroup() {
        return items.map(function (item) {
            return '<span class="marquee-item"><i class="fas ' + item.icon + '"></i>' + item.text + '</span>' +
                '<span class="marquee-dot" aria-hidden="true"></span>';
        }).join('');
    }

    var groupHtml = buildGroup();
    var html =
        '<section id="portfolio-marquee" class="portfolio-marquee" aria-label="Portfolio highlights">' +
            '<div class="marquee-viewport">' +
                '<div class="marquee-track">' +
                    '<div class="marquee-group">' + groupHtml + '</div>' +
                    '<div class="marquee-group" aria-hidden="true">' + groupHtml + '</div>' +
                '</div>' +
            '</div>' +
        '</section>';

    hero.insertAdjacentHTML('afterend', html);
})();
