import { Badge } from "@/components/ui/badge";
import { Flower2, Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-midsummer-blue via-midsummer-yellow to-midsummer-green p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 animate-float">
          <Flower2 className="w-8 h-8 text-background" />
        </div>
        <div className="absolute top-8 right-8 animate-bounce-gentle">
          <Sun className="w-6 h-6 text-background" />
        </div>
        <div className="absolute bottom-4 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <Flower2 className="w-6 h-6 text-background" />
        </div>
        <div className="absolute bottom-8 right-1/4 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
          <Sun className="w-8 h-8 text-background" />
        </div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2 drop-shadow-lg">
          🌻 Midsommar på Stenvadet 2025 🌻
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
          Traditionella svenska snapsvisor för en riktigt härlig midsommarfest på Stenvadet!
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            10 Klassiska Visor
          </Badge>
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            Perfekt för Mobilen
          </Badge>
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            Skål! 🥃
          </Badge>
        </div>
      </div>
    </header>
  );
};