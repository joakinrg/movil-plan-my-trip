import React from 'react';
import { Text } from 'react-native';

const Texto = ({ children, size = "small", type = "text" }) => {
    const baseStyles = {
        color: 'white',
        fontSize: size === "extrasmall" ? 10 :
                    size === "small" ? 14 : 
                    size === "medium" ? 16 : 
                    size === "big" ? 24 : 
                    32,
    };

    const additionalStyles = {};
    if (type === "button") {
        additionalStyles.textAlign = "center";
    } else if (type === "title") {
        additionalStyles.marginTop = 5;
        additionalStyles.marginBottom = 5;
        additionalStyles.textAlign = "center";
    } else if (type === "text") {
        additionalStyles.textAlign = "justify";
    } else if (type === "label") {
        additionalStyles.marginVertical = 5;
        additionalStyles.textAlign = "center";
    }

    const textStyles = [
        { ...baseStyles },
        { ...additionalStyles },
    ];

    return (
        <Text style={textStyles}>{children}</Text>
    );
}

export default Texto;