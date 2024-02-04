import { Service } from "typedi";
import { DatabaseService } from "./database.service";
import { Collection, Filter, WithId } from "mongodb";
import { DB_COLLECTION_INVENTORY } from "@app/env";
import { Ingredient, InventoryData } from '@common/interfaces';

@Service()
export class InventoryService {
    constructor(private readonly databaseService: DatabaseService) { }

    get collection(): Collection<InventoryData> {
        return this.databaseService.database.collection(DB_COLLECTION_INVENTORY);
    }

    async getInventory(user: string): Promise<InventoryData | null> {
        return this.collection.findOne({ user }).then((data: WithId<InventoryData>) => {
            return data;
        });
    }

    async addNewUser(user: string, ingredient: Ingredient): Promise<void> {
        const newUser: InventoryData = {
            user,
            ingredients: [ingredient]
        };

        await this.collection.insertOne(newUser);
    }

    async updateInventory(user: string, ingredient: Ingredient): Promise<void> {
        const filterQuery: Filter<InventoryData> = { user };
        const updateQuery = { $push: { ingredients: ingredient}};

        return this.collection.updateOne(filterQuery, updateQuery).then(() => {
            return;
        });
    }
}