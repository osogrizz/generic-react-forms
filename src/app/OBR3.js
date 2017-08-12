import React from 'react'
// import { Field, FieldArray, reduxForm } from 'redux-form'


class InputField extends React.Component {
    render() {
      const { name, onChange } = this.props;
      return (<div className="row">
                <div className="input-field col s12">
                  <label htmlFor={name}>OBR3</label>
                  <input id={name}
                         type="text"
                         className=""
                         value={this.props.inputValues}
                         onChange={this.props.onChange} />

                         <button type='delete' value='Delete' onClick={this.props.handleRemove}>
                           <i className="material-icons">remove</i>
                         </button>
                </div>
         </div>
       )
    }
}

export class OBR3 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValues: {},
      inputs: []
    }

  }

  handleRemove (event) {
    let inputs = this.state.inputs
    inputs.remove(event.target.inputs)
    this.setState({ inputs })
  }

  handleChange (name, event) {
    let inputValues = this.state.inputValues
    inputValues[name] = event.target.value
    this.setState({ inputValues })
  }

  handleAddInput() {
      const name = `OBR3-${(this.state.inputs).length}`;

      let inputBox = <InputField key={this.state.inputs.length}
                                 name={name}
                                 onChange={this.handleChange.bind(this, name)} />


      const inputs = this.state.inputs
      inputs.push( inputBox );
      this.setState({ inputs });
  }


  render() {
    return (
      <div>
        <p id='OBR3'>OBR3</p>
        <button type='submit' value='Submit' onClick={this.handleAddInput.bind(this)}><i className="material-icons">add</i></button>
        {this.state.inputs}
      </div>
    )
  }
}
