require("babel-polyfill");
let ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
const App = require("./App");
const Store = require("/configureStore.js").default;

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>
	, document.getElementById("app")
);