import { connect } from 'react-redux';

var UserGreeting = require('../components/Header/UserGreeting');
var UserButton = require('../components/Header/UserButton');
var UserDropdown = require('../components/Header/UserDropdown');

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUserDropdown: false
		}
	}

	toggleDropdown = () => {
		this.setState({
			showUserDropdown: !this.state.showUserDropdown
		})
	}

	render() {
		var { firstName, wholeName } = this.props;

		console.log("RENDER: Header");
		return (
			<div className="Header">
				<UserGreeting name={firstName} />
				<UserButton
					name={wholeName}
					onClick={this.toggleDropdown()}
				/>
				<UserDropdown />
			</div>
		)
	}
}

var mapStateToProps = (state) => {
	console.log("MapSta: Header", state);
	return {
		firstName: 'Bert',
		wholeName: 'Bert Loe'
	}
};


export default connect(mapStateToProps, {})(Header);