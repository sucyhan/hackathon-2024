import { InventoryService } from "@app/services/inventory.service";
import { StatusCodes } from "http-status-codes";
import { Service } from "typedi";
import { Request, Response, Router } from 'express';
import { Ingredient } from "@common/interfaces";
// import { Ingredient } from "@common/interfaces";

@Service()
export class InventoryController {
    router: Router;
    constructor(private readonly inventoryService: InventoryService) { this.configureRouter(); }

    private configureRouter(): void {
        this.router = Router();

        this.router.post('/getInventory', async (req: Request, res: Response) => {
            console.log("get request received");
            const user: string = await req.body.user;
            const result = await this.inventoryService.getInventory(user);
            console.log(result);
            res.json(result).status(StatusCodes.OK);
        });

        this.router.post('/addInventory', async (req: Request, res: Response) => {
            const data: { user: string, ingredient: Ingredient } = req.body.user;
            await this.inventoryService.updateInventory(data.user, data.ingredient);
            res.sendStatus(StatusCodes.ACCEPTED);
        });
    }
}