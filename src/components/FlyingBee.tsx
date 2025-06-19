const animationStyles = {
  'fly-around': `
    @keyframes flyAround {
      0% { transform: translate(0vw, 20vh) rotate(0deg); }
      15% { transform: translate(20vw, 10vh) rotate(45deg); }
      30% { transform: translate(80vw, 30vh) rotate(120deg); }
      45% { transform: translate(60vw, 60vh) rotate(200deg); }
      60% { transform: translate(10vw, 80vh) rotate(270deg); }
      75% { transform: translate(90vw, 50vh) rotate(320deg); }
      85% { transform: translate(30vw, 15vh) rotate(380deg); }
      100% { transform: translate(0vw, 20vh) rotate(360deg); }
    }
  `,
  'fly-zigzag': `
    @keyframes flyZigzag {
      0% { transform: translate(90vw, 15vh) rotate(0deg); }
      20% { transform: translate(70vw, 40vh) rotate(90deg); }
      40% { transform: translate(20vw, 25vh) rotate(180deg); }
      60% { transform: translate(50vw, 70vh) rotate(270deg); }
      80% { transform: translate(85vw, 45vh) rotate(320deg); }
      100% { transform: translate(90vw, 15vh) rotate(360deg); }
    }
  `,
  'fly-diagonal': `
    @keyframes flyDiagonal {
      0% { transform: translate(10vw, 80vh) rotate(0deg); }
      25% { transform: translate(80vw, 20vh) rotate(90deg); }
      50% { transform: translate(15vw, 40vh) rotate(180deg); }
      75% { transform: translate(70vw, 75vh) rotate(270deg); }
      100% { transform: translate(10vw, 80vh) rotate(360deg); }
    }
  `,
  'fly-circular': `
    @keyframes flyCircular {
      0% { transform: translate(50vw, 50vh) rotate(0deg); }
      25% { transform: translate(70vw, 30vh) rotate(90deg); }
      50% { transform: translate(50vw, 20vh) rotate(180deg); }
      75% { transform: translate(30vw, 30vh) rotate(270deg); }
      100% { transform: translate(50vw, 50vh) rotate(360deg); }
    }
  `,
  'fly-random': `
    @keyframes flyRandom {
      0% { transform: translate(20vw, 90vh) rotate(0deg); }
      12% { transform: translate(60vw, 10vh) rotate(60deg); }
      25% { transform: translate(10vw, 30vh) rotate(120deg); }
      40% { transform: translate(85vw, 60vh) rotate(200deg); }
      55% { transform: translate(40vw, 85vh) rotate(250deg); }
      70% { transform: translate(75vw, 25vh) rotate(300deg); }
      85% { transform: translate(15vw, 55vh) rotate(340deg); }
      100% { transform: translate(20vw, 90vh) rotate(360deg); }
    }
  `
};

const animationDurations = {
  'fly-around': '15s',
  'fly-zigzag': '12s',
  'fly-diagonal': '18s',
  'fly-circular': '10s',
  'fly-random': '20s'
};

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
  const keyframeName = animationType === 'fly-around' ? 'flyAround' :
                      animationType === 'fly-zigzag' ? 'flyZigzag' :
                      animationType === 'fly-diagonal' ? 'flyDiagonal' :
                      animationType === 'fly-circular' ? 'flyCircular' :
                      'flyRandom';
  
  return (
    <>
      <style>{animationStyles[animationType]}</style>
      <div 
        className={`fixed ${size} select-none pointer-events-none z-20 ${className}`}
        style={{
          animation: `${keyframeName} ${animationDurations[animationType]} ease-in-out infinite`,
          animationDelay: delay,
          willChange: 'transform',
        }}
      >
        🐝
      </div>
    </>
  );
};