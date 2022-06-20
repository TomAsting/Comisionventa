window.alert("Bienvenidos Vendedores");

let nombre = prompt("Ingresar nombre vendedor");
let ventaTotalLocal = prompt("ingresar venta total");
let ventaVendedor = prompt("Ingresar venta total vendedor");


function algoritmo() {
    if (ventaTotalLocal >= 6000000) {
        comision = ventaVendedor * 0.02;
    } else if (ventaTotalLocal >= 5500000) {
        comision = ventaVendedor * 0.018;
    } else {
        comision = ventaVendedor * 0.01;
    }


    alert(`Hola  ${nombre} ,tú comision es : ${comision}`);
}
algoritmo()

