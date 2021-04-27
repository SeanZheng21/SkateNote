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

        // axios.get(`/api/session/${id}/`, tokenConfig(() => this.state))
        //     .then(res => {
        //         this.setState({
        //             ...this.state,
        //             session: res.data
        //         });
        //     })
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