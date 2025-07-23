const CircularProcessBar = ({
  percent,
  size = 3,
  strokeWidth = 0.25,
  strokeColor,
}) => {
  const radius = size / 2 - strokeWidth;
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
          fill="none"
        ></circle>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`} // dash => 1px dash 1 | gap 1 | dash 1 | gap 1
          // Chu vi = 2*PI*R => 2*20*3.14 = 125.65
          // Offset = chu vi - (percent/100 * chu vi)
          strokeDashoffset={`${2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="square"
          fill="none"
        ></circle>
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize="1.2vw"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};
export default CircularProcessBar;
