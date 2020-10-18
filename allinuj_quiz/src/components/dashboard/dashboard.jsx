import React from 'react'

import './dashboard.css'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }


    render() {
        return (
            <div className="dashboard_component">
               <div className="dashboard_title"></div>
               <div className="dashboard_buttons"></div>
            </div>
        )
    }
}