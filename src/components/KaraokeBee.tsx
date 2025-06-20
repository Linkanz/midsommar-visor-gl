interface KaraokeBeeProps {
  activeWordIndex: number;
  wordsPerLine: number[];
  isVisible: boolean;
}

export const KaraokeBee = ({ activeWordIndex, wordsPerLine, isVisible }: KaraokeBeeProps) => {
  if (!isVisible) return null;

  // Calculate which line and word position the bee should be at
  let currentLine = 0;
  let wordInLine = activeWordIndex;
  
  for (let i = 0; i < wordsPerLine.length; i++) {
    if (wordInLine < wordsPerLine[i]) {
      currentLine = i;
      break;
    }
    wordInLine -= wordsPerLine[i];
    currentLine = i + 1;
  }

  return (
    <div
      className="absolute transition-all duration-300 ease-in-out z-10 pointer-events-none"
      style={{
        top: `${currentLine * 1.8 + 0.5}rem`,
        left: `${wordInLine * 4}rem`,
        transform: 'translateY(-50%)',
      }}
    >
      <div className="animate-bounce text-lg">
        🐝
      </div>
    </div>
  );
};