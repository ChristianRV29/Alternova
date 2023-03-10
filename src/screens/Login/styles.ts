import { Platform } from 'react-native';

import styled from '@emotion/native';

/*
  This styles will be shared among a few screens (Login and Register)
*/

type OperativeSystem = typeof Platform.OS;

export const CustomKeyboardAvoidingView = styled.KeyboardAvoidingView`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormTitle = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const FormLabel = styled.Text`
  margin-top: 10px;
  color: white;
  font-size: 15px;
  font-weight: 400;
`;

export const TextInputAndroid = `
  margin-bottom: 5px;
  margin-top: 5px;
`;

/*
 CONTEXT - There is a problem with the border-bottom definition on @emotion/native
 SOLUTION Define a general border and modify each side excepting bottom side
*/
export const TextInputiOS = `
  border-left-color: transparent; 
  border-radius: 2px;
  border-right-color: transparent;
  border-top-color: transparent;
  border: 2px solid white;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FormTextInput = styled.TextInput<{
  operativeSystem: OperativeSystem;
}>`
  font-size: 15px;
  color: white;
  ${({ operativeSystem }) =>
    operativeSystem === 'android' ? `${TextInputAndroid}` : `${TextInputiOS}`}
`;

export const ActionButtonsContainer = styled.View`
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  height: 35px;
  justify-content: center;
  margin: 10px 5px;
  width: 150px;
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-size: 15px;
`;
