import React, { useState } from 'react'
import { ActivityIndicator, Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import { FirebaseAuth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const AuthScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = FirebaseAuth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response)
      alert("Check you credentials")
    } catch (error:any) {
      console.log(error)
      alert("SignIn failed: "+ error.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response)
      alert("Check you credentials")
    } catch (error:any) {
      console.log(error)
      alert("SignIn failed: "+ error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
      <TextInput style={styles.input} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)} secureTextEntry={true} />

      {
        loading ?
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <>
            <Button title='SignIn' onPress={signIn} />
            <Button title='Create Account' onPress={signUp} />
          </>
      }
      </KeyboardAvoidingView>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  }
})