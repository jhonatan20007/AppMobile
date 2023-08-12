import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Reemplaza 'nombre-del-paquete-icono' con el nombre real del paquete que estés utilizando
import { useTheme } from '../contexts/ThemeContext'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const Navbar = ({ companyName = 'Nombre Empresa', onLogout }) => {
    const theme = useTheme(); // Suponiendo que estás usando un hook para el tema

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.navbar, { backgroundColor: theme.navbarBackground }]}>
                <Text style={[styles.productName, { color: theme.text }]}>{companyName}</Text>
                <Icon name="sign-out" size={24} color={theme.text} onPress={onLogout} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom:10
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 15
    },
    productName: {
        fontSize: 24,
        fontFamily: "BebasNeue-Regular"
    },
    loginButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 2.62
    },
    loginText: {
        fontSize: 16
    },
    productName: {
        fontSize: 24,
        fontFamily: "BebasNeue-Regular"
    },
});

export default Navbar;
