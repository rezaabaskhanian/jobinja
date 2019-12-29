import React, { Component } from 'react';
import Colors from '../../assets/color/Colors'

import {

    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text>
                    Drafts
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.white,
    },

})

export default Home