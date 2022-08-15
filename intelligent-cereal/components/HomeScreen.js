import React, {useState} from 'react'
import { 
  Button,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

export default function HomeScreen(props) {

  const [nome, setNome]   = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [end, setEnd]   = useState('')
  const [bai, setBai]   = useState('')
  const [cid, setCid]   = useState('')

  return (
    <SafeAreaView>
      <TextInput  
        onChangeText={ (txt) => setNome(txt) }
        placeholder="Nome"
        style={ estilos.input }/>

      <TextInput 
        onChangeText={ (txt) => setEmail(txt) }
        placeholder="E-mail"
        style={ estilos.input } />

      <TextInput 
        onChangeText={ (txt) => setTel(txt) }
        placeholder="Telefone"
        style={ estilos.input } />
      
      <TextInput 
        onChangeText={ (txt) => setEnd(txt) }
        placeholder="Endereço"
        style={ estilos.input } />

      <TextInput 
        onChangeText={ (txt) => setBai(txt) }
        placeholder="Bairro"
        style={ estilos.input } />

      <TextInput 
        onChangeText={ (txt) => setCid(txt) }
        placeholder="Cidade"
        style={ estilos.input } />
      
      <Button 
        title="Revisar e confirmar dados"
        onPress={ () => props.navigation.navigate('Confirmação', {
          nome, email, tel, end, bai, cid
        }) } />

    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  input : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    height : 40,
    lineHeight : 40,
    padding : 8,
    marginBottom : 8,
    marginHorizontal : 8
  }
})