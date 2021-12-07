import React from 'react';
import logo from '../../Assets/img/icon.png';

import {Center, Heading, NativeBaseProvider, VStack, Image} from 'native-base';

const Splash = ({navigation}) => (
  <NativeBaseProvider>
    <Center bg="green.300" px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <Image
          source={logo}
          size={150}
          alt="Logo"
          onLoad={() => {
            setTimeout(() => {
              navigation.navigate('SignIn');
            }, 3000);
          }}
        />
        <Heading size="lg">Bem vindo ao iPed</Heading>
      </VStack>
    </Center>
  </NativeBaseProvider>
);

export default Splash;
