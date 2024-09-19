//1
let altura = Number.parseInt(prompt("Introduce tu altura: "))
let peso = Number.parseInt(prompt("Introduce tu peso: "))

//2
console.log(altura + peso)

//3
let edad = Number.parseInt(prompt("Introduce tu edad: "))

//4
let esMayorEdad = edad >= 18 ? true : false

//5
//forma 1
let res = 0
let i = 50
for (let c = 50; c < 5; c++) {
    res+=i
    i+=2
}

//forma 2
i = 50
let c = 0
res = 0
while (c<5) {
    res+=i
    i+=2
    c++
}

//forma 3
i = 50
c = 0
do {
    res+=i
    i+=2
    c++
}
while (c<5)