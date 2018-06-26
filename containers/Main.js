import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {connect} from 'react-redux';

import { actionCreators } from '../todoListRedux';
import List from '../components/List';
import Input from '../components/Input';
import Title from '../components/Title';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    add: (todo) => dispatch(actionCreators.add(todo)),
    remove: (index) => dispatch(actionCreators.remove(index)),
    toggle: (index) => dispatch(actionCreators.toggle(index)),
    removeDone: () => dispatch(actionCreators.removeDone()),
});

class Main extends Component {

    onRemoveTodo = (index) => {
      const {remove} = this.props;
      remove(index);
    };

    onAddTodo = (todo) => {
        const {add} = this.props;
        add(todo);
    };

    onToggleTodo = (index) => {
        const {toggle} = this.props;
        toggle(index);
    };

    onRemoveDone = () => {
        const {removeDone} = this.props;
        removeDone();
    };

    render() {
        const {todos} = this.props;

        return (
            <View style={{flex: 1}}>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={'Enter an item!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <ScrollView>

                    <List
                        list={todos}
                        onToggleItem={this.onToggleTodo}
                        onDelItem={this.onRemoveTodo}
                    />
                </ScrollView>
                <Footer onRemoveDone={this.onRemoveDone}>
                    Remove completed items
                </Footer>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
