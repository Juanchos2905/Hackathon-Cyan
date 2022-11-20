const { Schema, model } = require('mongoose')

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La descripción del producto es obligatoria'],
  },
  price: {
    type: Number,
    required: [true, 'El precio del producto es obligatorio'],
  },
  status: {
    type: Boolean,
    default: true,
  },
  serviceId: {
    type: ObjectId,
    ref: 'Service',
    required: true,
  },
})

ProductSchema.methods.toJSON = function () {
  const { __v, _id, status, ...product } = this.toObject()
  product.id = _id

  const { _id: _sId, __v: __sV, ...service } = product.service
  service.id = _sId
  product.service = service

  return product
}

module.exports = model('Product', ProductSchema)
