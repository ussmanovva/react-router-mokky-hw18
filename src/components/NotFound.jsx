import { Link } from "react-router-dom";
import Button from "./UI/Button";

const NotFound = () => {
	return (
		<div className="max-w-lg mx-auto p-4 text-center">
			<h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
			<p className="mb-4">The page you are looking for does not exist.</p>
			<Link to="/">
				<Button label="Go Back" />
			</Link>
		</div>
	);
};

export default NotFound;
