export const pageUrls = [
  { id: 0, title: 'Dashboard', url: '/dashboard' },
  { id: 1, title: 'About', url: '/about' },
  { id: 2, title: 'Contact', url: '/contact' },
];

export enum routes {
  BASE_URL = '/',
  DASHBOARD = 'Dashboard',
  ABOUT = 'About',
  CONTACT = 'Contact',
}

export enum userState {
  isLoggedIn = 'authenticated',
}
