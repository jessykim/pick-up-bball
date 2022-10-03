import mongoose from 'mongoose'

const Schema = mongoose.Schema

const noteSchema = new Schema({
  notes: String,
  stats: String,
  goals: String,
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
  notes: [noteSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
