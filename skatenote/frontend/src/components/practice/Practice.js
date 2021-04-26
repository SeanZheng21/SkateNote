import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPractice, deletePractice } from '../../actions/practice';

export class Practice extends Component {
    static propTypes = {
        practice: PropTypes.array.isRequired,
        getPractice: PropTypes.func.isRequired,
        deletePractice: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getPractice();
    }

    render() {
        return (
            <Fragment>
                <h2>Practices</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Completed</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.practice.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.isCompleted ? "True" : "false"}</td>
                                <td>
                                    <button onClick={this.props.deletePractice.bind(this, p.id)} className="btn btn-danger btn-sm">Delete</button>
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
    practice: state.practice.practice
});

export default connect(
    mapStateToProps,
    { getPractice, deletePractice }
)(Practice);