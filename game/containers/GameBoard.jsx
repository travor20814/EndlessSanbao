import React, {
  Component,
} from 'react';
import radium from 'radium';
import T from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GameActions from '../actions/game.js';

import drawBackground from '../setter/drawBackground.js';
import drawCharactor from '../setter/drawCharactor.js';
import {
  MOVE_SPEED,
} from '../setter/setting.js';

const styles = {
  mainBoardWrap: {
    width: 800,
    height: 600,
    position: 'relative',
  },
  canvas: {
    width: 800,
    height: 600,
  },
  charactor: {
    width: 50,
    height: 100,
    position: 'absolute',
    bottom: 20,
    left: 'calc(50% - 25px)',
    zIndex: 1,
  },
  eventBoard: {
    width: 1,
    height: 1,
    outline: 0,
    border: 0,
    background: 'transparent',
  },
};

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: props.position.horizontalOffset || 0,
    };
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas_background');

    if (canvas) {
      const getEventBoard = document.getElementById('eventBoard');
      getEventBoard.focus();

      drawBackground();
      drawCharactor();
    }
  }

  componentWillReceiveProps({
    position,
  }) {
    if (position.horizontalOffset !== this.props.position.horizontalOffset) {
      this.setState({
        offset: position.horizontalOffset,
      });
    }
  }

  onKeyDown(keyCode) {
    const {
      updateCharactorPosition,
      position,
    } = this.props;

    switch (keyCode) {
      case 37: // left
        updateCharactorPosition({
          horizontalOffset: position.horizontalOffset - MOVE_SPEED < -265
            ? position.horizontalOffset
            : position.horizontalOffset - MOVE_SPEED,
        });
        break;
      case 39: // right
        updateCharactorPosition({
          horizontalOffset: position.horizontalOffset + MOVE_SPEED > 265
            ? position.horizontalOffset
            : position.horizontalOffset + MOVE_SPEED,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      offset,
    } = this.state;

    return (
      <div style={styles.mainBoardWrap}>
        <canvas
          id="canvas_background"
          style={styles.canvas} />
        <canvas
          id="charactor"
          style={[styles.charactor, { left: `calc(50% + (${offset}px - 25px))` }]} />
        <input
          autoFocus
          id="eventBoard"
          type="text"
          onKeyDown={e => this.onKeyDown(e.keyCode)}
          onBlur={() => {
            document.getElementById('eventBoard').focus();
          }}
          style={styles.eventBoard} />
      </div>
    );
  }
}

GameBoard.propTypes = {
  updateCharactorPosition: T.func.isRequired,
  position: T.shape({
    horizontalOffset: T.number,
  }).isRequired,
};

export default connect(
  state => ({
    position: state.Game.position,
  }),
  dispatch => bindActionCreators({
    ...GameActions,
  }, dispatch),
)(radium(GameBoard));
