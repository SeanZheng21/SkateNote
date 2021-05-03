import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrick } from '../../actions/trick';
import { Link } from 'react-router-dom';

export class Trick extends Component {
    static propTypes = {
        trick: PropTypes.array.isRequired,
        getTrick: PropTypes.func.isRequired,
    };

    formatDifficulty(diffInt) {
        if (diffInt === 0) {
            return "Beginner";
        } else if (diffInt === 1) {
            return "Intermediate";
        } else {
            return "Hard";
        }
    }

    componentDidMount() {
        this.props.getTrick();
    }

    render() {
        return (
            <Fragment>
                <h2>Trick Library</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Difficulty</th>
                            <th>Stances</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.trick.map(t => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.name}</td>
                                <td>{this.formatDifficulty(t.difficulty)}</td>
                                <td>{t.description}</td>
                                <td>
                                    <button type="button" className="btn btn-link border-primary">
                                        <Link to={'/trick/' + t.id}>
                                            <strong> Trick Details </strong>
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
    trick: state.trick.trick
});

export default connect(
    mapStateToProps,
    { getTrick }
)(Trick);