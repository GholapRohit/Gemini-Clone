import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setInput("");
    setShowResult(false);
    setLoading(false);
  };

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response = "";

    // Ensure prompt is a string, fallback to input if not
    let usedPrompt =
      typeof prompt === "string" && prompt.trim() !== ""
        ? prompt
        : typeof input === "string"
        ? input
        : "";

    if (!usedPrompt.trim()) {
      setLoading(false);
      return; // Do nothing if prompt is empty or invalid
    }

    setInput("");

    if (prompt !== undefined && typeof prompt === "string") {
      response = await main(usedPrompt);
      setRecentPrompt(usedPrompt);
    } else {
      setPrevPrompts((prev) => {
        if (prev.length >= 5) prev.shift();
        return [...prev, usedPrompt];
      });
      setRecentPrompt(usedPrompt);
      response = await main(usedPrompt);
    }

    let newResponseArray = response.split(" ");
    newResponseArray.forEach((word, index) => {
      delayPara(index, word + " ");
    });
    setLoading(false);
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
