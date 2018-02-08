import TransitionGroup from 'react-transition-group/TransitionGroup';

const ListPanel = (props) => (
    <TransitionGroup  component="ul" {...props}>
    </TransitionGroup>
);

module.exports = ListPanel;