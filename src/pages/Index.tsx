import { Header } from "@/components/Header";
import { SongCard } from "@/components/SongCard";
import { Footer } from "@/components/Footer";
import { FlyingBee } from "@/components/FlyingBee";
import { midsummerSongs } from "@/data/songs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-midsummer-light via-background to-midsummer-light/50 relative overflow-hidden">
      {/* Flying Bees */}
      <FlyingBee className="top-20 left-10" animationDuration="10s" delay="0s" />
      <FlyingBee className="top-40 right-20" animationDuration="14s" delay="2s" size="text-xl" />
      <FlyingBee className="top-96 left-1/3" animationDuration="12s" delay="4s" />
      <FlyingBee className="top-[500px] right-1/4" animationDuration="16s" delay="1s" size="text-lg" />
      <FlyingBee className="bottom-96 left-20" animationDuration="11s" delay="6s" />
      <FlyingBee className="bottom-40 right-10" animationDuration="13s" delay="3s" size="text-2xl" />
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Traditionella Svenska Snapsvisor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Här är tio klassiska snapsvisor som hör till varje riktig midsommarfest. 
            Perfekt att ha i telefonen när det är dags att höja glasen!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {midsummerSongs.map((song, index) => (
            <div key={song.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <SongCard
                title={song.title}
                lyrics={song.lyrics}
                difficulty={song.difficulty}
                melody={song.melody}
                index={index + 1}
              />
            </div>
          ))}
        </div>

        <div className="text-center bg-midsummer-yellow/10 rounded-lg p-8 border-2 border-midsummer-yellow/20">
          <h3 className="text-2xl font-bold text-primary mb-4">🍻 Skål-tips!</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="font-semibold text-midsummer-blue">📱 Perfekt för mobilen</p>
              <p className="text-sm text-muted-foreground">Spara sidan som bokmärke för snabb åtkomst</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-midsummer-green">🎵 Sjung tillsammans</p>
              <p className="text-sm text-muted-foreground">Bäst när alla sjunger med full röst!</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-midsummer-yellow">🥃 Snapsen väntar</p>
              <p className="text-sm text-muted-foreground">Kom ihåg att vänta med att dricka tills sången är slut</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-primary">🌻 Midsommartradition</p>
              <p className="text-sm text-muted-foreground">Dessa visor har sjungits i generationer</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-midsummer-blue hover:bg-midsummer-blue/80 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
