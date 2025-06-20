import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Play, Pause, Square } from "lucide-react";
import { useState, useMemo } from "react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { KaraokeBee } from "@/components/KaraokeBee";

interface SongCardProps {
  title: string;
  lyrics: string[];
  difficulty?: "Lätt" | "Medel" | "Svår";
  melody?: string;
  index: number;
  audioUrl?: string;
  wordTimings?: number[];
  duration?: number;
}

export const SongCard = ({ 
  title, 
  lyrics, 
  difficulty = "Medel", 
  melody, 
  index, 
  audioUrl, 
  wordTimings, 
  duration = 20 
}: SongCardProps) => {
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  
  const { isPlaying, currentTime, play, pause, stop } = useAudioPlayer({
    audioUrl,
    duration,
    onTimeUpdate: (time) => {
      if (wordTimings) {
        const currentWordIndex = wordTimings.findIndex(timing => timing > time) - 1;
        setActiveWordIndex(currentWordIndex);
      }
    }
  });

  // Split lyrics into words and calculate words per line
  const { allWords, wordsPerLine } = useMemo(() => {
    const words: string[] = [];
    const wordsPerLineArray: number[] = [];
    
    lyrics.forEach(line => {
      const lineWords = line.split(' ');
      words.push(...lineWords);
      wordsPerLineArray.push(lineWords.length);
    });
    
    return { allWords: words, wordsPerLine: wordsPerLineArray };
  }, [lyrics]);

  const handlePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleStop = () => {
    stop();
    setActiveWordIndex(-1);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-midsummer-light to-background border-2 hover:border-midsummer-yellow/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-midsummer-yellow rounded-full flex items-center justify-center text-sm font-bold text-primary">
              {index}
            </div>
            <Music className="w-4 h-4 text-midsummer-blue" />
          </div>
          <Badge variant="secondary" className="bg-midsummer-green/20 text-midsummer-green border-midsummer-green/30">
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-primary mb-1">{title}</CardTitle>
        {melody && (
          <p className="text-sm text-muted-foreground italic">
            Melodi: {melody}
          </p>
        )}
        
        {/* Audio Controls */}
        <div className="flex items-center gap-2 mt-3">
          <Button
            onClick={handlePlay}
            size="sm"
            variant="secondary"
            className="bg-midsummer-blue/20 hover:bg-midsummer-blue/30 text-midsummer-blue border-midsummer-blue/30"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            onClick={handleStop}
            size="sm"
            variant="outline"
            className="border-midsummer-yellow/50 hover:bg-midsummer-yellow/10"
          >
            <Square className="w-4 h-4" />
          </Button>
          {isPlaying && (
            <div className="text-xs text-muted-foreground">
              {Math.floor(currentTime)}s / {duration}s
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative space-y-2">
          <KaraokeBee 
            activeWordIndex={activeWordIndex}
            wordsPerLine={wordsPerLine}
            isVisible={isPlaying && activeWordIndex >= 0}
          />
          {lyrics.map((line, lineIndex) => {
            let wordIndex = 0;
            for (let i = 0; i < lineIndex; i++) {
              wordIndex += wordsPerLine[i];
            }
            
            return (
              <p key={lineIndex} className="text-sm leading-relaxed flex flex-wrap gap-1">
                {line.split(' ').map((word, wordInLineIndex) => {
                  const currentWordIndex = wordIndex + wordInLineIndex;
                  const isActive = currentWordIndex === activeWordIndex;
                  
                  return (
                    <span
                      key={wordInLineIndex}
                      className={`transition-colors duration-200 ${
                        isActive ? 'bg-midsummer-yellow/50 text-primary font-semibold rounded px-1' : ''
                      }`}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};