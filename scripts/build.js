const crSpawn = require('cross-spawn');
const { spawn } = require('child_process');
const chalk = require('chalk');

console.log(chalk.bold.hex('#EAEBFA')('Starting tests to check for `npm run build`-compatibility...'));

const command = 'concurrently';
const args = [
    '-n',
    'STR_BACKEND_DIR,NUXT_FRONTEND_DIR',
    '-c',
    '#7B39E9,#39E9AC',
    '"cd strapi_backend && npm run build --production"',
    '"npm run build:frontend"'
];

function runBuild() {
    const childProcess = crSpawn(command, args, { stdio: 'inherit', shell: true });
    childProcess.on('close', (code) => {
        if(code !== 0) {
            console.log(chalk.white.bold(`❗  Exit code: ${code}`));
            colourReplacement();
        } else {
            console.log(chalk.white.bold(`✅  Exit code: ${code}`));
        }
    });
    childProcess.on('error', (err) => {
        console.log(err);
    });
    childProcess.on('disconnect', (data) => {
        console.log(data);
    });
}

function colourReplacement() {
    console.log(chalk.bold.hex('#EA1848')('⚠   Error. Switching to compatibility-mode ...'));
    const command = 'concurrently';
    const crSpawn = require('cross-spawn');
    const args = [
        '-n',
        'STR_BACKEND_DIR,NUXT_FRONTEND_DIR',
        '-c',
        'magenta,green',
        '"cd strapi_backend && npm run build --production"',
        '"npm run build:frontend"'
    ];
    const childProcess = crSpawn(command, args, { stdio: 'inherit', shell: true });
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

const testCmd = 'cd';
const testArgs = [ 'strapi_backend', '&&', 'npm', 'run', 'strapi', 'hooks:list' ];
const child = spawn(testCmd, testArgs, { shell: true });
let output = '';

child.stdout.on('data', (data) => {
    output += data.toString();
});

child.on('error', (err) => {
    console.error(chalk.bold.hex('#E90744')(`⚠   Error while running test command: ${chalk.hex('#E90744')(err)}`));
});

child.on('close', (code) => {
    if (code !== 0) {
        console.error(chalk.white.bold(`❗  Exit code: ${code}`));
        console.error(chalk.hex('#E90744').bold('⚠   Unable to run `build`. Check your repository installation.'));
    } else {
        console.log(chalk.white.bold(`✅  Exit code: ${code}`));
        if (output.includes('strapi::content-types.afterSync')) {
            console.log(chalk.hex('#0EC168').bold('➡   Tests completed and successful. Continue to `npm run build`...\n\n\n'));
            setTimeout(() => { runBuild(); }, 2000);
        } else {
            console.error(chalk.hex('#FF7E4D').bold('⚠   Command completed, but incorrect output detected. Due to security reasons, `npm run build` was temporary blocked.'));
        }
    }
});