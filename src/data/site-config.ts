import { default as avatar, default as hero } from '../assets/images/maicol-portrait.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://maicol50.github.io/Maicol.github.io',
    avatar: {
        src: avatar,
        alt: 'Maicol Geovany Torrez Ramirez'
    },
    title: 'Maicol Geovany',
    subtitle: 'Desarrollador backend | Estudiante de Ingeniería de Software',
    description: 'Perfil profesional de Maicol Geovany Torrez Ramirez, estudiante de Ingeniería en Desarrollo de Software y desarrollador web backend.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Portafolio profesional de Maicol Geovany Torrez Ramirez'
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
        title: 'Maicol Geovany Torrez Ramirez',
        text: 'Estudiante de último ciclo de Ingeniería en Desarrollo de Software en ITCA-FEPADE y desarrollador web backend. He trabajado en un sistema full stack de gestión de recursos humanos y dietas, creando módulos, paneles administrativos y funcionalidades conectadas a bases de datos.\n\nMe caracterizan el pensamiento analítico, la comunicación y las ganas de aprender. [Conoce mi código en GitHub](https://github.com/maicol50).',
        image: {
            src: hero,
            alt: 'Retrato de Maicol Geovany Torrez Ramirez con traje azul'
        },
        actions: [
            {
                text: 'Contactarme',
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