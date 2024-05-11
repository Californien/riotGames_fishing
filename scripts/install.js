const spawn = require('cross-spawn');
const chalk = require('chalk');

const command = 'concurrently';
const args = [
    '-n',
    'MAIN_DIR,NUXT_FRONTEND_DIR,STR_BACKEND_DIR',
    '-c',
    '#1FD7E7,#39E9AC,#7B39E9',
    '"npm i"',
    '"npm run i:frontend"',
    '"npm run i:backend"'
];

const childProcess = spawn(command, args, { stdio: 'inherit', shell: true });
childProcess.on('close', (code) => {
    if(code !== 0) {
        console.log(chalk.white.bold(`❗  Exit code: ${code}`));
        colourReplacement();
    } else {
        console.log(chalk.white.bold(`✅  Exit code: ${code}`));
    }
});

function colourReplacement() {
    console.log(chalk.bold.hex('#EA1848')('⚠   Error. Switching to compatibility-mode ...'));
    const spawn = require('cross-spawn');
    const command = 'concurrently';
    const args = [
        '-n',
        'MAIN_DIR,NUXT_FRONTEND_DIR,STR_BACKEND_DIR',
        '-c',
        'cyan,green,magenta',
        '"npm i"',
        '"npm run i:frontend"',
        '"npm run i:backend"'
    ];
    const childProcess = spawn(command, args, { stdio: 'inherit', shell: true });
    childProcess.on('close', (code) => {
        if(code === 0) {
            console.log(chalk.white.bold(`✅  Exit code: ${code}`));
        }
        if(code !== 0) {
            console.log(chalk.white.bold(`❗  Exit code: ${code}`));
            const color = '#EA0B5F';
            const text = '⚠  ---  Another Error occured.  ---  ⚠';
            const terminalWidth = process.stdout.columns;
            const leftPaddingText = Math.floor((43 - text.length) / 2);
            const leftPaddingBox = Math.floor((terminalWidth - 42) / 2);
            const text_ = `
            ${' '.repeat(leftPaddingBox)}╭───────────────────────────────────────────╮
            ${' '.repeat(leftPaddingBox)}│                                           │
            ${' '.repeat(leftPaddingBox)}│${' '.repeat(leftPaddingText)}${text}${' '.repeat(leftPaddingText + 1)}│
            ${' '.repeat(leftPaddingBox)}│                                           │
            ${' '.repeat(leftPaddingBox)}╰───────────────────────────────────────────╯
            `;
            const formattedText = chalk.hex(color).bold(text_);
            console.log(`${formattedText}\n${chalk.bold.hex('#EA0B5F')('Make sure that the correct version of Node.js is installed.\nUse node --version to check the currently installed version, and compare it with the versions supported by Nuxt and Strapi.')}`);
        }
    });
}