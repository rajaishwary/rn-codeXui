import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'src/theme/colors';

const LGradient = (props) => {
    const { children, style } = props;
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={colors.linearGradient} style={[linearGradient, style]}>
            {children}
        </LinearGradient>
    );
}

export default LGradient;

const linearGradient = {
    flex: 1,
};
