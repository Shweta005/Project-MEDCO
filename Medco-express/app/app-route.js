module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();


    ///////ProductController : product apis
    const ProductController=require('./product-controller');

    ROUTER.get('/products',ProductController.findAll);

    ROUTER.get('/products/:id',ProductController.findByPk);

    ROUTER.post('/products/add',ProductController.create);
    //PUT url: http://localhost:3500/app/users/update/:id

    ROUTER.put('/products/update/:id',ProductController.update);
    //DELETE url: http://localhost:3500/app/users/delete/:id
    
    ROUTER.delete('/products/delete/:id',ProductController.delete);  
    //Main url: http://localhost:3500/app/
      
         ////User controller  : user apis 
    const UserController=require('./user-controller');
    ROUTER.get('/users',UserController.findAll);

    ROUTER.get('/users/:id',UserController.findByPk);

    ROUTER.post('/users/add',UserController.create);
    //PUT url: http://localhost:3500/app/users/update/:id

    ROUTER.put('/users/update/:id',UserController.update);
    //DELETE url: http://localhost:3500/app/users/delete/:id
    
    ROUTER.delete('/users/delete/:id',UserController.delete);  
    //Main url: http://localhost:3500/app/
      
////Category controller  : category apis 
    const CategoryController=require('./category-controller');
    ROUTER.get('/categories',CategoryController.findAll);

    ROUTER.get('/categories/:id',CategoryController.findByPk);

    ROUTER.post('/categories/add',CategoryController.create);
    //PUT url: http://localhost:3500/app/users/update/:id

    ROUTER.put('/categories/update/:id',CategoryController.update);
    //DELETE url: http://localhost:3500/app/users/delete/:id
    
    ROUTER.delete('/categories/delete/:id',CategoryController.delete);  
    //Main url: http://localhost:3500/app/

    ////Order controller  : Order apis 
    const OrderController=require('./order-controller');
    ROUTER.get('/orders',OrderController.findAll);

    ROUTER.get('/orders/:id',OrderController.findByPk);

    ROUTER.post('/orders/add',OrderController.create);
    //PUT url: http://localhost:3500/app/users/update/:id

    ROUTER.put('/orders/update/:id',OrderController.update);
    //DELETE url: http://localhost:3500/app/users/delete/:id
    
    ROUTER.delete('/orders/delete/:id',OrderController.delete);  
    //Main url: http://localhost:3500/app/


    app.use('/app',ROUTER);

}