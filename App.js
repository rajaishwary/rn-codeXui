import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PanResponder,
} from 'react-native';
import Svg, { Rect, Circle, G, Line, Path, Defs} from 'react-native-svg';

const RADIUS = 150;
const STROKE_WIDTH = 30;
const BORDER_WIDTH = 1;
const NO_OF_ARCS = 36;
const TOLERANCE = 0.005;
const START_ANGLE = 0;
const ANGLE_LEN = 0;

function getArc(
  index0,
  arcs,
  radius,
  startAngle0 = 0,
  angleLength0 = Math.PI * 2,
) {
  const startAngle = startAngle0 % (2 * Math.PI);
  const angleLength = angleLength0 % (2 * Math.PI);
  const index = index0 + 1;
  const fromAngle = (angleLength / arcs) * (index - 1) + startAngle;
  const toAngle = (angleLength / arcs) * index + startAngle;
  const startX = radius * Math.sin(fromAngle);
  const startY = -radius * Math.cos(fromAngle);
  const realEndX = radius * Math.sin(toAngle);
  const realEndY = -radius * Math.cos(toAngle);
  const endX = radius * Math.sin(toAngle + TOLERANCE);
  const endY = -radius * Math.cos(toAngle + TOLERANCE);
  return {
    startX,
    startY,
    endX,
    endY,
    realEndX,
    realEndY,
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerX: 0,
      centerY: 0,
      startAngle: START_ANGLE,
      angleLength: ANGLE_LEN,
    };

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => true,
      onPanResponderMove: (evt, {moveX, moveY}) => {
        const {centerX, centerY, startAngle, angleLength} = this.state;

        const currentAngleStop = (startAngle + angleLength) % (2 * Math.PI);
        let newAngle = Math.atan2(moveY - centerY, moveX - centerX) + Math.PI/2;

        console.log(currentAngleStop, newAngle);

        if (newAngle < 0) {
          newAngle += 2 * Math.PI;
        }

        let newAngleLength = currentAngleStop - newAngle;

        if (newAngleLength < 0) {
          newAngleLength += 2 * Math.PI;
        }

        this.setState({
          startAngle: newAngle,
          angleLength: newAngleLength % (2 * Math.PI),
        });
      },
    });
  }

  get mainContainerWidth() {
    return STROKE_WIDTH + RADIUS * 2 + (2 * BORDER_WIDTH);
  }

  onLayout = () => {
    this._circle.measure((px, py) => {
      const halfOfContainer = this.mainContainerWidth / 2;
      this.setState({
        centerX: px + halfOfContainer,
        centerY: py + halfOfContainer,
      });
    });
  };

  get centerCoords() {
    const {centerX, centerY} = this.state;
    return {centerX, centerY};
  }

  get arcsArr() {
    let arr = [];
    for (let i = 0; i < NO_OF_ARCS; i++) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    const initialPoints = getArc(0, NO_OF_ARCS, RADIUS, this.state.startAngle, this.state.angleLength);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: this.mainContainerWidth,
            width: this.mainContainerWidth,
            backgroundColor: 'red',
          }}
          onLayout={this.onLayout}>
          <Svg
            height={this.mainContainerWidth}
            width={this.mainContainerWidth}
            ref={circle => (this._circle = circle)}>
            <G
              transform={{
                translate: `${STROKE_WIDTH / 2 + RADIUS + 1}, ${STROKE_WIDTH /
                  2 +
                  RADIUS +
                  1}`,
              }}>
              <Circle
                r={RADIUS}
                strokeWidth={STROKE_WIDTH}
                fill={'#e4e4e4'}
                stroke={'transparent'}
              />
              {this.arcsArr.map(arcIdx => {
                const {startX, startY, endX, endY} = getArc(
                  arcIdx,
                  NO_OF_ARCS,
                  RADIUS,
                  this.state.startAngle,
                  this.state.angleLength,
                );
                const d = `M ${startX.toFixed(2)} ${startY.toFixed(
                  2,
                )} A ${RADIUS} ${RADIUS} 0 0 1 ${endX.toFixed(
                  2,
                )} ${endY.toFixed(2)}`;
                return (
                  <Path
                    key={arcIdx}
                    d={d}
                    strokeWidth={STROKE_WIDTH}
                    stroke={'black'}
                  />
                );
              })}
              <G
                fill={'white'}
                transform={{
                  translate: `${initialPoints.startX}, ${initialPoints.startY}`,
                }}
                {...this._panResponder.panHandlers}>
                <Circle
                  r={STROKE_WIDTH / 2 - 1}
                  fill={'white'}
                  stroke={'purple'}
                  strokeWidth="1"
                />
              </G>
            </G>
          </Svg>
        </View>
      </View>
    );
  }
}
