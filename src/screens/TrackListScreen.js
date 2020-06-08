import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native'

const TrackListScreen=({navigation})=>{

    return(<View>
                <Text > This is TrackListScreen</Text>
                <Button title="Go To Track Detail"
                        onPress={()=>navigation.navigate("trackDetail")}/>
            
            </View>);
}

const styles= StyleSheet.create({
    
});

export default TrackListScreen;