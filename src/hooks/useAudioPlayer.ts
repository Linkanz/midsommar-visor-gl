import { useState, useRef, useEffect } from 'react';

interface UseAudioPlayerProps {
  audioUrl?: string;
  onTimeUpdate?: (currentTime: number) => void;
  duration?: number;
}

export const useAudioPlayer = ({ audioUrl, onTimeUpdate, duration = 30 }: UseAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.loop = true;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [audioUrl]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      
      // Start time tracking
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          onTimeUpdate?.(newTime);
          return newTime;
        });
      }, 100);
    } else {
      // Fallback for when no audio file is provided - simulate playback
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.1;
          onTimeUpdate?.(newTime);
          if (newTime >= duration) {
            return 0; // Loop back to start
          }
          return newTime;
        });
      }, 100);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const stop = () => {
    pause();
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  return {
    isPlaying,
    currentTime,
    play,
    pause,
    stop
  };
};