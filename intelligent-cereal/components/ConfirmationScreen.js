import React, {useState} from 'react'
import { 
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { insertString } from './DB'

export default function ConfirmationScreen(props) {

  const {nome, email, tel, end, bai, cid} = props.route.params;

  return (
    <SafeAreaView>
      <View style={ estilos.page }>
    
        <Text style={ estilos.input }>Nome: {nome}</Text>
        <Text style={ estilos.input }>E-mail: {email}</Text>
        <Text style={ estilos.input }>Telefone: {tel}</Text>
        <Text style={ estilos.input }>Endereco: {end}</Text>
        <Text style={ estilos.input }>Bairro: {bai}</Text>
        <Text style={ estilos.input }>Cidade: {cid}</Text>

        <Button 
          title="Confirmar e Salvar"
          onPress={() => {
          try {
            insertString(nome, email, tel, end, bai, cid, (error) => {
              if ( error ) {
                alert('Não foi possível salvar o nome')
                return
              }

              setNome('')
            })            
            alert('Dados salvos com sucesso')
          } catch (e) {
            alert(e)
          }          
        }} />
        
        <Button 
          title="Cancelar"
          onPress={() => props.navigation.goBack() } />

      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  page : {
    padding : 16
  },
  input : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    height : 40,
    lineHeight : 40,
    padding : 8,
    marginBottom : 8,
    marginHorizontal : 8
  },
})