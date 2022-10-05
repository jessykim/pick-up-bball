import mongoose from 'mongoose'

const Schema = mongoose.Schema

const statSchema = new Schema({
  points: Number,
  rebounds: Number,
  assists: Number,
  blocks: Number,
  steals: Number,
  turnovers: Number,
  threepointers: Number,
  freethrows: Number
}, {
  timestamps: true
})

const goalSchema = new Schema({
  goal: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  position: {
    type: String, 
    enum: ["No preference", "Center", "Power forward", "Small forward", "Point guard", "Shooting guard"]
  },
  level: {
    type: String,
    enum: ["Amateur", "Competitive", "Elite"]
  },
  stats: [statSchema],
  goals: [goalSchema],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
