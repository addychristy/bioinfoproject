import { StylesContext } from '@material-ui/styles';
import React from 'react';
import{
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class Menuitem extends React.Component{
    render(){
        return(
            <View style={styles.menuItem}>
                <Image source={this.props.itemImage}
                style={styles.image}/>
            </View>
        )
        
    }
}

const styles=StyleSheet.create({
    menuItem:{
        width:'33.33%',
        height:'100%',
        padding:10,
        alignItems:'center'
        
    },
    image:{
        width:'80%',
        height:'100%',
        opacity:0.8,
        borderColor:'white',
        borderWidth:3
    }
})