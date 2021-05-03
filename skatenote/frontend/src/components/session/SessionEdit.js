import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editSession } from '../../actions/session';
import { Link } from 'react-router-dom';

export class SessionEdit extends Component {
    state = {
        duration: 0,
        date: Date.now(),
        summary: "",
        note: "",
        videolink: ""
    }

    static propTypes = {
        editSession: PropTypes.func.isRequired,
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    get_practice_id() {
        let id = this.props.match.params.practice_id;
        return parseInt(id, 10);
    }

    onSubmit = e => {
        e.preventDefault();
        let id = this.props.match.params.session_id;
        id = parseInt(id, 10);
        const { duration, date, summary, note, videolink } = this.state;
        const session = {
            id: id,
            duration: duration,
            date: date,
            summary: summary,
            note: note,
            videolink: videolink
        }
        // console.log(session);
        this.props.editSession(id, session);
        this.props.history.push('/session');
    }

    render() {
        const { duration, date, summary, note, videolink } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <span>
                    <h1 style={{ float: "left" }}>Edit Session</h1>
                    <div style={{ float: "right" }}>
                        <p>&nbsp;</p>
                        <button type="button" className="btn btn-link border-primary">
                            <Link to="/session/">
                                <strong> All My Sessions </strong>
                            </Link>
                        </button>
                    </div>

                </span>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Total Time</label>
                        <input className="form-control"
                            type="number"
                            name="duration"
                            onChange={this.handleChange}
                            value={duration} />
                    </div>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Date</label>
                        <input className="form-control"
                            type="date"
                            name="date"
                            onChange={this.handleChange}
                            value={date} />
                    </div>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Summary</label>
                        <input className="form-control"
                            type="text"
                            name="summary"
                            onChange={this.handleChange}
                            value={summary} />
                    </div>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Note</label>
                        <input className="form-control"
                            type="text"
                            name="note"
                            onChange={this.handleChange}
                            value={note} />
                    </div>
                    <div className="form-group" style={{ width: "fit-content" }}>
                        <label>Video Link</label>
                        <input className="form-control"
                            type="text"
                            name="videolink"
                            onChange={this.handleChange}
                            value={videolink} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    &nbsp; &nbsp;
                    <button type="button" className="btn btn-link btn-sm border-primary">
                        <Link to={'/session/'}>
                            <strong> Cancel </strong>
                        </Link>
                    </button>
                </form>
            </div>
        )
    }
}

export default connect(null, { editSession })(SessionEdit);
