import React from 'react'

// add PDF form
export class AddPDF extends React.Component {
  render() {
    return (
      <div className="container">
        <p>Add PDF</p>
      <textarea className="addPDF" placeholder="Enter PDF info here..." rows="4"></textarea>
      <button className="btn btn-danger cancelBtn">Cancel</button>
      <button className="btn btn-primary pdfBtn">Submit</button>
    </div>
    )
  }
}
