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
import { InputField2 } from './InputField2'

export class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      value: [],
      count: 1
    }
  }

  render() {
    return(
      // <Provider store={store}>
      <form action=''>
        <div className="form container">
            <UserInfo />
          <div className="top-container row-container">
            <Accession />
            <AddStuffUI />
          </div>
          <div className="row-container ">
            <div className='column-container col-md-6'>
              <StatLevel />
              <PID3 />
              <div className='row-container'>
                <div>
                  <InputField2 />
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>
            </div>

            <div className="column-container col-md-6">
              <Notes />
              <StudyNotes/>
            </div>
          </div>
          <div className='row-container'>
            <StudyType />
          </div>

          <hr></hr>
          <div className="container">
            <AddPDF />
          </div>
          <div className="input-container">

          </div>
        </div>
      </form>

      // </Provider>
    );
  }
}
