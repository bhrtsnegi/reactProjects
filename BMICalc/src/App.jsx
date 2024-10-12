const App = () => {
  return (
    <div>
      <div>
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight(lbs)</label>
            <input type="text" placeholder="Enter Your Weight" value={weight} onChange={(e)=>{weight}}/>
          </div>
          <div>
            <label>Height(lbs)</label>
            <input type="text" placeholder="Enter Your Height" value={height} onChange={(e)=>{height}}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App