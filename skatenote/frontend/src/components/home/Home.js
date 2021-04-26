import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Skate Note</h1>
            <h2>Skaters' notebook to track skate trick progressions.</h2>
            <br />
            <button type="button" className="btn btn-link border-primary">
                <Link to="/trick/">
                    <strong> Trick Library </strong>
                </Link>
            </button>
            <br />
            <br />
            <button type="button" className="btn btn-link border-primary">
                <Link to="/practice/">
                    <strong> My Practices </strong>
                </Link>
            </button>
        </div>
    )
}
