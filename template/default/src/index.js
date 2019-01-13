import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';


export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        {text}
      </div>
    )
  }
}

ExampleComponent.propTypes = {
  text: PropTypes.string
};

ExampleComponent.defaultProps = {
  text: ''
};
