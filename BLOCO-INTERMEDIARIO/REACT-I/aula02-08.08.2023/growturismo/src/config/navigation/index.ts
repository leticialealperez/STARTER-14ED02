export interface NavigationType {
  url: string;
  label: string;
}

const navigation: Array<NavigationType> = [
  {
    url: '/quem-somos',
    label: 'Quem Somos'
  },
  {
    url: '/servicos',
    label: 'Serviços'
  },
  {
    url: '/planos',
    label: 'Planos'
  }
];

export default navigation;
