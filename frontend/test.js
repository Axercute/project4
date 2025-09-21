import mongoose from "mongoose";

const uri = "mongodb+srv://Axercute:98143839@student-cluster.ymb2nw9.mongodb.net/project_3";

const serviceSchema = new mongoose.Schema({
  english_name: { type: String, required: true },
  chinese_name: { type: String },
  starting_price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true }
});

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

async function test() {
  await mongoose.connect(uri);
  const count = await Service.countDocuments();
  console.log("Documents in services collection:", count);

  const docs = await Service.find().lean();
  console.log(docs);
  await mongoose.disconnect();
}

test();
