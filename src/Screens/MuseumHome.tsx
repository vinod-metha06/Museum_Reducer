import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useReducer, useEffect} from 'react';
import {MuseumReducer, initailState} from '../reducer/MuseumReducers';
import {GetMuseumID, GetMuseumIDInfo} from '../reducer/service';
import {infoinitailState, MuseumInfoReducer} from '../reducer/MuseuInfoReducer';

const MuseumHomeScreen = ({navigation}:any) => {
  const [state, dispatch] = useReducer(MuseumReducer, initailState);
  const [infostate, infodispatch] = useReducer(
    MuseumInfoReducer,
    infoinitailState,
  );
  useEffect(() => {
    const getData = async () => {
      var data = await GetMuseumID();
      console.log(data + 'Homelog');

      if (data !== 'error') {
        dispatch({type: 'FETCH', payload: data});
      } else {
        dispatch({type: 'FETCH_ERROR'});
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!infostate.loading && Object.keys(infostate.info).length > 0) {
      navigation.navigate('Info', {info: infostate.info});
    }
  }, [infostate.info]);

  const getInfo = async (id: any) => {
    const data = await GetMuseumIDInfo(id);
    if (data != 'error') {
      infodispatch({type: 'FETCH_INFO', payload: data});
    } else {
      infodispatch({type: 'FETCH_ERROR'});
    }
  };

  if (state?.loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  if (state?.error) {
    console.log(state.error);
  }
  const renderItem = ({item}:any) => {
    console.log(item + 'item');
    return (
      <TouchableOpacity
        onPress={() => {
          getInfo(item);
        }}>
        <View style={{borderWidth: 2, margin: 10, padding: 10}}>
          <Text>IDs: {item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{fontSize: 20, padding: 10}}>Museum Screen</Text>
      <View
        style={{
          height: '90%',
          borderWidth: 2,
          margin: 10,
          flexDirection: 'column',
        }}>
        <FlatList
          data={state?.data.objectIDs.slice(0, 10)}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default MuseumHomeScreen;
