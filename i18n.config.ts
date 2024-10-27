export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pl',
  messages: {
    en: {
      menu: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        contact: 'Contact',
        'project-pricing': 'Project Pricing',
      },
      links: {
        home: '/',
        about: '/#about',
        services: '/#services',
        contact: '/#contact',
        'project-pricing': '/project-pricing',
      },
      hero: {
        title: {
          start: 'Modern',
          highlight: 'business solutions',
          end: 'for your company!',
        },
        description:
          'Accelerate your company’s growth with innovative technologies and effective strategies. We offer comprehensive support in implementing projects that help you gain a competitive edge.',
        buttons: {
          offer: 'Our Services',
          projects: 'Projects',
        },
      },
    },
    pl: {
      menu: {
        home: 'Strona główna',
        about: 'O nas',
        services: 'Realizacje',
        contact: 'Kontakt',
        'project-pricing': 'Wycena projektu',
      },
      links: {
        home: '/',
        about: '/#o-nas',
        services: '/#realizacje',
        contact: '/#kontakt',
        'project-pricing': '/wycena-projektu',
      },
      hero: {
        title: {
          start: 'Nowoczesne',
          highlight: 'rozwiazania biznesowe',
          end: 'dla Twojej firmy!',
        },
        description:
          'Przyspiesz rozwój swojej firmy dzięki innowacyjnym technologiom i skutecznym strategiom. Oferujemy kompleksowe wsparcie w realizacji projektów, które pomagają osiągnąć przewagę konkurencyjną.',
        buttons: {
          offer: 'Oferta',
          projects: 'Realizacje',
        },
      },
    },
  },
}))
