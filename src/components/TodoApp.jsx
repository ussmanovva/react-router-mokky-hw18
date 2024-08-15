import { Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import TodoUpdate from "./TodoUpdate";
import NotFound from "./NotFound";
import TodoAdd from "./TodoAdd";

function App() {
	return (
		<Routes>
			<Route path="/" element={<TodoList />} />
			<Route path="/add" element={<TodoAdd />} />
			<Route path="/update/:id" element={<TodoUpdate />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
