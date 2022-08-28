import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
mongoose.plugin(slug)


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 600 },
  img: { type: String, maxlength: 255 },
  slug: { type: String, slug: "name" },
  videoId: { type: String, maxlength: 255 },
  level: { type: String, maxlength: 255 },
  },
  { timestamps: true},
)

export default mongoose.model('Course', Course)