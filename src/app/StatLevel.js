import React from 'react'

export class StatLevel extends React.Component {
  render() {
    return (
      <div className="state-level-container col-md-6 dropdown">
        <p>State Level: <button className="state-level dropdown-toggle"></button></p>
        <p id="order-facility">Order Facility: <button className="order-facility dropdown-toggle"></button></p>
      </div>
    )
  }
}
