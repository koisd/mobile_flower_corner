import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {View, Text, Image, Button} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'

const Detail = ({navigation}) => {
    return(
        <View style={{
            // justifyContent:"center",
            // alignContent:"center",
            // flex:1
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
            <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                    <TouchableOpacity
                        onPress={()=>{navigation.goBack();
                    }}>
                        <View style={{
                            //justifyContent: 'center',
                            //alignItems: 'center',
                            }}>
                            <Image
                                source={require('../images/goback.png')}
                                style={{
                                    width:"20%",
                                    height:96,
                                    width:96,
                                }}
                                //style={{height:20,width:20}}
                            />
                        </View>
                    </TouchableOpacity>
                    
                    <Image
                        source={require('../images/logo2.png')}
                        style={{
                            width:"20%",
                            height:78,
                            width:78,
                            //marginLeft:20,
                            //marginTop:40
                        }}
                    />
                   <View style={{width:"70%",alignItems:"flex-end"}}>
                        <Text style={{
                            fontSize:28,
                            //color:"#FFF",
                            fontWeight:"bold"
                        }}>Tin Nguyen</Text>
                   </View>
                </View>
           </View>
            {/* <Button
                title='Go back'
                onPress={()=>{
                    navigation.goBack();
                }}>
            </Button> */}
            <View style={{width:"100%", alignItems:"center"}
                }>
                <View style={{
                    backgroundColor:"#FFF",
                    //borderRadius:200,
                    paddingHorizontal:5,
                    paddingVertical:5,
               }}>
                    <Image
                    source={require('../images/Group 9 (1).png')}
                    style={{
                        //width:"20%",
                        //height:504,
                        //width:622,
                    }}
                    //style={{height:20,width:20}}
                    />
               </View>
                
            </View>
        </View>
    )
}
export default Detail;