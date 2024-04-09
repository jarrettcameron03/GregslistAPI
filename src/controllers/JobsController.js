import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobsByQuery)
            .get('/:jobId', this.getJobById)
    }

    async getJobById(request, response, next) {
        try {
            const job = await jobsService.getJobById(request.params.jobId)
            response.send(job)
        } catch (error) {
            next(error)
        }
    }

    async getJobsByQuery(request, response, next) {
        try {
            const jobs = await jobsService.getJobsByQuery(request.query)
            response.send(jobs)
        } catch (error) {
            next(error)
        }
    }
}