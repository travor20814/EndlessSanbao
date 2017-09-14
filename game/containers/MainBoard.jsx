import React, {
  Component,
} from 'react';
import { StyleRoot } from 'radium';

import GameBoard from './GameBoard.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: '100vh',
  },
  mainWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
};

class MainBoard extends Component {
  render() {
    return (
      <StyleRoot style={styles.wrapper}>
        <main style={styles.mainWrapper}>
          <GameBoard />
        </main>
      </StyleRoot>
    );
  }
}

export default MainBoard;
