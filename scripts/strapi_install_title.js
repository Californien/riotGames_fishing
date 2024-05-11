const chalk = require('chalk');
const color = '#7B39E9';
const text = 'Strapi-Backend Installation';
const terminalWidth = process.stdout.columns;
const leftPaddingText = Math.floor((56 - text.length) / 2);
const leftPaddingBox = Math.floor((terminalWidth - 58) / 2);
const text_ = `
${' '.repeat(leftPaddingBox)}╭────────────────────────────────────────────────────────╮
${' '.repeat(leftPaddingBox)}│                                                        │
${' '.repeat(leftPaddingBox)}│${' '.repeat(leftPaddingText)}${text}${' '.repeat(leftPaddingText + 1)}│
${' '.repeat(leftPaddingBox)}│                                                        │
${' '.repeat(leftPaddingBox)}╰────────────────────────────────────────────────────────╯
`;
const formattedText = chalk.hex(color).bold(text_);
console.log(formattedText);