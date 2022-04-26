    import React, {useContext, useState} from 'react';
    import {
        Button,
        Text,
        TextInput,
        TouchableOpacity,
        View,
        StyleSheet,
    } from 'react-native';
    import Spinner from 'react-native-loading-spinner-overlay';
    import {AuthContext} from '../context/AuthContext';

    const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image style={styles.bgimage} source={require('https://coopdgii.com/wp-content/uploads/2019/10/Logo-Coop2-01.png')}/>
            <Spinner visible={isLoading} />
                <View style={styles.wrapper}>
                    <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Enter usuario"
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                value={password}
                placeholder="Enter clave"
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <Button
            title="Login"
            onPress={() => {
                login(email, password);
            }}
            />

            <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Tienes problemas para iniciar? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>seccion</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },
    bgimage:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    });

    export default LoginScreen;
