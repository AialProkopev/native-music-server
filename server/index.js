require("dotenv").config()
const express = require("express")
const connection = require("./db")
const cors = require("cors")
const songRoutes = require("./routes/songs.route")
const cookieParser = require("cookie-parser")
const router = require("./routes/index")
const errorMiddleware = require("./middleware/error.middleware")

const app = express()
const port = process.env.PORT || 8080

//database connection
connection()

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use("/api", router)
app.use("/api/songs", songRoutes)

//Error middleware
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`)
})
