import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
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
        color: '#000',
        padding: 20,
    },
    rowFront: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#c34b61', //'#8e1537',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 85,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#8e1537',
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


