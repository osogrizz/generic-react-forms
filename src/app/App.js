import React from 'react'
// import { Provider } from 'react-redux'
// import { Values } from 'redux-form-website-template'
// import store from './store'
import { UserInfo } from './UserInfo'
import { StudyType } from './StudyType'
import { AddPDF } from './AddPDF'
import { Notes } from './Notes'
import { StudyNotes } from './StudyNotes'
import { Accession } from './Accession'
import { AddStuffUI } from './AddStuffUI'
import { StatLevel } from './StatLevel'
import { PID3 } from './PID3'
import { OBR3 } from './OBR3'

export class Form extends React.Component {
  constructor() {
    super()

    // this.state = {
    //   inputValues: {},
    //   inputs: []
    // }
  }

  render() {
    return(
      // <Provider store={store}>
        <div className="form container">
            <UserInfo />
          <div className="top-container">
            <Accession />
            <AddStuffUI />
          </div>
          <div className="left-col col-md-6">
            <StatLevel />
            <PID3 />
            <OBR3

            />
          </div>
          <div className="notes-container col-md-4">
            <Notes />
            <StudyNotes/>
          </div>
        <StudyType />
          <hr></hr>
          <div className="container">
            <AddPDF />
          </div>
          <div className="input-container">

          </div>
        </div>
      // </Provider>
    );
  }
}
