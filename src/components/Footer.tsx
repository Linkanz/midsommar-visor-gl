import { Heart, Flower2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-midsummer-green via-midsummer-blue to-midsummer-yellow p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flower2 className="w-6 h-6 text-primary-foreground animate-bounce-gentle" />
          <h3 className="text-2xl font-bold text-primary-foreground">God Midsommar!</h3>
          <Flower2 className="w-6 h-6 text-primary-foreground animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <p className="text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
          Må denna midsommar fyllas av glädje, vänskap och underbara minnen. 
          Sjung, dansa och njut av de ljusa sommarkvällarna tillsammans!
        </p>
        
        <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
          <span>Skapad med</span>
          <Heart className="w-4 h-4 fill-current animate-pulse" />
          <span>för svenska midsommartraditioner</span>
        </div>
        
        <div className="mt-4 text-sm text-primary-foreground/70">
          <p>Tips: Använd den här sidan som digitalt sånghäfte på din telefon!</p>
        </div>
      </div>
    </footer>
  );
};