# react-native
React native framework (changed port to 8088)

## Install the React Native command line interface
`npm install -g react-native-cli`

## Testing your React Native Installation
```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```

## Replace port number from 8081 to 8088 (to avoid McAfee coflict)
### 1. Replace all port number 8081 in xcode project to 8088
### 2.  Replace all port number 8081 in node_modules/react-native to 8088
Run the commands below to see how many files contains "8081":
```
cd node_modules/react-native
grep -rnw . -e "8081"
```
Once you know which file contains port number 8081, you can replace them manually one by one.
