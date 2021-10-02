import React, {useState} from 'react';
import "./Questions.css";
import { connect } from 'react-redux'
import { Dropdown } from 'primereact/dropdown'

const DropdownBox = (props) => {
  const [category, setCategory] = useState("");
  return (
    <div className="astro-question-dropdown-main">
      <div className="astro-question-dropdown-container">
        <div className="question-dropdown-title">Choose Category</div>
        <Dropdown className="question-dropdown" optionLabel="name" optionValue="name" value={category} options={props.questions} onChange={(e) => setCategory(e.value)} placeholder="Select a category: Love, career, more"/>
        <div className="question-dropdown-description"><div className="question-price"><b> &#8377;99  </b>(Including GST)</div><div className="ideas-what-to-ask"><b>Ideas what to ask</b>  <div className="ask-a-question-button">Ask a Question</div></div></div>
      </div>
    </div>
  )
}

const Questions = (props) => {
const title = <div className="astro-question-title">Ask a Questions</div>
const description = <div className="astro-question-description">Seek accurate answers to your life problems and guide you towards the right path. Whether the problem is related to love, self, life, business, money, education or work, our astrologers will do an in depth study of your birth chart provide personalized responses along with the remedies.</div>
  return (
    <div className="astro-question-main">
      <div className="astro-question-titlebar">
        {title}
      </div>
      {description}
      <DropdownBox {...props}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions
})

export default connect(mapStateToProps)(Questions)