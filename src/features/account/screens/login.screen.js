import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
  Title,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Foodie</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
            loading={isLoading}
            disabled={isLoading}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
