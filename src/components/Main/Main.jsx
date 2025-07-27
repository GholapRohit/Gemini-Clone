import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { marked } from "marked";
import DOMPurify from "dompurify";

const Main = () => {
  const {
    onSent,
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
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Talk with your personal AI assistant</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Get smart answers anytime</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Generate blogs, stories & more</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Debug, write, and learn code fast</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(marked(resultData)),
                  }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your query..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input.trim() != "" ? (
                <img onClick={onSent} src={assets.send_icon} alt="" />
              ) : (
                <img src={assets.send_icon} alt="" />
              )}
            </div>
          </div>
          <div className="bottom-info">
            <p>
              This AI may generate inaccurate or misleading information — please
              verify all outputs before use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
