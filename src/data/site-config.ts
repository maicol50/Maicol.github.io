import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://maicol.github.io',
    avatar: {
        src: avatar,
        alt: 'Maicol Torres'
    },
    title: 'Maicol',
    subtitle: 'Desarrollador Web Backend',
    description: 'Portafolio y blog personal de Maicol, especializado en desarrollo web y tecnologías backend.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Maicol - Portafolio y Blog'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Github',
            href: 'https://github.com/maicol50'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/maicol50'
        }
    ],
    hero: {
        title: '¡Hola y bienvenido a mi rincón en la web!',
        text: "Soy **Maicol**, un desarrollador web backend y estudiante de ingeniería en desarrollo de software apasionado por la creación de soluciones eficientes y robustas.\nMi enfoque se centra en el desarrollo backend utilizando tecnologías modernas para construir aplicaciones excepcionales.\n\nSiéntete libre de explorar algunos de mis proyectos de código en [GitHub](https://github.com/maicol50).",
        image: {
            src: hero,
            alt: 'Maicol trabajando en su escritorio frente al ordenador'
        },
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Suscríbete al boletín',
        text: 'Recibe las últimas publicaciones directamente en tu bandeja de entrada.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;