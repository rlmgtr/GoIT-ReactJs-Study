import css from './Reviews-style.css'

const Reviews = () => {

const state = {
  good: 5,
  neutral: 3,
  bad: 1,
};

const totalReviews = () => { 
  
  return state.good + state.neutral + state.bad;


};

  return (
    <div>
     <div>
<button>Good</button>
<button>Neutral</button>
<button>Bad</button>
     </div>

<div>
<br></br>
  Good:<span>{state.good}</span>
  <br></br>
  Neutral:<span>{state.neutral}</span>
  <br></br>
  Bad:<span>{state.bad}</span>
  <br></br>

  Total Reviews: <span>{totalReviews()}</span>
</div>


    </div>
  )
}

export default Reviews
