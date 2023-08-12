import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SimulationScreen() {
    return (
        <View style={styles.container}>

            {/* Encabezado */}
            <View style={styles.header}>
                <Icon name="arrow-left" size={20} onPress={() => { /* Regresar al Dashboard */ }} />
                <Text style={styles.navbar}>Simulación</Text>
                <TouchableOpacity onPress={() => { /* Regresar al login */ }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>

            {/* Contenido principal */}
            <TextInput placeholder="Valor del crédito" style={styles.input} />
            
            <View style={styles.selectorContainer}>
                <Picker style={styles.picker}>
                    {/* Aquí van tus opciones para el número de cuotas */}
                    <Picker.Item label="12 Cuotas" value="12" />
                    <Picker.Item label="24 Cuotas" value="24" />
                </Picker>
                
                <TouchableOpacity style={styles.calculateButton}>
                    <Icon name="calculator" size={20} />
                </TouchableOpacity>
            </View>

            {/* Resultados de simulación */}
            <Text>Valor financiero: $XXXXX</Text>
            <Text>Cuota mensual: $XXXXX</Text>
            <Text>Financiación: XXX%</Text>
            <Text>Otros cobros: $XXXXX</Text>

            {/* Sección de Plan de pagos */}
            <Text style={styles.sectionTitle}>Plan de pagos</Text>

            {/* Aquí deberías colocar tu tabla de pagos. Recomiendo usar una librería como react-native-table-component para facilitar esto. */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    navbar: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    selectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    picker: {
        flex: 3
    },
    calculateButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'lightgray'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    }
});
