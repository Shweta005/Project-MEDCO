const db=require('../db/models');//index.js=>db
                 //modelname
const User=db.User;

//  const bcrypt = require('bcrypt');
// 1. select * from users => findAll

exports.findAll=(req,resp)=>{

    User.findAll()

        .then(data=>resp.json(data))

        .catch(err=>{
console.log(err)
            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};


// exports.login=(req,resp)=>{
//     const email = req.body.email;
//     User.login(email)
//     .then(data=>{ 
//         // resp.json(data)
//      if(data.length<1){
//          resp.status(200).json({
//              msg:'Auth Failed',
//              data:'',
//              status:'error'
//          });
//      }
//      else {
//         bcrypt.compare(req.body.password, data[0].password, function(err, result) {
//             if(err){
//              resp.json({
//                msg:"Auth Failed",
//                data:'',
//                status:'error'
//              });
//             }
//             if(result){
//                 resp.status(200).json({
//                   msg:"User Login Successfully",
//                    data:user,
//                     status:'success'
//                 });
//                }else{
//                 resp.json({
//                   msg:"Auth Failed",
//                   data:'',
//                   status:'error'
//                 });
//             }
      
//      });
//     }
// })
//     .catch(err=>{

//         resp.status(500)

//             .send({message:err.message||

//             `Something went wrong`})

//      });
  
// }
// 2. seelct * from users where id=?=>findByPK

exports.findByPk=(req,resp)=>{

    const id=parseInt(req.params.id);

    User.findByPk(id)

        .then(data=>resp.json(data))

        .catch(err=>{

            resp.status(500)

                .send({message:err.message||

                `Something went wrong`})

        });

};
//get by emailid
exports.findOne = (req, resp) => {
    const email = req.params.email;
    bcrypt.hash(req.params.password,10,function(err,hash){
    const password = hash;
   

    User.findOne({ where: { userEmail: email } && {userPassword: password }})
        .then(data => resp.json(data))
        .catch(err => {
            resp.status(500)
                .send({ message: err.message || `passwprd not getting` })
        })
    });
};

//  INSERT INTO public."People"(
// id, "firstName", "lastName", "createdAt", "updatedAt")
// VALUES (?, ?, ?, ?, ?);
exports.create = (req, resp) => {

   // bcrypt.hash(req.body.password,10,function(err,hash){
    // bcrypt.hash(req.body.password, 10, function(err, hash) {
   
    if(!req.body.firstName){
        resp.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const newUser ={
        
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mbleNo:req.body.mbleNo,
        address:req.body.address,
        password:req.body.password,
        //hash,
        createdAt: new Date(),
        updatedAt:new Date()  
    }

    console.log(newUser);
    User.create(newUser)
        .then(data=>{resp.send(data);})
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error Creating new Person data"
            })
        });
 //   });
   
 }

// UPDATE public."People"
// 	SET id=?, "firstName"=?, "lastName"=?, "createdAt"=?, "updatedAt"=?
// 	WHERE <condition>;
exports.update = (req, resp) => {
    const id = req.params.id;

    User.update(req.body, { where: { id: id } })
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
    User.destroy({ where: { id: id } })
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