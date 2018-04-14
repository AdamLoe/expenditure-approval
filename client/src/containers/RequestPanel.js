import { connect } from 'react-redux';

var RequestPanel = ({ }) => {
	console.log("RENDER: RequestPanel");
	return (
		<div className="AdminApp">
			<h1>
				Hey1
			</h1>
		</div>

	)
}

var mapStateToProps = (state) => {
	console.log("MapSta: RequestPanel", state);
	return {
	};
};


export default connect(mapStateToProps, {})(RequestPanel);