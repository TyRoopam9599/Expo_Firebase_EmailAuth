import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { User, onAuthStateChanged } from 'firebase/auth';
import AuthScreen from './Screens/AuthScreen';
import List from './Screens/List';
import Details from './Screens/Details';
import { FirebaseAuth } from './Firebase';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

const InsideLayout = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='My Todos' component={List} />
      <InsideStack.Screen name='Details' component={Details} />
    </InsideStack.Navigator>
  )
}

const App = () => {

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      console.log("User: ", user)
      setUser(user);
    })
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? (
            <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name='Auth' component={AuthScreen} options={{ headerShown: false }} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App