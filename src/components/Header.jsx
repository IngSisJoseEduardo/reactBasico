import  React  from 'react';
function Header() {

    const edad = 12;
    let mensaje;
    if(edad >= 18) {
        mensaje = 'Eres mayor de edad';
    } else {
        mensaje = ' no eres mayor de edad';
    }
    return(
        <h1 id="encabezado" className="encabezado">{mensaje}</h1>
    )
}


export default Header;