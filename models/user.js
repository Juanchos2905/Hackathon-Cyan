const { Schema, model } = require('mongoose')
const { DateTime } = require('luxon')

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  lastName: {
    type: String,
    required: [true, 'El apellido es obligatorio'],
  },
  typeId: {
    type: String,
    required: [true, 'El tipo de identificación es obligatorio'],
  },
  id: {
    type: String,
    required: [true, 'La identificación es obligatoria'],
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  img: {
    type: String,
  },
  address: {
    type: String,
    required: [true, 'La dirección es obligatoria'],
  },
  role: {
    type: String,
    required: [true, 'El rol es obligatorio'],
    default: 'CLIENT_USER',
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
})

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, google, ...user } = this.toObject()
  user.id = _id
  return user
}

module.exports = model('Uuser', UuserSchema)
