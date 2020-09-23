import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    Picker,
    Platform
} from "react-native";


//reset
class profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Surname: "",
            Gender: "",
            Age: "",
            Phone: "",
        }
    }

    componentDidMount() {
        
        console.log('--------------', this.props.route?.params)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.route?.params == this.props.route?.params)
            return;

        this.setState({
            Surname: this.props.route?.params?.Surname,
            Gender: this.props.route?.params?.Gender,
            Age: this.props.route?.params?.Age,
            Phone: this.props.route?.params?.Phone,
        })

        console.log(this.props.route?.params)
        console.log(prevProps.route?.params)
        
    }
    render() {
        const { Surname, Gender, Age, Phone } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoWrapper}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ paddingTop: 15, fontSize: 22, color: 'black' }}>Profile Setting</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.entryWrapper}>
                    <View>
                        <View>
                            <Text style={styles.placeholderWrapper}>Surname</Text>
                            <TextInput
                                placeholderTextColor={'black'}
                                placeholder={''}
                                style={styles.input}
                                value={Surname}
                            />
                        </View>

                        {Platform.OS === 'android' ? <View style={{ height: 15 }} /> : null}

                        <View>
                            <Text style={styles.placeholderWrapper}>Gender</Text>
                            <TextInput
                                placeholderTextColor={'black'}
                                placeholder={''}
                                style={styles.input}
                                value={Gender}
                            />
                        </View>

                        {Platform.OS === 'android' ? <View style={{ height: 15 }} /> : null}

                        <View>
                            <Text style={styles.placeholderWrapper}>Age</Text>
                            <TextInput
                                placeholderTextColor={'black'}
                                placeholder={''}
                                style={styles.input}
                                value={Age}
                            />
                        </View>

                        {Platform.OS === 'android' ? <View style={{ height: 15 }} /> : null}

                        <View>
                            <Text style={styles.placeholderWrapper}>Phone Number</Text>
                            <TextInput
                                placeholderTextColor={'black'}
                                placeholder={''}
                                style={styles.input}
                                value={Phone}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('QRCode')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#ffff' }}>QR Code Scanner</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView >
        );
    }
}
export default profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    logoWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    entryWrapper: {
        flex: 8,
        paddingHorizontal: 25,
        justifyContent: 'space-around',
        paddingVertical: 20,
        paddingBottom: 50
    },
    input: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    mainBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
        backgroundColor: "red",
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputPhone: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        fontSize: 16,
        width: '80%',
    },
    placeholderWrapper: {
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        fontSize: 14, opacity: 0.5,
    }
});
