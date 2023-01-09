import React, { useEffect } from 'react'
import { Text, View, StyleSheet, DrawerLayoutAndroidBase, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'

export const Screen2 = ({ navigation }) => {
    const [minute, setminute] = useState(0)
    const [sec, setsec] = useState(0)
    const [ms, setms] = useState(0)
    const [inter, setinter] = useState(0);


    const [timeron, settimeron] = useState(0)
    const [stopped, setstop] = useState(0)

    let currms = ms;
    let currsec = sec;
    let currminute = minute;

    const Showpage = (page) => {
        navigation.navigate(page)
    }

    const updatetimer = () => {
        if (currms == 60) {
            currms = 0;
            currsec++;
        }

        if (currsec == 60) {
            currsec = 0;
            currms = 0;
            currminute++;
        }
        currms++;

        setminute(currminute)
        setms(currms)
        setsec(currsec)
    }

    const starttimer = () => {
        updatetimer()
        setinter(setInterval(updatetimer, 1000));
        settimeron(1)
        setstop(0)

    }


    const stoptimer = () => {
        setstop(1)

        clearInterval(inter)
    }
    const resetttimer = () => {
        settimeron(0)
        setminute(0)
        setsec(0);
        setms(0)
        clearInterval(inter)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.number} >{minute > 9 ? minute : '0' + minute}
                <Text style={styles.small}>HR</Text>
            </Text>
            <Text style={styles.number} >{sec > 9 ? sec : '0' + sec}
                <Text style={styles.small}>MIN</Text>
            </Text>
            <Text style={styles.number} >{ms > 9 ? ms : '0' + ms}
                <Text style={styles.small}>SEC</Text>
            </Text>

            {timeron == 0 ?
                <View style={styles.startstop}>
                    <TouchableOpacity onPress={starttimer}>
                        <Text style={styles.start}>Start</Text>

                    </TouchableOpacity>

                </View> :

                <View style={styles.startstop}>
                    <TouchableOpacity onPress={resetttimer}>
                        <Text style={styles.reset}>Reset</Text>

                    </TouchableOpacity>
                    {stopped == 0 ?
                        <TouchableOpacity onPress={stoptimer}>
                            <Text style={styles.stop}>Stop</Text>

                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={starttimer}>
                            <Text style={styles.stop}>Continue</Text>

                        </TouchableOpacity>}
                </View>}





            <View style={styles.bottomnav}>
                <TouchableOpacity style={styles.bottomnaviconout}
                    onPress={() => Showpage('s1')}>
                    {/* <Text style= {styles.bottomnavtext }>+</Text> */}

                    <Image source={require('../assets/clockicon.png')} style={styles.bottomnavicon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomnaviconoutactive}
                    onPress={() => Showpage('s2')}>
                    {/* <Text style ={styles.bottomnavtext}>-</Text> */}
                    <Image source={require('../assets/timericon.png')} style={styles.bottomnavicon} />
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

    small: {
        color: 'grey',
        fontSize: 15,
    },


    number: {
        color: 'white',
        fontSize: 190,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 190,
        height: 180,
    },
    startstop: {
        flexDirection: 'row',
        marginVertical: 50,
        marginTop: 2,
    },

    start: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 1,
    },
    reset: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1,

    },

    stop: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 1,

    },



    bottomnav: {
        flexDirection: 'row',
        // backgroundColor: 'white',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },

    bottomnavicon: {


        width: 35,
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