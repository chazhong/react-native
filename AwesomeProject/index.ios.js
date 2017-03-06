import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC94C',
        margin: 20,
    },
    text: {
        fontSize: 16,
        margin: 10,
        textAlign: 'left',
        color: '#FF0000',
    },
});

export default class AwesomeComponent extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Hello World1</Text>
            <Text style={styles.text}>Hello World2</Text>
          </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeComponent);
