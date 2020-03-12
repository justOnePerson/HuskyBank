import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, 
    Image, 
    View, 
    Text, 
    Button, 
    ImagePickerIOS, 
    TouchableOpacity 
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

const styles = StyleSheet.create({
  ButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    marginLeft: 10,
  },
  TextStyle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 5,
  },


});
function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
    </View>
  );
}

function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.navigate('StudentLoan')} title="StudentLoan" />
    </View>
  );
}

function StudentLoan({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a student loan</Text>
          <Button onPress={() => navigation.navigate('Main')} title="Main" />
        </View>
      );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }
  
function Homepage({ navigation }) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name=" "
        component={Main}
        options={{
          headerStyle: {
            backgroundColor: '#5A4A99',
          },
          headerLeft: () => (
            
              <TouchableOpacity 
              style={styles.ButtonStyle} 
              activeOpacity={0.5}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
                <Image
                  source={require('./MenuButton.png')}
                />
                <Text style={styles.TextStyle}> Menu </Text>
              </TouchableOpacity>
           
          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
          <Drawer.Screen name="Main" component={Homepage} />
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="Student Loan" component={StudentLoan} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }