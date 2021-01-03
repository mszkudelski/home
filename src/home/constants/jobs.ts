export interface Job {
  companyName: string;
  startDate: string;
  position: string;
  description: string;
}

export const Jobs: Job[] = [
  {
    companyName: 'Teb Akademia',
    startDate: '01.10.2020',
    position: 'Frontend Developer',
    description: `Dla grupy Teb Akademia rozwijałem wewnętrzny system dla Wyższych Szkół Bankowych. Praca polegała na analizach wymagań osób, które miały bezpośrednio pracować z systemem oraz na rozwijaniu oprogramowania w sposób zwinny. Projekt miałem okazję tworzyć od początku, więc byłem zaangażowany w wybór rozwiązań technologicznych oraz architektonicznych.`,
  },
  {
    companyName: 'Sonalake',
    startDate: '01.04.2019',
    position: 'Frontend Developer',
    description: `
      Pracę w tej w firmie można podzielić na dwa projekty w których brałem udział.
      Pierwszy to był duży system dla branży telekomunikacyjnej. Dało mi to ogląd na to jak może wyglądać zarządzanie dużą aplikacją z wieloma wersjami.
      Drugi projekt to była aplikacja mobilna. Ze względu na mały zespół miałem okazję rozwinąć się w różnych dziedzinach takich jak CI/CD, pisanie specyfikacji, bezpośredni kontakt z klientem.
      `,
  },
  {
    companyName: 'Globe Group',
    startDate: '05.12.2016',
    position: 'Junior/Regular Frontend Developer',
    description: `
      Pierwsza praca jaką podjąłem w branży IT. 
      Od samego początku uczyłem się wykorzystywać Angular i Typescript przy mniejszych oraz średnich aplikacjach webowych.
      Dzięki stosunkowo krótkim projektom przez ponad dwa lata miałem okazję pracować przy zróżnicowanych systemach takich jak 
      e-commerce, programy lojalnościowe czy panele administracyjne.`,
  },
];
