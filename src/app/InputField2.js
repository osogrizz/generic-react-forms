import React from 'react'

export class InputField2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: [],
      count: 1
    }

  }

  handleChange (i, event) {
    let value = this.state.value.slice()
    value[i] = event.target.value
    this.setState({ value })
  }


  handleRemove (i, event) {
    let value = this.state.value.slice()
    value.splice(i, 1)
    this.setState({
      count: this.state.count - 1,
      value
    })
    event.preventDefault()
  }

  handleAddInput (event) {
    this.setState({count: this.state.count + 1})
    event.preventDefault()
  }


  createInput() {
      let inputItems = []
      for (let i = 0; i < this.state.count; i++) {
        inputItems.push(
          <div key={i}>
            <input className='Input2' type='text' value={this.state.value[i]} onChange={this.handleChange.bind(this, i)} />
            <button type='delete' value='Delete' onClick={this.handleRemove.bind(this, i)}>
              <i className="material-icons">remove</i>
            </button>
          </div>
        )
      }
      return inputItems 
    }


  render() {
    return (
      <div>
        <p id='Input2'>Input2</p>
        <button type='submit' value='Submit' onClick={this.handleAddInput.bind(this)}>
          <i className="material-icons">add</i>
        </button>
        {this.createInput()}
      </div>
    )
  }
}
