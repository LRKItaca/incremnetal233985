var j = { //datos del juego

    partes: 0,
    partesporclic: 1,
    dinero: 0,
    pps: 0,
}

var c = { // cantidadd
    moviles: 0,
    pdf: 0,
    sigad: 0,
    quejas: 0,
}

var cos = { // costes
    ppc:9.9,
    movil:200,
    sigad: 5000,
    quejas: 15000,
}

formato = new Intl.NumberFormat('es-ES')

var bucle = window.setInterval(function() {

  actualizacion()
  mostrar()
  j.partes += j.pps
},10)


// funciones del juego
function update(id, content) {
    document.getElementById(id).innerHTML = content;
}
function parte(){
    j.partes += j.partesporclic;
    update("myLog", "Has puesto un parte.")
    document.getElementById("myLog").style.opacity=1
    texto()
}


function texto(){
    document.getElementById("myLog").style.opacity=1
    setTimeout(
        function(){
            document.getElementById("myLog").style.opacity=0
        },3000)
}
function subir(){
    if (j.partes > cos.ppc){
    j.partes -= cos.ppc
    j.partesporclic += 1
    cos.ppc *= 2
    cos.ppc = cos.ppc.toFixed(0)
    c.pdf += 1
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

function actualizacion(){
    update("partes", formato.format(j.partes.toFixed(0)) + " Partes. Actualmente " + Math.round(j.pps*100/0.5) + " PS")
    update("dinero", formato.format(j.dinero.toFixed(2)) + " Euros")
    update("parte", "Dar "+formato.format(j.partesporclic.toFixed(0)) + " Partes")
    update("subir", "+ 1 P/C | Subir un PDF. Coste: "+ cos.ppc + " Partes. " + "| Tienes: " + c.pdf +" PDFs")
    update("confiscar", "+ 3 P/C Confisca un móvil. Coste: " + cos.movil + " Partes | Tienes: " + c.moviles + " Móviles")
    update("sigad", "+ 10 P/S | Automatizar el SIGAD | Coste: " + cos.sigad + " Partes | Has automatizado " + c.sigad + " SIGADs" )
    update("quejas", "+ 20 P/S | Abrir un buzón de quejas | Coste: " + cos.quejas + " Partes | Has abierto " + c.quejas + " buzones" )
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
            document.getElementById("subir").style.opacity = 1
        },100)
    }
    if (j.partes >= 600){
        document.getElementById("vender").style.display = 'inline'
        setTimeout(function(){
            document.getElementById("vender").style.opacity = 1
        },100)
    }
    if (j.partes >= 2000){
        document.getElementById("sigad").style.display = 'inline'
        setTimeout(function(){
            document.getElementById("sigad").style.opacity = 1
        },100)
    }
    if (j.partes >= 15000) {
        document.getElementById(quejas).style.display = 'inline'
        setTimeout(function(){
            document.getElementById("quejas").style.opacity = 1
        },100)
    }

    
    }


function confiscar(){
    if (j.partes >= cos.movil){
        j.partes -= cos.movil
        j.partesporclic += 3
        cos.movil *=2.4
        cos.movil = Math.trunc(cos.movil)
        c.moviles += 1 
    }
            else {
                update("myLog", "ERROR: No tienes suficientes partes.")
                texto()
            }
        }

function sigad(){
    if (j.partes >= cos.sigad){
        j.partes -= cos.sigad
        j.pps += 0.05
        c.sigad += 1
        cos.sigad *= 1.1
        cos.sigad = Math.trunc(cos.sigad)
        c.sigad = Math.trunc(c.sigad)
        update("myLog", "Has automatizado un SIGAD")
        texto()
    } else {
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }

}
function quejas(){
    if (j.partes >= cos.quejas){
        j.partes -= cos.quejas
        j.pps += 0.1
        c.quejas += 1
        cos.quejas *= 1.2
        cos.quejas = Math.trunc(cos.quejas)
        c.sigad = Math.trunc(c.quejas)
        update("myLog", "Has abierto un buzón de quejas.")
        texto()
    } else {
        update("myLog", "ERROR: No tienes suficientes partes.")
        texto()
    }

}