import TodoController from "../controller/todo.js";

const todos = [
    {
        id:1,
        title:'Do Breakfast',
        description:'Do your breakfast as you will get up and fresh',
        completed:false,
    }

];   

const TodoModal = {   // Define a TodoModal object
    getAll: () => {   // Method to retrieve all todos
        return todos;
    },
    getById: (id) => {   // Method to retrieve a todo by ID
        return todos.find(todo => todo.id === id);
    },
    create: (title, description) => {   
        const id = "Task" + (todos.length + 1); // Generate a unique ID
        const newTodo = { id, title, description, completed: false }; 
        todos.push(newTodo); 
        return newTodo; 
    },
    update: (id, title, description, completed) => {   
        const todo = todos.find(todo => todo.id === id);  
        if (!todo) {   
            return null;
        }
        todo.title = title || todo.title;   
        todo.description = description || todo.description;   
        todo.completed = completed === undefined ? todo.completed : completed;   
        return todo;   
    },
    deleteById: (id) => {   // Method to delete a todo by ID
        const index = todos.findIndex(todo => todo.id === id);   
        if (index === -1) {   
            return null;
        }
        return todos.splice(index, 1)[0];   // Remove and return the deleted todo
    }
};

export default TodoModal;   // Export the TodoModal for use in todoController.js
