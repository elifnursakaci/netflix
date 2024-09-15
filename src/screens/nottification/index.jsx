//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screensStyles';
import {useSelector} from 'react-redux';
import NottificationCard from '../../components/nottification/NotttificationCard';

const Nottification = () => {
  const {nottifications} = useSelector(state => state.nottification);
  console.log(nottifications);
  return (
    <View style={screenStyles.container}>
      <FlatList
        data={nottifications}
        renderItem={({item}) => <NottificationCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Nottification;
