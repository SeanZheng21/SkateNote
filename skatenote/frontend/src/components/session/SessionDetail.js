import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSession, deleteSession } from '../../actions/session';



export class SessionDetail extends Component {
    static propTypes = {
        session: PropTypes.array.isRequired,
        getSession: PropTypes.func.isRequired,
        deleteSession: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getSession();
    }

    sessionId() {
        if (!this.props.session) return -1;

        let id = this.props.match.params.session_id;
        return parseInt(id, 10);
    }

    oneSession() {
        if (!this.props.session) return null;

        let id = this.props.match.params.session_id;
        id = parseInt(id, 10);
        return this.props.session.find(elt => elt.id === id);
    }

    render() {
        return (
            <div className="container">
                <h1>Session #{this.oneSession() ? this.oneSession().id : ""} detail</h1>
                <h2>Total Time</h2>
                <p>{this.oneSession() ? this.oneSession().duration + " min" : "0 min"}</p>
                <h2>Session Date</h2>
                <p>{this.oneSession() ? this.oneSession().date : ""}</p>
                <h2>Session Summary</h2>
                <p>{this.oneSession() ? this.oneSession().summary : ""}</p>
                <h2>Session Note</h2>
                <p>{this.oneSession() ? this.oneSession().note : ""}</p>
                <h2>Session Video Link</h2>
                <p>{this.oneSession() ? this.oneSession().videolink : ""}</p>

                <button type="button" className="btn btn-link border-primary">
                    <Link to='/session'>
                        <strong> All Sessions </strong>
                    </Link>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={
                    this.props.deleteSession.bind(this, this.oneSession() ? this.oneSession().id : 0)
                } className="btn btn-danger btn-sm">Delete</button>
                &nbsp; &nbsp;
                <button type="button" className="btn btn-link btn-sm border-primary">
                    <Link to={`/session_edit/${this.sessionId()}/`}>
                        <strong> Edit </strong>
                    </Link>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session.session,
});

export default connect(
    mapStateToProps,
    { getSession, deleteSession }
)(SessionDetail);