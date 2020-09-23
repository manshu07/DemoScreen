import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, StatusBar, FlatList, ImageBackground } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { font, color } from '../Component/Styles';

export default class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderItem = ({ item, index }) => {
        const swipeSetting = {
            autoClose: true,
            right: [
                {
                    onPress: () => {

                    },
                    backgroundColor: color.alto,
                    component: (
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                            <Image source={require('../assets/img/more-horizontal.png')} style={{ height: 10, width: 28, marginTop: 3 }} />
                            <Text style={{ fontFamily: font.semi, color: '#fff', fontSize: 16, marginTop: 5 }}>More</Text>
                        </View>
                    )
                },
                {
                    onPress: () => {

                    },
                    backgroundColor: color.ceruleanBlue,
                    component: (
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                            <Image source={require('../assets/img/archived-blue.png')} style={{ height: 28, width: 28, resizeMode: 'contain', marginTop: 3 }} />
                            <Text style={{ fontFamily: font.semi, color: '#fff', fontSize: 16, marginTop: 0 }}>Archive</Text>
                        </View>
                    )
                }

            ],
            left: [
                {
                    onPress: () => {

                    },
                    backgroundColor: color.primeColor,
                    component: (
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                            <Image source={require('../assets/img/chat.png')} style={{ height: 28, width: 28, resizeMode: 'contain', marginTop: 3, tintColor: '#fff' }} />
                            <Text style={{ fontFamily: font.semi, color: '#fff', fontSize: 16, }}>Unread</Text>
                        </View>
                    )
                },
                {
                    onPress: () => {

                    },
                    backgroundColor: color.alto,
                    component: (
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                            <Image source={require('../assets/img/pin.png')} style={{ height: 28, width: 28, resizeMode: 'contain', marginTop: 3, tintColor: '#fff' }} />
                            <Text style={{ fontFamily: font.semi, color: '#fff', fontSize: 16, }}>Pin</Text>
                        </View>
                    )
                }

            ]
        }
        return (
            <Swipeout {...swipeSetting}>
                <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'row', paddingLeft: 5, paddingTop: 0 }}>
                    <View style={{ height: 80, width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00f0', marginBottom: 5 }}>
                        <Image source={require('../assets/img/profile-bg.png')} style={{ height: 80, width: 80, resizeMode: 'contain', position: 'absolute', right: -2, bottom: -2 }} />

                        <View borderColor="#fff" style={{ backgroundColor: index % 2 ? color.green : color.red, borderWidth: 2, borderRadius: 25, height: 15, width: 15, position: 'absolute', right: 12, top: 7 }} />

                        <Image source={require('../assets/img/user.png')} style={{ height: 40, width: 40, resizeMode: 'contain', }} />
                        {index % 2 ? <Image source={require('../assets/img/victory.png')} style={{ height: 60, width: 60, bottom: -20, resizeMode: 'contain', position: 'absolute' }} /> : null}
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, flex: 1, marginLeft: 10, paddingRight: 15 }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text numberOfLines={1} style={{ fontFamily: font.bold, fontSize: 16, flex: 1, }}>Pinned Contact Name</Text>
                                <Text style={{ fontFamily: font.reg, color: color.normaleTextColor }}>3:12 PM</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text numberOfLines={2} style={{ fontFamily: font.reg, flexShrink: 1, color: color.normaleTextColor }}><Image source={require('../assets/img/read.png')} style={{ height: 17, width: 17, resizeMode: 'contain' }} /> <Text style={{ fontFamily: font.bold }}>You:</Text> Last Message you sent to this group which is very long and everyone has read</Text>
                                <Image source={require('../assets/img/bell-off.png')} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 7 }}>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: font.semi, fontSize: 16, color: color.primeColor }} >Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/img/edit.png')} style={{ height: 24, width: 24, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

                <View style={{ paddingHorizontal: 15, borderBottomWidth: .7 }}>
                    <Text style={{ fontFamily: font.bold, fontSize: 30, color: '#000' }}>Chats</Text>

                    {/* Search Bar */}
                    <View style={{ flexDirection: 'row', backgroundColor: color.searchBarBGcolor, borderRadius: 5, alignItems: 'center', paddingHorizontal: 9, paddingVertical: 7, marginVertical: 10 }}>
                        <Image source={require('../assets/img/search.png')} style={{ height: 19, width: 19, resizeMode: 'contain' }} />

                        <TextInput
                            style={{ flex: 1, marginLeft: 8, fontSize: 17, }}
                            placeholder="Search"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: color.searchBarBGcolor, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/img/archived-blue.png')} style={{ height: 19, width: 19, resizeMode: 'contain' }} />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 8, fontSize: 16, fontFamily: font.semi, color: color.primeColor }} >Archived Chats</Text>
                        <Text style={{ fontSize: 16, fontFamily: font.semi, color: color.borderColor }} >3</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 8, paddingBottom: 10, borderBottomWidth: .7 }}>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: font.semi, fontSize: 16, color: color.primeColor }} >Broadcast List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: font.semi, fontSize: 16, color: color.primeColor }} >New Group</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, }}>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6]}
                        renderItem={this.renderItem}
                    />
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: color.tabBarBGcolor, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center' }}>
                        <Image source={require('../assets/img/search-tab.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: font.reg, color: color.normaleTextColor, fontSize: 11 }}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center' }}>
                        <Image source={require('../assets/img/call.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: font.reg, color: color.normaleTextColor, fontSize: 11 }}>Calls</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center' }}>
                        <Image source={require('../assets/img/people.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: font.reg, color: color.normaleTextColor, fontSize: 11 }}>People</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center' }}>
                        <Image source={require('../assets/img/chat.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        <Text style={{ fontFamily: font.reg, color: color.primeColor, fontSize: 11 }}>Chats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                        <View style={{ alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Image source={require('../assets/img/settings.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                            <Text style={{ fontFamily: font.reg, color: color.normaleTextColor, fontSize: 11 }}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
