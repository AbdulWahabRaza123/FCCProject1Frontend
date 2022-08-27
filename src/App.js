import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    text: "",
    author: "",
  });
  const getData = async () => {
    console.log("Working here");
    const res = await axios.get("https://type.fit/api/quotes");
    if (res.data.length <= count) {
      setCount(0);
    }
    const { text, author } = res.data[count];
    setData(() => {
      return {
        text,
        author,
      };
    });

    console.log(res.data[0].text);
  };
  useEffect(() => {
    getData();
  }, [count]);
  const chngQuote = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div id="quote-box" className="text-center container container-fluid">
        <h3 id="text">{data.text}</h3>
        <div id="author">
          <b>{data.author}</b>
        </div>
        <br />
        <div className="buttons-style container-fluid">
          <div id="new-quote">
            <button onClick={chngQuote} className="btn btn-success">
              New Quote
            </button>
          </div>
          <a
            className="btn btn-primary"
            href="twitter.com/intent/tweet"
            target="_blank"
            alt="tweet"
            id="tweet-quote"
          >
            Tweet
          </a>
        </div>
      </div>
    </>
  );
};
export default App;
