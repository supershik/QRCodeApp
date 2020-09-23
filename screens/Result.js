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
class Result extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* Uploading images section */}
                <View style={styles.logoWrapper}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ paddingTop: 15, fontSize: 22, color: 'blue' }}>Reset Password</Text>
                        <Text style={{ paddingTop: 5 }}>Please enter your email and phone number</Text>
                    </TouchableOpacity>
                </View>
                {/* entries for registering */}
                <View style={styles.entryWrapper}>
                    <View>

                        <View>
                            <Text style={styles.placeholderWrapper}>Password</Text>
                            <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'******'} style={styles.input} />
                        </View>

                        {Platform.OS === 'android' ? <View style={{ height: 25 }} /> : null}

                        <View>
                            <Text style={styles.placeholderWrapper}>Confirm Password</Text>
                            <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder={'******'} style={styles.input} />
                        </View>
                    </View>

                    {/* register btn */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.mainBtn}>
                        <Text style={{ fontSize: 17, color: '#ffff' }}>Reset</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView >
        );
    }
}
export default Result;

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
        flex: 7,
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
