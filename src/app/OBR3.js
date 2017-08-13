import React from 'react'

export class OBR3 extends React.Component {
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


  handleRemove (i) {
    let value = this.state.value.slice()
    value.splice(i, 1)
    this.setState({
      count: this.state.count - 1,
      value
    })
  }

  handleAddInput () {
    this.setState({count: this.state.count + 1})
  }


  createInput() {
      let inputItems = []
      for (let i = 0; i < this.state.count; i++) {
        inputItems.push(
          <div key={i}>
            <input className='OBR3' type='text' value={this.state.value[i]} onChange={this.handleChange.bind(this, i)} />
            <button type='delete' value='Delete' onClick={this.handleRemove.bind(this, i)}>
              <i className="material-icons">remove</i>
            </button>
          </div>
        )
      }
      return inputItems || null
    }


  render() {
    return (
      <div>
        <p id='OBR3'>OBR3</p>
        <button type='submit' value='Submit' onClick={this.handleAddInput.bind(this)}>
          <i className="material-icons">add</i>
        </button>
        {this.createInput()}
      </div>
    )
  }
}

{/* <RemoveInput onClick={this.handleRemove.bind(this)} /> */}
