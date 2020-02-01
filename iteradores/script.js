var ganados = 0;
var perdidos = 0;
let volado = () => {
    var random = Math.random() * 100;
    if (random >= 50) {
        return 1;
    } else {
        return 0;
    }
}

for (let i = 1; i <= 365; i++) {
    let volados = volado();
    if (volados === 1) {
        ganados++;
    } else {
        perdidos++;
    }
}
console.log(ganados);
console.log(perdidos);
console.log(ganados + perdidos);

// while y do while