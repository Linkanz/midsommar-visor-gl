import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music } from "lucide-react";

interface SongCardProps {
  title: string;
  lyrics: string[];
  difficulty?: "Lätt" | "Medel" | "Svår";
  melody?: string;
  index: number;
}

export const SongCard = ({ title, lyrics, difficulty = "Medel", melody, index }: SongCardProps) => {
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
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {lyrics.map((line, lineIndex) => (
            <p key={lineIndex} className="text-sm leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};