import React, { useEffect } from 'react'
import { Text, View, StyleSheet, DrawerLayoutAndroidBase, TouchableOpacity,Image } from 'react-native'
import { useState } from 'react'

export const Screen1 = ({navigation}) => {
    const [hour, setHour] = useState('00')
    const [minute, setminute] = useState('00')
    const [second, setsec] = useState('00')
    const [ampm, setampm] = useState('AM')

    useEffect(() => {
        getHour()
        getMinute()
        getSecond()
        getampm()
    }, [])


    setInterval(() => {

        getHour()
        getMinute()
        getSecond()
        getampm()
    }, 1000)

    const Showpage=(page)=>{
        navigation.navigate(page)
    }

    const getHour = () => {
        const date = new Date();
        const hour = date.getHours();
        // console.log(hour)
        hour > 9 ? setHour(hour) : setHour('0' + hour)


    }

    const getMinute = () => {
        const date = new Date();
        const minute = date.getMinutes();
        minute > 9 ? setminute(minute) : setminute('0' + minute)

    }
    const getSecond = () => {
        const date = new Date();
        const second = date.getSeconds();
        second > 9 ? setsec(second) : setsec('0' + second)
    }

    const getampm = () => {
        const date = new Date();
        const ampm = date.getHours >= 12 ? 'PM' : 'AM'
        setampm(ampm)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.hour} >{hour}</Text>
            <Text style={styles.minutes} >{minute}</Text>
            <Text style={styles.seconds} >{second}</Text>
            <Text style={styles.ampm} >{ampm}</Text>



            <View style={styles.bottomnav}>
                <TouchableOpacity  style= {styles.bottomnaviconoutactive} 
                onPress={()=>Showpage('s1')
                }>
                    {/* <Text style= {styles.bottomnavtext }>+</Text> */}

                    <Image source={require('../assets/clockicon.png')}  style= {styles.bottomnavicon}/>
                </TouchableOpacity>

                <TouchableOpacity   style= {styles.bottomnaviconout} 
                onPress={()=>Showpage('s2')}>
                    {/* <Text style ={styles.bottomnavtext}>-</Text> */}
                    <Image source={require('../assets/timericon.png')}  style= {styles.bottomnavicon}/>
                </TouchableOpacity>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    hour: {

        color: 'white',
        fontSize: 240,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 240,
        height: 210,

    },

    minutes: {
        color: 'grey',
        fontSize: 240,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 240,
        height: 210,
    },
    seconds: {
        color: 'white',
        fontSize: 240,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 240,
        height: 210,
    },
    // ampm:{
    //     color: 'White',
    // }

    bottomnav:{
        flexDirection: 'row',
        // backgroundColor: 'white',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },

    bottomnavicon: {
        width : 35,
        height: 35,  
       
 
    },

    bottomnaviconoutactive: {
        width: 75,
        height: 45,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottomnaviconout: {
        width: 75,
        height: 45,
        backgroundColor: 'grey',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    
});