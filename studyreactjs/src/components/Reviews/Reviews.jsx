import css from './Reviews-style.css'

const Reviews = () => {

const state = {
  good: 5,
  neutral: 3,
  bad: 1,
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
  Neutral:<span>{}</span>
  <br></br>
  Bad:<span>{}</span>
  <br></br>
</div>


    </div>
  )
}

export default Reviews
