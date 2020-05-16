import { IncomingMessage } from 'http';
import * as cheerio from 'cheerio';
import { Article } from './article.interface';

const https = require('https');
const fs = require('fs');
const path = require('path');

const categoryLogos = {
  angular: 'ng',
  typescript: 'ts',
  javascript: 'js',
};

function getArticleTemplate(article: Article) {
  return `
        <article class="article">
          <h2 class="article__title title">
            <a rel="noopener" target="_blank" href="${article.link}">${
    article.title
  }</a>
          </h2>
          <div class="article__date">${article.date}</div>
          <div class="article__category"><img src="assets/img/${
            categoryLogos[article.category.toLocaleLowerCase()]
          }-logo.webp" alt="">${article.category}</div>
          <div class="article__description">${article.description}</div>
        </article> 
    `;
}

https
  .get('https://frontemdojs.pl', (response: IncomingMessage) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      const fetchedArticles: Partial<Article>[] = [];
      const articlesElements = cheerio.load(data)('article');

      articlesElements
        .find('.entry-title a')
        .each((_, articleElem) =>
          fetchedArticles.push({ title: articleElem.children[0].data }),
        );

      articlesElements
        .find('.entry-content p')
        .each(
          (index, articleElem) =>
            (fetchedArticles[index].description = articleElem.children[0].data),
        );

      articlesElements
        .find('.author a')
        .each(
          (index, articleElem) =>
            (fetchedArticles[index].author = articleElem.children[0].data),
        );

      articlesElements
        .find('.home__catHref')
        .each(
          (index, articleElem) =>
            (fetchedArticles[index].category = articleElem.children[0].data),
        );

      articlesElements
        .find('.entry-date.published')
        .each(
          (index, articleElem) =>
            (fetchedArticles[index].date = articleElem.children[0].data),
        );

      articlesElements
        .find('.read-more')
        .each(
          (index, articleElem) =>
            (fetchedArticles[index].link = articleElem.attribs.href),
        );

      const myArticles: Article[] = fetchedArticles.filter(
        (article) => article.author === 'Marek',
      ) as Article[];

      const filePath = path.resolve(__dirname, '../../dist/articles.html');
      fs.openSync(filePath, 'w');
      fs.writeFile(
        filePath,
        JSON.stringify(
          myArticles
            .map((article: Article) => getArticleTemplate(article))
            .join(''),
        ),
        function(err) {
          if (err) return console.error(err);
          console.log(
            `Articles (${myArticles.length}) were saved to file: ${filePath}`,
          );
        },
      );
    });
  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
