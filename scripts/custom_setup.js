const chalk = require('chalk');
const readline = require('readline');

const color = '#EA0B5F';
const text = '⚠  ---  WARNING  ---  ⚠';
const terminalWidth = process.stdout.columns;
const leftPaddingText = Math.floor((40 - text.length) / 2);
const leftPaddingBox = Math.floor((terminalWidth - 42) / 2);
const text_ = `
${' '.repeat(leftPaddingBox)}╭────────────────────────────────────────╮
${' '.repeat(leftPaddingBox)}│                                        │
${' '.repeat(leftPaddingBox)}│${' '.repeat(leftPaddingText)}${text}${' '.repeat(leftPaddingText + 1)}│
${' '.repeat(leftPaddingBox)}│                                        │
${' '.repeat(leftPaddingBox)}╰────────────────────────────────────────╯
`;
const formattedText = chalk.hex(color).bold(text_);
console.log(formattedText);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.hex('#EA0B5F').bold(`The whole 'strapi_backend' directory will be deleted and a new backend will be generated! Proceed, if this is a new repository or if you want to delete your current backend data.
`));

rl.question(`${chalk.hex('#15C056').bold('? ')}${chalk.white.bold('Want to proceed?')} ${chalk.cyan('(n/y)  ')}${chalk.cyan()}`, (answer) => {
    if (answer === 'y' || answer === 'Y') {
        const spawn = require('cross-spawn');
        const command = 'npm';
        const args = [
            'i',
            '&&',
            'concurrently',
            '-n',
            'NUXT_FRONTEND_DIR,MAIN_DIR',
            '-c',
            '#39E9AC,#1FD7E7',
            '"npm run i:frontend"',
            '"npm i"',
            '&&',
            'concurrently',
            '-n',
            'CLEARING_STRAPI_BACKEND_DIR',
            '-c',
            '#E50935',
            '"node scripts/clear_strapi_dir.js"',
            '&&',
            'node',
            'scripts/strapi_install_title.js',
            '&&',
            'npm run create_backend:custom',
            '&&',
            'concurrently',
            '-n',
            'ADDING_SERVER_FILE',
            '-c',
            '#0CBB5B',
            '"node scripts/generate_server_file.js"',
            '&&',
            'concurrently',
            '-n',
            'COMPARING_GITIGNORE_FILES',
            '-c',
            '#77AAC8',
            '"node scripts/reload_gitignore.js"',
            '&&',
            'node',
            'scripts/finished_title.js'
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
    } else {
        console.log(chalk.hex('#18EAC4').bold('❌  Process cancelled.'));
    }
    rl.close();
});

function colourReplacement() {
    console.log(chalk.bold.hex('#EA1848')('⚠   Error. Error. Switching to compatibility-mode ...'));
    const spawn = require('cross-spawn');
    const command = 'npm';
    const args = [
        'i',
        '&&',
        'concurrently',
        '-n',
        'NUXT_FRONTEND_DIR,MAIN_DIR',
        '-c',
        'green,cyan',
        '"npm run i:frontend"',
        '"npm i"',
        '&&',
        'concurrently',
        '-n',
        'CLEARING_STRAPI_BACKEND_DIR',
        '-c',
        'red',
        '"node scripts/clear_strapi_dir.js"',
        '&&',
        'node',
        'scripts/strapi_install_title.js',
        '&&',
        'npm run create_backend:custom',
        '&&',
        'concurrently',
        '-n',
        'ADDING_SERVER_FILE',
        '-c',
        'green',
        '"node scripts/generate_server_file.js"',
        '&&',
        'concurrently',
        '-n',
        'COMPARING_GITIGNORE_FILES',
        '-c',
        'white',
        '"node scripts/reload_gitignore.js"',
        '&&',
        'node',
        'scripts/finished_title.js'
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