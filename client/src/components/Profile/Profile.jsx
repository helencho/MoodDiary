import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import '../../stylesheets/profile.css'

class Profile extends Component {
    handleLogout = e => {
        this.props.processLogout()
    }

    render() {
        return (
            <div className="profile-container">
                <h1>Name</h1>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)