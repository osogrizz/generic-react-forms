import React from 'react'

export class StudyNotes extends React.Component {
  render() {
    return (
      <div className="studyNotesContainer">
        <p>Study Notes</p>
        <textarea className="all-notes col-md-6" id="studyNotes" rows="4" placeholder="STUDY NOTES">
          {this.props.value}
        </textarea>
      </div>
    )
  }
}
