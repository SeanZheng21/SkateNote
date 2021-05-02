import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSessionOfPractice, deleteSession } from '../../actions/session';
import { Link } from 'react-router-dom';

export class SessionOfPractice extends Component {
    static propTypes = {
        session: PropTypes.array.isRequired,
        getSessionOfPractice: PropTypes.func.isRequired,
        deleteSession: PropTypes.func.isRequired
    };

    componentDidMount() {
        let id = this.props.match.params.practice_id;
        id = parseInt(id, 10);
        this.props.getSessionOfPractice(id);
    }

    render() {
        return (
            <Fragment>
                <h2>Sessions of Practice</h2>
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
                        {this.props.session.map(s => (
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-link border-primary">
                    <Link to='/session'>
                        <strong> All Sessions </strong>
                    </Link>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-link border-primary">
                    <Link to='/practice'>
                        <strong> All Practices </strong>
                    </Link>
                </button>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session.session,
});

export default connect(
    mapStateToProps,
    { getSessionOfPractice, deleteSession }
)(SessionOfPractice);