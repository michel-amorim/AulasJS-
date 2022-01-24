const { cpfs, ips } = require("./base");

// ^ -> começa com
// $ -> termina com
// CPF

console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g)); // Solução para CPFs
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
// Solução para os CPFs mais simples
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));
// Solução ainda mais melhorada

// IPs

// range 250 - 255 25[0-5]
// range 200 - 249 2[0-4][0-9]
// range 100 - 199 1\d{2}
// range 10 - 99 [1-9]\d
// range 0  - 9 \d

const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(ips.match(ipRegExp));
