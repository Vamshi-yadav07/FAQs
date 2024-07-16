import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div className="faqs-container">
        <div className="faqs-card">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem data={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
