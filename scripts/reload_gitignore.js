console.log('Check and compare .gitignore files...');
const fs = require('fs');
const file1Path = './strapi_backend/.gitignore';
const file2Path = './.gitignore';
const file1Content = fs.readFileSync(file1Path, 'utf-8').split('\n').map(el => el.replace(/\r/g, ''));
const file2Content = fs.readFileSync(file2Path, 'utf-8').split('\n').map(el => el.replace(/\r/g, ''));
const notToRemove = file1Content.filter(line => !file2Content.includes(line));
console.log('Complete. Content will be balanced...');
fs.writeFileSync(file1Path, notToRemove.join('\n'));
fs.stat(file1Path, (err, stats) => {
    if(err) {
        console.error(err);
        return;
    }
    if(stats.size === 0) {
        fs.unlink(file1Path, (unlinkErr) => {
            if(unlinkErr) {
                console.error(unlinkErr);
                return;
            }
        });
        console.log('Removed one .gitignore-file.');
        finished();
    } else {
        finished();
    }
});

async function finished() {
    console.log('Finished!');
}