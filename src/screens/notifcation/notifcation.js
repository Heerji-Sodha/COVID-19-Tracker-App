import React from 'react'
import {View, Text,StyleSheet} from 'react-native'


class Notifcation extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
       <View style={styles.View}>
           <Text>Nofifcation</Text>
       </View>
        )
    }
}

const styles = StyleSheet.create({
    View:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Notifcation
