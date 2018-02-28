require("babel-polyfill");
let ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
const App = require("./App");
const Store = require("/Store.js");

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>
	, document.getElementById("app")
);