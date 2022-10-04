import mongoose from 'mongoose'

const Schema = mongoose.Schema

const startSchema = new Schema({
  hour: {
    type: Number,
    min: 1,
    max: 12,
    required: true
  },
  minutes: {
    type: Number,
    min: 0,
    max: 59,
    required: true
  },
  ampm: {
    type: String,
    enum: ['am', 'pm'],
    required: true
  }
}, {
  timestamps: true
})

const endSchema = new Schema({
  hour: {
    type: Number,
    min: 1,
    max: 12,
    required: true
  },
  minutes: {
    type: Number,
    min: 0,
    max: 59,
    required: true
  },
  ampm: {
    type: String,
    enum: ['am', 'pm'],
    required: true
  }
}, {
  timestamps: true
})

const runSchema = new Schema({
  date: String,
  starttime: [startSchema],
  endtime: [endSchema],
  location: String,
  host: String,
  note: String,
  profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
}, {
  timestamps: true
})

const Run = mongoose.model('Run', runSchema)

export {
  Run
}