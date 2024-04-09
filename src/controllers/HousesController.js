import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHousesWithQuery)
            .get('/:houseId', this.getHouseById)
    }

    async getHouseById(request, response, next) {
        try {
            const house = await housesService.getHouseById(request.params.houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }

    async getHousesWithQuery(request, response, next) {
        try {
            const houses = await housesService.getHouses(request.query)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }
}