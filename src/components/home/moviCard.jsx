import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, token, width} from '../../utils/constants';
import {MOVIEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../thema/colors';

const MovieCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
      <FastImage
        style={styles.image}
        source={{
          uri: `${IMAGE_BASE_URL}${item.poster_path}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          priority: FastImage.priority.high,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DARK,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    width: width * 0.3,
    marginVertical: 25,
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.25,
  },
  textContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
  },
  title: {
    color: Colors.WHITEGRAY,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MovieCard;
