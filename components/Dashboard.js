// Dashboard.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-native';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from './Navbar';



const Dashboard = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLoginPress = () => {
        navigate('/');
    };


    const data = [
        {
            id: '1',
            icon: 'file-text',
            title: 'Solicitud',
            description: 'Gestiona tus solicitudes aquí',
            routeName: 'solicitud'

        },
        {
            id: '2',
            icon: 'user',
            title: 'Información Personal',
            description: 'Actualiza tus datos personales'
        },
        {
            id: '3',
            icon: 'calculator', // Un ícono que se puede relacionar con "simulación"
            title: 'Simulación',
            description: 'Realiza una simulación financiera',
             routeName: 'SimulacionP'
        },
        {
            id: '4',
            icon: 'credit-card', // Un ícono relacionado con "pagos"
            title: 'Pagos',
            description: 'Gestiona y verifica tus pagos'
        },
        {
            id: '5',
            icon: 'check-circle', // Ícono que puede representar paz y tranquilidad
            title: 'Paz y Salvo',
            description: 'Imprimir paz y salvo'
        },
        {
            id: '6',
            icon: 'print', // Ícono representativo para imprimir
            title: 'Recibo',
            description: 'Imprimir copia'
        }
    ];

    // );
    // const ListItem = ({ item, theme }) => (
    //     <View style={[
    //         styles.itemContainer,
    //         { backgroundColor: theme.navbarBackground, borderBottomColor: theme.inputBorder }
    //     ]}>
    //         <View style={[
    //             styles.iconCircle,
    //             { backgroundColor: theme.background }  // Asumiendo que quieras que el círculo tenga el mismo color que el fondo del tema
    //         ]}>
    //             <Icon name={item.icon} size={20} style={[styles.icon, { color: theme.iconColor }]} />
    //         </View>
    //         <View style={styles.textContainer}>
    //             <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
    //             <Text style={[styles.description, { color: theme.text }]}>{item.description}</Text>
    //         </View>
    //     </View>
    // );
    const ListItem = ({ item, theme }) => {
        const navigate = useNavigate();
    
        return (
            <TouchableOpacity 
                style={[
                    styles.itemContainer,
                    { backgroundColor: theme.navbarBackground, borderBottomColor: theme.inputBorder }
                ]}
                onPress={() => navigate(item.routeName)}
            >
                <View style={[
                    styles.iconCircle,
                    { backgroundColor: theme.background }  // Asumiendo que quieras que el círculo tenga el mismo color que el fondo del tema
                ]}>
                    <Icon name={item.icon} size={20} style={[styles.icon, { color: theme.iconColor }]} />
                </View>
    
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
                    <Text style={[styles.description, { color: theme.text }]}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    
    
    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <Navbar companyName="Mi Empresa" onLogout={handleLoginPress} />

            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem item={item} theme={theme} />}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => <Text>No hay datos</Text>}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2
    },
    icon: {
        marginRight: 16,
        fontSize: 36
    },
    textContainer: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14
    },
    iconCircle: {
        width: 50, // o el tamaño que prefieras
        height: 50,
        borderRadius: 25,  // la mitad del width/height para hacerlo círculo
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
        shadowOpacity: 0.25, // Opacidad de la sombra en iOS
        shadowRadius: 3.84, // Radio de la sombra en iOS
        elevation: 5,  // Sombra para Android
    },
    icon: {
        color: '#3498db' // Este color será anulado por el estilo que pasa al ícono desde ListItem, pero lo dejo por consistencia
    },
});

export default Dashboard;
