import React, { useEffect, useState } from "react";
import http from "../../../../resources/http";

const AutoComplete = () => {
  const baseURL = "https://reqres.in/api/users";
  const [datas, setData] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await http.get("https://reqres.in/api/users");
      console.log(response.data);
      setData(response.data.data);
    };
    loadData();
  }, []);
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = datas.filter((datas) => {
        const regex = new RegExp(`${text}`, "gi");
        return datas.email.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };
  return (
    <div className="flex flex-col mt-24 justify-center items-center">
      <input
        className="outline-none"
        type="text"
        placeholder="Search Here"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />
      {suggestions &&
        suggestions?.map((suggestion, i) => {
          <div key={i}>{suggestion.emal} </div>;
        })}
    </div>
  );
};

export default AutoComplete;
