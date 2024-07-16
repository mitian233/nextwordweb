"use client";

import React from "react";

import "./index.css";
import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";

const MainBottom = () => {
  return (
    <div className="container flex flex-row">
      <div className="card card-side">
        <div className="card_top card-body">
          <div className="card-title">
            <div className="flex flex-row gap-2">
              <div className="video w-2/3 flex-1">
                <video
                  className="video"
                  src="../../public/assets/video/web.mp4"
                  width={640}
                  controls={true}
                  autoPlay
                  loop></video>
              </div>
              <div className="right_content w-1/3 flex-auto">
                <ULearnSegment
                  word={MainContent.zh.word}
                  pronunciation={MainContent.zh.pronunciation}
                  sentence={MainContent.zh.sentence}
                />
              </div>
            </div>
          </div>
          <div className="paragraphs mt-1">
            <span className="font-serif">
              Next Word
              是一款创新的英语学习软件，旨在彻底改变个人提升词汇量的方式。该平台由先进的人工智能算法驱动，是技术与教育无缝结合的典范。{" "}
              <br />
              软件的核心优势在于其自适应学习功能。它细致地分析用户的语言水平，并量身定制适合他们个人需求的学习路径。这种个性化确保了学习者既不会被复杂词汇所压倒，也不会因为已经掌握的词汇而感到乏味。
              <br />
              Next Word
              的一个显著特点是其动态词汇推荐引擎。它根据用户与平台的互动来推荐新词汇，考虑到他们已经学过的词汇、使用频率以及出现的语境。{" "}
              <br />
              这确保了丰富多样且引人入胜且有效的学习体验。
              <br />
              此外，Next Word
              提供了大量旨在加强学习的互动练习。从多项选择题到填空题和句子构造任务，这些练习迎合了不同的学习风格，使平台能够满足广泛的用户群体。
              <br />
              AI
              驱动的系统还会跟踪每位用户的进度，提供有关他们学习旅程的详细分析。{" "}
              <br />
              这种反馈循环对于学习者识别改进领域和为词汇扩展设定可实现目标至关重要。
              <br />
              <br />
              除了其教育实力外，Next Word
              还拥有一个既视觉吸引又直观易用的界面。这使得学习过程变得愉快且对初学者来说不那么令人生畏。
              <br />
              Next Word
              还支持协作学习环境，用户可以与同伴联系，分享他们的进度，并参与讨论。{" "}
              <br />
              这种学习的社交方面培养了社区意识，并激励用户坚持他们的语言学习努力。
              对于教育工作者来说，Next Word
              是补充传统教学方法的有价值工具。它提供了对学生学习模式的洞察，并提供了以数据为驱动的策略来增强课堂指导。
              <br />
              总之，Next Word
              不仅仅是一个词汇构建器；它是一个全面的语言伴侣，使用户能够掌控自己的英语学习之旅。凭借其
              AI 驱动的功能和个性化方法，Next Word
              将成为任何希望提升英语水平的人的不可或缺的资产。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
