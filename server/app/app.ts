import { DatabaseService } from "./services/database.service";
import { HttpException } from './classes/http.exception';
import { StatusCodes } from 'http-status-codes';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { Service } from 'typedi';
import { InventoryController } from "./controllers/inventory.controller";
import { InventoryService } from "./services/inventory.service";

@Service()
export class Application {
    app: express.Application;
    readonly databaseService: DatabaseService;
    readonly inventoryService: InventoryService;
    readonly inventoryController: InventoryController;
    private readonly internalError: number = StatusCodes.INTERNAL_SERVER_ERROR;

    constructor() {
        this.app = express();
        this.databaseService = new DatabaseService();
        this.inventoryService = new InventoryService(this.databaseService);
        this.inventoryController = new InventoryController(this.inventoryService);

        this.config();
        this.bindRoutes();
    }

    bindRoutes(): void {
        this.app.use('/api/inventory', this.inventoryController.router);
        this.errorHandling();
    }

    private config(): void {
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cookieParser());
        this.app.use(cors());
    }

    private errorHandling(): void {
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            const err: HttpException = new HttpException('Not Found');
            next(err);
        });

        if (this.app.get('env') === 'development') {
            this.app.use((err: HttpException, req: express.Request, res: express.Response) => {
                res.status(err.status || this.internalError);
                res.send({
                    message: err.message,
                    error: err,
                });
            });
        }

        this.app.use((err: HttpException, req: express.Request, res: express.Response) => {
            res.status(err.status || this.internalError);
            res.send({
                message: err.message,
                error: {},
            });
        });
    }

}