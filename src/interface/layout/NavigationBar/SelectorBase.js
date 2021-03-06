import React from 'react';
import ReactTooltip from 'react-tooltip';

class SelectorBase extends React.PureComponent {
  static propTypes = {
  };

  ref = null;
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleDocumentClick);
    document.body.addEventListener('touchend', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleDocumentClick);
    document.body.removeEventListener('touchend', this.handleDocumentClick);
    ReactTooltip.hide();
  }

  handleClick(event) {
    this.setState({ show: !this.state.show });
  }

  handleDocumentClick(event) {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({
        show: false,
      });
    }
  }
}

export default SelectorBase;
