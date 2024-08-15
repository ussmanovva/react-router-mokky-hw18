import Button from "./UI/Button";
import Input from "./UI/Input";

const TodoForm = ({
	name,
	surname,
	age,
	setName,
	setSurname,
	setAge,
	onSubmit,
	buttonText,
}) => {
	return (
		<div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
			<h2 className="text-2xl font-semibold mb-4 text-gray-800">Todo</h2>
			<form onSubmit={onSubmit} className="flex flex-col space-y-4">
				<div>
					<Input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Name"
						className="border border-gray-300 rounded-lg p-2 w-full"
					/>
				</div>
				<div>
					<Input
						type="text"
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						placeholder="Surname"
						className="border border-gray-300 rounded-lg p-2 w-full"
					/>
				</div>
				<div>
					<Input
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						placeholder="Age"
						className="border border-gray-300 rounded-lg p-2 w-full"
					/>
				</div>
				<Button
					label={buttonText}
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
				/>
			</form>
		</div>
	);
};

export default TodoForm;
