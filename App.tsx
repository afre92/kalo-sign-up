import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';

const logo = require("./assets/KALO_COLOR.png");

export default function App() {
  return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior="padding" >
      <View style={{ backgroundColor: '#fff',alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
        <View style={{height: 80, width: '100%', backgroundColor: '#83c9ad', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} />

        <View style={styles.container}>
          <Image source={logo}/>
          <Text>Sign up for Kalo newslatter!</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 500 }}
          />
          <View>
            <Button
              title="Sign up"
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
