const { conectarDB } = require('../database/conexion.js')
const Nota = require('./model/Nota.js')
conectarDB();

exports.getNotasRepository = async () => {
    try {
        const notasEncontradas = await Nota.find()
        if(!notasEncontradas) {
            return []
        }
        return notasEncontradas
    } catch (error) {
        console.log('Error en getNotasRepository: ', error)
        throw error;
    }
}

exports.getNotaByIdRepository = async (id) => {
    try {
        const notaEncontrada = await Nota.findById(id).lean()
        if(!notaEncontrada) {
            return []
        }
        return [notaEncontrada]
    } catch (error) {
        console.log('Error en getNotaByIdRepository: ', error)
        throw error;
    }
}

exports.createNotaRepository = async (datos) => {
    try{
        const nuevaNota = new Nota(datos);
        return await nuevaNota.save();
    }catch(error){
        console.log("Error en createNotaRepository", error);
        throw error;
    }
}

exports.updateNotaRepository = async (id, datos) => {
    try {
        const notaActualizada = await Nota.findByIdAndUpdate(id, datos, { new: true })
        if(!notaActualizada) {
            return []
        }
        return notaActualizada
    } catch (error) {
        console.log("Error en updateNotaRepository: ", error)
        throw error;
    }
}

exports.deleteNotaRepository = async (id) => {
    try {
        const notaEncontrada = await Nota.findByIdAndDelete(id)
        if(!notaEncontrada) {
            return []
        }
        return notaEncontrada
    } catch (error) {
        console.log("Error en deleteNotaRepository: ", error)
        throw error;
    }
}
