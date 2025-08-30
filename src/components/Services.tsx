import { Gem, Settings, Heart, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gem,
      title: 'Custom Jewelry Design',
      description: 'Bring your vision to life with our bespoke jewelry design service. Our master craftsmen work closely with you to create one-of-a-kind pieces that reflect your personal style and story.'
    },
    {
      icon: Settings,
      title: 'Jewelry Repair & Cleaning',
      description: 'Restore your treasured pieces to their original brilliance. Our expert technicians provide professional cleaning, polishing, and repair services with meticulous attention to detail.'
    },
    {
      icon: Heart,
      title: 'Engagement Rings & Wedding Bands',
      description: 'Celebrate your love story with our exquisite collection of engagement rings and wedding bands. Each piece is carefully selected or custom-designed to symbolize your eternal commitment.'
    },
    {
      icon: Crown,
      title: 'Luxury Collections',
      description: 'Explore our curated selection of premium jewelry collections featuring rare gemstones, precious metals, and timeless designs from renowned artisans and exclusive designers.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-luxury">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From custom design to expert restoration, we offer comprehensive jewelry services 
            that honor the artistry and craftsmanship of fine jewelry making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-luxury p-8 text-center group hover:scale-105"
            >
              <div className="service-icon mx-auto group-hover:shadow-gold-glow transition-all duration-300">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-playfair font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;