const { CarModel } = require('../infrastructure/database');

const CarRepository = {
    async create(data) {
        try {
            const model = new CarModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nota: data.nota,
            };
            const options = { new: true };
            const filter = { nome: data.nome };
            const result = await CarModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByPlaca(data) {
        try {
            const result = await CarModel.findOne({ placa: data.placa }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async deleteByPlaca(data) {
        try {
            const result = await CarModel.deleteOne({ placa: data.placa }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarRepository;