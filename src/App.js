// //function
// import EventPractice from "./Components/EventPractice";
// import EventPracticeClass from "./Components/EventPracticeClass";
// import Say from "./Components/Say";
// import ValidationSample from "./Components/ValidationSample";

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

import React, { Component } from "react";
import ScrollBox from "./Components/ScrollBox";
import IterationSample from "./Components/IterationSample";
class App extends Component {
  render() {
    return <IterationSample />;
  }
}
export default App;
