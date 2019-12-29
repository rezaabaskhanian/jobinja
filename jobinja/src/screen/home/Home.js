import React, { Component } from 'react';
import Colors from '../../assets/color/Colors'
import { StyleSheet,View,Text,TouchableOpacity,  Dimensions,Image} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const box = require('../../assets/img/box.png')
const person = require('../../assets/img/pers.png')
const medal = require('../../assets/img/medal.png')
const diamond = require('../../assets/img/diamond.png')
class Home extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.topLabel}>
                    <View style={styles.viewPrs}>
                      <Image style={styles.imgPers}  source={person}/>
                      <Text style={styles.user}>{'Farid'}</Text>
                    </View>
                    <View style={styles.viewMiddle}>
                    <Image   source={medal}/>
                    <Text> {'1'}</Text>
                    <Image  source={diamond}/>
                    <Text> {'2'}</Text>
                    </View>
                    <View style={styles.viewImg}>
                      <Image  style={styles.imgBox} source={box}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.bottomLabel}>
                    <Text style={styles.textButton}>
                       {'شروع بازی'}
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.backgrounBlue,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topLabel: {
        marginTop: 15,
        width: windowWidth / 1.2,
        height: windowHeight / 9,
        borderRadius: windowWidth / 13,
        flexDirection:'row',
        backgroundColor: Colors.labelGreen,
        justifyContent:'space-between',
        paddingHorizontal:5
    },
    viewImg:{
        justifyContent:'center',
        alignItems:'center'
    },
    viewMiddle:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    viewPrs:{
        flexDirection:'row',
        alignItems:'center',
    },
    imgPers:{
        width:windowWidth/6,
        height:windowHeight/11,
        borderRadius:windowWidth/6
             },
    user:{marginLeft:5,
          fontSize:15,
           color:Colors.white
             }, 
    imgBox:{
          width:windowWidth/10,
          height:windowHeight/13
    },  
    bottomLabel: {
        marginBottom: 15,
        width: windowWidth / 1.2,
        height: windowHeight / 9,
        borderRadius: windowWidth / 13,
        backgroundColor: Colors.labelGreen,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize:15,
        color:Colors.white
    },
})
export default Home