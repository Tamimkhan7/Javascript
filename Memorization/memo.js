function sqare(num) {
    return num * num;
}
function memosqar() {
    let cache = {};//memorization ta ami cache a korbo basically 
    return function optimizedsqr(num) {
        if (num in cache) {
            console.log(cache);
            console.log(num);
            return cache[num];
        } else {
            const result = sqare(num);
            cache[num] = result;
            return result;

        }
    };
}
const memores = memosqar();
console.log(memores(5));