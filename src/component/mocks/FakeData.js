const products = [
    { id: '01', name: 'Juan', lastname: 'Carlos' },
    { id: '02', name: 'Cacerola', lastname: 'Cacerola 20cm Aqua Essen' },
    { id: '03', name: 'Cacerola', lastname: 'Cacerola 28cm' },
];
//generacion de promesa
export const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    } else { reject("Problemas tecnicos"); }
});