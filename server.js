const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const jobsRoute = require('./routes/jobs')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/jobs', jobsRoute)

app.listen(port, () => console.log(`Server started on port ${port}`))