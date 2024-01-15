import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default ProjectItem = (item) => {
  return(
    <View style={{marginBottom: 25}}>
      <Image style={[
        styles.imageContainer, {
        width: 300, 
        height: 160, 
        alignSelf: 'center'
        }]} source={item.image}/>
      <View style={styles.projectAtribute}>
        <Text style={[styles.textFont, {
          fontSize: 20,
          flex: 1,
          flexShrink: 1
        }]}>{item.title}
        </Text>
        <View style={[styles.reactButton,{
          alignSelf: 'flex-start',
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          flexDirection: 'row'
        }]}>
          <Pressable style={{padding: 5}}>
            <Image style={{width: 20, height: 20}} source={require('../../assets/like.png')}/>
          </Pressable>
          <Text style={[styles.textFont, styles.reactButton, {
            alignSelf: 'center',
            color: '#000',
            marginRight: 5
            }]}> 0
          </Text>
          <Pressable style={{padding: 5}}>
            <Image style={{width: 20, height: 20}} source={require('../../assets/dislike.png')}/>
          </Pressable>
        </View>
      </View>
      <Pressable style={[styles.button, {
        marginLeft: 5,
        marginTop: 2.5,
      }]}>
        <Text style={[styles.textFont, {
          fontSize: 10,
        }]}>{item.detail}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create ({
  imageContainer: {
    alignSelf: 'center',
    borderColor: '#FAF8ED',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2.5,
    width: 300, 
    height: 160
  },
  projectAtribute: {
    marginTop: 5,
    flexDirection: 'row'
  },
  textFont : {
    color: '#fff',
    fontFamily: 'ModernAntiqua'
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#FE5F55',
    borderRadius: 20,
    padding: 5
  },
  reactButton: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#323031'
  },
})