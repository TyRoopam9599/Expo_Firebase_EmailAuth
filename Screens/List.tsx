import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { FirebaseAuth } from '../Firebase'

interface RouterProps {
    navigation: NavigationProp<any, any> ;
}

const List = ({navigation} : RouterProps) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Details')} title='Open Details' />
      <Button onPress={() => FirebaseAuth.signOut()} title='Logout'/>
    </View>
  )
}

export default List

const styles = StyleSheet.create({})