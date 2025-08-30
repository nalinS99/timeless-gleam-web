import craftsmanImage from '@/assets/craftsman-at-work.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-luxury">
              Heritage of Excellence
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                For over five decades, Timeless Gleam has been at the forefront of luxury jewelry craftsmanship. 
                Founded in 1970 by master jeweler Antonio Gleam, our atelier has become synonymous with 
                exceptional quality and timeless design.
              </p>
              
              <p>
                Every piece that leaves our workshop carries with it the legacy of traditional techniques 
                passed down through generations, combined with innovative modern approaches to jewelry making. 
                Our artisans spend years perfecting their craft, ensuring that each creation meets our 
                exacting standards of excellence.
              </p>
              
              <p>
                From selecting the finest diamonds and precious gemstones to the final polish that brings 
                out their natural brilliance, we believe that true luxury lies in the details. 
                Each piece tells a story – your story – and becomes a treasured heirloom for generations to come.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold text-luxury mb-2">50+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold text-luxury mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold text-luxury mb-2">25</div>
                <div className="text-muted-foreground">Master Craftsmen</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-playfair font-bold text-luxury mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={craftsmanImage} 
                alt="Master craftsman at work"
                className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">Master Craftsmanship</h3>
                <p className="text-white/90">Where tradition meets innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;