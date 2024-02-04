import { Router } from "express";
import { Service } from "typedi";

@Service()
export class InventoryController {
    router: Router;
    constructor() {this.configureRouter();}

    private configureRouter(): void {
        this.router = Router();
    }
}