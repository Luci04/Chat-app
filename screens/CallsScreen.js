import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeArea from '../components/SafeArea'
import Header from '../components/Header'
import { Color, FontFamily } from '../GlobalStyles'
import IconComponent from '../components/IconComponent'
import RoundedScrollViewWrapper from '../components/RoundedScrollViewWrapper'
import { useNavigation } from '@react-navigation/native'

const CallsScreen = () => {

    const navigation = useNavigation();

    const userDetails = {
        name: "Jhon Abraham",
        email: "jhonabraham20@gmail.com",
        address: "33 street west subidbazar,sylhet",
        phone: "(320) 555-0104"
    }

    return (
        <SafeArea style={{ backgroundColor: '#000' }}>
            {/* <Header /> */}
            <View style={{ flexDirection: 'row', paddingHorizontal: 18, paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} >
                    <View style={{ padding: 12, borderWidth: 1, borderColor: '#363F3B', borderRadius: 100 }}>
                        <IconComponent iconType={'AntDesign'} iconName={'search1'} size={19} color={'#fff'} />
                    </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', flex: 1, fontFamily: FontFamily.caros, fontWeight: '500', fontSize: 20, color: '#fff' }} >
                    Calls
                </Text>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} >
                    <View style={{ padding: 12, borderWidth: 1, borderColor: '#363F3B', borderRadius: 100 }}>
                        <IconComponent iconType={'MaterialIcons'} iconName={'add-call'} size={19} color={'#fff'} />
                    </View>
                </TouchableOpacity>
            </View>
            <RoundedScrollViewWrapper>
                <View style={{ paddingVertical: 20, flexDirection: 'row', gap: 12 }}>

                </View>
                <ScrollView alwaysBounceVertical={false} bouncesZoom={false} bounces={false} style={{}} contentContainerStyle={{ gap: 30 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{ borderRadius: 99, alignSelf: 'flex-start' }}>
                            <Image style={{ width: 52, height: 52 }} source={require('../assets/rectangle-1092.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F5F6F6', paddingBottom: 20 }}>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 18, fontWeight: '500', color: Color.colorBlack }}>Team Align</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-incoming'} size={12} color={'#139C6F'} />
                                    <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>
                                        Today, 09:30 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-call'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'FontAwesome'} iconName={'video-camera'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{ borderRadius: 99, alignSelf: 'flex-start' }}>
                            <Image style={{ width: 52, height: 52 }} source={require('../assets/rectangle-1092.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F5F6F6', paddingBottom: 20 }}>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 18, fontWeight: '500', color: Color.colorBlack }}>Team Align</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-incoming'} size={12} color={'#139C6F'} />
                                    <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>
                                        Today, 09:30 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-call'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'FontAwesome'} iconName={'video-camera'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{ borderRadius: 99, alignSelf: 'flex-start' }}>
                            <Image style={{ width: 52, height: 52 }} source={require('../assets/rectangle-1092.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F5F6F6', paddingBottom: 20 }}>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 18, fontWeight: '500', color: Color.colorBlack }}>Team Align</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-incoming'} size={12} color={'#139C6F'} />
                                    <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>
                                        Today, 09:30 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-call'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'FontAwesome'} iconName={'video-camera'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{ borderRadius: 99, alignSelf: 'flex-start' }}>
                            <Image style={{ width: 52, height: 52 }} source={require('../assets/rectangle-1092.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F5F6F6', paddingBottom: 20 }}>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 18, fontWeight: '500', color: Color.colorBlack }}>Team Align</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-incoming'} size={12} color={'#139C6F'} />
                                    <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>
                                        Today, 09:30 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-call'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'FontAwesome'} iconName={'video-camera'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{ borderRadius: 99, alignSelf: 'flex-start' }}>
                            <Image style={{ width: 52, height: 52 }} source={require('../assets/rectangle-1092.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F5F6F6', paddingBottom: 20 }}>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 18, fontWeight: '500', color: Color.colorBlack }}>Team Align</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-incoming'} size={12} color={'#139C6F'} />
                                    <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>
                                        Today, 09:30 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-call'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'FontAwesome'} iconName={'video-camera'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                        <View style={{ borderRadius: 99, alignSelf: 'flex-start' }}>
                            <Image style={{ width: 52, height: 52 }} source={require('../assets/rectangle-1092.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F5F6F6', paddingBottom: 20 }}>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 18, fontWeight: '500', color: Color.colorBlack }}>Team Align</Text>
                                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-incoming'} size={12} color={'#139C6F'} />
                                    <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>
                                        Today, 09:30 AM
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 16 }}>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'Feather'} iconName={'phone-call'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{}}>
                                    <IconComponent iconType={'FontAwesome'} iconName={'video-camera'} size={17} color={'#797C7B'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </RoundedScrollViewWrapper>
        </SafeArea>
    )
}

export default CallsScreen

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center'
    },
    textContainer: {
        gap: 8,
        alignItems: 'center'
    }
})