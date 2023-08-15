import { Router } from "express";   // Import Router from Express
import TodoController from "../controller/todo.js";   // Import TodoController

const todoRouter = new Router();  // Create a new router instance

//Get request
todoRouter.get("/todos", TodoController.getAllTodos); 
todoRouter.get("/todos/:id", TodoController.getTodoById);    
todoRouter.get("/todos/:id", TodoController.deleteTodo);  

//Post request
todoRouter.post("/todos", TodoController.createTodo);   
todoRouter.post("/todos/:id", TodoController.updateTodo); 

export default todoRouter;   // Export the router for use in app.js


