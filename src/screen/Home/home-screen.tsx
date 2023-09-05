import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {bghome, Imagebg} from '../../assets/Index';
import styles from './home-screen.styles';
import LinearGradient from 'react-native-linear-gradient';
import datatest from './mookdatatest';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useSelector, useDispatch, useStore} from 'react-redux';
import {setListChoose} from '../../redux/actions/pageList';
import type {Store} from 'redux';
import ItemList from './components/renderItem';

const HomeScreen = () => {
  const disPatch = useDispatch();
  const listChosse: [] = useSelector(state => state.state.listChoose);
  const dispatchAddToList = (item: any) => disPatch(setListChoose(item));
  const [selectedlist, setselectedlist] = useState([]);


  const onHandlePress = async (item: any) => {

    var selectedIds = [...selectedlist]; 
    if (selectedIds.includes(item)) {
      selectedIds = selectedIds.filter(_id => _id.id !== item.id);
    } else selectedIds.push(item);

    await setselectedlist(selectedIds);
    await dispatchAddToList(selectedIds);
  };
  const FlatListItemSeparator = () => {};
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={bghome} style={styles.container}>
          <LinearGradient
            colors={['rgba(0, 0, 0 ,0.1)', 'rgba(1, 1, 1,1)', 'rgb(1, 1, 1)']}
            style={styles.linearGradient}>
            <Text style={styles.textStarted}>
              Wellcome to Nexle Entrance Test
            </Text>
            <Text style={styles.textStarted_}>
              Please select categories what you would like to see on your feed.
              You can set this later on Filter.
            </Text>
            <SafeAreaView>
              <FlatList
                style={{
                  // justifyContent:'space-between'
                  // alignSelf: 'flex-start',
                  // backgroundColor: ' red',
                  width: '100%',
                  height: '80%',
                  // flex: 1
                }}
                // ItemSeparatorComponent={FlatListItemSeparator}
                data={datatest}
                extraData={selectedlist}
                renderItem={item => (
                  <ItemList
                    onHandlePress={onHandlePress}
                    {...item}
                  />
                )}
                horizontal={false}
                numColumns={3}></FlatList>
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
