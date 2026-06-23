const notasRepository = require('../repositories/notasRepository.js')

exports.getNotasService = async () => {
    try {
        const notas = await notasRepository.getNotasRepository()
        return notas
    } catch (error) {
        console.log('Error en getNotasService: ', error)
    }
}

exports.getNotaByIdService = async (id) => {
    try {
        const nota = await notasRepository.getNotaByIdRepository(id)
        return nota
    } catch (error) {
        console.log('Error en getNotasService: ', error)
    }
}

exports.createNotaService = async (datos) => {
    try{
        return await notasRepository.createNotaRepository(datos);
    }catch(error){
        console.log("Error en createNotaService", error);
        throw error;
    }
}

exports.updateNotaService = async (id, datos) => {
    try {
        return await notasRepository.updateNotaRepository(id, datos)
    } catch (error) {
        console.log("Error en updateNotaService: ", error)
    }
}

exports.deleteNotaService = async (id) => {
    try {
        return await notasRepository.deleteNotaRepository(id)
    } catch (error) {
        console.log("Error en deleteNotaService: ", error)
    }
}
