import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../redux/actions/actions';

class AddCourse extends Component {
    state = { name: '', description: '', teaching: '', treacherous: '' };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, description, teaching, treacherous } = this.state;

        if (name === '' || description === '' || teaching=== '' || treacherous=== '') return;
        else {
            this.props.addCourse({ name, description, teaching: teaching, treacherous: treacherous });
            this.setState({ name: '', description: '', teaching: '', treacherous: '' });
        }
    };

    render() {
        const { name, description, teaching, treacherous } = this.state;

        return (
            <section>
                <h1>Add New Course</h1>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name">Name </label>
                    <br />

                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Course's Name"
                        style={{ marginBottom: '10px' }}
                    />

                    <br />
                    <label htmlFor="description">Description</label>
                    <br />

                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        placeholder="Course's description"
                        style={{ marginBottom: '10px' }}
                    />

                    <br />
                    <label htmlFor="teaching">Teacher's name</label>
                    <br />
                    <input
                        type="text"
                        name="teaching"
                        value={teaching}
                        onChange={this.handleChange}
                        placeholder="Teacher's name"
                        style={{ marginBottom: '10px' }}
                    />
                    <br />
                    <label htmlFor="treacherous">Teacher's surname</label>
                    <br />
                    <input
                        type="text"
                        name="treacherous"
                        value={treacherous}
                        onChange={this.handleChange}
                        placeholder="Teacher's surname"
                        style={{ marginBottom: '10px' }}
                    />

                    <br />

                    <button type="submit">Add Course</button>

                </form>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCourse: (newCourseObj) => dispatch( actions.addCourse(newCourseObj)) // ADD

    };
};



export default connect(null, mapDispatchToProps)(AddCourse);