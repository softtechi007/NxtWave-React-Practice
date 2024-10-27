const element = (
  <div className='background-container'>
    <h1 className='heading'>Super Over League</h1>
    <div className='image-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        alt="Royal Challengers Bangalore"
        className='image-styling'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        alt="Chennai Super Kings"
        className='image-styling'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
