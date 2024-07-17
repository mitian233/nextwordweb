import React from "react";

class DifyChatbot extends React.Component {
  componentDidMount() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://udify.app/embed.min.js";
    scriptTag.id = "D3mMCmwJWezq1mtY";
    scriptTag.defer = true;
    document.head.appendChild(scriptTag);
  }

  render() {
    return (
      <>
        {/* 设置全局配置 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.difyChatbotConfig = {
              token: 'D3mMCmwJWezq1mtY'
            };
          `,
          }}
        />

        {/* 设置样式 */}
        <style jsx>{`
          #dify-chatbot-bubble-button {
            background-color: #1c64f2 !important;
          }
        `}</style>
      </>
    );
  }
}

export default DifyChatbot;
