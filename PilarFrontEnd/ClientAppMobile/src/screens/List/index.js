import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Icon, TouchableOpacity, TouchableHighlight, SafeAreaView, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import { ListItem, Avatar, Button } from 'react-native-elements';

import { SwipeListView } from 'react-native-swipe-list-view';
import { styles } from './styles';
import Wrapper from '../Wrapper';

export default (props) => {
console.log(props); 

    const dispatch = useDispatch()

    //------ALL RECURSO-------/
    const stadiums = useSelector((state) => state.stadiums.stadiums);
    console.log(stadiums);

    const [listData, setListData] = useState()


    //------SHOW BY ID RECURSO-------/
    const showByIdRow = rowKey => {
        console.log('This row by Id', rowKey);
        props.navigation.navigate('ListDetails', rowKey = { rowKey })
    }

    //------ADD NEW RECURSO-------/
    const newRow = rowKey => {
        console.log('This newRow', rowKey);
        const newRow = dispatch(actions.stadiumsActions.addStadium(rowKey));
        props.navigation.navigate('newStadium', rowKey = { rowKey })
        listData.push(newRow);
        setListData(listData);
    };

    //------DELETE RECURSO-------/
    const deleteRow = (rowMap, rowKey) => {
        dispatch(actions.stadiumsActions.deleteStadium(rowKey));
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    // ------UPDATE RECURSO-------/
    const updateRow = rowKey => {
        console.log('This row updated', rowKey);
        dispatch(actions.stadiumsActions.updateStadium(rowKey));
        setListData(stadiums);
    };

      // ------go to MAP  RECURSO-------/
    const goMapRow = rowKey => {
        console.log('This row Map', rowKey);
        props.navigation.navigate('Map', rowKey = { rowKey })
    };

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };


    const renderItem = (data) => {

        <TouchableHighlight
            onPress={() => props.navigation.navigate('ListDetails', data = { data })}
            key={data.item._id}
        >
            <View style={styles.rowFront}>
                <View>
                    <Avatar
                        size={65}
                        rounded
                        source={{ uri: data.item.imageURL }}
                    />
                </View>
                <ListItem.Content>
                    <Text style={styles.frondText} > {data.item.stadiumname.toUpperCase()} </Text>
                </ListItem.Content>
                <ListItem.Chevron />
            </View>
        </TouchableHighlight>

    }

    const renderHiddenItem = (data, rowMap) => {
          <View style={styles.rowBack}>

            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.key)}
            >
                <Text style={styles.backTextWhite}>Eliminar Item</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => updateRow(rowMap, data.key)}
            >
                <Text style={styles.backTextWhite}> Actualizar Item </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.backRightBtn, styles.backLeftBtnRight]}
                onPress={() => goMapRow(rowMap, data.key)}
            >
                <Text style={styles.backTextWhite}> Ir a Mapa </Text>
            </TouchableOpacity>
        </View>

        
    }

    return (

        <SafeAreaView style={styles.container} >
            <Wrapper title="Stadiums" navigate={props.navigation}>
                <View style={[styles.mainContent]} >
                    <Button
                        title="CREAR NUEVO STADIUM"
                        onPress={() => newRow()}
                        buttonStyle={styles.mapButtonStandard}
                    />
                    <SwipeListView
                        data={listData}
                        style={styles.list}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={75}
                        rightOpenValue={-150}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        onRowDidOpen={onRowDidOpen}
                    />
                </View>
            </Wrapper>
        </SafeAreaView>

    )

}
