import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

import ProjectItem from './props/ProjectItem'

export default function Portofolio() {

  const [loaded] = useFonts ({
    'ModernAntiqua' : require('../assets/fonts/ModernAntiqua-Regular.ttf'),
    'Buda' : require('../assets/fonts/Buda-Light.ttf')
  })

  if(!loaded) return null;

  return (
    <ScrollView>
      <View style={{paddingTop: 30, backgroundColor: '#323031'}}>
        <View style={{flexDirection: 'row', width: 200}}>
          <Image style={[
            styles.imageContainer, {
            height: 200, 
            width: 150, 
            borderBottomRightRadius: 10
          }]} source={require('../assets/poo.jpeg')}/>
          <View style={{width: '100%'}}>
            <Text style={styles.title}>
              My Portfolio
            </Text>
            <Text style={[
              styles.textFont,
              styles.descriptiveText, {
              marginLeft: 10,
              textAlign: 'justify'
              }]}> Hi, I'm a student at SMK Telkom Purwokerto majoring in Software Engineering. I have great interest in learning programming and will always eager to learn something new.
            </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}> 
            My Recent Project
          </Text>
          <ProjectItem image={require('../assets/project1.png')} title='UI Mobile Design SatSet' detail='See more'/>
          <ProjectItem image={require('../assets/isaac.jpg')} title='zoowie' detail='Explore' />
          <ProjectItem image={require('../assets/isaac.jpg')} title='zoowie' detail='See more'/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  imageContainer: {
    borderStyle: 'solid',
    borderColor: '#FAF8ED',
    borderWidth: 2.5
  },
  title: {
    color : '#FFC857',
    fontFamily: 'Buda',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    width: '100%'
  },
  descriptiveText: {
    flexShrink: 1
  },
  sectionContainer: {
    width: '100%',
    padding: 25
  },
  textFont : {
    color: '#fff',
    fontFamily: 'ModernAntiqua'
  }
});