import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSession, deleteSession } from '../../actions/session';
import { Link } from 'react-router-dom';

export class Session extends Component {
    static propTypes = {
        session: PropTypes.array.isRequired,
        getSession: PropTypes.func.isRequired,
        deleteSession: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getSession();
    }

    render() {
        return (
            <Fragment>
                <h2>Sessions</h2>
                {/* <div style={{ float: "right" }}>
                    <button type="button" className="btn btn-link border-primary">
                        <Link to="/session_add/">
                            <strong> Add New Session </strong>
                        </Link>
                    </button>
                </div> 
                <br /> */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Summary</th>
                            <th>Duration</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.session.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.summary}</td>
                                <td>{s.duration}</td>
                                <td>
                                    <button onClick={this.props.deleteSession.bind(this, s.id)} className="btn btn-danger btn-sm">Delete</button>
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
    session: state.session.session,
});

export default connect(
    mapStateToProps,
    { getSession, deleteSession }
)(Session);