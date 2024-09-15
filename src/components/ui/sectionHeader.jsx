import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {aplicationColors} from '../../thema/colors';
import {MOVIELIST} from '../../utils/routes';

const SectionHeader = ({title, value}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate(MOVIELIST, {value})}>
        <Text style={[styles.title, styles.seeAll]}>See All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: aplicationColors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
  seeAll: {
    color: aplicationColors.YELLOW,
  },
  pressable: {
    marginLeft: 'auto',
  },
});

export default SectionHeader;
