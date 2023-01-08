import { View, TextInput, Text, Button, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import Btn from './core/Btn'
const GoalForm = (props) => {
    const [goalText, setGoal] = useState('');
    const goalInputHandler = (input) => setGoal(input)
    const addGoal = () => {
        props.onAddGoal(goalText)
        setGoal('')
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={{ width: 100, height: 100 }} />
                <Text style={{ color: 'white', fontSize: 20, marginVertical: 20 }}>Add a goal/task</Text>
                <TextInput style={styles.textInput} value={goalText} onChangeText={goalInputHandler} placeholderTextColor='white' placeholder="Enter goal/task" />
                <View style={styles.btnGroup}>
                    <Btn onClick={addGoal}>
                        <View style={styles.addBtn}>
                            <Text style={styles.btnText}>Ok!</Text>
                        </View>
                    </Btn>
                    <Btn onClick={props.onCancel}>
                        <View style={styles.addBtn}>
                            <Text style={styles.btnText}>Cancel!!</Text>
                        </View>
                    </Btn>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
    },
    textInput: {
        width: '100%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        color: 'white',
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    addBtn: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    btnText: {
        color: 'white',
    }
})

export default GoalForm