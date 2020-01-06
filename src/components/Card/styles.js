import { StyleSheet } from 'react-native';
import { colors } from 'src/theme/colors';
import { dimensions } from 'src/theme/dimensions';


const styles = StyleSheet.create({
  commonTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  para: {
    fontSize: 15,
    color: '#000',
  },
});

const containerStyle = StyleSheet.create({
  flatCard: {
    width: '100%',
    backgroundColor: 'transparent',
    minHeight: 100,
    marginVertical: 10,
  },
  primary: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    marginVertical: 10,
  },
  cover:{
      width:'100%',
      height: dimensions.height / 3,
      borderRadius:10
  }
});

export { containerStyle, styles };
