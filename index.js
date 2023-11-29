require('dotenv').config()
const app = require('express')()

const workoutRoutes = require('./routes/workouts.js')

//middleware
app.use((req, res, next) => {
  console.log(req.path, req. method)
  next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})