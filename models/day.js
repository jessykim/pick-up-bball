import mongoose from 'mongoose'

const Schema = mongoose.Schema

const daySchema = new Schema({
  day: String,
  time: String,
  courta: {
    type: Schema.Types.ObjectId,
    ref: "Player"
  },
  courtb: {type: Schema.Types.ObjectId,
    ref: "Player"}
}, {
  timestamps: true
})

const Day = mongoose.model('Day', daySchema)

export {
  Day
}