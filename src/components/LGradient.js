import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors as themeColors } from 'src/theme/colors';

const LGradient = (props) => {
    const { children, style, colors } = props;
    return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={colors ? colors : themeColors.linearGradient} style={[linearGradient, style]}>
            {children}
        </LinearGradient>
    );
}

export default LGradient;

const linearGradient = {
    flex: 1,
};
