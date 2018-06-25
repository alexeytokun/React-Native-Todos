import React, { Component } from 'react';
import { View } from 'react-native';

import { actionCreators } from '../todoListRedux';
import List from '../components/List';
import Input from '../components/Input';
import Title from '../components/Title';

export default class Main extends Component {

    state = {};

    componentWillMount() {
        const {store} = this.props;

        const {todos} = store.getState();
        this.setState({todos});

        this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState();
            this.setState({todos});
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onRemoveTodo = (index) => {
      const {store} = this.props;

      store.dispatch(actionCreators.remove(index));
    };

    onAddTodo = (text) => {
        const {store} = this.props;

        store.dispatch(actionCreators.add(text));
    };

    render() {
        const {todos} = this.state;

        return (
            <View>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onPressItem={this.onRemoveTodo}
                />
            </View>
        );
    }
}
