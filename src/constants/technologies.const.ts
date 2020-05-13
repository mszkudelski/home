export interface Technology {
  name: string;
  description: string;
  logo: string;
  experience: number;
}

export const Technologies: Technology[] = [
  {
    name: 'Javascript',
    description:
      'Pomimo tego, że używam na codzień frameworków oraz bibliotek, to znam ten język bardzo dobrze. Zarówno w standardzie EcmaScript 2015+ jak i wcześniejszym (ES5).',
    experience: 4.5,
    logo: 'js-logo',
  },
  {
    name: 'Typescript',
    description:
      'Korzystam z Typescript przy każdym projekcie zarówno w pracy jak i po godzinach. Znam i rozumiem bardziej zaawansowane koncepty, które dostarcza.',
    experience: 4,
    logo: 'ts-logo',
  },
  {
    name: 'Angular',
    description:
      'Na codzień w pracy tworzę złożone aplikacje biznesowe z użyciem Angular. Cenię sobie w nim solidną architekturę, Dependency Injection oraz modularność.',
    experience: 4,
    logo: 'ng-logo',
  },
  {
    name: 'RxJs',
    description:
      "Za początku używałem RxJs tylko w projektach z Angular'em, ale potem dostrzegłem wartość jaką daje deklaratywne podejście do asychroniczności.",
    experience: 3.5,
    logo: 'rxjs-logo',
  },
  {
    name: 'NodeJs',
    description:
      "Komercyjnie miałem okazję tworzyć i rozwijać dwa projekt z backend'em w NodeJs, korzystając z ExpressJs.",
    experience: 3,
    logo: 'node-logo',
  },
  {
    name: 'NestJs',
    description:
      "Ze względu na podobne cechy do Angular'a spodobało mi się to co oferuje NestJs po stronie backend'owej. W prywatnych projektach wykorzystuję ten framework.",
    experience: 3,
    logo: 'nest-logo',
  },
  {
    name: 'Css',
    description:
      'Znam dobrze podejście RWD, mobile-first, umiem korzystać z flexbox, a na codzień wykorzystuję preprocesor Scss do stylowania.',
    experience: 4,
    logo: 'css3-logo',
  },
  {
    name: 'HTML',
    description:
      'Jest to podstawowa umiejętność frontend developera, ale nie zapominam o odpowiedniej semantyce ze względu na SEO albo dostępność.',
    experience: 4.5,
    logo: 'html-logo',
  },
  {
    name: 'Docker',
    description:
      'Znam podstawy koncepcyjnie jak i praktycznie. Umiem przygotować proste kontenery do swoich projektów.',
    experience: 2,
    logo: 'docker-logo',
  },
  {
    name: 'Jenkins',
    description:
      "Na codzień w pracy używam Jenkins'a do CI oraz CD. Znam podstawy konfiguracji tego narzędzia",
    experience: 2,
    logo: 'jenkins-logo',
  },
  {
    name: 'Git',
    description:
      "Dość dobrze znam ten system kontroli wersji. Jestem przekonania, że dość trudno jest wprowadzić nieodwracalne zmiany w projektach z Git'em.",
    experience: 4,
    logo: 'git-logo',
  },
];
