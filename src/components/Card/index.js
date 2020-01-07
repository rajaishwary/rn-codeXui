import React, { Component } from 'react';
import { View, TouchableOpacity, Platform, TouchableNativeFeedback, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'src/components';
import { styles, containerStyle } from './styles';

const { height, width } = Dimensions.get('window');

class Card extends Component {
  get CardTitle() {
    const { title } = this.props;
    if (Boolean(title)) {
      return title;
    }
    return 'Title';
  }

  get SubText() {
    const { subText } = this.props;
    if (Boolean(subText)) {
      return subText;
    }
    return 'SubText';
  }

  get CardStyles() {
    const type = this.props.type || 'primary';
    return containerStyle[type];
  }

  get CardImage() {
    const { ImageUrl, type } = this.props;
    if (Boolean(ImageUrl) && type === 'primary') {
      return (
        <Image source={{ uri: `${ImageUrl}` }} resizeMode={'cover'} style={styles.primaryImage} />
      );
    } else if (type === 'cover' && ImageUrl) {
      return <Image source={{ uri: `${ImageUrl}` }} resizeMode={'cover'} style={containerStyle[this.props.type]} />;
    } else {
      return null;
    }
  }

  get extraCardSpec() {  
    const cardTitle = (
      <Text style={StyleSheet.flatten([styles.commonTitle, this.props.cardTitleStyles])}>{this.CardTitle}</Text>
    );
    const cardSubText = (
      <Text style={StyleSheet.flatten([styles.para, this.props.cardSubTextStyles])}>{this.SubText}</Text>
    );
    let cardStyle = StyleSheet.flatten([this.CardStyles, this.props.cardStyles]);
    return (
      <View style={cardStyle}>
        {this.CardImage}
        {this.props.type !== 'cover' ? (
          <View style={{ padding: 10 }}>
            {cardTitle}
            {cardSubText}
          </View>
        ) : null}
      </View>
    );
  }

  render() {
    const { onPress } = this.props;
    const Card = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return <Card onPress={onPress ? onPress : e => e}>{this.extraCardSpec}</Card>;
  }
}

export default Card;
