import mongoose from 'mongoose'

const Schema = mongoose.Schema

const paySchema = new Schema({
  player: {
    type: Schema.Types.ObjectId, 
    ref: "Player"
  },
  received: Boolean,
  paid: Boolean,
}, {
  timestamps: true,
})

const User = mongoose.model('Pay', paySchema)

export {
  Pay
} 