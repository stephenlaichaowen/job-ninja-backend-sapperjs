const express = require('express')
const router = express.Router()
const jobsControllers = require('../controllers/jobs')

router.get('/', jobsControllers.getJobs)

router.post('/', jobsControllers.createJob)

router.get('/:id', jobsControllers.getSingleJob)

router.delete('/:id', jobsControllers.deleteSingleJob)

router.patch('/:id', jobsControllers.updateSingleJob)

module.exports = router