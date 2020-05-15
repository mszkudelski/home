import { IncomingMessage } from 'http';
import * as cheerio from 'cheerio';

const https = require('https');
const fs = require('fs');
const path = require('path');

function getArticleTemplate(article) {
  return `
        <article class="article">
          <h2 class="article__title">${article.title}</h2>
          <div class="article__date">${article.date}</div>
          <div class="article__advancement">${article.advancement}</div>
          <div class="article__category">${article.category}</div>
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
      const arr = [];
      const articles = cheerio.load(data)('article');

      articles
        .find('.entry-title a')
        .each((_, a) => arr.push({ title: a.children[0].data }));

      articles
        .find('.entry-content p')
        .each((i, a) => (arr[i].description = a.children[0].data));

      articles
        .find('.author a')
        .each((i, a) => (arr[i].author = a.children[0].data));

      articles
        .find('.home__catHref')
        .each((i, a) => (arr[i].category = a.children[0].data));

      articles
        .find('.entry-date.published')
        .each((i, a) => (arr[i].date = a.children[0].data));

      articles
        .find('.advancement-level')
        .each((i, a) => (arr[i].advancement = a.children[0].data.trim()));

      const myArticles = arr
        .filter((a) => a.author === 'Marek')
        .map((article) => getArticleTemplate(article))
        .join('');

      const filePath = path.resolve(__dirname, '../../dist/articles.html');

      fs.writeFile(
        filePath,
        JSON.stringify(myArticles),
        { flag: 'wx' },
        function(err) {
          if (err) return console.log(err);
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
