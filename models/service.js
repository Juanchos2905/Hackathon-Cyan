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
  status: {
    type: Boolean,
    default: true,
  },
})

ServiceSchema.methods.toJSON = function () {
  const { __v, _id, status, ...service } = this.toObject()
  service.id = _id

  const { _id: _uId, password, __v: __uV, ...user } = service.user
  user.id = _uId
  service.user = user

  return service
}

module.exports = model('Service', ServiceSchema)
