import React from 'react'

export class Notes extends React.Component {
  constructor() {
    super()
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <div className="reasonsNotesContainer">
        <p>Reason</p>
        <textarea className="all-notes col-md-6" id="reasons" rows="4" placeholder="Stuff stuff stuff">
          {this.props.value}
        </textarea>
      </div>
    )
  }
}
