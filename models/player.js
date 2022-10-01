import mongoose from 'mongoose'

const Schema = mongoose.Schema

const notesSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Player"
  },
  notes: String,
  stats: String,
  goals: String,
}, {
  timestamps: true
})

const playerSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  },
  position: {
    type: String, 
    enum: ["no preference", "center", "power forward", "small forward", "point guard", "shooting guard"]
  },
  level: String,
  notes: [notesSchema]
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}