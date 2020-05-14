import { Job } from '../constants/jobs';

export function getJobsTemplate(jobs: Job[]): string {
  return jobs.reduce(
    (html, job, index) =>
      html +
      ` 
      <div class="jobs__item">
        <div class="jobs__time">
            ${index === 0 ? '<div class="jobs__time-item">obecnie</div>' : ''}
            <div class="jobs__time-line"></div>
            <div class="jobs__time-item">${job.startDate}</div>
        </div>
        <div class="jobs__content">
            <div class="jobs__name">
                ${job.companyName}
                </div>
                <div class="jobs__position">
                ${job.position}
            </div>
            <div class="jobs__description">
                ${job.description}
            </div>
        </div>
    </div>`,
    '',
  );
}
