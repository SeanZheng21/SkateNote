import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPractice, deletePractice } from '../../actions/practice';
import { getTrick } from '../../actions/trick';
import { Link } from 'react-router-dom';

export class Practice extends Component {
    static propTypes = {
        practice: PropTypes.array.isRequired,
        getPractice: PropTypes.func.isRequired,
        deletePractice: PropTypes.func.isRequired,
        getTrick: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTrick();
        this.props.getPractice();
    }

    trickName(trickID) {
        if (trickID === 0 || !this.props.trick[trickID - 1]) { return ""; }
        // console.log(this.props);
        return this.props.trick[trickID - 1].name;
    }

    render() {
        return (
            <Fragment>
                <h2>Practices</h2>
                <div style={{ float: "right" }}>
                    <button type="button" className="btn btn-link border-primary">
                        <Link to="/practice_add/">
                            <strong> Add New Practice </strong>
                        </Link>
                    </button>
                </div>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Completed</th>
                            <th>Trick</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.practice.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.isCompleted ? "True" : "False"}</td>
                                <td>{this.trickName(p.trick)}</td>
                                <td>
                                    <button onClick={this.props.deletePractice.bind(this, p.id)} className="btn btn-danger btn-sm">Delete</button>
                                    &nbsp;&nbsp;
                                    <button type="button" className="btn btn-link btn-sm border-primary">
                                        <Link to={"/session_add/" + p.id}>
                                            <strong> Add A Session </strong>
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    practice: state.practice.practice,
    trick: state.trick.trick
});

export default connect(
    mapStateToProps,
    { getTrick, getPractice, deletePractice }
)(Practice);