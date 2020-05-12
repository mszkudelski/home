function getExperienceDots(experience: number): string {
  return new Array(5)
    .fill(null)
    .reduce(
      (result, _, index) =>
        result +
        `<div class="experience__dot ${
          index + 1 > experience && experience % 1 !== 0
            ? 'experience__dot--half'
            : ''
        } ${index < experience ? 'experience__dot--filled' : ''}"></div>`,
      '',
    );
}

export function getTechnologyTemplate(technologies) {
  return technologies.reduce(
    (html, technology) =>
      html +
      `
    <div class="tech__card">
        <img class="tech__img" src="assets/img/${
          technology.logo
        }" aria-hidden="true" alt="${technology.name}">
        <div class="tech__img-tooltip">${technology.name}</div>
        <div class="experience">
            ${getExperienceDots(technology.experience)}
            <div class="experience__tooltip experience__tooltip--no-arrow">Poziom doświadczenia i umiejętności*: <span class="experience__value">${
              technology.experience
            }</span></div>
        </div>
        <div class="tech__description">
            ${technology.description}
        </div>
    </div>`,
    '',
  );
}

export function setTechnologiesToggleListener(
  techButton: HTMLButtonElement,
  techElement: HTMLElement,
) {
  let techElementShown = false;
  techButton.addEventListener('click', () => {
    if (techElementShown) {
      techElement.style.height = '460px';
      techButton.innerText = 'Zobacz więcej';
    } else {
      techElement.style.height = 'auto';
      techButton.innerText = 'Schowaj';
    }
    techElementShown = !techElementShown;
  });
}
