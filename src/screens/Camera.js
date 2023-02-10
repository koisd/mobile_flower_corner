import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Camera = () => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               //backgroundColor:"#00a46c",
               height:"12%",
               //borderBottomLeftRadius:20,
               //borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               {/* <Image
                    source={require('../images/1.png')}
                    style={{
                        height:10,
                        width:20,
                        marginTop:50
                    }}
               /> */}
               
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                    
                    
                        <View style={{
                            //justifyContent: 'center',
                            //alignItems: 'center',
                            }}>
                            <Image
                                source={require('../images/logo2.png')}
                                style={{
                                width:"50%",
                                height:78,
                                width:78,
                                //marginLeft:20,
                                //marginTop:40
                            }}
                            />
                        </View>

                   <View style={{width:"75%",alignItems:"flex-end"}}>
                        <Text style={{
                            fontSize:28,
                            //color:"#FFF",
                            fontWeight:"bold"
                        }}>Tin Nguyen</Text>
                   </View>
                   <TouchableOpacity
                        //onPress={()=>navigation.navigate("Shop")}
                        >
                            <View style={{width:"120%",alignItems:"flex-end"}}>
                                    <Image
                                        source={require('../images/cart.png')}
                                        style={{
                                            //width:"40%",
                                            height:78,
                                            width:78,
                                            //marginLeft:20,
                                            //marginTop:40
                                        }}
                                    />
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                    >
                <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    source={require('../images/search2.png')}
                    style={{
                        //resizeMode: 'cover'
                        width: 338,
                        height: 51,
                    }}
                    //style={{height:20,width:20}}
                />
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
                        //onPress={()=>navigation.navigate("Detail")}
                    >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:-40
                    }}>
                    <Image
                        source={require('../images/iden2.png')}
                        style={{
                            resizeMode: 'cover'
                            //width: 00
                            //height: 400,
                        }}
                        //style={{height:20,width:20}}
                        />
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default Camera;