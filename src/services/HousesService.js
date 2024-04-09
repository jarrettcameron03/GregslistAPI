import { dbContext } from "../db/DbContext.js"

class HousesService {
    constructor() {

    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) throw new Error('Could not find House with ID: ' + houseId)
        return house
    }

    async getHouses(searchQuery) {
        return await dbContext.Houses.find(searchQuery)
    }
}

export const housesService = new HousesService()