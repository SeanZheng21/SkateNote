import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSession, deleteSession } from '../../actions/session';
import { getPractice } from '../../actions/practice';
import { getTrick } from '../../actions/trick';
import { Link } from 'react-router-dom';

export class Session extends Component {
    static propTypes = {
        getTrick: PropTypes.func.isRequired,
        getPractice: PropTypes.func.isRequired,
        session: PropTypes.array.isRequired,
        getSession: PropTypes.func.isRequired,
        deleteSession: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getTrick();
        this.props.getPractice();
        this.props.getSession();
    }

    getPracticeIds() {
        if (!this.props.session) {
            return [];
        }
        let ids = [];
        for (let i = 0; i < this.props.session.length; i++) {
            const practiceID = this.props.session[i].practice;
            if (!ids.includes(practiceID)) {
                ids.push(practiceID);
            }
        }
        return ids;
    }

    getPracticeTitle(practice_id) {
        if (!this.props.practice) return "";

        const practice_found = this.props.practice.find(elt => elt.id === practice_id)
        // console.log(practice_found);
        return `My ${this.trickName(practice_found.trick)} sessions: total ${this.sessionsOfPractice(practice_id).length}`;
    }

    trickName(trickID) {
        if (trickID === 0 || !this.props.trick[trickID - 1]) { return ""; }
        return this.props.trick[trickID - 1].name;
    }

    sessionsOfPractice(pid) {
        if (!this.props.session) return [];

        return this.props.session.filter(elt => elt.practice === pid);
    }


    render() {
        return (
            <Fragment>
                <h2>All Sessions</h2>
                { this.getPracticeIds().map(pid => (
                    <div key={pid}>
                        <h3>{this.getPracticeTitle(pid)}</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Summary</th>
                                    <th>Duration</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {this.sessionsOfPractice(pid).map(s => (
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.date}</td>
                                        <td>{s.summary}</td>
                                        <td>{s.duration} min</td>
                                        <td>
                                            <button onClick={this.props.deleteSession.bind(this, s.id)} className="btn btn-danger btn-sm">Delete</button>
                                            &nbsp; &nbsp;
                                            <button type="button" className="btn btn-link btn-sm border-primary">
                                                <Link to={'/session/' + s.id}>
                                                    <strong> Session Details </strong>
                                                </Link>
                                            </button>
                                            &nbsp; &nbsp;
                                            <button type="button" className="btn btn-link btn-sm border-primary">
                                                <Link to={`/session_edit/${s.id}/`}>
                                                    <strong> Edit </strong>
                                                </Link>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session.session,
    practice: state.practice.practice,
    trick: state.trick.trick
});

export default connect(
    mapStateToProps,
    { getTrick, getPractice, getSession, deleteSession }
)(Session);