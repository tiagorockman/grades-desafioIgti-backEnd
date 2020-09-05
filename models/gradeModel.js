export default(mongoose) => {
const gradeSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  });

  const gradeModel = mongoose.model("grades", gradeSchema);


return  gradeModel ;
};


