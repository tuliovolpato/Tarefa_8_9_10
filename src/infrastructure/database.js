const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.n74vhup.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    placa: {
        type: String,
        unique: true,
    },
    marca: String,
    nome: String,
    ano: Number,
    km: Number
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};
