import React from 'react';
import './App.css';
import Course from './components/Course';
import AddStudent from './components/AddCourse';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from './redux/actions/actions'
import AddCourse from "./components/AddCourse";

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:8000/students')
            .then((response) => {
                this.props.addAllCourses(response.data);
            });
    }



  render() {
      const { courses } = this.props;

    return (
        <main className="App">
          { !courses
              ? null
              : courses.map((course, index) => (
                  <Course info={course} key={index} />
              ))}

          <AddCourse addCourseToList={this.addCourse}/>
        </main>
    );
  }

}

const mapStateToProps = state => {
    return { courses: state };
};


const mapDispatchToProps = dispatch => {
    return {
        addAllCourses: (allCourses) => dispatch( actions.addAllCourses(allCourses) )

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);