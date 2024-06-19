interface Article {
  title: string;
  subtitle: string;
  primary: string;
}

export const metadata: { [name: string]: Article } = {
  spacewalk: {
    title: 'Spacewalk',
    subtitle: '3D presentation builder',
    primary: '#7029ff',
  },
  google23: {
    title: 'YouTube',
    subtitle: 'Summer 2023 Internship | Mountain View, CA',
    primary: '#db0000',
  },
  sidefx: {
    title: 'SideFx',
    subtitle: 'Winter 2023 Internship | Toronto, ON',
    primary: '#171717',
  },
  google22: {
    title: 'Google',
    subtitle: 'Summer 2022 Internship | Waterloo, ON',
    primary: '#0069d9',
  },
  spatial: {
    title: 'Spatial',
    subtitle: 'Fall 2021 Internship | Remote',
    primary: '#000000',
  },
  virtrolio: {
    title: 'Virtrolio',
    subtitle: 'Virtual yearbooks',
    primary: '#f27777',
  },
  darwinai: {
    title: 'Darwin AI',
    subtitle: 'Winter 2021 Internship | Remote',
    primary: '#8176e3',
  },
  providius: {
    title: 'Providius Corp.',
    subtitle: 'Summer 2020 Internship | Remote',
    primary: '#001f30',
  },
};
