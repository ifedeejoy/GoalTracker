import React, { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Btn from './components/core/Btn';
import GoalForm from './components/GoalForm';
import GoalItem from './components/GoalItem';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [goals, setGoals] = useState([]);

    const showModal = () => setModalIsVisible(true);
    const closeModal = () => setModalIsVisible(false);

    const addGoal = (goalText) => {
        setGoals(currentGoals => [
            ...currentGoals,
            { text: goalText, id: Math.random().toString() },
        ])
        closeModal()
    }

    const deleteGoal = (id) => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== id)
        })
    }
    return (
        <View style={styles.container}>
            <Btn onClick={showModal}>
                <View style={styles.addBtn}>
                    <Text style={styles.btnText}>Add Goal</Text>
                </View>
            </Btn>
            <GoalForm onAddGoal={addGoal} visible={modalIsVisible} onCancel={closeModal} />
            <Text style={styles.listText}>List of Goals</Text>
            <FlatList data={goals} renderItem={(itemData) => {
                return (<GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoal} />)
            }} keyExtractor={(item, key) => item.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingHorizontal: 30,
    },

    goalContainer: {
        flex: 4,
        marginTop: 15,
    },

    listText: {
        fontSize: 20,
        marginBottom: 10,
    },
    addBtn: {
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    btnText: {
        color: 'white',
    }
});
