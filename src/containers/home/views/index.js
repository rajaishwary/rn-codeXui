import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, LGradient, Button, Card } from 'src/components';

const Heading = ({ children }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={'h3-bold-dark-primaryFontLight'}>{children}</Text>
    </View>
  );
};

const RnView = () => {
  console.log(Button.type);
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
      <Button linearGradient type={Button.type.primary}>
        {'PRIMARY Btn'}
      </Button>
      <Button type={Button.type.secondary}>{'SECONDARY Btn'}</Button>
      <Button linearGradient type={Button.type.secondary}>
        {'SECONDARY Btn'}
      </Button>
      <Button rounded type={Button.type.outlined}>
        {'OUTLINED Btn'}
      </Button>
      <Button linearGradient type={Button.type.outlined}>
        {'OUTLINED Btn'}
      </Button>
      <Button rounded type={Button.type.danger} text="DANGER Btn" />
      <Button linearGradient type={Button.type.danger} text="DANGER Btn" />
      <Heading>{'Cards: '}</Heading>
      <Card
        title={'Hey i am Primary Card'}
        ImageUrl={'https://picsum.photos/700'}
        subText={'These properties can be accessed on Card by using the dot notation, e.g. Card.Content.'}
        cardTitleStyles={styles.cardTitle}
        cardSubTextStyles={styles.cardSubText}
        type={'primary'}
      />
      <Card
        title={'card without Image'}
        subText={'These properties can be accessed on Card by using the dot notation, e.g. Card.Content.'}        
      />
      <Card
        title={'Hey i am flatCard'}
        subText={'These properties can be accessed on Card by using the dot notation, e.g. Card.Content.'}
        type={'flatCard'}
      />
      <Text>{'card with only Image:'}</Text>
      <Card ImageUrl={'https://picsum.photos/700'} type={'cover'} />
    </ScrollView>
  );
};

export default RnView;

export const styles = StyleSheet.create({
  cardTitle: {
    color: 'red',
  },
  cardSubText: {
    color: 'green',
  },
});
