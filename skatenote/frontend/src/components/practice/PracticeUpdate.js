import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editPractice, getPractice } from '../../actions/practice';
import { Link } from 'react-router-dom';
import practice from '../../reducers/practice';

export class PracticeUpdate extends Component {
    state = {
        isCompleted: false
    }

    static propTypes = {
        editPractice: PropTypes.func.isRequired,
        getPractice: PropTypes.func.isRequired,
    }

    practiceItem() {
        if (!this.props.practice) return null;

        let id = this.props.match.params.practice_id;
        id = parseInt(id, 10);
        return this.props.practice.find(elt => elt.id === id);
    }

    componentDidMount() {
        this.props.getPractice();
    }

    onCheckboxChange = e => {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const { isCompleted } = this.state;
        // console.log(isCompleted);
        let practiceItem = {
            ...this.practiceItem(),
            isCompleted: isCompleted
        };
        // console.log(practiceItem);
        let id = this.props.match.params.practice_id;
        id = parseInt(id, 10);
        this.props.editPractice(id, practiceItem);
        this.props.history.push('/practice');
    }


    render() {
        const { isCompleted } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h1>Update Practice</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Is Completed:
                        <input className="form-control"
                                type="checkbox"
                                name="isCompleted"
                                onChange={this.onCheckboxChange}
                                checked={isCompleted}
                                style={{
                                    float: "right",
                                    width: "15px",
                                    height: "15px",
                                    marginLeft: "10px"
                                }} /></label>
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

const mapStateToProps = state => ({
    practice: state.practice.practice,
    isCompleted: state.practice.isCompleted
});

export default connect(mapStateToProps, { getPractice, editPractice })(PracticeUpdate);
