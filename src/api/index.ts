import express, { Request, Response} from 'express';
import { ItemModel } from '../db/item.model';

const router = express.Router();



router.get('/list', async (req:Request, res:Response) => {
    const item_list = await ItemModel.find({});
    res.send(item_list);
});

router.get('/find?', async (req:Request, res:Response) => {
    try {
        const name = req.query.name;
        const fineOne = await ItemModel.findOne({
            name : name 
        });

        if(fineOne !== null){
            console.log(fineOne);
            res.send(fineOne);
        }else{
            res.status(404).send({message : "Item not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error});
    }

});
  

router.post('/add-item', async (req:Request, res:Response) => {
    try {
        const body = req.body;

        const addItem = new ItemModel(body);
        await addItem.save();

        res.send({message : `Item saved : ${body.name}`});


    } catch (error) {
        console.log(error);
        res.status(500).send({message : error});
    }
});

router.post('/update-item', async (req:Request, res:Response) => {
    try {
        const body = req.body;

        const updateItem = await ItemModel.findOne({
            _id : body.id
        });


        if(updateItem !== null){
            updateItem.name = body.name;
            updateItem.price = parseInt(body.price);
            updateItem.description = body.description;
            await updateItem.save();
            res.send({message : "Successfuly updated"});
        }else{
            res.send({message : "Item not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error});
    }

});

router.post('/delete-item/:id', async(req:Request, res:Response) => {
    try {
        const id = req.params.id

        const deleteOne = await ItemModel.findOne({
            _id : id
        });

        if(deleteOne !== null){
            await deleteOne.deleteOne();
            res.send({message : "Successfuly deleted"});
        }else{
            res.send({message : "Item not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message : error});
    }
});
  
export default router;
