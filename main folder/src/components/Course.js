import React from 'react';

const Course = (props) => {
    const { info } = props;

    return (
        <section style={{ margin: '10px', border: '1px solid black' }}>
            <h3>
                {info.name} - {info.description} - {info.teaching} - {info.treacherous}
            </h3>
        </section>
    );
};

export default Course;