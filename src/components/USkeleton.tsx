import React, { FC } from "react";

const USkeleton: React.FC = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-48 w-full"></div>
        <div className="skeleton h-4 w-2/3"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export { USkeleton };
