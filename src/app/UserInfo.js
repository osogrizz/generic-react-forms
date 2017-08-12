import React from 'react'

export class UserInfo extends React.Component {
  render() {
    return (
      <div className="user-info">
        <nav className="navbar">Radiologist-Name {this.props.name}</nav>
      </div>
    )
  }
}
