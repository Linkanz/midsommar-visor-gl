export const FlyingBee = ({ 
  className = "", 
  size = "text-2xl",
  animationDuration = "8s",
  delay = "0s" 
}: {
  className?: string;
  size?: string;
  animationDuration?: string;
  delay?: string;
}) => {
  return (
    <div 
      className={`absolute ${size} select-none pointer-events-none z-20 ${className}`}
      style={{
        animation: `fly-around ${animationDuration} ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      🐝
    </div>
  );
};