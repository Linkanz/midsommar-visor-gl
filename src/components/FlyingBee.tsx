export const FlyingBee = ({ 
  className = "", 
  size = "text-2xl",
  animationType = "fly-around",
  delay = "0s" 
}: {
  className?: string;
  size?: string;
  animationType?: "fly-around" | "fly-zigzag" | "fly-diagonal" | "fly-circular" | "fly-random";
  delay?: string;
}) => {
  return (
    <div 
      className={`fixed ${size} select-none pointer-events-none z-20 ${className}`}
      style={{
        animation: `${animationType} ${getAnimationDuration(animationType)} ease-in-out infinite`,
        animationDelay: delay,
        willChange: 'transform',
      }}
    >
      🐝
    </div>
  );
};

const getAnimationDuration = (type: string): string => {
  switch (type) {
    case 'fly-around': return '15s';
    case 'fly-zigzag': return '12s';
    case 'fly-diagonal': return '18s';
    case 'fly-circular': return '10s';
    case 'fly-random': return '20s';
    default: return '15s';
  }
};