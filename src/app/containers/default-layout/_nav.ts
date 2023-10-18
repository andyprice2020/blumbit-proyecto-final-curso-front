import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Online Store',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Artist',
        url: '/artist',
        icon: 'cil-notes'
      },
      {
        name: 'Album',
        url: '/album',
        icon: 'cil-notes'
      }

    ]
  }
];
