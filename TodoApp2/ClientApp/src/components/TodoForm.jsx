import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Paper, InputBase } from "@material-ui/core";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isCompleted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  handleSubmit(e) {
    const todo = {
      ...this.state,
      createdTime: new Date().toISOString(),
    };
    this.props.addTodo(todo);
    this.setState({
      text: "",
    });
    e.preventDefault();
  }

  render() {
    return (
      <Paper
        component="form"
        onSubmit={this.handleSubmit}
        className="todo-form"
      >
        <InputBase
          className="todo-input"
          placeholder="Add New Task"
                onChange={this.handleChange}
                value={this.state.text}
          required
        />
        {/* <TextField
          id="datetime-local"
          label="Deadline"
          type="datetime-local"
          defaultValue={new Date().toISOString().substring(0, 16)}
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <IconButton aria-label="menu" className="icon-button">
          <MenuIcon />
        </IconButton>
        <Divider orientation="vertical" className="divider" />
        <IconButton
          color="primary"
          className="icon-button"
          aria-label="add task"
          type="submit"
        >
          <AddIcon />
        </IconButton>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => ({});

export default connect(null, { addTodo })(TodoForm);
