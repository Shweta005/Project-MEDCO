const db=require('../db/models');//index.js=>db
                 //modelname
const Product=db.Product;

// 1. select * from users => findAll

exports.findAll=(req,resp)=>{

    Product.findAll()

        .then(data=>resp.json(data))

        .catch(err=>{
console.log(err)
            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

// 2. seelct * from users where id=?=>findByPK

exports.findByPk=(req,resp)=>{

    const id=parseInt(req.params.id);

    Product.findByPk(id)

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};

//  INSERT INTO public."People"(
// id, "firstName", "lastName", "createdAt", "updatedAt")
// VALUES (?, ?, ?, ?, ?);
exports.create = (req, resp) => {
    if(!req.body.productName){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const newProduct={
       
       imgUrl: req.body.imgUrl,
       productName: req.body.productName,
       productDesc:req.body.productDesc,
       categoryName:req.body.categoryName,
       mfgName:req.body.mfgName,
       price: req.body.price,
       createdAt: new Date()  ,
       updatedAt:new Date()  
       
    }
    Product.create(newProduct)
        .then(data=>{resp.send(data);})
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error Creating new Person data"
            })
        })
}
// UPDATE public."People"
// 	SET id=?, "firstName"=?, "lastName"=?, "createdAt"=?, "updatedAt"=?
// 	WHERE <condition>;
exports.update = (req, resp) => {
    const id = req.params.id;

    Product.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
            resp.send({
                message: `User with id ${id} updated successfully.`
            });
            } else {
            resp.send({
                message: `Cannot update Person with id=${id}. Maybe Person was not found or req.body is empty!`
            });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving People data"
            })
        })
}
// DELETE FROM public."People"
// 	WHERE <condition>;
exports.delete = (req, resp) => {
    const id = req.params.id;
    Product.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                resp.send({ message: `User with id=${id} deleted successfully!` });
            } else {
                resp.send({ message: `Cannot delete User with id=${id}. Maybe User was not found!` });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Could not delete User with id=" + id
            })
        })
}