// //function
// import EventPractice from "./Components/EventPractice";
// import EventPracticeClass from "./Components/EventPracticeClass";
// import Say from "./Components/Say";
// import ValidationSample from "./Components/ValidationSample";

import Counter from "./Components/Counter";

// function App() {
//   return <ValidationSample />;
// }

// export default App;

//class
// import React, { Component } from "react";
// import ScrollBox from "./Components/ScrollBox";
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

//동적배열 렌더링
// import React, { Component } from "react";
// import ScrollBox from "./Components/ScrollBox";
// import IterationSample from "./Components/IterationSample";
// class App extends Component {
//   render() {
//     return <IterationSample />;
//   }
// }
// export default App;

//라이프사이클
// import React, { Component } from "react";
// import LifeCycleSample from "./Components/LifeCycleSample";
// import ErrorBoundary from "./Components/ErrorBoundary";

// // 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//   state = {
//     color: "#000000",
//   };
//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }
// export default App;

//훅
// import { useState } from "react";
// import Info1 from "./Components/Info1";

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       {visible && <Info1 />}
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import CounterR from "./Components/CounterR";
import InfoR from "./Components/InfoR";
import Average from "./Components/Average";

const App = () => {
  return <Average />;
};

export default App;
