import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SafeArea from '../components/SafeArea'
import Header from '../components/Header'
import { FontFamily } from '../GlobalStyles'
import IconComponent from '../components/IconComponent'
import MainChatWindow from '../components/MainChatWindow'
import RoundedScrollViewWrapper from '../components/RoundedScrollViewWrapper'
import { useNavigation } from '@react-navigation/native'

const UserScreen = () => {

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
            <View style={styles.profileContainer}>
                <View style={{ alignItems: 'center', gap: 10 }}>
                    <Image style={styles.profileImage} source={require('../assets/rectangle-1092.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>
                            Jhon Abraham
                        </Text>
                        <Text style={styles.profileId}>
                            @jhonabraham
                        </Text>
                    </View>
                </View>
                <View style={styles.connectionOptions}>
                    <TouchableOpacity>
                        <View style={styles.connectionOptionsItem}>
                            <IconComponent iconType={'AntDesign'} iconName={'message1'} size={20} color={'#fff'} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.connectionOptionsItem}>
                            <IconComponent iconType={'Octicons'} iconName={'device-camera-video'} size={20} color={'#fff'} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.connectionOptionsItem}>
                            <IconComponent iconType={'Feather'} iconName={'phone'} size={20} color={'#fff'} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.connectionOptionsItem}>
                            <IconComponent iconType={'Entypo'} iconName={'dots-three-horizontal'} size={20} color={'#fff'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ position: 'absolute', left: 20 }} onPress={() => navigation.goBack()}>
                    <IconComponent iconType={'Ionicons'} iconName={'arrow-back-outline'} size={24} color={'#fff'} />
                </TouchableOpacity>
            </View>
            <RoundedScrollViewWrapper>
                <ScrollView alwaysBounceVertical={false} bouncesZoom={false} bounces={false} style={{ marginTop: 40 }} contentContainerStyle={{ gap: 30 }}>
                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoLabel}>
                            Display Name
                        </Text>
                        <Text style={styles.InfoValue} numberOfLines={1}>
                            Jhon Abraham
                        </Text>
                    </View>

                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoLabel}>
                            Email Address
                        </Text>
                        <Text style={styles.InfoValue} numberOfLines={1}>
                            jhonabraham20@gmail.com
                        </Text>
                    </View>

                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoLabel}>
                            Address
                        </Text>
                        <Text style={styles.InfoValue} numberOfLines={1}>
                            33 street west subidbazar,sylhet
                        </Text>
                    </View>

                    <View style={styles.InfoContainer}>
                        <Text style={styles.InfoLabel}>
                            Phone  Number
                        </Text>
                        <Text style={styles.InfoValue} numberOfLines={1}>
                            (320) 555-0104
                        </Text>
                    </View>
                </ScrollView>
            </RoundedScrollViewWrapper>
        </SafeArea>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center'
    },
    textContainer: {
        gap: 8,
        alignItems: 'center'
    },
    profileName: {
        color: '#fff',
        fontWeight: '600',
        fontFamily: FontFamily.caros,
        fontSize: 20
    },
    profileId: {
        color: '#fff',
        fontFamily: FontFamily.circularStd,
        fontSize: 12
    },
    profileImage: {
        width: 82,
        height: 82,
        borderRadius: 41
    },
    connectionOptions: {
        paddingVertical: 25,
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center'
    },
    connectionOptionsItem: {
        padding: 10,
        backgroundColor: '#051D13',
        borderRadius: 999
    },
    InfoContainer: {
        gap: 10
    },
    InfoLabel: {
        fontFamily: FontFamily.circularStd,
        fontSize: 14,
        fontWeight: "400",
        color: '#797C7B'
    },
    InfoValue: {
        fontFamily: FontFamily.caros,
        fontSize: 18,
        fontWeight: "500",
        color: '#000E08'
    }
})