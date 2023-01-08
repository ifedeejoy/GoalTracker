import { View, Text, StyleSheet, Pressable } from 'react-native';
import Btn from './core/Btn';
const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Btn onClick={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Btn>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 5,
    },
    goalText: {
        color: 'white',
        padding: 24,
    },
})

export default GoalItem;