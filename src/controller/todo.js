import TodoModal from "../model/todo.js";   // Import TodoModal from the model folder

const TodoController = {   
    getAllTodos: (req, res) => {   
        const todos = TodoModal.getAll();   // Retrieve all todos
        res.json(todos);   
    },
    getTodoById: (req, res) => {   // Handler for GET /todos/:id route
        const { id } = req.params;   
        const todo = TodoModal.getById(id);   
        if (!todo) {   
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(todo);  
    },
    createTodo: (req, res) => {   // Handler for POST /todos route
        const { title, description } = req.body;   
        const newTodo = TodoModal.create(title, description);  
        res.status(201).json(newTodo);   
    },
    updateTodo: (req, res) => {   // Handler for PUT /todos/:id route
        const { id } = req.params;   
        const { title, description, completed } = req.body;   
        const updatedTodo = TodoModal.update(id, title, description, completed);   
        if (!updatedTodo) {   
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(updatedTodo);   
    },
    deleteTodo: (req, res) => {   // Handler for DELETE /todos/:id route
        const { id } = req.params;   
        const deletedTodo = TodoModal.deleteById(id);   
        if (!deletedTodo) {   
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });  
    }
};

export default TodoController;   // Export the TodoController for use in todo.js
