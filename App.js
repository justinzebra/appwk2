import React from 'react';
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container0}>


        <Text style={styles.textStyle}>
          Album
        </Text>
.
        <Text style={styles.textStyle0}>
          ONE OK ROCK 人生×僕=
        </Text>
        <View style={styles.word0}>

        </View>
        <View style={styles.word1}>

        </View>
        <Image
        style={styles.imageStyle}
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/3/3d/Jinseixboku.jpg/220px-Jinseixboku.jpg"
        }}
      />
      <Text style={styles.textStyle1}>
          1.Ending Story??
        </Text>
        <Image
        style={styles.imageStyle1}
        source={{
          uri:
            "https://i.pinimg.com/originals/89/1e/18/891e189e7fb4bbf3ba7a679511a0a236.gif"
        }}
      />
        <Text style={styles.textStyle2}>
          2.The Begining
        </Text>
        <Image
        style={styles.imageStyle1}
        source={{
          uri:
            "https://25.media.tumblr.com/tumblr_m82r8vfxOf1qhqemyo2_500.gif"
        }}
      />
        <Text style={styles.textStyle2}>
          3.Clock Strikes
        </Text>
        <Image
        style={styles.imageStyle1}
        source={{
          uri:
            "https://media.giphy.com/media/MLlAP2WPkx6iQ/giphy.gif"
        }}
      />
        <Text style={styles.textStyle2}>
          4.Be the light
        </Text>
        <Image
        style={styles.imageStyle1}
        source={{
          uri:
            "https://thumbs.gfycat.com/OldIgnorantCaiman-size_restricted.gif"
        }}
      />
        <Text style={styles.textStyle2}>
          5.Deeper Deeper
        </Text>
        <Image
        style={styles.imageStyle1}
        source={{
          uri:
            "https://i.pinimg.com/originals/75/ac/4e/75ac4e3d9a05ce0d8b54e7d5afdecb3e.gif"
        }}
      />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container0: {
    width: 360,
    height: 2000,
    flex: 5,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',

  },
  textStyle: {
    marginTop: 50,
    fontSize: 70
  },
  textStyle0:{
    fontSize: 15
  },
  textStyle1:{
    marginTop:100,
    fontSize: 15
  },
  textStyle2:{
    marginTop:25,
    fontSize: 15
  },

  word0: {
    marginTop: 20,
    width: 300,
    height: 300,
    // flex: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  word1: {
    marginTop: -275,
    width: 250,
    height: 250,
    // flex: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    marginTop:-230,
    width: 220,
    height: 220,
  },
  imageStyle1: {
    marginTop:25,
    width: 220,
    height: 220,
  },
});

