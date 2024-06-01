import express, { Request, Response} from 'express';

const router = express.Router();

router.get('/list', async (req:Request, res:Response) => {
    res.send({message : "API V2"});
});

export default router;