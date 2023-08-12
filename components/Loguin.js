// Login.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// const Login = () => {
//     const theme = useTheme();
//     const navigate = useNavigate();
//     const handleLoginPress = () => {
//         // Supongamos que tienes una ruta definida para '/dashboard' en tus rutas
//         navigate('/dashboard');
//     };

//     return (
//         <View style={[styles.container, { backgroundColor: theme.background }]}>
//             {/* Imagen */}
//             <Image
//                 style={styles.image}
//                 source={require('../Img/Innova.png')}
//             />

//             {/* Input para la contraseña */}
//             <TextInput
//                 style={[styles.input, {
//                     color: theme.inputText,
//                     backgroundColor: theme.inputBackground,
//                     borderColor: theme.inputBorder  // Color gris para el borde
//                 }]}
//                 placeholder="Cedula"
//                 placeholderTextColor={theme.inputPlaceholder}
//             />

//             {/* Botón para ingresar */}

//             <TouchableOpacity
//                 style={[styles.loginButton, { backgroundColor: theme.buttonBackground }]}
//                 onPress={handleLoginPress}
//             >
//                 <Text style={[styles.loginText, { color: theme.buttonText }]}>Ingresar</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => { }}>
//                 <Text style={[styles.forgotPassword, { color: theme.linkText }]}>
//                     ¿Olvidaste tu contraseña?
//                 </Text>
//             </TouchableOpacity>

//             {/* Botón para crear crédito */}
//             <TouchableOpacity style={[styles.registerButton, {}]} onPress={() => { }}>
//                 <Text style={[styles.registerText, { color: theme.linkText }]}>
//                     Crear Crédito
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
const Login = () => {
    const [cedula, setCedula] = useState('');
    const [codigo, setCodigo] = useState('');
    const [paso, setPaso] = useState('cedula');  // Estado para controlar el paso actual
    const [showError, setShowError] = useState(false); // Agregar este estado al inicio del componente

    const theme = useTheme();
    const navigate = useNavigate();
    const ErrorMessage = ({ title, description, theme }) => (
        <View 
            style={[
                styles.errorContainer,
                theme.mode === 'dark' ? styles.darkErrorContainer : {}, // Usa el fondo oscuro si el tema está en modo oscuro
                { backgroundColor: theme.background }
            ]}
        >
            <Icon name="exclamation-triangle" size={30} color="#FF0000" style={styles.errorIcon} />
            <View style={styles.errorTextContainer}>
                <Text style={[styles.errorTitle, { color: theme.text }]}>{title}</Text>
                <Text style={[styles.errorDescription, { color: theme.text }]}>{description}</Text>
            </View>
        </View>
    );
    const handleLoginPress = () => {
        if (paso === 'cedula') {
            // Cambiamos al paso de verificación de código
            setPaso('codigo');
            setShowError(false); // Esconde el mensaje de error si previamente estaba mostrándose
        } else if (codigo === '123') {
            navigate('/dashboard');
            setShowError(false); // En caso de que quieras resetear el error antes de cambiar de vista
        } else {
            // Muestra el mensaje de error en lugar del alert
            setShowError(true);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Imagen */}
            <Image
                style={styles.image}
                source={require('../Img/Innova.png')}
            />

            {/* Mostrar el input de cédula solo si estamos en el paso 'cedula' */}
            {paso === 'cedula' && (
                <TextInput
                    style={[styles.input, {
                        color: theme.inputText,
                        backgroundColor: theme.inputBackground,
                        borderColor: theme.inputBorder
                    }]}
                    placeholder="Cedula"
                    placeholderTextColor={theme.inputPlaceholder}
                    onChangeText={text => setCedula(text)}
                    value={cedula}
                />
            )}

            {/* Mostrar el input de código y mensaje solo si estamos en el paso 'codigo' */}
            {paso === 'codigo' && (
                <>
                    <Text style={{ color: theme.text, marginVertical: 10 }}>
                        Por favor, digite el número que le llegó al celular.
                    </Text>
                    <TextInput
                        style={[styles.input, {
                            color: theme.inputText,
                            backgroundColor: theme.inputBackground,
                            borderColor: theme.inputBorder
                        }]}
                        placeholder="Código"
                        placeholderTextColor={theme.inputPlaceholder}
                        onChangeText={text => setCodigo(text)}
                        value={codigo}
                    />
                </>
            )}


            {/* Botón para ingresar */}

            <TouchableOpacity
                style={[styles.loginButton, { backgroundColor: theme.buttonBackground }]}
                onPress={handleLoginPress}
            >
                <Text style={[styles.loginText, { color: theme.buttonText }]}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
                <Text style={[styles.forgotPassword, { color: theme.linkText }]}>
                    ¿Olvidaste tu contraseña?
                </Text>
            </TouchableOpacity>
            {showError && <ErrorMessage theme={theme} title="Error" description="Código incorrecto, por favor intenta de nuevo." />}

            {/* Botón para crear crédito (Esto debería aparecer solo si estás en el paso de cédula, o según tu lógica de negocio) */}
            {paso === 'cedula' && (
                <TouchableOpacity style={[styles.registerButton, {}]} onPress={() => { }}>
                    <Text style={[styles.registerText, { color: theme.linkText }]}>
                        Crear Crédito
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 150,   // ajusta estos valores según lo que necesites
        height: 150,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    input: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
    loginButton: {
        width: '90%',
        height: 45,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword: {
        marginTop: 15,
        fontSize: 16,
    },
    registerButton: {
        width: '90%',
        height: 45,
        marginTop: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE5E5', // Fondo rosado claro
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    errorIcon: {
        marginRight: 10,
    },
    errorTextContainer: {
        flex: 1,
    },
    errorTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000', // Valor por defecto para el tema claro
    },
    errorDescription: {
        fontSize: 14,
        color: '#000000', // Valor por defecto para el tema claro
    },
    errorContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#F0F0F0', // Fondo claro por defecto
    },
    darkErrorContainer: {
        backgroundColor: '#333333', // Fondo oscuro para el mensaje
    },
});

export default Login;
