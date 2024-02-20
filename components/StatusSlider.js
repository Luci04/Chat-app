import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

export default function StatusSlider() {
  return (
    <View style={{ backgroundColor: '#000' }}>
      <ScrollView horizontal={true} contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <TouchableOpacity onPress={() => console.log("Avinash")} key={item} style={styles.item}>
                <View style={styles.mystatus}>
                  <Image
                    style={styles.profileImg}
                    source={require("../assets/group-39.png")}
                  />
                  <Text style={styles.title}>My status</Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorBlack,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    gap: 13
  },
  item: {
  },
  mystatus: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  title: {
    fontFamily: FontFamily.caros,
    fontSize: 14,
    color: '#fff',
    fontWeight: '400'
  },
});
