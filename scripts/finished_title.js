const chalk = require('chalk');
const color = '#0ADB79';
const text = '✨ Finished, your directory is ready to code! ✨';
const terminalWidth = process.stdout.columns;
const leftPaddingText = Math.floor((54 - text.length) / 2);
const leftPaddingBox = Math.floor((terminalWidth - 58) / 2);
const text_ = `
${' '.repeat(leftPaddingBox)}╭────────────────────────────────────────────────────────╮
${' '.repeat(leftPaddingBox)}│                                                        │
${' '.repeat(leftPaddingBox)}│${' '.repeat(leftPaddingText)}${text}${' '.repeat(leftPaddingText)}│
${' '.repeat(leftPaddingBox)}│                                                        │
${' '.repeat(leftPaddingBox)}╰────────────────────────────────────────────────────────╯
`;
const formattedText = chalk.hex(color).bold(text_);
console.log(formattedText);