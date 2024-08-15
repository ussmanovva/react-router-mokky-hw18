import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import Button from "./UI/Button";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		try {
			const response = await fetch("https://a9b29f6f15a2eb9a.mokky.dev/todo");
			const data = await response.json();
			setTodos(data);
		} catch (error) {
			console.error("Error fetching todos:", error);
		}
	};

	const handleUpdateTodo = (updatedTodo) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
		);
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div className="max-w-lg mx-auto p-4">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
				<Link to="/add">
					<Button label="Add" />
				</Link>
			</div>
			<ul className="space-y-4">
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoItem todo={todo} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
