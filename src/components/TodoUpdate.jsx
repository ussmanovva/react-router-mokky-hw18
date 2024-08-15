import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { useNavigate, useParams } from "react-router-dom";

const TodoUpdate = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [todo, setTodo] = useState({
		name: "",
		surname: "",
		age: "",
	});

	useEffect(() => {
		const fetchTodo = async () => {
			try {
				const response = await fetch(
					`https://a9b29f6f15a2eb9a.mokky.dev/todo/${id}`
				);
				const data = await response.json();
				setTodo({
					name: data.name,
					surname: data.surname,
					age: data.age,
				});
			} catch (error) {
				console.error("Error fetching todo:", error);
			}
		};
		fetchTodo();
	}, [id]);

	const handleUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`https://a9b29f6f15a2eb9a.mokky.dev/todo/${id}`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(todo),
				}
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			navigate(-1);
			const updatedTodo = await response.json();
			console.log("Todo updated:", updatedTodo);
		} catch (error) {
			console.error("Error updating todo:", error);
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
				onSubmit={handleUpdate}
				buttonText="Update"
			/>
		</div>
	);
};

export default TodoUpdate;
