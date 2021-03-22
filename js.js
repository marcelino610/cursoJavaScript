alert('¿Siempre soñaste con fundar un partido político y no sabés qué nombre ponerle?\nNo te preocupes, aquí encontraremos el nombre ideal');
alert('Sólo tenés que darnos dos datos tuyos\nDel resto nos encargamos nosotros ;)');

let nombre = prompt('Ingresá tu nombre');
let apellido = prompt('Ingresá tu apellido');

alert('Esto no está fácil, sólo un momento más')

let nombreDeletreado = nombre.toLocaleLowerCase().split('');
let apellidoDeletreado = apellido.toLocaleLowerCase().split('');
let partidoPolítico = '';

if (parseInt(nombreDeletreado[0]) || parseInt(apellidoDeletreado[0])) {
    alert('Lamentamos no poder ayudarlo con su caso\nDe todas formas, contás con nuestros votos');
    throw new Error('Debe ingresar letras');
}

switch (nombreDeletreado[0]) {
    case 'a':
        partidoPolítico += 'Partido Nudista';
        break;
    case 'b':
        partidoPolítico += 'Frente Popular';
        break;
    case 'c':
        partidoPolítico += 'Coalición Alcohólica';
        break;
    case 'd':
        partidoPolítico += 'Unión Golfa';
        break;
    case 'e':
        partidoPolítico += 'Partido Yonqui';
        break;
    case 'f':
        partidoPolítico += 'Alianza Ninja';
        break;
    case 'g':
        partidoPolítico += 'Alianza Ninfómana';
        break;
    case 'h':
        partidoPolítico += 'Frente Tuitero';
        break;
    case 'i':
        partidoPolítico += 'Partido Dislécixo';
        break;
    case 'j':
        partidoPolítico += 'Confederación Satánica';
        break;
    case 'k':
        partidoPolítico += 'Frente Pacifista';
        break;
    case 'l':
        partidoPolítico += 'Movimiento Cíborg';
        break;
    case 'm':
        partidoPolítico += 'Unión Masoquista';
        break;
    case 'n':
        partidoPolítico += 'Unión Choni';
        break;
    case 'o':
        partidoPolítico += 'Partido Ultrarreligioso';
        break;
    case 'p':
        partidoPolítico += 'Alianza Alienígena';
        break;
    case 'q':
        partidoPolítico += 'Movimiento Friki';
        break;
    case 'r':
        partidoPolítico += 'Frente Hipster';
        break;
    case 's':
        partidoPolítico += 'Unión Viciosa';
        break;
    case 't':
        partidoPolítico += 'Coalición Buenorra';
        break;
    case 'u':
        partidoPolítico += 'Coalición Hippy';
        break;
    case 'v':
        partidoPolítico += 'Movimiento Aguafiestas';
        break;
    case 'w':
        partidoPolítico += 'Frente Histérico';
        break;
    case 'x':
        partidoPolítico += 'Movimiento Vegano';
        break;
    case 'y':
        partidoPolítico += 'Partido Suicida';
        break;
    case 'z':
        partidoPolítico += 'Partido Hermafrodita';
        break;
    default:
        partidoPolítico += 'Coalición Narniana';
        break;
};

alert('¡Ya lo tenemos!');

switch (apellidoDeletreado[0]) {
    case 'a':
        partidoPolítico += ' por los Recortes';
        break;
    case 'b':
        partidoPolítico += ' Corrupto/a';
        break;
    case 'c':
        partidoPolítico += ' contra la Depilación';
        break;
    case 'd':
        partidoPolítico += ' del Espacio Exterior';
        break;
    case 'e':
        partidoPolítico += ' Anti Reggaetón';
        break;
    case 'f':
        partidoPolítico += ' Erótico-Festivo/a';
        break;
    case 'g':
        partidoPolítico += ' de Invernalia';
        break;
    case 'h':
        partidoPolítico += ' de Hogwarts';
        break;
    case 'i':
        partidoPolítico += ' por la Cerveza Gratis';
        break;
    case 'j':
        partidoPolítico += ' por el Topless';
        break;
    case 'k':
        partidoPolítico += ' por la Austeridad';
        break;
    case 'l':
        partidoPolítico += ' del Inframundo';
        break;
    case 'm':
        partidoPolítico += ' Exhibicionista';
        break;
    case 'n':
        partidoPolítico += ' Perroflauta';
        break;
    case 'o':
        partidoPolítico += ' Anti Siestas';
        break;
    case 'p':
        partidoPolítico += ' del Vaticano';
        break;
    case 'q':
        partidoPolítico += ' Contra el Alcohol';
        break;
    case 'r':
        partidoPolítico += ' por la Castidad';
        break;
    case 's':
        partidoPolítico += ' de Mordor';
        break;
    case 't':
        partidoPolítico += ' Juerguista';
        break;
    case 'u':
        partidoPolítico += ' de Chernóbil';
        break;
    case 'v':
        partidoPolítico += ' del Mal';
        break;
    case 'w':
        partidoPolítico += ' Demócrata';
        break;
    case 'x':
        partidoPolítico += ' Imaginario/a';
        break;
    case 'y':
        partidoPolítico += ' Dialogante';
        break;
    case 'z':
        partidoPolítico += ' del Futuro';
        break;
    default:
        partidoPolítico += ' de Springfield';
        break;
};
alert(partidoPolítico);