const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
let jobs = JSON.parse(fs.readFileSync(`db/jobs.json`)) || []

exports.getJobs = (req, res) => {
  res.send(jobs)
}

exports.createJob = (req, res) => {
  let job = {
    id: uuidv4(),
    ...req.body
  }
  jobs.unshift(job)
  fs.writeFileSync(`db/jobs.json`, JSON.stringify(jobs, null, 2))
  res.json(jobs)
}

// use array.find() to find single record
exports.getSingleJob =  (req, res) => {
  const { id } = req.params
  const foundJob = jobs.find(job => job.id === id)
  res.json(foundJob)
}

// use array.filter() to delete record
exports.deleteSingleJob = (req, res) => {
  const { id } = req.params
  jobs = jobs.filter(job => job.id !== id)
  fs.writeFileSync(`db/jobs.json`, JSON.stringify(jobs, null, 2))
  res.json(jobs)
}

// use array.find() to update single record
exports.updateSingleJob = (req, res) => {
  const { id } = req.params
  const { title, salary, details } = req.body
  const job = jobs.find(job => job.id === id)

  if (title) job.title = title
  if (salary) job.salary = salary
  if (details) job.details = details

  console.log(job)

  fs.writeFileSync(`db/jobs.json`, JSON.stringify(jobs, null, 2))
  res.json(jobs)
}