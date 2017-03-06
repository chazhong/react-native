# react-native
React native framework (changed port to 8088)

## 1. Install the React Native command line interface
`npm install -g react-native-cli`

## 2. Testing your React Native Installation
```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```

## 3. Replace port number from 8081 to 8088 (to avoid McAfee coflict)
### 3.1 Replace all port number 8081 in xcode project to 8088
### 3.2 Replace all port number 8081 in node_modules/react-native to 8088
Run the commands below to see how many files contains "8081":
```
cd node_modules/react-native
grep -rnw . -e "8081"
```
Once you know which file contains port number 8081, you can replace them manually one by one.

## 4. Modify index.ios.js to create your index page
The code below adds 2 text lines "Hello World1" and "Hello World2" to your index page.
```javascript
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
```
Now you can perform Cmd+R to refresh the view in your iOS simulator.
