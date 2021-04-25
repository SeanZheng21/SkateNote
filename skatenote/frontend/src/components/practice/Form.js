import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPractice } from '../../actions/practice';

export class Form extends Component {
    state = {
        isCompleted: false
    }

    static propTypes = {
        addPractice: PropTypes.func.isRequired
    }

    onChange = e => {
        // this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.name]: e.target.checked });
    }

    onSubmit = e => {
        e.preventDefault();
        const { isCompleted } = this.state;
        const practice = { isCompleted }
        this.props.addPractice(practice);
        this.setState({
            isCompleted: false
        });
    }

    render() {
        const { isCompleted } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h1>Add Practice</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Is Completed: </label>
                        <input className="form-control"
                            type="checkbox"
                            name="isCompleted"
                            onChange={this.onChange}
                            checked={isCompleted}
                            style={{
                                float: "right",
                                width: "15px",
                                height: "15px",
                                marginLeft: "10px"
                            }} />

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addPractice })(Form);
