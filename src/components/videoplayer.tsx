import React from "react";
import create from "zustand";

// 定义 Zustand store
const useScrollingContentStore = (set) => ({
  currentPage: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
});

function ScrollingContent() {
  const { currentPage, setCurrentPage } = useScrollingContentStore();

  // 监听滚动事件并更新当前页面
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrentPage((page) => page + 1);
      } else if (scrollTop === 0) {
        setCurrentPage((page) => page - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setCurrentPage]);

  return (
    <div>
      {/* 根据当前页面状态渲染不同的内容 */}
      {currentPage === 0 && <LeftContent />}
      {currentPage === 1 && <RightContent />}
      {currentPage === 2 && <TopContent />}
      {currentPage === 3 && <BottomContent />}
    </div>
  );
}

function LeftContent() {
  return <div>Left Content</div>;
}

function RightContent() {
  return <div>Right Content</div>;
}

function TopContent() {
  return <div>Top Content</div>;
}

function BottomContent() {
  return <div>Bottom Content</div>;
}

export default ScrollingContent;
