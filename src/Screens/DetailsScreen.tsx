
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const InfoScreen = ({route}:any) => {
    return (
        <View style={styles.container}>
            <Text>{route.params.info.accessionNumber}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
});


export default InfoScreen;
