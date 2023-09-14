//key 값 부여 x
// const IterationSample = () => {
//     const names = ["눈사람", "얼음", "눈", "바람"];
//     const nameList = names.map((name) => <li>{name}</li>);
//     return <ul>{nameList}</ul>;
//   };

//   export default IterationSample;

//key 값 부여
// const IterationSample = () => {
//   const names = ["눈사람", "얼음", "눈", "바람"];
//   const nameList = names.map((name,index) => <li key={index}>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

// export default IterationSample;

//동적인 배열 렌더링
import { useState } from "react";
const IterationSample = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: "눈사람",
    },
    {
      id: 2,
      text: "얼음",
    },
    {
      id: 3,
      text: "눈",
    },
    {
      id: 4,
      text: "바람",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const handleRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => handleRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input
        value={inputText}
        placeholder="입력해주세요"
        onChange={handleChange}
      />
      <button onClick={handleClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
