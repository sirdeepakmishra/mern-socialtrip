const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB Atlas")
});


app.use("/images", express.static(path.join(__dirname, "public/images")));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, "public/images");
    cb(null, "public/images/post");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File Uploaded Successfully.");
  } catch (err) { console.log(err) }
})
// const upload = multer({ storage });
// const uploadFile = ((upload) => {
//   try {
//     app.post("/api/upload", upload.single("file"), (req, res));
//     return res.status(200).json("File Uploaded Successfully.");
//   } catch (err) { console.log(err) }
// });

// uploadFile();


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(process.env.PORT || 8800, () => {
  console.log("Listining to the post 8800 ! ");
});
