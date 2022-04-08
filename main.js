var j = { //datos del juego

    partes: 0,
    partesporclic: 1,
    dinero: 0,
    pps: 0,
}

var c = { // cantidadd
    moviles: 0,
    pdf: 0,
    normas:0,
    parking:0,

    alumnos:0,
    sigad: 0,
    quejas: 0,
    ordenador:0,

    comprar:0,
}

var cos = { // costes
    ppc:10,
    movil:200,
    normas: 400,
    parking:700,

    alumnos:1000,
    sigad: 5000,
    quejas: 10000,
    ordenador:15000,


    comprar:100,
}

formato = new Intl.NumberFormat('es-ES')

var bucle = window.setInterval(function() {

  mostrar()
  j.partes += j.pps
  update("partes", formato.format(j.partes.toFixed(0)) + " Partes. Actualmente " + Math.round(j.pps*100/0.5) + " PS")
},10)

var input = document.getElementById("parte")

// funciones del juego
function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function parte(){
    j.partes += j.partesporclic;
    update("myLog", "Has puesto un parte.")
    texto()
    actualizacion()
}


document.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        return false;
    }
    
});

function actualizacion(){
    update("partes", formato.format(j.partes.toFixed(0)) + " Partes. Actualmente " + Math.round(j.pps*100/0.5) + " PS")
    update("dinero", formato.format(j.dinero.toFixed(2)) + " Euros")
    update("parte", "Dar "+formato.format(j.partesporclic.toFixed(0)) + " Partes")

    // Partes por click

    update("subir", "+ 1 P/C | Subir un PDF. Coste: "+ cos.ppc + " Partes. " + "| Tienes " + c.pdf +" PDFs")
    update("confiscar", "+ 3 P/C Confisca un móvil. Coste: " + cos.movil + " Partes | Tienes " + c.moviles + " Móviles")
    update("norma", "+10 P/C | Establece una nueva norma. Coste: " + cos.normas + " Partes | Has introducido " + c.normas + " Normas")
    update("parking","+20 P/C | Pon multas por usar el parking. | Coste: "+ cos.parking +"| Has puesto "+c.parking+" multas")


    // Partes por Segundo
    update ("alumno", "+ 5 P/S | Acoger nuevos alumnos | Coste: " + cos.alumnos + " Partes | Has acogido " + c.alumnos + " Alumnos")
    update("sigad", "+ 10 P/S | Automatizar el SIGAD | Coste: " + cos.sigad + " Partes | Has automatizado " + c.sigad + " SIGADs" )
    update("quejas", "+ 20 P/S | Abrir un buzón de quejas | Coste: " + cos.quejas + " Partes | Has abierto " + c.quejas + " buzones" )
    update("ordenador","+30 P/S | Mover el ratón automáticamente a los alumnos | Coste: "+cos.ordenador+" | Has movido "+c.ordenador+" ratones")

    // Euros

    update ("comprar", "+1 E/S | Comprar una mina de bitcoins por "+cos.comprar + " | Tienes " + c.comprar + " minas")


}
function mostrar(){
    if (j.partes >= 10){
        document.getElementById("subir").style.display = 'inline'
        setTimeout(function(){
            document.getElementById("subir").style.opacity = 1
        },100)
    }
    if (j.partes >= 100){
        document.getElementById("confiscar").style.display = 'inline'
        setTimeout(function(){
            document.getElementById("confiscar").style.opacity = 1
        },100)
    }
    if (j.partes >= 200){
        document.getElementById("norma").style.display = 'inline'
        setTimeout(function(){
            document.getElementById("norma").style.opacity = 1
        },100)
    }
    if (j.partes >= 600){
        document.getElementById("vender").style.display = 'inline'
        document.getElementById("parking").style.display ='inline'
        fade(parking)
        setTimeout(function(){
            document.getElementById("vender").style.opacity = 1
        },100)
    }

    if (j.partes >= 1000){
        document.getElementById("alumno").style.display = 'inline'
        fade("alumno")
    }

    if (j.partes >= 4000){
        document.getElementById("sigad").style.display = 'inline'
        fade("sigad")
    }


    if (j.partes >= 15000) {
        document.getElementById("quejas").style.display = 'inline'
        setTimeout(function(){
            document.getElementById("quejas").style.opacity = 1
        },100)
    }

    if (j.euros >= 50){
        document.getElementById("comprar".style.display = 'inline')
        fade("comprar")
    }
}

function fade(id){
    setTimeout(function(){
        document.getElementById(id).style.opacity = 1
    },100)
}


function texto(){
    document.getElementById("myLog").style.opacity=1
    setTimeout(
        function(){
            document.getElementById("myLog").style.opacity=0
        },6000)
}
function subir(){
    if (j.partes > cos.ppc){
    j.partes -= cos.ppc
    j.partesporclic += 1
    cos.ppc *= 2
    cos.ppc = cos.ppc.toFixed(0)
    c.pdf += 1
    actualizacion()
    } else{
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }
}

function vender(){
    if (j.partes >= 1000) {
        j.partes -= 1000
        j.dinero += 1
        actualizacion()
        document.getElementById("dinero").style.display = 'table'
        document.getElementById("myLog").style.top = '120px'
        update("myLog", "Has vendido 200 partes.")
        texto()
    } else {
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }
}

const alumnosdeclase = ["Victor","Adnane","Lucas","Badre","Raúl","Alejandro","Jorge","Iván"]

function confiscar(){
    if (j.partes >= cos.movil){
        j.partes -= cos.movil
        j.partesporclic += 3
        cos.movil *=1.4
        cos.movil = Math.trunc(cos.movil)
        c.moviles += 1 
        actualizacion()
        update("myLog","Has confiscado el móvil de "+ alumnosdeclase[Math.floor(Math.random()*alumnosdeclase.length)])
        texto()
    }
            else {
                update("myLog", "ERROR: No tienes suficientes partes.")
                texto()
            }
        }
const normas = ["Ahora está prohibido ir al baño",
"Prohibido tener emergencias",
"Prohibido tocar el ordenador",
"Prohibido sentarse",
"Prohibido respirar más de la cuenta",
"Prohibido comunicarse.",
"Prohibido usar papel y boli",
"Prohibido subir las escaleras",
"Prohibido pasar a segundo.",
"Prohibido graduarse",
"Prohibido prohibir", 
"Prohibido que Jorge hable",
"Prohibido hacer un juego llamado -Itaca Clicker-",
"Prohibido usar Stack Overflow",
"Prohibido leer cosas que no sean de Oracle",
"Prohibida la telepatía",
"Prohibido el cookie clicker, este juego es mejor",
"Prohibido informarse",
"Prohibido mirar",
"Prohibido prohibir prohibir",
"Prohibido el recreo",
"Prohibido el Zaragoza",
"Prohibido bajar las escaleras",
"Prohibido usar el ascensor"]


function norma(){
    if (j.partes >= cos.normas){
        j.partes -= cos.normas
        j.partesporclic += 10
        cos.normas *=1.4
        cos.normas = Math.trunc(cos.normas)
        c.normas += 1 
        update ("myLog", normas[Math.floor(Math.random() * normas.length)])
        texto()
        actualizacion()
    }
            else {
                update("myLog", "ERROR: No tienes suficientes partes.")
                texto()
            }
        }

const nacionalidad = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]

function acoger(){
    if (j.partes > cos.alumnos){
        j.partes -= cos.alumnos
        j.pps += 0.03
        cos.alumnos *= 1.1
        c.alumnos +=1
        cos.alumnos = Math.trunc(cos.alumnos)
        actualizacion()
        update("myLog", "Has acogido a un alumno de "+nacionalidad[Math.floor(Math.random()*nacionalidad.length)] )
        texto()
    }else {
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }
}

function sigad(){
    if (j.partes >= cos.sigad){
        j.partes -= cos.sigad
        j.pps += 0.05
        c.sigad += 1
        cos.sigad *= 1.05
        cos.sigad = Math.trunc(cos.sigad)
        c.sigad = Math.trunc(c.sigad)
        update("myLog", "Has automatizado un SIGAD")
        texto()
        actualizacion()
    } else {
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }

}

const quejass = [
    "Las normas son demasiado prohibitivas",
    "Dame mi móvil de vuelta por favor",
    "¿Acaso esto es legal???",
    "Por favor suelta a mi esposa, no volveré a hacerlo",
    "Mi esposa está en la UCI déjame usar el móvil",
    "Estoy en bancarrota y me ha llegado una multa",
    "ko ptos profes d mierda :P",
    "La clase huele mal, ¿puedes echar al mendigo ese?",
    "¿Cómo es posible que la SIGAD sea automática?",
    "Soy el director no me puedes poner partes...",
    "Cómo narices tienes tanto parte puesto???",
    "papi sacame de cuba por fav-",
    "Como delegado no estoy a favor de los partes",
    "Me han puesto parte por no hacer el programa del Zaragoza",
    "He abierto stack overflow y de repente tenia 503 partes",
]


function quejas(){
    if (j.partes >= cos.quejas){
        j.partes -= cos.quejas
        j.pps += 0.1
        c.quejas += 1
        cos.quejas *= 1.2
        cos.quejas = Math.trunc(cos.quejas)
        update("myLog", "QUEJA: "+quejas    s[Math.floor(Math.round() * quejas.length)])
        texto()
        actualizacion()
    } else {
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }
} 


function parking(){
    if (j.partes >= cos.parking){
        j.partes -= cos.parking
        j.partesporclic += 20
        c.multas +=1
        cos.parking *= 1.25
        cos.quejas = Math.trunc(cos.parking)
        update("myLog", "Has puesto una multa.")
        texto()
        actualizacion()
    } else {
        update ("myLog", "ERROR: No tienes suficientes partes")
        texto()
    }
}

function ordenador(){
    if (j.partes >= cos.ordenador){
    j.partes -= cos.ordenador
    j.pps += 0.2
    c.ordenador += 1
    cos.ordenador *= 1.3
    cos.ordenador = Math.trunc(cos.quejas)
    update("myLog", "Has movido un ratón.")
    texto()
    actualizacion()
 }else {
        update ("myLog", "ERROR: No tienes suficientes partes")
        texto()
    }
}

function comprar(){
    if (j.euros >= cos.comprar){
        j.euros -= cos.comprar
        j.euros = j.euros.toFixed(2)
        c.comprar += 1
        cos.comprar *= 1.5
        cos.comprar = cos.comprar.toFixed(2)
        update("myLog", "Has comprado un ordenador.")
        texto()
        actualizacion()
    } else {
        update ("myLog", "ERROR: No tienes suficiente dinero")
        texto()
    }
}
