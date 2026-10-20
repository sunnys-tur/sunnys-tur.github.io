
export interface Dict {
  htmlLang: string;
  tagline: string;
  description: string;
  skip: string;
  language: string;
  toggleTheme: string;
  toggleMenu: string;
  whatsapp: string;
  call: string;
  hero: { title: string; languages: string; topper: string; cta: string; secondary: string; imageAlt: string };
  trust: { label: string; value?: string }[];
  services: { heading: string; photo: string; description: string };
  about: { heading: string; body: string[]; imageAlt: string };
  vehicles: { heading: string; description: string; photo: string };
  cta: { cards: string; title: string; description: string; button: string };
  footer: { phone: string; email: string; driverEmail: string; createdBy: string; location: string; contact: string; rights: string };
}
