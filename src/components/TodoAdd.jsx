import { useState } from "react";
import TodoForm from "./TodoForm";
import { useNavigate } from "react-router-dom";

const TodoAdd = () => {
	const navigate = useNavigate();
	const [todo, setTodo] = useState({
		name: "",
		surname: "",
		age: "",
	});

	const handleAdd = async (e) => {
		e.preventDefault();

		console.log("test");

		try {
			const response = await fetch("https://a9b29f6f15a2eb9a.mokky.dev/todo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(todo),
			});
			if (!response.ok) {
				throw new Error("ok");
			}
      navigate(-1)
			const newTodo = await response.json();
			console.log("added:", newTodo);
			setTodo({
				name: "",
				surname: "",
				age: "",
			});
      
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="max-w-lg mx-auto p-4">
			<TodoForm
				name={todo.name}
				surname={todo.surname}
				age={todo.age}
				setName={(name) => setTodo({ ...todo, name })}
				setSurname={(surname) => setTodo({ ...todo, surname })}
				setAge={(age) => setTodo({ ...todo, age })}
				onSubmit={handleAdd}
				buttonText="ADD"
			/>

		</div>
	);
};

export default TodoAdd;
