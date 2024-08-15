import { Link } from "react-router-dom";
import Button from "./UI/Button";

function TodoItem({ todo }) {
	return (
		<div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
			<p className="text-lg font-semibold text-gray-700">
				{todo.name} {todo.surname}, {todo.age} years old
			</p>
			<Link to={`/update/${todo.id}`}>
				<Button label="Update" />
			</Link>
		</div>
	);
}

export default TodoItem;
