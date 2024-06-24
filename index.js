const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");

dotenv.config(); // Load config


async function main() {
  await connectDB();

  app.use(express.json());
  app.use(cors({
      origin: "http://localhost:5177",
    }));
  
  const productRoutes = require("./routes/product.route");
  app.use("/api/product", productRoutes);
  
  app.listen(PORT, function (err) {
      if (err) console.log(err);
      console.log("Server listening on PORT", PORT);
  });
}

main();
 