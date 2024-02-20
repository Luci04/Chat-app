import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeArea from '../components/SafeArea'
import Header from '../components/Header'
import { Color, FontFamily } from '../GlobalStyles'
import IconComponent from '../components/IconComponent'
import MainChatWindow from '../components/MainChatWindow'
import RoundedScrollViewWrapper from '../components/RoundedScrollViewWrapper'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {

    const navigation = useNavigation();

    const userDetails = {
        name: "Jhon Abraham",
        email: "jhonabraham20@gmail.com",
        address: "33 street west subidbazar,sylhet",
        phone: "(320) 555-0104"
    }

    return (
        <SafeArea style={{ backgroundColor: '#000' }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 18, paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} >
                    <View style={{ padding: 12, borderWidth: 1, borderColor: '#363F3B', borderRadius: 100 }}>
                        <IconComponent iconType={'AntDesign'} iconName={'search1'} size={19} color={'#fff'} />
                    </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', flex: 1, fontFamily: FontFamily.caros, fontWeight: '500', fontSize: 20, color: '#fff' }} >
                    Settings
                </Text>
                <TouchableOpacity disabled onPress={() => {
                    navigation.goBack()
                }} >
                    <View style={{ padding: 12, borderWidth: 1, borderColor: '#000', borderRadius: 100 }}>
                        <IconComponent iconType={'Ionicons'} iconName={'person-add'} size={19} color={'#000'} />
                    </View>
                </TouchableOpacity>
            </View>
            <RoundedScrollViewWrapper>
                <View style={{ paddingVertical: 20, flexDirection: 'row', gap: 12, borderBottomWidth: 1, borderBottomColor: '#F5F6F6' }}>
                    <View style={{ width: 60, height: 60, borderRadius: 9990 }}>
                        <Image style={{ width: 60, height: 60 }} source={require('../assets/rectangle-1092.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ gap: 6, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: FontFamily.caros, fontWeight: 600, fontSize: 20, color: Color.colorBlack }}>
                                Nazrul Islam
                            </Text>
                            <Text style={{ fontFamily: FontFamily.circularStd, fontWeight: 400, fontSize: 12, color: '#797C7B' }}>
                                Never give up 💪
                            </Text>
                        </View>
                        <View>
                            <Image style={{ width: 24, height: 24 }} source={require('../assets/Qrcode.png')} />
                        </View>
                    </View>
                </View>
                <ScrollView alwaysBounceVertical={false} bouncesZoom={false} bounces={false} style={{ marginTop: 10 }} contentContainerStyle={{ gap: 30 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{ padding: 10, backgroundColor: '#F2F8F7', borderRadius: 99 }}>
                                <IconComponent iconType={'Fontisto'} iconName={'key'} size={17} color={'#797C7B'} />
                            </View>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 16, fontWeight: '500', color: Color.colorBlack }}>Account</Text>
                                <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>Privacy, security, change number</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{ padding: 10, backgroundColor: '#F2F8F7', borderRadius: 99 }}>
                                <IconComponent iconType={'Ionicons'} iconName={'chatbubble-ellipses-outline'} size={17} color={'#797C7B'} />
                            </View>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 16, fontWeight: '500', color: Color.colorBlack }}>Chat</Text>
                                <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>Chat history,theme,wallpapers</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{ padding: 10, backgroundColor: '#F2F8F7', borderRadius: 99 }}>
                                <IconComponent iconType={'EvilIcons'} iconName={'bell'} size={17} color={'#797C7B'} />
                            </View>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 16, fontWeight: '500', color: Color.colorBlack }}>Notifications</Text>
                                <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>Messages, group and others</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{ padding: 10, backgroundColor: '#F2F8F7', borderRadius: 99 }}>
                                <IconComponent iconType={'AntDesign'} iconName={'question'} size={17} color={'#797C7B'} />
                            </View>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 16, fontWeight: '500', color: Color.colorBlack }}>Help</Text>
                                <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>Help center,contact us, privacy policy</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{ padding: 10, backgroundColor: '#F2F8F7', borderRadius: 99 }}>
                                <IconComponent iconType={'Entypo'} iconName={'network'} size={17} color={'#797C7B'} />
                            </View>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 16, fontWeight: '500', color: Color.colorBlack }}>Storage and data</Text>
                                <Text style={{ fontFamily: FontFamily.circularStd, fontSize: 12, fontWeight: '400', color: '#797C7B' }}>Network usage, stogare usage</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View style={{ padding: 10, backgroundColor: '#F2F8F7', borderRadius: 99 }}>
                                <IconComponent iconType={'MaterialIcons'} iconName={'group'} size={17} color={'#797C7B'} />
                            </View>
                            <View style={{ gap: 6, justifyContent: 'center', flex: 1 }}>
                                <Text style={{ fontFamily: FontFamily.caros, fontSize: 16, fontWeight: '500', color: Color.colorBlack }}>Invite a friend</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </RoundedScrollViewWrapper>
        </SafeArea>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center'
    },
    textContainer: {
        gap: 8,
        alignItems: 'center'
    }
})