import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPractice } from '../../actions/practice';
import { getTrick } from '../../actions/trick';
import { Link } from 'react-router-dom';

export class Form extends Component {
    state = {
        isCompleted: false,
        selectedTrick: 0
    }

    static propTypes = {
        addPractice: PropTypes.func.isRequired,
        trick: PropTypes.array.isRequired,
        getTrick: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTrick();
    }

    onCheckboxChange = e => {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.selectedTrick === 0) { return; }
        const { selectedTrick, isCompleted } = this.state;
        const practice = {
            trick: selectedTrick,
            isCompleted: isCompleted
        }
        // console.log(practice);
        this.props.addPractice(practice);
        this.setState({
            isCompleted: false,
            selectedTrick: 0
        });
        this.props.history.push('/practice');
    }

    trickName(trickID) {
        if (trickID === 0 || !this.props.trick[trickID - 1]) { return ""; }
        // console.log(this.props.trick[trickID - 1].name);
        return this.props.trick[trickID - 1].name;
    }

    render() {
        const { isCompleted, selectedTrick } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <span>
                    <h1 style={{ float: "left" }}>Add Practice</h1>
                    <div style={{ float: "right" }}>
                        <p>&nbsp;</p>
                        <button type="button" className="btn btn-link border-primary">
                            <Link to="/practice/">
                                <strong> All My Practices </strong>
                            </Link>
                        </button>
                    </div>

                </span>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Trick {this.trickName(this.state.selectedTrick)}</label><br />

                        <select className="form-control"
                            name="selectedTrick"
                            onChange={this.handleChange}
                            value={this.state.selectedTrick}>
                            {this.props.trick.map(t => {
                                return <option key={t.id} value={t.id}>{this.trickName(t.id)}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Is Completed: </label>
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

const mapStateToProps = state => ({
    trick: state.trick.trick
});

export default connect(mapStateToProps, { getTrick, addPractice })(Form);
