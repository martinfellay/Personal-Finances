import { Router } from "express";
const router = Router();

import { getOperation, createOperation, deleteOperation, deleteAllOperation, getAllAmount} from '../controllers/operacion.controller';

//for many interaction with /api/operations/ , js access to this
router.get('/', getOperation);
router.post('/', createOperation);
router.delete('/:id', deleteOperation);
router.get('/d', deleteAllOperation);

//get all the amount types on mi /API/operations/
router.get('/total', getAllAmount);

export default router;