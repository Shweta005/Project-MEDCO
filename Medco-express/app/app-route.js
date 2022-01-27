module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();

    const ProductController=require('./product-controller');

    ROUTER.get('/products',ProductController.findAll);

    ROUTER.get('/products/:id',ProductController.findByPk);

    ROUTER.post('/products/add',ProductController.create);
    //PUT url: http://localhost:3500/app/users/update/:id

    ROUTER.put('/products/update/:id',ProductController.update);
    //DELETE url: http://localhost:3500/app/users/delete/:id
    
    ROUTER.delete('/products/delete/:id',ProductController.delete);  
    //Main url: http://localhost:3500/app/
      
////User controller   
    const UserController=require('./user-controller');
    ROUTER.get('/users',UserController.findAll);

    ROUTER.get('/users/:id',UserController.findByPk);

    ROUTER.post('/users/add',UserController.create);
    //PUT url: http://localhost:3500/app/users/update/:id

    ROUTER.put('/users/update/:id',UserController.update);
    //DELETE url: http://localhost:3500/app/users/delete/:id
    
    ROUTER.delete('/users/delete/:id',UserController.delete);  
    //Main url: http://localhost:3500/app/
      


    app.use('/app',ROUTER);

}