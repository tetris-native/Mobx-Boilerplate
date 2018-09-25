import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { observer, inject } from 'mobx-react';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
`;

@inject('store')
@observer
class CargaEstado extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Cargar Nuevo estado</TitleText>    
        <Text>{this.props.store.pepe}</Text>
        <Button title={"buena vieja!"} onPress={()=>console.log("se apreta vieja!!!")}/>
      </ContainerView>
    );
  }
}

export default CargaEstado;
