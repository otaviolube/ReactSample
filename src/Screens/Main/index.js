import React from 'react';

import logo from '../../Assets/img/icon.png';

import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Image,
  Box,
  Button,
} from 'native-base';

const Main = function ({navigation}) {
  return (
    <NativeBaseProvider>
      <Center bg="green.300" px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <Image source={logo} size={100} alt="Logo" />
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="lg"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
              fontWeight="semibold">
              Main Screen
            </Heading>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => navigation.navigate('Recomendations')}>
              Go for recomendations
            </Button>
          </Box>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Main;
