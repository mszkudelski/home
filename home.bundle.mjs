/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://mszkudelski.github.io/home/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Technologies = [
    {
        name: 'Javascript',
        description: 'Pomimo tego, że używam na codzień frameworków oraz bibliotek, to znam ten język bardzo dobrze. Zarówno w standardzie EcmaScript 2015+ jak i wcześniejszym (ES5).',
        experience: 4.5,
        logo: 'js-logo',
    },
    {
        name: 'Typescript',
        description: 'Korzystam z Typescript przy każdym projekcie zarówno w pracy jak i po godzinach. Znam i rozumiem bardziej zaawansowane koncepty, które dostarcza.',
        experience: 4,
        logo: 'ts-logo',
    },
    {
        name: 'Angular',
        description: 'Na codzień w pracy tworzę złożone aplikacje biznesowe z użyciem Angular. Cenię sobie w nim solidną architekturę, Dependency Injection oraz modularność.',
        experience: 4,
        logo: 'ng-logo',
    },
    {
        name: 'RxJs',
        description: "Za początku używałem RxJs tylko w projektach z Angular'em, ale potem dostrzegłem wartość jaką daje deklaratywne podejście do asychroniczności.",
        experience: 3.5,
        logo: 'rxjs-logo',
    },
    {
        name: 'NodeJs',
        description: "Komercyjnie miałem okazję tworzyć i rozwijać dwa projekt z backend'em w NodeJs, korzystając z ExpressJs.",
        experience: 3,
        logo: 'node-logo',
    },
    {
        name: 'NestJs',
        description: "Ze względu na podobne cechy do Angular'a spodobało mi się to co oferuje NestJs po stronie backend'owej. W prywatnych projektach wykorzystuję ten framework.",
        experience: 3,
        logo: 'nest-logo',
    },
    {
        name: 'Css',
        description: 'Znam dobrze podejście RWD, mobile-first, umiem korzystać z flexbox, a na codzień wykorzystuję preprocesor Scss do stylowania.',
        experience: 4,
        logo: 'css3-logo',
    },
    {
        name: 'HTML',
        description: 'Jest to podstawowa umiejętność frontend developera, ale nie zapominam o odpowiedniej semantyce ze względu na SEO albo dostępność.',
        experience: 4.5,
        logo: 'html-logo',
    },
    {
        name: 'Docker',
        description: 'Znam podstawy koncepcyjnie jak i praktycznie. Umiem przygotować proste kontenery do swoich projektów.',
        experience: 2,
        logo: 'docker-logo',
    },
    {
        name: 'Jenkins',
        description: "Na codzień w pracy używam Jenkins'a do CI oraz CD. Znam podstawy konfiguracji tego narzędzia",
        experience: 2,
        logo: 'jenkins-logo',
    },
    {
        name: 'Git',
        description: "Dość dobrze znam ten system kontroli wersji. Jestem przekonania, że dość trudno jest wprowadzić nieodwracalne zmiany w projektach z Git'em.",
        experience: 4,
        logo: 'git-logo',
    },
];


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var technologies_1 = __webpack_require__(7);
var home_template_1 = __webpack_require__(8);
var jobs_1 = __webpack_require__(9);
var jobs_2 = __webpack_require__(10);
var technologies_const_1 = __webpack_require__(0);
__webpack_require__(11);
window['__routes'].home = function (container) {
    container.innerHTML = home_template_1.HomeTemplate(jobs_1.getJobsTemplate(jobs_2.Jobs), technologies_1.getTechnologyTemplate(technologies_const_1.Technologies.slice(0, 3)));
    var techElement = document.getElementById('tech');
    var techButton = document.querySelector('#tech-button');
    technologies_1.setTechnologiesToggleListener(techButton, techElement);
    fetch('https://api.stackexchange.com/2.2/users/13093310?order=desc&sort=reputation&site=stackoverflow')
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        var _a = data.items[0], badge_counts = _a.badge_counts, reputation = _a.reputation, link = _a.link;
        document.getElementById('stack-overflow').innerHTML = "\n        " + reputation + " reputacji\n    ";
    });
    if (window.matchMedia('(min-width: 768px)').matches) {
        var twitterWidget = document.getElementById('twitter');
        twitterWidget.innerHTML = "\n    <a rel=\"noopener\" class=\"twitter-timeline\" href=\"https://twitter.com/MarekSzkudelski?ref_src=twsrc%5Etfw\">Tweets by\n        MarekSzkudelski</a>\n  ";
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://platform.twitter.com/widgets.js';
        script.setAttribute('charset', 'utf-8');
        script.defer = true;
        twitterWidget.appendChild(script);
    }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var technologies_const_1 = __webpack_require__(0);
function getExperienceDots(experience) {
    return new Array(5)
        .fill(null)
        .reduce(function (result, _, index) {
        return result +
            ("<div class=\"experience__dot " + (index + 1 > experience && experience % 1 !== 0
                ? 'experience__dot--half'
                : '') + " " + (index < experience ? 'experience__dot--filled' : '') + "\"></div>");
    }, '');
}
function getTechnologyTemplate(technologies) {
    return technologies.reduce(function (html, technology) {
        return html +
            ("\n    <div class=\"tech__card\">\n        <img class=\"tech__img\" src=\"assets/img/" + technology.logo + ".webp\" aria-hidden=\"true\" alt=\"" + technology.name + "\">\n        <div class=\"tech__img-tooltip\">" + technology.name + "</div>\n        <div class=\"experience\">\n            " + getExperienceDots(technology.experience) + "\n            <div class=\"experience__tooltip experience__tooltip--no-arrow\">Poziom do\u015Bwiadczenia i umiej\u0119tno\u015Bci*: <span class=\"experience__value\">" + technology.experience + "</span></div>\n        </div>\n        <div class=\"tech__description\">\n            " + technology.description + "\n        </div>\n    </div>");
    }, '');
}
exports.getTechnologyTemplate = getTechnologyTemplate;
function setTechnologiesToggleListener(techButton, techElement) {
    var techElementShown = false;
    var isFirstClick = true;
    techButton.addEventListener('click', function () {
        if (isFirstClick) {
            isFirstClick = false;
            techElement.innerHTML = getTechnologyTemplate(technologies_const_1.Technologies);
        }
        if (techElement.style.height === 'auto') {
            techElement.style.height = '460px';
            techButton.innerText = 'Zobacz więcej';
        }
        else {
            techElement.style.height = 'auto';
            techButton.innerText = 'Schowaj';
        }
        techElementShown = !techElementShown;
    });
}
exports.setTechnologiesToggleListener = setTechnologiesToggleListener;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeTemplate = function (jobs, tech) { return "\n    <header class=\"page-header section\">\n        <div class=\"content\">\n            <h2 class=\"page-header__title\">\n                Cze\u015B\u0107, jestem Marek!\n            </h2>\n            <div class=\"page-header__row\">\n                <picture>\n                    <source srcset=\"assets/img/profile-mobile.webp\" media=\"(max-width: 768px)\" />\n                    <img class=\"page-header__img\" src=\"assets/img/profile.webp\" alt=\"Zdj\u0119cie profilowe\"/>\n                </picture>\n                <div class=\"page-header__description\">\n                    <p>\n                        Jestem developerem g\u0142\u00F3wnie w obszarach frontendu. Jestem in\u017Cynierem i pasjonatem programowania.\n                        Wsp\u00F3\u0142tworz\u0119 tak\u017Ce blog FrontemDoJs.pl.\n                    </p>\n                    <p>\n                        B\u0119d\u0105 tutaj zgromadzone wszelkie <a class=\"link\" route=\"materials\">materia\u0142y</a> ze mn\u0105\u00A0zwi\u0105zane takie jak wpisy na blogach mojego autorstwa.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </header>\n    \n    <main>\n    <section class=\"section\">\n        <div class=\"content jobs\">\n            <h2 class=\"header\"><span class=\"title\">Do\u015Bwiadczenie</span></h2>\n            <div class=\"jobs__list\" id=\"jobs\">\n                " + jobs + "\n            </div>\n        </div>\n    </section>\n    <section class=\"section\">\n        <div class=\"tech content\">\n            <h2 class=\"header\"><span class=\"title\">Technologie</span></h2>\n            <div class=\"tech__list\" id=\"tech\">\n                " + tech + "\n            </div>\n            <button type=\"button\" class=\"tech__button\" id=\"tech-button\">Zobacz wi\u0119cej</button>\n            <p class=\"tech__disclaimer\">\n                * Ko\u0142a oznaczaj\u0105 poziom do\u015Bwiadczenia i umiej\u0119tno\u015Bci. S\u0105 to warto\u015Bci relatywne pomi\u0119dzy sob\u0105.\n                Dla przyk\u0142adu 1 oznacza, \u017Ce znam tylko podstawy, ale nie wykorzystywa\u0142em komercyjnie.\n                5 oznacza, \u017Ce mam bogate do\u015Bwiadczenie komercyjne i ma\u0142o rzeczy mo\u017Ce mnie zaskoczy\u0107.\n            </p>\n        </div>\n    </section>\n    <section class=\"section social\">\n        <div class=\"content\">\n            <div class=\"twitter\">\n                <div class=\"twitter__timeline\" id=\"twitter\">\n                </div>\n            </div>\n            <div class=\"social__links\">\n                <h2 class=\"header\"><span class=\"title\">Kontakt</span></h2>\n                <div class=\"social__row\">\n                    <a rel=\"noopener\" aria-label=\"Link do Twittera\" class=\"social__icon\" href=\"https://twitter.com/MarekSzkudelski?ref_src=twsrc%5Etfw\" target=\"_blank\" title=\"Twitter\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"white\"\n                             stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                             class=\"feather feather-twitter\">\n                            <path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>\n                        </svg>\n                    </a>\n                    <a rel=\"noopener\" aria-label=\"Link do Githuba\" class=\"social__icon\" href=\"https://github.com/mszkudelski\" target=\"_blank\" title=\"Github\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"white\"\n                             stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                             class=\"feather feather-github\">\n                            <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>\n                        </svg>\n                    </a>\n                    <a rel=\"noopener\" aria-label=\"Link do Linkedin\" class=\"social__icon\" href=\"https://www.linkedin.com/in/marek-szkudelski/\" target=\"_blank\" title=\"Linkedin\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"white\"\n                             stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                             class=\"feather feather-linkedin\">\n                            <path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path>\n                            <rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect>\n                            <circle cx=\"4\" cy=\"4\" r=\"2\"></circle>\n                        </svg>\n                    </a>\n                </div>\n                <div class=\"social__row\">\n                    <a rel=\"noopener\" aria-label=\"Link do Stack Overflow\" class=\"social__icon stack-overflow\" href=\"https://stackoverflow.com/users/13093310/marek-szkudelski\" target=\"_blank\" title=\"Stack Overflow\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\"><style>.st0{fill:#fff}.st1{fill:#fff}</style><path class=\"st0\" d=\"M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z\"/><path class=\"st1\" d=\"M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z\"/></svg>\n                    </a>\n                    <div id=\"stack-overflow\" class=\"social__stack-overflow\"></div>\n                </div>\n                <div class=\"social__row\">\n                    <span class=\"social__label\">Blog FrontemDoJs.pl</span>\n                    <a rel=\"noopener\" href=\"https://frontemdojs.pl\" target=\"_blank\" class=\"social__blog\" id=\"blog\" title=\"Blog FrontemDoJs.pl\" aria-label=\"Link do bloga FrontemDoJs.pl\">\n                        <img src=\"assets/img/blog.webp\" aria-hidden=\"true\">\n                    </a>\n                </div>\n                <div class=\"social__row\">\n                    <div class=\"social__icon social__icon--mail\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-mail\"><path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline></svg>\n                    </div>\n                    <a rel=\"noopener\" aria-label=\"Link do emaila\" class=\"social__link\" href=\"mailto:marek.szkudelski@gmail.com\">marek.szkudelski@gmail.com</a>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"section private-life\">\n        <div class=\"content\">\n            <img class=\"private-life__img\" src=\"assets/img/family.webp\" alt=\"Zdj\u0119cie z rodzin\u0105\"/>\n            <div class=\"private-life__description\">\n            <h2 class=\"header\"><span class=\"title\">\u017Bycie osobiste</span></h2>\n                <p>\n                    Pomijaj\u0105c \u017Cycia zawodowe jestem te\u017C m\u0119\u017Cem i ojcem, a moj\u0105 rodzin\u0119 mo\u017Cecie zobaczy\u0107 na tym zdj\u0119ciu :)\n                    W wolnym czasie lubi\u0119\u00A0pogra\u0107 na gitarze, w szachy (zapraszam na <a class=\"private-life__link private-life__link--accent\" href=\"https://www.chess.com/member/maszkud\" rel=\"noopener\" target=\"_blank\">parti\u0119</a> :) ) albo w tenisa.\n                </p>\n                <p>\n                    Lubi\u0119 czyta\u0107 warto\u015Bciowe ksi\u0105\u017Cki, a te kt\u00F3re mia\u0142y na mnie najwi\u0119kszy wp\u0142yw to na przyk\u0142ad:\n                    \"Dzikie serce\" John'a Eldredge'a oraz \"Tajniki \u017Conglerki\" Pat'a Gelsinger'a.\n                </p>\n            </div>\n        </div>\n    </section>\n</main>\n"; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getJobsTemplate(jobs) {
    return jobs.reduce(function (html, job, index) {
        return html +
            (" \n      <div class=\"jobs__item\">\n        <div class=\"jobs__time\">\n            " + (index === 0 ? '<div class="jobs__time-item">obecnie</div>' : '') + "\n            <div class=\"jobs__time-line\"></div>\n            <div class=\"jobs__time-item\">" + job.startDate + "</div>\n        </div>\n        <div class=\"jobs__content\">\n            <div class=\"jobs__name\">\n                " + job.companyName + "\n                </div>\n                <div class=\"jobs__position\">\n                " + job.position + "\n            </div>\n            <div class=\"jobs__description\">\n                " + job.description + "\n            </div>\n        </div>\n    </div>");
    }, '');
}
exports.getJobsTemplate = getJobsTemplate;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobs = [
    {
        companyName: 'Sonalake',
        startDate: '01.04.2019',
        position: 'Frontend Developer',
        description: "\n      Prac\u0119 w tej w firmie mo\u017Cna podzieli\u0107 na dwa projekty w kt\u00F3rych bra\u0142em udzia\u0142.\n      Pierwszy to by\u0142 du\u017Cy system dla bran\u017Cy telekomunikacyjnej. Da\u0142o mi to ogl\u0105d na to jak mo\u017Ce wygl\u0105da\u0107 zarz\u0105dzanie du\u017C\u0105 aplikacj\u0105 z wieloma wersjami.\n      Drugi projekt to by\u0142a aplikacja mobilna. Ze wzgl\u0119du na ma\u0142y zesp\u00F3\u0142 mia\u0142em okazj\u0119 rozwin\u0105\u0107 si\u0119 w r\u00F3\u017Cnych dziedzinach takich jak CI/CD, pisanie specyfikacji, bezpo\u015Bredni kontakt z klientem.\n      ",
    },
    {
        companyName: 'Globe Group',
        startDate: '05.12.2016',
        position: 'Junior/Regular Frontend Developer',
        description: "\n      Pierwsza praca jak\u0105 podj\u0105\u0142em w bran\u017Cy IT. \n      Od samego pocz\u0105tku uczy\u0142em si\u0119 wykorzystywa\u0107 Angular i Typescript przy mniejszych oraz \u015Brednich aplikacjach webowych.\n      Dzi\u0119ki stosunkowo kr\u00F3tkim projektom przez ponad dwa lata mia\u0142em okazj\u0119 pracowa\u0107 przy zr\u00F3\u017Cnicowanych systemach takich jak \n      e-commerce, programy lojalno\u015Bciowe czy panele administracyjne.",
    },
];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);