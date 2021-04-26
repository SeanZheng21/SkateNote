import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrickOne } from '../../actions/trick';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class TrickDetail extends Component {
    state = {
        trick: null
        // id: -1,
        // name: "",
        // difficulty: "",
        // stances: -1,
        // description: "",
        // guide: ""
    }

    // static propTypes = {
    //     trick: PropTypes.array.isRequired,
    //     getTrickOne: PropTypes.func.isRequired,
    // };

    formatDifficulty(diffInt) {
        if (diffInt === 0) {
            return "Beginner";
        } else if (diffInt === 1) {
            return "Intermediate";
        } else {
            return "Hard";
        }
    }

    formatStances(stanceInt) {
        let resStr = "Regular ";
        if (stanceInt >= 4) {
            resStr = resStr + "Switch ";
        }
        if (stanceInt == 2 || stanceInt == 3 || stanceInt == 6 || stanceInt == 7) {
            resStr = resStr + "Fakie ";
        }
        if (stanceInt % 2 == 1) {
            resStr = resStr + "Nollie";
        }
        return resStr;
    }

    componentDidMount() {
        let id = this.props.match.params.trick_id;
        id = parseInt(id, 10);
        // this.props.getTrickOne(id);

        axios.get(`/api/trick/${id}/`)
            .then(res => {
                // dispatch({
                //     type: GET_TRICK_ONE,
                //     payload: res.data
                // });
                this.setState({
                    ...this.state,
                    trick: res.data
                });
            })
    }

    render() {
        // const { id, name, difficulty, stances, description, guide } = this.state;
        return (
            <div className="container">
                <h1>Trick detail</h1>
                <h2>Trick Name</h2>
                <p>{this.state.trick ? this.state.trick.name : ""}</p>
                <h2>Trick Difficulty</h2>
                <p>{this.state.trick ? this.formatDifficulty(this.state.trick.difficulty) : ""}</p>
                <h2>Trick Stances</h2>
                <p>{this.state.trick ? this.formatStances(this.state.trick.stances) : ""}</p>
                <h2>Trick Description</h2>
                <p>{this.state.trick ? this.state.trick.description : ""}</p>
                <h2>Trick Guide</h2>
                <p>{this.state.trick ? this.state.trick.guide : ""}</p>

                <button type="button" className="btn btn-link border-primary">
                    <Link to='/trick'>
                        <strong> All Tricks </strong>
                    </Link>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trick: state.trick.trick
});

// export default connect(
//     mapStateToProps,
//     { getTrickOne }
// )(TrickDetail);

export default TrickDetail;