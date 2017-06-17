import React, { Component } from 'react';
import './homework.css'

class Homework extends Component{
    

    render(){
        return (
            <section className="main_homework_section">
                HOMEWORK
                <div className="questions" onClick={ () => {this.props.getHomework('512+62')} }>
                    1. 512+62
                </div>
                <div className="questions" onClick={() => {this.props.getHomework('80-65')}}>
                    2. 80-65
                </div>
                <div className="questions" onClick={() => {this.props.getHomework('50-25')}}>
                    3. 50-25
                </div>
            </section>
        )
    }
}

export default Homework