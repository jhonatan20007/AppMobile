// src/contexts/ThemeContext.js

import { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const scheme = useColorScheme();
    const lightTheme = {
        // ... (otros colores y estilos)
        background: '#FAF3E0',
        buttonBackground: '#1877f2', // Asumiendo que este es el color que deseas para ambos modos
        buttonText: '#FFFFFF',
        linkText: '#1877f2',
        inputText: '#000000',  // Color negro para el texto en modo claro
        inputPlaceholder: '#7D7D7D',  // Color gris para el placeholder en modo claro (puedes ajustar según tu preferencia)
        inputBorder: '#B3B3B3',
        iconColor: '#007BFF',
        navbarBackground: '#FAF3E0',
        text: '#000',

    }; 
    
    const darkTheme = {
        mode: 'dark',
        background: '#000000',
        text: '#FFFFFF',
        buttonBackground: '#1877f2', 
        buttonText: '#FFFFFF',
        linkText: '#FFFFFF',
        inputText: '#FFFFFF',  // Color blanco para el texto en modo oscuro
        inputPlaceholder: '#B3B3B3',  // Color gris claro para el placeholder en modo oscuro (puedes ajustar según tu preferencia)
        inputBorder: '#B3B3B3',
        iconColor: '#007BFF',     
        navbarBackground: '#444'
    };
    
    


    const theme = scheme === 'dark' ? darkTheme : lightTheme;

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
