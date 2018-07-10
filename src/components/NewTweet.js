import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewTweet extends Component {
  state = {
    text: '',
  }

  handleChangue = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state

    //todo: Add tweet to Store

    console.log("New Tweet: ", text)

    this.setState(() => ({
      text: ''
    }))
  }

  render() {
    const { text } = this.state
    const maxLength = 280
    const tweetLeft = maxLength - text.length

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChangue}
            className='textarea'
            maxLength={maxLength}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={ text === '' }
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NewTweet