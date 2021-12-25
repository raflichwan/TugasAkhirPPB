import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import add from "../../assets/image/image-page/add.png";
import fotoprofile from "../../assets/image/image-page/foto.png";
import menu from "../../assets/image/image-page/menu.png";
import reel from "../../assets/image/image-page/reel.png";
import feed from "../../assets/image/image-page/feed.png";
import tag from "../../assets/image/image-page/tag.png";
import EditProfile from '../EditProfile';

const Angka = (props) => {
    return(
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:26,color: 'black',fontWeight: 'bold',marginTop:24}}>{props.jumlahAngka}</Text>
        <Text style={{fontSize:12,color: 'black',fontWeight: 'bold',marginTop:-23}}>{props.labelDetail}</Text>
      </View>
    );
  }

const Akun = ({navigation}) => {
    return (
        <View style={{ flex: 1,flexDirection: 'column' }}>
            <View style={{height: 56, backgroundColor: "white",flexDirection: "row", }}>
                <Text style={{  color: 'black',padding:12 ,fontWeight: 'bold' ,fontSize: 22 ,flex: 4, marginLeft:6 }}>
                KelompokProfil_
                </Text>
                <View style={{  flex: 1, backgroundColor: "white" }}>
                    <Image style={{ height:32, width: 32, marginLeft:12, marginTop:12}} source = {add}/>
                </View>
                <View style={{  flex: 1, backgroundColor: "white"}}>
                    <Image style={{ height:22, width: 22, marginLeft:17, marginTop:17}} source = {menu}/>
                </View>
            </View>
            <ScrollView >
                <View style={{height: 130, backgroundColor: "white", flexDirection: "row"}}>
                    <View style={{ height:130, width: 130,backgroundColor: "white" }}>
                        <Image style={{ height:94, width: 94, borderRadius:100,marginLeft:20, marginTop:18,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Angka jumlahAngka="100"/>
                        <Angka labelDetail="Posts"/>
                    </View> 
                    <View style={{ flex: 1 }} >
                        <Angka jumlahAngka="1.010"/>
                        <Angka labelDetail="Followers"/>
                    </View>
                    <View style={{ flex: 1 }} >
                        <Angka jumlahAngka="1706"/>
                        <Angka labelDetail="Following"/>
                    </View>
                </View>
                <View style={{height: 60, backgroundColor: "white"}}>
                    <Text style={{ color: 'black', marginLeft:20,marginTop:8 ,fontWeight: 'bold',fontSize: 16 }}>
                    Kelompok Profile
                    </Text>
                    <Text style={{marginLeft:20,color: 'black'}}>👨‍👩‍👦‍👦 Kita Kelompok 1</Text>
                </View>
                <View style={{height: 60, backgroundColor: "white", flexDirection: "row"}}>
                    <View style={{  flex: 4 }}>
                        <View style = {{marginTop:10, marginLeft:14,width:260}}>
                            <Button title="Edit Profile" 
                            onPress={() => navigation.navigate('Edit')} >
                            </Button>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style = {{marginTop:10, marginLeft:14,width:40}}>
                            <Button title="v" >
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{height: 100, backgroundColor: "white", flexDirection:"row"}}>
                    <View style={{marginTop:11, marginLeft:16}}>
                        <Image style={{ height:60, width: 60, borderRadius:100, marginTop:4,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
                        <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>Merayakan</Text>
                    </View>
                    {/* <View style={{marginTop:11, marginLeft:16, }}>
                        <Image style={{ marginLeft:10, height:60, width: 60, borderRadius:100, marginTop:8,borderColor: "black",borderWidth: 1,}} source = {fotoprofile}/>
                        <Text style={{textAlign:"center", fontSize: 12,color:"black"}}>gadis and bujan</Text>
                    </View> */}
                </View>
                <View style={{height: 48, backgroundColor: "white",flexDirection: "row"}}>
                    <View style={{  alignItems:"center",flex: 1 }}>
                        <Image style={{ height:40, width: 40, marginTop:4}} source = {feed}/>
                    </View>
                    <View style={{  alignItems:"center",flex: 1 }}>
                        <Image style={{ height:28, width: 28, marginTop:11}} source = {reel}/>
                    </View>
                    <View style={{  alignItems:"center",flex: 1 }}>
                        <Image style={{ height:34, width: 34, marginTop:8}} source = {tag}/>
                    </View>
                </View>
                <View style={{height: 200, backgroundColor: "white", flexDirection: "row"}}>
                    <View style={{ backgroundColor: "white", flex: 1 }}>
                    <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {fotoprofile}/>
                    </View>
                    <View style={{ backgroundColor: "white", flex: 1 }}>
                    <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {fotoprofile}/>
                    </View>
                    <View style={{ backgroundColor: "white", flex: 1 }}>
                    <Image style={{ width: '100%',height: undefined,aspectRatio: 1,}} source = {fotoprofile}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Akun">
          <Stack.Screen name="Akun" component={Akun }options={{headerShown: false,}} />
          <Stack.Screen name="Edit" component={EditProfile} options={{headerShown: false,}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App

const styles = StyleSheet.create({})
