import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>Home page works!</h1>
            <button className="nav-link btn btn-info btn-sm text-light"
                onClick={this.props.logout}>
                Log out
                    </button>
        </div>
    )
}
