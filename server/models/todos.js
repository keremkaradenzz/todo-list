import mongoose from "mongoose";

const todosSchema = mongoose.Schema({
    content:String,
    isComplete:Boolean,
    createdAt:{
        type:Date,
        default: new Date(),
    }
});

const Todos = mongoose.model('Todos', todosSchema);

export default Todos;