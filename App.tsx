import React from 'react';
import { Button, Text, Input  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, TextInput, Image, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';

const logo = require("./assets/KALO_COLOR.png");

export default function App() {
  return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior="padding" >
      <View style={{ backgroundColor: '#fff',alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <View style={{height: 60, width: '100%', backgroundColor: '#83c9ad', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} />

        <View style={styles.container}>
          <Image source={logo} style={{ width: 200, height: 200, resizeMode: 'contain' }}/>
          <View style={{paddingTop: 50}}>
            <Text h4>Sign up for Kalo newslatter!</Text>
          </View>
          <View style={{paddingVertical: 30}}>
          <Input
            placeholder='your@email.com'
            containerStyle={{width: 400}}
            inputStyle={{paddingLeft:20}}
            // label="Your Email Address"
            leftIcon={
              <Icon
                name='envelope'
                size={20}
                color='grey'
              />
            }
          />
          </View>
          <View>
            <Button
              title="Sign up"
              buttonStyle={{backgroundColor: '#e50062', width: 200}}
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
