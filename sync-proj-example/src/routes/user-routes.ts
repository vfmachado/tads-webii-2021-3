
import { Request, Response, Router } from 'express'

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'ok' });
})


export { userRouter };