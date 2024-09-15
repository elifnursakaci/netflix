//import liraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fechFavoriteMovies} from '../../store/actions/favoriteActions';
import MovieListCard from '../../components/movieList/MovieListCard';
import {Colors} from '../../thema/colors';

const FavoriteList = props => {
  const [refreshing, setRefresh] = useState(false);
  const {favoriteMovies} = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fechFavoriteMovies());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={favoriteMovies}
        renderItem={({item}) => <MovieListCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    paddingBottom: 10,
  },
});

export default FavoriteList;
