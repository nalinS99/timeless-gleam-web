import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ring1 from '@/assets/ring-1.jpg';
import necklace1 from '@/assets/necklace-1.jpg';
import bracelet1 from '@/assets/bracelet-1.jpg';
import earrings1 from '@/assets/earrings-1.jpg';

interface JewelryItem {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const JewelryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const jewelryItems: JewelryItem[] = [
    {
      id: 1,
      name: 'Eternal Diamond Ring',
      price: '$12,500',
      category: 'Rings',
      image: ring1,
      description: 'Exquisite solitaire diamond ring with platinum band',
      isFeatured: true
    },
    {
      id: 2,
      name: 'Golden Heritage Necklace',
      price: '$8,750',
      category: 'Necklaces',
      image: necklace1,
      description: 'Luxurious gold pendant necklace with intricate design',
      isNew: true
    },
    {
      id: 3,
      name: 'Diamond Tennis Bracelet',
      price: '$15,200',
      category: 'Bracelets',
      image: bracelet1,
      description: 'Classic tennis bracelet with premium diamonds',
      isFeatured: true
    },
    {
      id: 4,
      name: 'Pearl Drop Earrings',
      price: '$3,250',
      category: 'Earrings',
      image: earrings1,
      description: 'Elegant pearl earrings with gold accents',
      isNew: true
    },
    {
      id: 5,
      name: 'Vintage Emerald Ring',
      price: '$18,900',
      category: 'Rings',
      image: ring1,
      description: 'Rare emerald ring with vintage-inspired setting'
    },
    {
      id: 6,
      name: 'Sapphire Statement Necklace',
      price: '$22,500',
      category: 'Necklaces',
      image: necklace1,
      description: 'Bold sapphire necklace for special occasions'
    }
  ];

  const categories = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'];

  const filteredItems = selectedCategory === 'All' 
    ? jewelryItems 
    : jewelryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="jewelry" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-luxury">
            Jewelry Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of fine jewelry, 
            each piece representing the pinnacle of craftsmanship and design excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "btn-hero" : "btn-elegant"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Jewelry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="card-luxury overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.isNew && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {item.isFeatured && (
                    <Badge variant="outline" className="border-primary text-primary">Featured</Badge>
                  )}
                </div>
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="btn-hero">
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-luxury">
                    {item.price}
                  </span>
                  <Badge variant="outline" className="text-muted-foreground">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero text-lg px-10 py-4">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JewelryShowcase;