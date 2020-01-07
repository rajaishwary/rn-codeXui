import { StyleSheet } from 'react-native';
import { colors } from 'src/theme/colors';
import { dimensions } from 'src/theme/dimensions';

const commonStyle = {
  padding: 10,
  borderRadius: 30,
};

const chipStyle = StyleSheet.create({
  flat: {
    ...commonStyle,
    backgroundColor: colors.lightGray,
  },
  outLined: {
    ...commonStyle,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  disabled: {
    ...commonStyle,
    backgroundColor:colors.lightGray,
  },
});

const txtStyle = StyleSheet.create({
  flat: {
    color: colors.black,
    fontSize: 16,
    textAlign:'center'
  },
  outLined: {
    color: colors.black,
    fontSize: 16,
    textAlign:'center'
  },
  disabled:{
      color:colors.disabled
  }
});

export { chipStyle, commonStyle, txtStyle };
