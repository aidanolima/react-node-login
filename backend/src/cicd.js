const { execSync } = require('child_process');
console.log('Build me up!!!!')

console.log(
    'Resultado]',
    execSync('dir && cd ../ && dir').toString()
);