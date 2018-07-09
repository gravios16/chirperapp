import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'

import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'


class Tweet extends Component {

  toParent = (e, id) => {
    e.preventDefault()
    //todo: Redirect to parent Tweet.
  }

  render() {

    const { tweet } = this.props

    if (tweet === null) {
      return <p>This Tweet doesn't exist</p>
    }

    const {
      name, avatar, timpestamp, text, hasLiked, likes, replies, id, parent
    } = tweet

    return (
      <div className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />

        <div className='tweet-info'>
          <span>{name}</span>
          <div>{formatDate(timpestamp)}</div>
          {parent && (
            <button className='replying-to' onClick={(e) => this.toParent(parent.id)}>
              Replying to @{parent.author}
            </button>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)