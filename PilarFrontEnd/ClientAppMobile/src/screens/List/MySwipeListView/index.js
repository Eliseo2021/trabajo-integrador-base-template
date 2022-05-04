import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Icon, TouchableOpacity, TouchableHighlight, View,} from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store";

import { SwipeListView } from 'react-native-swipe-list-view';
//import { styles } from "./style";

export default (props) => {


  const dispatch = useDispatch()

     //------ALL RECURSO-------/
  const stadiums = useSelector((state) => state.stadiums.stadiums);

  const stadium1 = stadiums.find((stadium) => stadium.stadiumname === "Estadio Lusail")
  console.log('--------------------------------', stadium1.stadiumname);

    
    //useEffect(() => {
    //    dispatch(actions.stadiumsActions.allStadiums());
    //    setListData(stadiums);
    //}, [])

    const [listData, setListData] = useState(stadiums)
    //console.log('------------->' + listData);


    const showByIdRow = item => {
        console.log('This row show', item);
	//props.navigation.navigate('ListDetails', item = { item })
        
    };

    const newRow = rowKey => {
        console.log('This newRow', rowKey);
        // action addStadium in redux
        const newRow = dispatch(actions.stadiumsActions.addStadium(rowKey));
        listData.push(newRow);
        setListData(listData);
    };


    const deleteRow = (rowMap, rowKey) => {
        // action deleteStadium in redux
        // dispatch(actions.stadiumsActions.deleteStadium(rowKey));
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const updateRow = rowKey => {
        console.log('This row updated', rowKey);
        // action updateStadium in redux
        // dispatch(actions.stadiumsActions.updateStadium(rowKey));
        //setListData(stadiums);
    };

    const goMapRow = rowKey => {
        console.log('This row opened', rowKey);
        //props.navigation.navigate('Map', rowKey = { rowKey })
    };

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const renderItem = data => (

        <TouchableHighlight
             onPress={() => showByIdRow(data.item)}
	      // onPress={() => console.log('This row  opened', data.item.stadiumname)}
            //onPress={() => props.navigation.navigate('ListDetails', data.item = { item })}

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
    )




    const renderHiddenItem = (data, rowMap) => (
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
    );

    return (

        <View style={styles.container}>

            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                //onRowDidOpen={onRowDidOpen}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
    },
    backTextWhite: {
        color: '#FFF',
    },
    frondText: {
        color: '#fff',
        padding: 10,
    },
    rowFront: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#8e1537', //'#8e1537',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        justifyContent: 'center',
        height: 85,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#c34b61',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    backLeftBtnRight: {
        backgroundColor: 'green',
        Left: 0,
    },
    list: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    }
});

