import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';




export default class App extends Component<Props> {
  constructor(){
    super();
    this.state={
      PickerValue:''
    }

  };

  clickme=()=>{
    var data = this.state.PickerValue;
    if(data==""){
      alert("Valitse Toimipiste");
    }else{
      alert(data);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Toimipisteet
        </Text>
        <Picker
          style={{width:'80%'}}
          selectedValue={this.state.PickerValue}
          onValueChange={(itemValue,itemIndex) => this.setState({PickerValue
          :itemValue})}
          >
        <Picker.Item label="Valitse toimipiste" value="" />
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="JavaScript" value="JavaScript" />
        <Picker.Item label="React Native" value="React Native" />
        </Picker>
        <Button title="Leimaa sisään" onPress={this.clickme}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
