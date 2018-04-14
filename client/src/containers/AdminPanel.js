import { connect } from 'react-redux';

var AdminPanel = ({ }) => {
	console.log("RENDER: AdminPanel");
	return (
		<div className="AdminApp">
			<h1>
				Hey1
			</h1>
		</div>

	)
}

var mapStateToProps = (state) => {
	console.log("MapSta: AdminPanel", state);
	return {
	};
};


export default connect(mapStateToProps, {})(AdminPanel);