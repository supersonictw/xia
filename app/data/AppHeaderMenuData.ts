import type {UserProfile} from '~/composables/useProfile.client';

export const title = 'Taiwan Web Technology Promotion Organization';
export const subtitle = '臺灣網際網路技術推廣組織';
export const label = 'Web-Tech-TW';

export const isSaraEnabled = true;
export const onClickSara = (_profile: UserProfile | null = null): void => {
  const {
    public: publicConfig,
  } = useRuntimeConfig();

  const {
    saraInteHost,
  } = publicConfig;

  location.assign(saraInteHost);
};

export interface MenuDropdownChild {
  name: string;
  description: string;
  icon: string;
  onClick: () => void;
}

export interface MenuDropdownItem {
  name: string;
  type: 'dropdown';
  status: string;
  children: MenuDropdownChild[];
}

export interface MenuFunctionItem {
  name: string;
  type: 'function';
  icon: string;
  onClick: () => void;
}

export type MenuItem = MenuDropdownItem | MenuFunctionItem;

export const menuItems: MenuItem[] = [
  {
    name: '通用模板',
    type: 'dropdown',
    status: 'template',
    children: [
      {
        name: 'Xia 系統',
        description: 'Web 系統通用開發模板',
        icon: 'GlobeAltIcon',
        onClick: () => window.open('https://github.com/supersonictw/xia'),
      },
    ],
  },
  {
    name: 'GitHub',
    type: 'function',
    icon: 'CodeBracketIcon',
    onClick: () => window.open('https://github.com/supersonictw'),
  },
];
