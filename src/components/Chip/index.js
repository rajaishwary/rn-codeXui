import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {Text} from 'src/components';
import {chipStyle, commonStyle, txtStyle} from './style';


class Chip extends Component{

get chipText(){
    const {text, children} = this.props;
    if(Boolean(text)){
        return text;
    }
    if(Boolean(children)){
        return children;
    }
    return 'Chip Text'
}

get chipContainerStyle(){
    let type = this.props.type || 'flat';
    return chipStyle[type];
}

get txtStyle(){
    let type = this.props.type || 'flat';
    return txtStyle[type];
}


get extraChipSpec(){
    let txtStyle = StyleSheet.flatten([this.txtStyle, this.props.txtStyle]);
    let chipText = <Text style={txtStyle}>{this.chipText}</Text>;
    return chipText;
}

get disabledStyle(){
    const {disabled} = this.props;
    if(Boolean(disabled)){
        return chipStyle[disabled];
    }
}
   
    
    render(){
    let chipContainerStyle = StyleSheet.flatten([this.chipContainerStyle, this.props.containerStyle]);
    let disabledChip = StyleSheet.flatten([chipContainerStyle, this.disabledStyle]);
        return(
        <View style={[chipContainerStyle, disabledChip]}>
           {this.extraChipSpec}
        </View>
        );
    }
}

export default Chip;