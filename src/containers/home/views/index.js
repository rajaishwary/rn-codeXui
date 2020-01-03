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
      <Button text={'Button Text'} textColor={'#f2f2f2'} fontSize={18} theme={'primary'} size={'medium'} />
      <Button text={'Button Text'} textColor={'lightPrimary'} fontSize={14} theme={'secondaryText'}  />
      <Button text={'Button Text'} outLine size={'small'} textColor={'#ff0000'} />
      <Button text={'Button Text'} textColor={'primary'} size={'medium'}  />
      <Button text={'Button Text'} theme={'primary'} size={'small'} round={false}   />
      <Button text={'Button Text'} theme={'disabled'} size={'medium'} round={false}   />
      <LGradient style={{ width: 100, height: 50 }}>
        <View style={{ width: 100, height: 50 }}>
          <Text>
            {'Check me out'}
          </Text>
        </View>
      </LGradient>      
    </View>
  );
};

export default RnView;
