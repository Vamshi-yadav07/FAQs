import {Component} from 'react'

const plusImg = {
  image: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
  altVal: 'plus',
}

const minusImg = {
  image: 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
  altVal: 'minus',
}

class FaqItem extends Component {
  state = {isOpened: false}

  changeState = () => {
    this.setState(prevState => ({isOpened: !prevState.isOpened}))
  }

  render() {
    const {isOpened} = this.state
    const {data} = this.props
    const {questionText, answerText} = data
    const mainImage = isOpened ? minusImg : plusImg
    return (
      <li>
        <div className="question-answer">
          <h3 className="question-title">{questionText}</h3>
          <img
            src={mainImage.image}
            className="icon-plus-or-minus"
            onClick={this.changeState}
            alt={mainImage.altVal}
          />
        </div>
        {isOpened ? (
          <div className="solution-card">
            <hr className="horizontal-line" />
            <p className="solution">{answerText}</p>
          </div>
        ) : (
          ' '
        )}
      </li>
    )
  }
}

export default FaqItem
