import React, { Component, Fragment } from 'react';
import { withAlert, useAlert } from 'react-alert';

export class MyAlerts extends Component {

    componentDidMount() {
        this.props.alert.show("It works");
    }

    render() {
        return <Fragment />;
    }
}
// export default MyAlerts;
export default withAlert()(MyAlerts);




// import React from 'react'
// import { withAlert } from 'react-alert'

// const MyAlerts = ({ alert }) => (
//     <button
//         onClick={() => {
//             alert.show('Oh look, an alert!')
//         }}
//     >
//         Show Alert
//     </button>
// )

// export default withAlert()(MyAlerts)