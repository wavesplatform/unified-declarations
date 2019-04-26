var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports =
  '# Introduction\n' +
  fs.readFileSync('./content/0-introduction.md', 'utf8') + '\n' +
  '# Examples\n' +
  fs.readFileSync('./content/1-create-seed.md', 'utf8') + '\n' +
  fs.readFileSync('./content/2-create-address.md', 'utf8') + '\n' +
  fs.readFileSync('./content/3-create-public-key.md', 'utf8') + '\n' +
  fs.readFileSync('./content/4-create-private-key.md', 'utf8') + '\n';
