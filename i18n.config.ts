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
        'project-pricing': 'Project pricing',
      },
      links: {
        home: '/',
        about: '/#about',
        services: '/#services',
        contact: '/#contact',
        'project-pricing': '/project-pricing',
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
    },
  },
}))
