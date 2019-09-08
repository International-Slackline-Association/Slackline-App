/* eslint-disable */

/*
  This is custom script I build for creating another index.html for specific urls in build folder.
  It changes the <head> tag so that web scrapers can see the tags specified for a url
  instead of seeing default index.html file tags. 

  Web apps are not server side rendered. Thats the whole problem. This is a big workaround.

  Redirection rules for that specific url are made with AWS S3 and CloudFront
*/
const xml2js = require('xml2js');

const fs = require('fs');

const tensionCalculator = {
  fileName: 'tension-calculator.html',
  fields: [
    ['og:title', 'Slackline Tension Calculator'],
    ['og:description', 'Calculate the tension of the line'],
    [
      'og:image',
      'https://s3.eu-central-1.amazonaws.com/images.slackline-web-tools/TensionCalculatorOgImage.png',
    ],
    [
      'og:url',
      'https://tools.slacklineinternational.org/tension-calculator.html',
    ],
  ],
};

const replaces = [tensionCalculator];

fs.readFile('./build/index.html', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  let html = data.toString();
  xml2js.parseString(html, function(error, result) {
    const list = result.html.head[0].meta;
    for (const replace of replaces) {
      console.log('Building: ', replace.fileName);
      for (const field of replace.fields) {
        findReplace(list, field[0], field[1]);
      }
      const builder = new xml2js.Builder({
        renderOpts: { pretty: false, indent: '' },
      });
      const xml = builder.buildObject(result);
      const regex = /(<head>)(.*)(<\/head>)/g;
      const headSection = xml.match(regex);
      const originalHeadSection = html.match(regex);
      html = html.replace(originalHeadSection, headSection);
      fs.writeFileSync(`./build/${replace.fileName}`, html);
    }
  });
});

function findReplace(list, property, value) {
  for (const meta of list) {
    if (meta.$.property === property) {
      meta.$.content = value;
    }
  }
}
