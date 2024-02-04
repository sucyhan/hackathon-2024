import { Service } from "typedi";
import { DatabaseService } from "./database.service";
import { Collection, Filter, ObjectId, WithId } from "mongodb";
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
            if (data !== null) {
                return { user: data.user, ingredients: data.ingredients };
            } else {
                return null;
            }
        });
    }

    async getUser(user: string): Promise<WithId<InventoryData>> {
        return this.collection.findOne({ user }).then((data: WithId<InventoryData>) => {
            console.log(data)
            return data;
        });
    }

    async addNewUser(user: string, ingredient: Ingredient): Promise<void> {
        const newUser: WithId<InventoryData> = {
            '_id': new ObjectId(),
            'user': user,
            'ingredients': [ingredient]
        };

        await this.collection.insertOne(newUser);
    }

    async updateInventory(user: string, ingredient: Ingredient): Promise<void> {
        const userId = (await this.getUser(user))?._id;
        console.log(userId);
        if (userId == null) {
            console.log("New user");
            await this.addNewUser(user, ingredient);
        } else {
            console.log("update");
            const filterQuery: Filter<InventoryData> = { _id: userId };
            const updateQuery = { $addToSet: { 'ingredients': ingredient } };

            return this.collection.updateOne(filterQuery, updateQuery).then(() => {
                return;
            });
        }
    }
}