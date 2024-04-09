import { dbContext } from "../db/DbContext.js"

class JobsService {
    constructor() {

    }

    async getJobById(jobId) {
        const job = await dbContext.Jobs.findById(jobId)
        if (!job) throw new Error('Could not find Job with ID: ' + jobId)
        return job
    }

    async getJobsByQuery(searchQuery) {
        const jobs = await dbContext.Jobs.find(searchQuery)
        return jobs
    }
}

export const jobsService = new JobsService()