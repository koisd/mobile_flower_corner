import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'


const Home = ({navigation}) => {
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
                        onPress={()=>navigation.navigate("Shop")}>
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
            
            
                

            
        <ScrollView>
            <View style={{width:"100%", alignItems:"center"}}>
               <View style={{
                    backgroundColor:"#F9ECD7",
                    //borderRadius:200,
                    paddingHorizontal:5,
                    paddingVertical:5,
                    marginTop: 25
               }}>
                    <Text style={{
                        //textShadowColor: F9ECD7,
                        textAlign: 'center',
                        fontWeight:"bold",
                        fontSize:17,
                        //color:"#585a61"
                    }}>OUR BEST SELLER</Text>
               </View>
               </View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:350}}
                >
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:220,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/i1.png')}
                            style={{
                                height:160,
                                width:160,
                            }}
                        />
                        <Text style={{
                            //paddingHorizontal:10,
                            fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Stargazing
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            //paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                textDecorationLine: 'line-through'
                            }}>$90</Text>
                            <Text style={{
                                fontWeight:"bold",
                                //color:"#F9ECD7",
                                paddingLeft:35
                            }}>$78</Text>
                        </View>
                        <Text style={{
                            //paddingHorizontal:10,
                            //fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            FREE SHIPPING
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:220,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/i2.png')}
                            style={{
                                height:160,
                                width:160,
                            }}
                        />
                        <Text style={{
                            //paddingHorizontal:10,
                            fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Summer by Starlight
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            //paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                textDecorationLine: 'line-through'
                            }}>$90</Text>
                            <Text style={{
                                fontWeight:"bold",
                                //color:"#F9ECD7",
                                paddingLeft:35
                            }}>$78</Text>
                        </View>
                        <Text style={{
                            //paddingHorizontal:10,
                            //fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            FREE SHIPPING
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:220,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/i3.png')}
                            style={{
                                height:160,
                                width:160,
                            }}
                        />
                        <Text style={{
                            //paddingHorizontal:10,
                            fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Summer Encore
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            //paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                textDecorationLine: 'line-through'
                            }}>$90</Text>
                            <Text style={{
                                fontWeight:"bold",
                                //color:"#F9ECD7",
                                paddingLeft:35
                            }}>$78</Text>
                        </View>
                        <Text style={{
                            //paddingHorizontal:10,
                            //fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            FREE SHIPPING
                        </Text>
                    </TouchableOpacity>

                </ScrollView>            

                


               
               <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:-40
                    }}
                >
                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center",
                    //marginTop:-80,
                }}>
                    <View style={{width:"35%", alignItems:"left"}}>
                        <View style={{
                            backgroundColor:"#F9ECD7",
                            //borderRadius:200,
                            paddingHorizontal:5,
                            paddingVertical:5,
                        }}>
                            <Text style={{
                                //textShadowColor: F9ECD7,
                                textAlign: 'center',
                                fontWeight:"bold",
                                fontSize:17,
                                //color:"#585a61"
                            }}>ANNIVERSARY/DATE</Text>
                        </View>
                   </View>
                   <View style={{width:"25%", alignItems:"left"}}>
                        <View style={{
                            backgroundColor:"#ECECEC",
                            //borderRadius:200,
                            paddingHorizontal:5,
                            paddingVertical:5,
                        }}>
                            <Text style={{
                                //textShadowColor: F9ECD7,
                                textAlign: 'center',
                                fontWeight:"bold",
                                fontSize:17,
                                //color:"#585a61"
                            }}>GRADUATION</Text>
                        </View>
                   </View>
                   <View style={{width:"20%", alignItems:"left"}}>
                        <View style={{
                            backgroundColor:"#ECECEC",
                            //borderRadius:200,
                            paddingHorizontal:5,
                            paddingVertical:5,
                        }}>
                            <Text style={{
                                //textShadowColor: F9ECD7,
                                textAlign: 'center',
                                fontWeight:"bold",
                                fontSize:17,
                                //color:"#585a61"
                            }}>BIRTHDAY</Text>
                        </View>
                   </View>
                   <View style={{width:"30%", alignItems:"left"}}>
                        <View style={{
                            backgroundColor:"#ECECEC",
                            //borderRadius:200,
                            paddingHorizontal:5,
                            paddingVertical:5,
                        }}>
                            <Text style={{
                                //textShadowColor: F9ECD7,
                                textAlign: 'center',
                                fontWeight:"bold",
                                fontSize:17,
                                //color:"#585a61"
                            }}>GRAND OPENING</Text>
                        </View>
                   </View>
                </View>
            </ScrollView>  
            <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:350}}
                >
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:220,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/i1.png')}
                            style={{
                                height:160,
                                width:160,
                            }}
                        />
                        <Text style={{
                            //paddingHorizontal:10,
                            fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Stargazing
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            //paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                textDecorationLine: 'line-through'
                            }}>$90</Text>
                            <Text style={{
                                fontWeight:"bold",
                                //color:"#F9ECD7",
                                paddingLeft:35
                            }}>$78</Text>
                        </View>
                        <Text style={{
                            //paddingHorizontal:10,
                            //fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            FREE SHIPPING
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:220,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/i2.png')}
                            style={{
                                height:160,
                                width:160,
                            }}
                        />
                        <Text style={{
                            //paddingHorizontal:10,
                            fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Summer by Starlight
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            //paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                textDecorationLine: 'line-through'
                            }}>$90</Text>
                            <Text style={{
                                fontWeight:"bold",
                                //color:"#F9ECD7",
                                paddingLeft:35
                            }}>$78</Text>
                        </View>
                        <Text style={{
                            //paddingHorizontal:10,
                            //fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            FREE SHIPPING
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:220,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                            source={require('../images/i3.png')}
                            style={{
                                height:160,
                                width:160,
                            }}
                        />
                        <Text style={{
                            //paddingHorizontal:10,
                            fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Summer Encore
                        </Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:3,
                            //paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                textDecorationLine: 'line-through'
                            }}>$90</Text>
                            <Text style={{
                                fontWeight:"bold",
                                //color:"#F9ECD7",
                                paddingLeft:35
                            }}>$78</Text>
                        </View>
                        <Text style={{
                            //paddingHorizontal:10,
                            //fontWeight:"bold",
                            //color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            FREE SHIPPING
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                
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
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80
            }}>
                <Image
                    source={require('../images/eventt.jpg')}
                    style={{
                        //width: '30%',
                        //height: '30%'
                        //resizeMode: 'cover',
                        width: 705,
                        height: 267
                    }}
                    //style={{height:20,width:20}}
                />
                                
            </View>
            </ScrollView>  
        </View>
    )
}
export default Home;