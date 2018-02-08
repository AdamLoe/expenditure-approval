var React = require('react');
var RippleArea = require('../components/RippleArea');

class PageChanger extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Rendering page changer', this.props.info);
        return(
            <div className="PageChanger">
                <RippleArea className={(this.props.info.page > 1) ? 'PageBack' : 'PageBack hiddentext'}
                     onClick={this.props.loadRequests.bind(this, null,
                         {
                             page: this.props.info.page - 1,
                             perPage: this.props.info.perPage
                         }
                     )}>
                    <img src="http://localhost/images/backSmall.png"/>
                </RippleArea>
                <div className='PageNumber'>
                    <h1> Page: {this.props.info.page} </h1>
                </div>
                <RippleArea className='PageForward'
                     onClick={this.props.loadRequests.bind(this, null,
                         {
                             page: this.props.info.page + 1,
                             perPage: this.props.info.perPage
                         }
                     )}>
                    <img src="http://localhost/images/nextSmall.png"/>
                </RippleArea>
            </div>
        )
    }
}

module.exports = PageChanger;