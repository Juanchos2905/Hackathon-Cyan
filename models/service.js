const { Schema, model } = require('mongoose')

const ServiceSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre del servicio es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La descripción del servicio es obligatorio'],
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    require: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
})
