import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Music, Play, Pause } from "lucide-react";

import track1 from "@assets/1_Morning_Coffee_1769284290624.mp3";
import track2 from "@assets/2_Boardwalk_Groove_1769284290625.mp3";
import track3 from "@assets/3_Early_Ocean_1769284290625.mp3";
import track4 from "@assets/4_Lunch_Vibe_1769284290625.mp3";
import track5 from "@assets/5_Second_Set_1769284290625.mp3";
import track6 from "@assets/6_Golden_Drift_1769284290625.mp3";
import track7 from "@assets/7_Dinner_Plans_1769284290626.mp3";
import track8 from "@assets/8_City_Glow_1769284290626.mp3";
import track9 from "@assets/9_Backyard_Echoes_1769284290626.mp3";
import track10 from "@assets/10_First_Light_Again_1769284290626.mp3";

const tracks = [
  { name: "Morning Coffee", file: track1 },
  { name: "Boardwalk Groove", file: track2 },
  { name: "Early Ocean", file: track3 },
  { name: "Lunch Vibe", file: track4 },
  { name: "Second Set", file: track5 },
  { name: "Golden Drift", file: track6 },
  { name: "Dinner Plans", file: track7 },
  { name: "City Glow", file: track8 },
  { name: "Backyard Echoes", file: track9 },
  { name: "First Light Again", file: track10 },
];

interface MusicPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MusicPortfolioModal({ isOpen, onClose }: MusicPortfolioModalProps) {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (index: number) => {
    if (currentTrack === index && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(tracks[index].file);
      audioRef.current.play();
      audioRef.current.onended = () => {
        setIsPlaying(false);
        setCurrentTrack(null);
      };
      setCurrentTrack(index);
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTrack(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <Card className="relative w-full max-w-md max-h-[80vh] bg-card border-red-700 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-red-700/30">
          <div className="flex items-center gap-3">
            <Music className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Music Portfolio</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            data-testid="button-close-music-modal"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-muted-foreground text-sm mb-4">
            A collection of original compositions exploring ambient and lofi sounds.
          </p>
          
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  currentTrack === index && isPlaying
                    ? "border-red-700 bg-red-700/10"
                    : "border-border/50 hover:border-red-700/50 hover:bg-muted/50"
                }`}
                data-testid={`track-${index}`}
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 shrink-0"
                  onClick={() => handlePlay(index)}
                  data-testid={`button-play-${index}`}
                >
                  {currentTrack === index && isPlaying ? (
                    <Pause className="h-4 w-4 text-red-500" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <span className="text-sm font-medium text-foreground truncate">
                  {track.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
