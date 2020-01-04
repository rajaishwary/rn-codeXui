import React from 'react';
import { View } from 'react-native';
import { Text, LGradient, Button } from 'src/components';

const RnView = () => {
  return (
    <View>
      <Text style={'h1-regular-light'}>{'h1-regular-light'}</Text>
      <Text style={'h1-regular-dark'}>{'h1-regular-dark'}</Text>
      <Text style={'h2-regular-light'}>{'h2-regular-light'}</Text>
      <Text style={'h3-bold-dark-primaryFontBold'}>{'h3-bold-dark-primaryFontBold'}</Text>
      <Text style={'h3-bold-dark-primaryFontLight'}>{'h3-bold-dark-primaryFontLight'}</Text>
      <LGradient style={{ width: 100, height: 50 }}>
        <View style={{ width: 100, height: 50 }}>
          <Text>
            {'Check me out'}
          </Text>
        </View>
      </LGradient>   
      <Button type={Button.type.primary}>
        {'Click me'}  
      </Button>   
    </View>
  );
};

export default RnView;
