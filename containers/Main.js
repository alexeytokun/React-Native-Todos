import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {connect} from 'react-redux';

import { actionCreators } from '../todoListRedux';
import List from '../components/List';
import Input from '../components/Input';
import Title from '../components/Title';

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    add: (text) => dispatch(actionCreators.add(text)),
    remove: (index) => dispatch(actionCreators.remove(index)),
});

class Main extends Component {

    onRemoveTodo = (index) => {
      const {remove} = this.props;
      remove(index);
    };

    onAddTodo = (text) => {
        const {add} = this.props;
        add(text);
    };

    render() {
        const {todos} = this.props;

        return (
            <ScrollView>
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
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
