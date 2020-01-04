import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, LGradient, Button } from 'src/components';

const Heading = ({ children }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={'h3-bold-dark-primaryFontLight'}>{children}</Text>
    </View>
  );
};

const RnView = () => {
  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 10 }}>
      <Heading>{'Typography: '}</Heading>
      <Text style={'h1-regular-light'}>{'h1-regular-light'}</Text>
      <Text style={'h1-regular-dark'}>{'h1-regular-dark'}</Text>
      <Text style={'h2-regular-light'}>{'h2-regular-light'}</Text>
      <Text style={'h3-bold-dark-primaryFontBold'}>{'h3-bold-dark-primaryFontBold'}</Text>
      <Text style={'h3-bold-dark-primaryFontLight'}>{'h3-bold-dark-primaryFontLight'}</Text>
      <Heading>{'Linear Gradient: '}</Heading>
      <LGradient>
        <View style={{ height: 50 }}>
          <Text>{'Check me out'}</Text>
        </View>
      </LGradient>
      <Heading>{'Buttons: '}</Heading>
      <Button type={Button.type.primary}>{'PRIMARY Btn'}</Button>
      <Button type={Button.type.secondary}>{'SECONDARY Btn'}</Button>
      <Button type={Button.type.outlined}>{'OUTLINED Btn'}</Button>
    </ScrollView>
  );
};

export default RnView;
