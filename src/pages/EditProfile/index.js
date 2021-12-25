import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TextInput , TouchableOpacity, Navigatio } from 'react-native'
import fotoprofile from "../../assets/image/image-page/foto.png";
import xicon from "../../assets/image/image-page/xicon.png";
import accept from "../../assets/image/image-page/acc.png";


const EditProfile = ({navigation}) => {
    return (
        <View style={{ flex: 1,flexDirection: 'column' }}>
            <View style={{height: 56, backgroundColor: "white",flexDirection: "row", }}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
                <View style={{  flex: 1, backgroundColor: "white" }}>
                    <Image style={{ height:32, width: 32, marginLeft:12, marginTop:12}} source = {xicon}/>
                </View>
                </TouchableOpacity>
                <Text style={{  color: 'black',padding:12 ,fontWeight: 'bold' ,fontSize: 22 ,flex: 4, marginLeft:6, backgroundColor: "white" }}>
                Ini Edit Profile
                </Text>
                <TouchableOpacity style={{ flex: 1}} onPress={()=>{alert("Profile Telah Diedit")}}>
                <View style={{  flex: 1, backgroundColor: "white"}}>
                    <Image style={{ height:22, width: 22, marginLeft:17, marginTop:17}} source = {accept}/>
                </View>
                </TouchableOpacity>
            </View>
            <ScrollView >
                <View style={{height: 200, backgroundColor: "white"}}>
                    <View style={{marginTop:20, marginLeft:16, alignItems:"center"} }>
                        <Image style={{ height:100, width: 100, borderRadius:100, marginTop:4,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
                        <Text style={{ fontSize: 18,color:"blue", marginTop:12}}>Cange Profile Foto</Text>
                    </View>
                </View>
                <View style={{height: 500, backgroundColor: "white"}}>
                    <View style={{marginLeft: 10}}>
                        <Text style={{height: 60, color: "grey"}}>Name </Text>
                        <TextInput style={{ marginTop:-30}} placeholder="Name" keyboardType="text" />
                    </View>
                    <View style={{marginLeft: 10, marginTop:10}}>
                        <Text style={{height: 60, color: "grey"}}>Username </Text>
                        <TextInput style={{marginTop:-30}} placeholder="Name" keyboardType="text" />
                    </View>
                    <View style={{marginLeft: 10, marginTop:10}}>
                        <Text style={{height: 60, color: "grey"}}>Pronouns </Text>
                        <TextInput style={{ marginTop:-30}} placeholder="Name" keyboardType="text" />
                    </View>
                    <View style={{marginLeft: 10, marginTop:10}}>
                        <Text style={{height: 60, color: "grey"}}>Website </Text>
                        <TextInput style={{ marginTop:-30}} placeholder="Name" keyboardType="text" />
                    </View>
                    <View style={{marginLeft: 10, marginTop:10}}>
                        <Text style={{height: 60, color: "grey"}}>Bio </Text>
                        <TextInput style={{marginTop:-30}} placeholder="Name" keyboardType="text" />
                    </View>
                
                </View>
                
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({})
