import { Schema, model} from "mongoose";

const schema = new Schema({
    title : {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
})

export default model('Note', schema)