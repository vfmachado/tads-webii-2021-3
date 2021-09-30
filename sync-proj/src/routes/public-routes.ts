import { PublicController } from '../controllers/public-controller';
import { Router } from 'express';

const publicRouter = Router();

const controller = new PublicController();

publicRouter.get('/', (req, res) => controller.RenderInitialPage(req, res));

//TODO VERIFICAR POR QUE NAO POSSO FAZER (this undefined)
//publicRouter.get('/', controller.RenderInitialPage);

export { publicRouter }
