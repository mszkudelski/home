export const HomeTemplate = (jobs: string, tech: string) => `
    <header class="page-header section">
        <div class="content">
            <h2 class="page-header__title">
                Cześć, jestem Marek!
            </h2>
            <div class="page-header__row">
                <picture>
                    <source srcset="assets/img/profile-mobile.webp" media="(max-width: 768px)" />
                    <img class="page-header__img" src="assets/img/profile.webp" alt="Zdjęcie profilowe"/>
                </picture>
                <div class="page-header__description">
                    <p>
                        Jestem developerem głównie w obszarach frontendu, ale zdarza mi się również rozwijać aplikacje serwerowe. Od wielu lat pasjonuję się programowaniem.
                        Współtworzę także blog FrontemDoJs.pl. Lubię uczyć się nowych rzeczy i nie pozostawiać pytań bez odpowiedzi.
                    </p>
                    <p>
                        Będą tutaj zgromadzone wszelkie <a class="link" route="materials">materiały</a> ze mną związane takie jak publikacje mojego autorstwa albo nagrania z moich wystąpień.
                    </p>
                </div>
            </div>
        </div>
    </header>
    
    <main>
    <section class="section">
        <div class="content jobs">
            <h2 class="header"><span class="title">Doświadczenie</span></h2>
            <div class="jobs__list" id="jobs">
                ${jobs}
            </div>
        </div>
    </section>
    <section class="section">
        <div class="tech content">
            <h2 class="header"><span class="title">Technologie</span></h2>
            <div class="tech__list" id="tech">
                ${tech}
            </div>
            <button type="button" class="tech__button" id="tech-button">Zobacz więcej</button>
            <p class="tech__disclaimer">
                * Koła oznaczają poziom doświadczenia i umiejętności. Są to wartości relatywne pomiędzy sobą.
                Dla przykładu 1 oznacza, że znam tylko podstawy, ale nie wykorzystywałem komercyjnie.
                5 oznacza, że mam bogate doświadczenie komercyjne i mało rzeczy może mnie zaskoczyć.
            </p>
        </div>
    </section>
    <section class="section social">
        <div class="content">
            <div class="twitter">
                <div class="twitter__timeline" id="twitter">
                </div>
            </div>
            <div class="social__links">
                <h2 class="header"><span class="title">Kontakt</span></h2>
                <div class="social__row">
                    <a rel="noopener" aria-label="Link do Twittera" class="social__icon" href="https://twitter.com/MarekSzkudelski?ref_src=twsrc%5Etfw" target="_blank" title="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-twitter">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a>
                    <a rel="noopener" aria-label="Link do Githuba" class="social__icon" href="https://github.com/mszkudelski" target="_blank" title="Github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-github">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a rel="noopener" aria-label="Link do Linkedin" class="social__icon" href="https://www.linkedin.com/in/marek-szkudelski/" target="_blank" title="Linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
                <div class="social__row">
                    <a rel="noopener" aria-label="Link do Stack Overflow" class="social__icon stack-overflow" href="https://stackoverflow.com/users/13093310/marek-szkudelski" target="_blank" title="Stack Overflow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><style>.st0{fill:#fff}.st1{fill:#fff}</style><path class="st0" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/><path class="st1" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/></svg>
                    </a>
                    <div id="stack-overflow" class="social__stack-overflow"></div>
                </div>
                <div class="social__row">
                    <span class="social__label">Blog FrontemDoJs.pl</span>
                    <a rel="noopener" href="https://frontemdojs.pl" target="_blank" class="social__blog" id="blog" title="Blog FrontemDoJs.pl" aria-label="Link do bloga FrontemDoJs.pl">
                        <img src="assets/img/blog.webp" aria-hidden="true">
                    </a>
                </div>
                <div class="social__row">
                    <div class="social__icon social__icon--mail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <a rel="noopener" aria-label="Link do emaila" class="social__link" href="mailto:marek@szkudelski.dev">marek@szkudelski.dev</a>
                </div>
            </div>
        </div>
    </section>
    <section class="section private-life">
        <div class="content">
            <img class="private-life__img" src="assets/img/family.webp" alt="Zdjęcie z rodziną"/>
            <div class="private-life__description">
            <h2 class="header"><span class="title">Życie osobiste</span></h2>
                <p>
                    Pomijając życia zawodowe jestem też mężem i ojcem, a moją rodzinę możecie zobaczyć na tym zdjęciu :)
                    W wolnym czasie lubię pograć na gitarze, w szachy (zapraszam na <a class="private-life__link private-life__link--accent" href="https://www.chess.com/member/maszkud" rel="noopener" target="_blank">partię</a> :) ) albo w tenisa.
                </p>
                <p>
                    Lubię czytać wartościowe książki, a te które miały na mnie największy wpływ to na przykład:
                    "Dzikie serce" John'a Eldredge'a oraz "Tajniki żonglerki" Pat'a Gelsinger'a.
                </p>
            </div>
        </div>
    </section>
</main>
`;
