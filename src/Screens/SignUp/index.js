import React from 'react';

import logo from '../../Assets/img/icon.png';

import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Button,
  Image,
  Box,
  FormControl,
  Input,
} from 'native-base';

const SignUp = function ({navigation}) {
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
              Welcome
            </Heading>
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="medium"
              size="xs">
              Sign up to continue!
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={() => navigation.navigate('Main')}>
                Sign up
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default SignUp;
