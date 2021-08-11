//Traigo el modelo para guardar los datos
import Concept from '../models/operation'

//Request All The Data
export async function getOperation(req, res) {
    try {
        const operations = await Concept.findAll();
        res.json({
            data: operations
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: 'OPS! Something went wrong :_',
            data: {}
        });
    }
}

//Write Operation Item
export async function createOperation(req, res) {
    const { id, concept, operationdate, amounttype, amount } = req.body;
    try {
        let newConcept = await Concept.create({
            id,
            concept,
            operationdate,
            amounttype,
            amount
        }, {
            //voy a pasarte los siguientes datos
            fields: ['id','concept', 'operationdate', 'amounttype', 'amount']
        });
        //retornar algo al usuario
        if (newConcept) {
            return res.json({
                message: 'New concept created successfully',
                data: newConcept
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'something went wrong :/' })
    }
}

//Delete Operation Item
export async function deleteOperation(req, res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Concept.destroy({
            where:{id}
        });
        res.json({
            message:'Item deleted',
            count: deleteRowCount
        });
    } catch (error) {
        return res.status(500).json({ error: 'Something went wrong :/' })
    }
}

//Delete All Operation Item
export async function deleteAllOperation(req, res){
    try {
        const allDeletes = await Concept.destroy(operations);
        res.json(allDeletes)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong :/' })
    }
}

//Get All amount And Sum Them
export async function getAllAmount(req, res){
    try {
        let calculateTotal = await Concept.sum('amount')
            console.log(calculateTotal);
        if (calculateTotal) {
            res.json({
                message: 'Este es el total',
                data: calculateTotal
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            message: 'OPS! Something went wrong :_',
        });
        return res.status(500).json({ error: 'something went wrong :/' })
    }
}