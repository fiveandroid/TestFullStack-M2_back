import EntrenadoresModel from "../models/Entrenadores.model.js"

export const getAllEntrenadores = async (req, res) => {

        try {

            const entrenadores = await EntrenadoresModel.find()

            res.status(200).json( entrenadores )
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getEntrenador = async (req, res) => {

    try {

        const id = req.params.id
        await EntrenadoresModel.findById({ _id:id}).then( (entrenador)=>{
            res.status(200).json( entrenador )
        })

        

} catch (error) {
    res.status(500)
    res.send(error.message)
}
}

export const createEntrenador = async (req, res) => {

    try {

        await EntrenadoresModel.create( req.body )

        res.status(200).json( { "message" : "Documento creado correctamente"} )

} catch (error) {
    res.status(500)
    res.send(error.message)
}
}

export const updateEntrenador = async (req, res) => {

    try {
        const id = req.params.id
        await EntrenadoresModel.updateOne({_id:id}, req.body ).then( res=>{
            console.log(res)
        })

        res.status(200).json( { "message" : "Documento actualizado correctamente!!"} )

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deleteEntrenador = async (req, res) => {

    try {
        const id = req.params.id
        await EntrenadoresModel.deleteOne({_id:id} ).then( res=>{
            console.log(res)
        })

        res.status(200).json( { "message" : "Documento eliminado correctamente!!"} )

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
