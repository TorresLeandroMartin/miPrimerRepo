const autosImportados = require("./autitos")

const concesionaria = {
    buscarAuto : function(patente){
        let encontrado = this.autos.find(auto => auto.patente == patente)
        if (encontrado != null){
            return encontrado
        }else{
            return null
        }
    },
    venderAuto : function(patente){
        let encontrado = this.buscarAuto(patente)
            if (encontrado != null){
                encontrado.vendido = true;
                return encontrado
            }
            else {
                return null
            }
    },
    autosParaLaVenta : function(){
        let paraLaVenta = this.autos.filter(auto => {
            return auto.vendido == false
        })
        return paraLaVenta
    },
    autosNuevos : function(){
        let nuevosSinVender = this.autosParaLaVenta().filter(auto => {
            return auto.km < 100
        })
        return nuevosSinVender
    },
    listaDeVentas : function (){
        let autosVendidos = this.autos.filter(auto =>{
            if (auto){
                return auto.vendido == true
            }  
            return autosVendidos
        })

        let arrayPreciosVendido = autosVendidos.map(auto => {
            return auto.precio
        })
        return arrayPreciosVendido
    },
    totalDeVentas : function(){
        let total = this.listaDeVentas().reduce((acc, auto) => acc + auto, 0)
        return total
    },
    puedeComprar : function(auto, persona){
        if(auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas)){
            return true
        }
        else{
            return false
        }
    },
    autosQuePuedeComprar : function(persona){
        let vehiculo = this.autosParaLaVenta().filter(auto =>{
            return this.puedeComprar(auto, persona) 
        })
        return vehiculo
    },
    autos: autosImportados,
};


console.log("🚀 ~ file: concesionarioa.js ~ line 11 ~ concesionaria ", concesionaria.autosQuePuedeComprar(persona1))

