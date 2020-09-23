import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

export default class QRCodeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
    };
  }

  componentDidMount () {
    this.onOpneScanner();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
      return true;
  }

  _onPressBack () {
    this.props.navigation.pop();
  }

  onOpenlink() {
    //Function to open URL, If scanned
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onQRCodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    if (qrvalue == "" || qrvalue == undefined)
      return;

    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
    
    let qrSplit = qrvalue.split(',');
    let newQRCode = {
      Surname: qrSplit[0],
      Gender: qrSplit[1],
      Age: qrSplit[2],
      Phone: qrSplit[3],
    }
    console.log(newQRCode);
    this.props.navigation.navigate('Profile', newQRCode)
  }

  onOpneScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'Camera access permission',
              'message': ''
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
    }
  }
  render() {
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>
            <Text style={styles.heading}>Please start QRCode scanner</Text>
            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
            {this.state.qrvalue.includes("http") ? 
              <TouchableHighlight
                onPress={() => this.onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableHighlight>
              : null
            }
            <TouchableHighlight
              onPress={() => this.onOpneScanner()}
              style={styles.button}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                  Start
                </Text>
            </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onQRCodeScan(event.nativeEvent.codeStringValue)
          }
        />

        <TouchableHighlight
          onPress={() => this._onPressBack()}
          style={{ position: "absolute", bottom: 40, width: "100%", justifyContent: "center", }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, textAlign: "center", textAlignVertical: "center" }}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
});