import mongoose from "mongoose";

const entrenadorSchema = new mongoose.Schema(
    {    
        nombre: 
        {
            type: String,
            require: true,
            trim: true
        },
        apellidos: 
        {
            type: String,
            require: true,
            trim: true,
            
        },
        telefono: 
        {
            type: String,
            require: true
        },
        medallas: 
        {
            type: String,
            require: true
        }
    },
    { collection: 'entrenadores'}
)

export default mongoose.model('Entrenadores.model', entrenadorSchema )