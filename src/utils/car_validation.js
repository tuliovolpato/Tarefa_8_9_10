const create = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
    km: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    km: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const get = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    placa: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};