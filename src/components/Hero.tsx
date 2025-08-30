import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-jewelry.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight animate-fade-in">
            Timeless Elegance,
            <span className="block text-luxury">Crafted for You</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light max-w-2xl mx-auto animate-fade-in">
            Discover extraordinary jewelry pieces handcrafted with precision, 
            passion, and decades of expertise. Each creation tells a unique story 
            of luxury and sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-10 py-4"
              onClick={() => document.getElementById('jewelry')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-elegant text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-charcoal"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10"></div>
    </section>
  );
};

export default Hero;