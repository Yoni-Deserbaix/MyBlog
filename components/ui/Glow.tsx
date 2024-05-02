import React from "react";

const Glow = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return <div className={className} style={style}></div>;
};

export default Glow;
