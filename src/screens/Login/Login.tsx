/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment, useContext, useEffect } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BackgroundShape, Toggler } from '~src/components';

import { useForm } from '~src/hooks';

import {
  ActionButton,
  ActionButtonsContainer,
  ActionButtonText,
  CustomKeyboardAvoidingView,
  FormContainer,
  FormLabel,
  FormTextInput,
  FormTitle,
  TitleContainer,
  Wrapper,
} from './styles';
import { RootStackParamList } from '~src/@types';
import { AlternovaLogo } from '~src/components';
import { AuthContext } from '~src/context';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export const Login: FC<Props> = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: undefined,
    password: undefined,
  });

  useEffect(() => {
    if (errorMessage) {
      Alert.alert('Wrong login', errorMessage, [
        {
          text: 'Ok',
          onPress: removeError,
        },
      ]);
    }
  }, [errorMessage]);

  const onLogin = () => {
    Keyboard.dismiss();

    if (email && password) {
      signIn({ email, password });
    }
  };

  return (
    <Fragment>
      <BackgroundShape />
      <CustomKeyboardAvoidingView>
        <Wrapper style={{ top: top }}>
          <AlternovaLogo />
          <FormContainer>
            <TitleContainer>
              <FormTitle>Login</FormTitle>
              <Toggler />
            </TitleContainer>
            <FormLabel>Email</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => onChange(value, 'email')}
              onSubmitEditing={onLogin}
              operativeSystem={Platform.OS}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              selectionColor="white"
              underlineColorAndroid="white"
              value={email}
            />
            <FormLabel>Password</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'password')}
              onSubmitEditing={onLogin}
              operativeSystem={Platform.OS}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              secureTextEntry
              selectionColor="white"
              underlineColorAndroid="white"
              value={password}
            />
            <ActionButtonsContainer>
              <ActionButton
                onPress={() => navigation.navigate('RegisterScreen')}>
                <ActionButtonText>Register</ActionButtonText>
              </ActionButton>
              <ActionButton onPress={onLogin}>
                <ActionButtonText>Login</ActionButtonText>
              </ActionButton>
            </ActionButtonsContainer>
          </FormContainer>
        </Wrapper>
      </CustomKeyboardAvoidingView>
    </Fragment>
  );
};
