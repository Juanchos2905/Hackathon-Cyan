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
    required: true,
  },
})

ProductSchema.methods.toJSON = function () {
  const { __v, _id, status, createdAt, modifiedAt, ...product } =
    this.toObject()
  product.id = _id

  const { _id: _uId, password, __v: __uV, ...user } = product.user
  user.id = _uId
  product.user = user

  return product
}

module.exports = model('Product', ProductSchema)
