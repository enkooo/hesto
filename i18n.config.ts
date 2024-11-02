export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pl',
  messages: {
    en: {
      menu: {
        home: 'Home',
        about: 'About Us',
        offer: 'Offer',
        projects: 'Projects',
        contact: 'Contact',
        'project-pricing': 'Project Pricing',
      },
      links: {
        home: '/',
        about: '/#about',
        offer: '/#offer',
        projects: '/#projects',
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
          offer: 'Our offer',
          projects: 'Projects',
        },
      },
      about: {
        heading: 'About Us',
        companyName: 'HESTO',
        companyWhoAreWe: 'who are we?',
        shortText: 'is a company specializing in creating software dedicated to businesses.',
        description:
          'Together with our team, we strive to create products that meet client expectations, addressing all aspects of security requirements, application speed, and modern design.',
        communication:
          'At every stage of development, communication with the client is our priority, ensuring each project is meticulously crafted.',
        values: {
          experience: {
            title: 'Experience',
            description:
              'Our experience enables us to deliver high-quality projects. We focus on effective solutions that yield tangible results for our clients.',
          },
          teamwork: {
            title: 'Teamwork',
            description:
              'Team collaboration is the foundation of our success. Each project is a result of the combined efforts of experts from various fields, delivering comprehensive and optimal solutions.',
          },
          clientUnderstanding: {
            title: 'Understanding Client Needs',
            description:
              "We strive to understand our clients' unique needs. Each solution is tailored individually to meet specific requirements and expectations.",
          },
          businessIt: {
            title: 'Business and IT Integration',
            description:
              'We combine IT expertise with practical business knowledge, ensuring our products are not only technologically advanced but also valuable and useful for business.',
          },
        },
      },
      whyChooseUs: {
        heading:
          'Why <span class="text-primary">you</span> should <span class="text-primary">choose</span> us?',
        description:
          'We explain why we are the best choice for your business. With us, you get comprehensive service, highest quality, and satisfaction guarantee.',
        values: {
          security: {
            title: 'Security',
            description:
              'We guarantee complete security of your data and transactions. We use the latest encryption and security technologies so you can feel confident.',
          },
          speed: {
            title: 'Speed',
            description:
              'We operate efficiently and on time. We complete projects within agreed timeframes, ensuring fast and professional service.',
          },
          reliability: {
            title: 'Reliability',
            description:
              'You can count on us. We always keep our promises and are at your disposal. Our reliability is confirmed by satisfied customers.',
          },
          flexibility: {
            title: 'Flexibility',
            description:
              'We adapt to your needs. We offer individual approach and solutions tailored to your business.',
          },
        },
      },
      offer: {
        title: 'Our offer',
        subtitle:
          'We provide tailored software solutions to meet the diverse needs of businesses at different stages of growth.',
        benefits: 'Benefits',
        learnMore: 'Learn more',
        items: {
          mvp: {
            title: 'Minimum Viable Product (MVP) Applications',
            description:
              'Our MVP development services are ideal for startups and businesses looking to validate their ideas quickly.',
            benefits: {
              0: 'Rapid deployment of core features',
              1: 'Reduced development costs',
              2: 'Focused user experience',
              3: 'Efficient feedback loops',
            },
            summary:
              'Let us create an application that meets the key needs of your business, allowing you to enter the market quickly with minimal costs.',
          },
          custom: {
            title: 'Custom Business Applications',
            description:
              'We specialize in developing custom applications tailored to your business requirements.',
            benefits: {
              0: 'Fully customized solutions',
              1: 'Integration with existing systems',
              2: 'Scalable architecture',
              3: 'Enhanced user experience',
            },
            summary:
              'We will design an application specifically tailored to your requirements and business goals to support your growth and efficiency.',
          },
          digitalization: {
            title: 'Applications for Digitalizing Business Processes',
            description:
              'Digitize your business processes with advanced applications designed to improve efficiency.',
            benefits: {
              0: 'Streamlined operations',
              1: 'Enhanced accuracy and consistency',
              2: 'Improved data-driven decision-making',
              3: 'Cost savings from reduced manual work',
            },
            summary:
              'Simplify your business management with solutions that automate and digitalize key processes, boosting efficiency and reducing costs.',
          },
        },
      },
      projects: {
        title: 'Projects',
        subtitle:
          'Here are selected projects we have completed for our clients. Each of them is a tailored solution, designed to meet the specific needs of the industry and its users. With our advanced technologies and dedicated approach, we help companies achieve better results and build a competitive advantage.',
        items: {
          grocero: {
            title: 'Grocero',
            subtitle: 'Platform for FMCG Network Management',
            description:
              'Grocero is a modern platform that enables supply chain management and optimization in the FMCG sector. With advanced analytical tools, Grocero helps retail companies efficiently plan inventory, monitor sales, and automate orders, leading to increased efficiency and time savings.',
            buttonLabel: 'Case Study',
          },
          foodPlanner: {
            title: 'Food Planner',
            subtitle: 'Meal Planning Platform',
            description:
              'Food Planner is an application designed for people who care about healthy eating habits. It allows users to create personalized meal plans, calculate nutritional values, and manage shopping lists. With this tool, users can effectively control their diet and achieve their health goals.',
            buttonLabel: 'Case Study',
          },
          shapeOfEmotions: {
            title: 'Shape of Emotions',
            subtitle: 'Mobile App for the Center for Psychotherapy and Personal Development',
            description:
              'Shape of Emotions is an app supporting the process of therapy and personal development, developed in collaboration with the Center for Psychotherapy and Development. Users can track their emotions, log daily experiences, and analyze their progress. The app fosters self-awareness and provides access to therapeutic tools.',
            buttonLabel: 'Case Study',
          },
        },
      },
      projectPricing: {
        heading: 'Modernize Your <span class="text-primary">Business</span>!',
        shortText:
          'Elevate your business to the next level with tailored, modern solutions that enhance brand value and streamline operations. We specialize in creating digital transformations that deliver measurable results.',
        buttonLabel: 'Project Pricing',
      },
      contactForm: {
        heading: 'Contact',
        subheading:
          'If you have any questions about our offer or want to learn more about our services, please contact us. We are here to help and happy to assist you in choosing the best solutions for your company.',
        fields: {
          name: 'Name and Surname',
          email: 'Email Address',
          phone: 'Phone Number',
          messageType: 'Type of Message',
          messageTitle: 'Title',
          messageContent: 'Content',
        },
        messageTypes: {
          quoteInquiry: 'Quote Inquiry',
          supportRequest: 'Support Request',
          generalQuestion: 'General Question',
          feedback: 'Feedback',
          partnershipInquiry: 'Partnership Inquiry',
          technicalIssue: 'Technical Issue',
        },
        exampleTitle: 'Inquiry about creating a website for a local company',
        buttons: {
          clear: 'Clear',
          send: 'Send',
        },
        checkbox:
          'I consent to the processing of my personal data in accordance with the privacy policy in order to receive a response to my inquiry and further contact related to my request.',
      },
      footer: {
        navigation: {
          home: {
            link: '/',
            text: 'Home',
          },
          about: {
            link: '/#about',
            text: 'About Us',
          },
          offer: {
            link: '/#offer',
            text: 'Offer',
          },
          projects: {
            link: '/#projects',
            text: 'Projects',
          },
          contact: {
            link: '/#contact',
            text: 'Contact',
          },
        },
        copyright: 'Copyright 2024 HESTO. All rights reserved.',
        cookies: 'This site uses cookies in accordance with the privacy policy.',
        companyDetails: {
          name: 'HESTO',
          address: 'ul. Nowoczesna 1, 01-123 Łódź',
          phone: 'tel. 123 456 789',
          email: 'info@hesto.pl',
        },
      },
    },
    pl: {
      menu: {
        home: 'Strona główna',
        about: 'O nas',
        offer: 'Oferta',
        projects: 'Realizacje',
        contact: 'Kontakt',
        'project-pricing': 'Wycena projektu',
      },
      links: {
        home: '/',
        about: '/#o-nas',
        offer: '/#oferta',
        projects: '/#realizacje',
        contact: '/#kontakt',
        'project-pricing': '/wycena-projektu',
      },
      hero: {
        title: {
          start: 'Nowoczesne',
          highlight: 'rozwiązania biznesowe',
          end: 'dla Twojej firmy!',
        },
        description:
          'Przyspiesz rozwój swojej firmy dzięki innowacyjnym technologiom i skutecznym strategiom. Oferujemy kompleksowe wsparcie w realizacji projektów, które pomagają osiągnąć przewagę konkurencyjną.',
        buttons: {
          offer: 'Oferta',
          projects: 'Realizacje',
        },
      },
      about: {
        heading: 'O Nas',
        companyName: 'HESTO',
        companyWhoAreWe: 'kim jesteśmy?',
        shortText: 'to firma zajmująca się tworzeniem oprogramowania dedykowanego dla biznesu.',
        description:
          'Razem z naszym zespołem dążymy do tworzenia produktu, który spełnia wymagania klientów, zachowując przy tym wszystkie aspekty związane z wymaganiami bezpieczeństwa, szybkością działania aplikacji oraz nowoczesnym jej wyglądem.',
        communication:
          'Na każdym etapie tworzenia komunikacja z klientem jest dla nas priorytetem, dzięki czemu każdy projekt jest szczegółowo dopracowany.',
        values: {
          experience: {
            title: 'Doświadczenie',
            description:
              'Nasze doświadczenie pozwala nam na realizację projektów na najwyższym poziomie. Stawiamy na skuteczne rozwiązania, które przynoszą wymierne efekty naszym klientom.',
          },
          teamwork: {
            title: 'Praca zespołowa',
            description:
              'Współpraca w zespole to podstawa naszego sukcesu. Każdy projekt jest wynikiem wspólnych wysiłków ekspertów z różnych dziedzin, co pozwala na dostarczenie wszechstronnych i optymalnych rozwiązań.',
          },
          clientUnderstanding: {
            title: 'Zrozumienie potrzeb klienta',
            description:
              'Dbamy o to, aby zrozumieć unikalne potrzeby naszych klientów. Każde rozwiązanie jest dostosowane indywidualnie, by sprostać specyficznym wymaganiom oraz oczekiwaniom klienta.',
          },
          businessIt: {
            title: 'Połączenie biznesu oraz IT',
            description:
              'Łączymy wiedzę z zakresu IT z praktycznym podejściem biznesowym, dzięki czemu nasze produkty są nie tylko nowoczesne technologicznie, ale także użyteczne i wartościowe dla biznesu.',
          },
        },
      },
      whyChooseUs: {
        heading:
          'Dlaczego <span class="text-primary">warto</span> nas <span class="text-primary">wybrać</span>?',
        description:
          'Wyjaśniamy dlaczego jesteśmy najlepszym wyborem dla Twojego biznesu. Z nami otrzymasz kompleksową obsługę, najwyższą jakość usług i gwarancję zadowolenia.',
        values: {
          security: {
            title: 'Bezpieczeństwo',
            description:
              'Gwarantujemy pełne bezpieczeństwo Twoich danych i transakcji. Stosujemy najnowsze technologie szyfrowania i zabezpieczeń, byś mógł czuć się pewnie.',
          },
          speed: {
            title: 'Szybkość',
            description:
              'Działamy sprawnie i terminowo. Realizujemy projekty w uzgodnionych ramach czasowych, zapewniając szybką i profesjonalną obsługę.',
          },
          reliability: {
            title: 'Niezawodność',
            description:
              'Możesz na nas polegać. Zawsze dotrzymujemy obietnic i jesteśmy do Twojej dyspozycji. Nasza solidność jest potwierdzona przez zadowolonych klientów.',
          },
          flexibility: {
            title: 'Elastyczność',
            description:
              'Dostosowujemy się do Twoich potrzeb. Oferujemy indywidualne podejście i rozwiązania szyte na miarę Twojego biznesu.',
          },
        },
      },
      offer: {
        title: 'Nasza oferta',
        subtitle:
          'Dostarczamy dostosowane rozwiązania programistyczne, aby sprostać różnorodnym potrzebom firm na różnych etapach rozwoju.',
        benefits: 'Korzyści',
        learnMore: 'Dowiedz się więcej',
        items: {
          mvp: {
            title: 'Aplikacje Minimum Viable Product (MVP)',
            description:
              'Nasze usługi tworzenia MVP są idealne dla startupów i firm, które chcą szybko zweryfikować swoje pomysły.',
            benefits: {
              0: 'Szybkie wdrożenie podstawowych funkcji',
              1: 'Zmniejszenie kosztów produkcji',
              2: 'Skoncentrowane na doświadczeniu użytkownika',
              3: 'Efektywne cykle zbierania opinii',
            },
            summary:
              'Pozwól nam stworzyć aplikację, która spełni kluczowe potrzeby Twojego biznesu, pozwalając na szybkie wejście na rynek z minimalnymi kosztami.',
          },
          custom: {
            title: 'Dedykowane aplikacje dla biznesu',
            description:
              'Specjalizujemy się w tworzeniu aplikacji dostosowanych do potrzeb Twojej firmy.',
            benefits: {
              0: 'W pełni dostosowane rozwiązania',
              1: 'Integracja z istniejącymi systemami',
              2: 'Skalowalna architektura',
              3: 'Zwiększona wygoda użytkowania',
            },
            summary:
              'Zaprojektujemy aplikację specjalnie dostosowaną do Twoich wymagań i celów biznesowych, aby wspierać Twój rozwój i efektywność.',
          },
          digitalization: {
            title: 'Aplikacje do digitalizacji procesów biznesowych',
            description:
              'Zdigitalizuj swoje procesy biznesowe za pomocą zaawansowanych aplikacji zaprojektowanych w celu poprawy efektywności.',
            benefits: {
              0: 'Usprawnione operacje',
              1: 'Zwiększona dokładność i spójność',
              2: 'Lepsze decyzje oparte na danych',
              3: 'Oszczędności dzięki redukcji pracy ręcznej',
            },
            summary:
              'Ułatw sobie zarządzanie firmą dzięki rozwiązaniom, które automatyzują i digitalizują kluczowe procesy, zwiększając wydajność i redukując koszty.',
          },
        },
      },
      projects: {
        title: 'Realizacje',
        subtitle:
          'Przedstawiamy wybrane projekty, które realizowaliśmy dla naszych klientów. Każdy z nich to indywidualnie dopasowane rozwiązanie, odpowiadające na specyficzne potrzeby branży i użytkowników. Dzięki naszym zaawansowanym technologiom oraz dedykowanemu podejściu, pomagamy firmom osiągać lepsze rezultaty i budować przewagę konkurencyjną.',
        items: {
          grocero: {
            title: 'Grocero',
            subtitle: 'Platforma do zarządzania siecią FMCG',
            description:
              'Grocero to nowoczesna platforma, która umożliwia zarządzanie i optymalizację łańcucha dostaw w sektorze FMCG. Dzięki zaawansowanym narzędziom analitycznym, Grocero pomaga firmom detalicznym efektywnie planować zapasy, monitorować sprzedaż oraz automatyzować zamówienia, co przekłada się na zwiększoną wydajność i oszczędność czasu.',
            buttonLabel: 'Case Study',
          },
          foodPlanner: {
            title: 'Food Planner',
            subtitle: 'Platforma do planowania posiłków',
            description:
              'Food Planner to aplikacja dedykowana osobom dbającym o zdrowe nawyki żywieniowe. Umożliwia tworzenie spersonalizowanych planów żywieniowych, przeliczanie wartości odżywczych oraz zarządzanie listami zakupów. Dzięki temu narzędziu użytkownicy mogą skutecznie kontrolować swoją dietę i osiągać cele zdrowotne.',
            buttonLabel: 'Case Study',
          },
          shapeOfEmotions: {
            title: 'Kształt Emocji',
            subtitle: 'Aplikacja mobilna dla Centrum Psychoterapii i Rozwoju Osobistego',
            description:
              'Kształt Emocji to aplikacja wspierająca proces terapii i rozwoju osobistego, opracowana we współpracy z Centrum Psychoterapii i Rozwoju. Użytkownicy mogą śledzić swoje emocje, zapisywać codzienne doświadczenia i analizować swoje postępy. Aplikacja wspiera budowanie samoświadomości i umożliwia dostęp do narzędzi terapeutycznych.',
            buttonLabel: 'Case Study',
          },
        },
      },
      projectPricing: {
        heading: 'Unowocześnij swój <span class="text-primary">biznes</span>!',
        shortText:
          'Wznieś swoją firmę na wyższy poziom dzięki dostosowanym, nowoczesnym rozwiązaniom, które podnoszą wartość marki i usprawniają operacje. Specjalizujemy się w tworzeniu transformacji cyfrowych, które przynoszą wymierne rezultaty.',
        buttonLabel: 'Wycena projektu',
      },
      contactForm: {
        heading: 'Kontakt',
        subheading:
          'Jeśli masz jakiekolwiek pytania dotyczące naszej oferty lub chcesz dowiedzieć się więcej o naszych usługach, skontaktuj się z nami. Jesteśmy do Twojej dyspozycji i chętnie pomożemy w wyborze najlepszych rozwiązań dla Twojej firmy.',
        fields: {
          name: 'Imię i nazwisko',
          email: 'Adres e-mail',
          phone: 'Numer telefonu',
          messageType: 'Rodzaj wiadomości',
          messageTitle: 'Tytuł',
          messageContent: 'Treść',
        },
        messageTypes: {
          quoteInquiry: 'Zapytanie ofertowe',
          supportRequest: 'Prośba o wsparcie',
          generalQuestion: 'Pytanie ogólne',
          feedback: 'Opinie i sugestie',
          partnershipInquiry: 'Zapytanie o współpracę',
          technicalIssue: 'Problem techniczny',
        },
        exampleTitle: 'Zapytnie dot. stworzenia strony internetowej dla lokalnej firmy',
        buttons: {
          clear: 'Wyczyść',
          send: 'Wyślij',
        },
        checkbox:
          'Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności w celu otrzymania odpowiedzi na moje zapytanie oraz dalszego kontaktu związanego z moim zapytaniem.',
      },
      footer: {
        navigation: {
          home: {
            link: '/',
            text: 'Strona główna',
          },
          about: {
            link: '/#o-nas',
            text: 'O nas',
          },
          offer: {
            link: '/#oferta',
            text: 'Oferta',
          },
          projects: {
            link: '/#realizacje',
            text: 'Realizacje',
          },
          contact: {
            link: '/#kontakt',
            text: 'Kontakt',
          },
        },
        copyright: 'Copyright 2024 HESTO. Wszelkie prawa zastrzeżone.',
        cookies: 'Strona korzysta z plików cookies zgodnie z polityką prywatności.',
        companyDetails: {
          name: 'HESTO',
          address: 'ul. Nowoczesna 1, 01-123 Łódź',
          phone: 'tel. 123 456 789',
          email: 'info@hesto.pl',
        },
      },
    },
  },
}))
