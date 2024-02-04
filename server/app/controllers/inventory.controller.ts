import { InventoryService } from "@app/services/inventory.service";
// import { StatusCodes } from "http-status-codes";
import { Service } from "typedi";
import { Router } from 'express';
// import { Ingredient } from "@common/interfaces";

@Service()
export class InventoryController {
    router: Router;
    constructor(private readonly inventoryService: InventoryService) { this.configureRouter(); }

    private configureRouter(): void {
        this.router = Router();
        console.log(this.inventoryService);

        // this.router.post('/getInventory', async (req: Request, res: Response) => {
        //     const user: string = req.body;
        //     res.status(StatusCodes.OK).json(await this.inventoryService.getInventory(user));
        // });

        // this.router.post('/addInventory', async (req: Request, res: Response) => {
        //     const data: {user:string, ingredient: Ingredient} = req.body;
        //     const result = await this.inventoryService.getInventory(data.user);
        //     if (result === null) {
        //         await this.inventoryService.addNewUser(data.user, data.ingredient);
        //     } else {
        //         await this.inventoryService.updateInventory(data.user, data.ingredient);
        //     }
        //     res.sendStatus(StatusCodes.ACCEPTED);
        // });
    }
}