import React from 'react'

export class StudyType extends React.Component {
  render() {
    return (
      <div>
        <p id="study-type"> Study Type:</p>
        <div className="study-type">
          <p id="current">Current <input type="radio" name="options"/></p>
          <p id="prior">Prior <input type="radio" name="options"/></p>
        </div>
      </div>
    )
  }
}
