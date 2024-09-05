import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems: NavItemConfig[] = [
  {
    key: 'dashboard',
    title: 'Dashboards',
    items: [
      { key: 'home', title: 'Inicio', href: paths.dashboard.overview, icon: 'home' },
    ]
  },
  {
    key: 'general',
    title: 'General',
    items: [
      {
        key: 'config', title: 'Configuracion', href: paths.config.settings, icon: 'config', items: [
          { key: 'home', title: 'Inicio', href: paths.dashboard.overview, icon: 'home' },
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
        ]
      },
      {
        key: 'config', title: 'Configuracion', href: paths.config.settings, icon: 'config', items: [
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
          { key: 'home', title: 'Inicio', href: paths.config.settings, icon: 'home' },
        ]
      },
    ]
  }
];
