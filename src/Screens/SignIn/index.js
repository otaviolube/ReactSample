import React from 'react';

import logo from '../../Assets/img/icon.png';

import {
  Link,
  Text,
  HStack,
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

const SignIn = function ({navigation}) {
  return (
    <NativeBaseProvider>
      <Center bg="green.300" px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <Image source={logo} size={100} alt="Logo" />
          <Box safeArea p="2" py="8" w="90%" maxW="800">
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: 'warmGray.200',
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs">
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Button
                mt="2"
                colorScheme="indigo"
                onPress={() => navigation.navigate('Main')}>
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  I'm a new user.{' '}
                </Text>
                <Link
                  _text={{
                    color: 'indigo.500',
                    fontWeight: 'medium',
                    fontSize: 'sm',
                  }}
                  onPress={() => navigation.navigate('SignUp')}>
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default SignIn;
