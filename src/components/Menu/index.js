import React from "react";

import QRCode from "react-native-qrcode-svg";

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  AccountInfo,
  AccountInfoText,
  AccountInfoTextBold,
} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode
          value="http://awesome.link.qr"
          size={90}
          backgroundColor="#fff"
          color="#83259f"
        />
      </Code>

      <AccountInfo>
        <AccountInfoText>
          Banco
          <AccountInfoTextBold> 260 - Nu Pagamentos S.A</AccountInfoTextBold>
        </AccountInfoText>

        <AccountInfoText>
          Agência
          <AccountInfoTextBold> 0001</AccountInfoTextBold>
        </AccountInfoText>

        <AccountInfoText>
          Conta
          <AccountInfoTextBold> 1082422-1</AccountInfoTextBold>
        </AccountInfoText>
      </AccountInfo>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações conta</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Pedir conta PJ</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
          <Icon
            name="keyboard-arrow-right"
            size={16}
            color="#FFF"
            style={{ marginLeft: "auto" }}
          />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
