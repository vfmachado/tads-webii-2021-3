
import express from 'express';
import { userRouter } from '@/routes/user-routes';

const app = express();

app.use(userRouter);

app.listen(300, () => console.log(`Server running at: http://localhost:3000`));
