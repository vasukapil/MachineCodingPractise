import "./App.css";
const poll = [
  {
    pollData: "Great",
    value: "80",
    color: "lightgreen",
  },
  {
    pollData: "Actually Decent",
    value: "10",
    color: "lightblue",
  },
  {
    pollData: "Garbage",
    value: "10",
    color: "red",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Poll Widgets</h1>
      <p>What do you think of this Poll?</p>
      <div className="poll">
        {poll.map((el,idx) => {
          return (
            <>
              <div
                style={{
                  background: `${el.color}`,
                  width: `${el.value / 2}%`,
                  position: "absolute",
                  borderTopRightRadius:0,
                  borderBottomRightRadius:0,
                  marginTop: idx>0 && 0
                  
                }}
                className="poll-bar"
              ></div>
              <div className="poll-bar" style={{ position: "relative" }}>
                <span className="row">{el.pollData}</span>
                <span className="row">{el.value}%</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
