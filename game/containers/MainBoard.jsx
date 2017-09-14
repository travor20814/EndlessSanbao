import React, {
  Component,
} from 'react';
import { StyleRoot } from 'radium';
import T from 'prop-types';

const styles = {
  wrapper: {

  },
  mainWrapper: {

  },
};

class MainBoard extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <StyleRoot style={styles.wrapper}>
        <main style={styles.mainWrapper}>
          {children}
        </main>
      </StyleRoot>
    );
  }
}

MainBoard.propTypes = {
  children: T.node,
};

MainBoard.defaultProps = {
  children: null,
};

export default MainBoard;
