import { Switch, Route, Router as WouterRouter } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bike,
  ShoppingCart,
  Menu,
  Star,
  Truck,
  HeadphonesIcon,
  Shield,
  X
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    price: "Rp 8.500.000",
    desc: "Built for rugged trails and technical descents",
    img: "/product-1.png",
  },
  {
    id: 2,
    name: "City Cruiser Elite",
    price: "Rp 5.000.000",
    desc: "Smooth urban commuting with style",
    img: "/product-2.png",
  },
  {
    id: 3,
    name: "Road Racer X1",
    price: "Rp 12.000.000",
    desc: "Aerodynamic carbon frame for competitive riders",
    img: "/product-3.png",
  },
  {
    id: 4,
    name: "Trail Blazer 29",
    price: "Rp 7.200.000",
    desc: "Versatile 29-inch wheels for all terrains",
    img: "/product-4.png",
  },
  {
    id: 5,
    name: "Urban Glide S",
    price: "Rp 4.500.000",
    desc: "Lightweight folding design for city life",
    img: "/product-5.png",
  },
  {
    id: 6,
    name: "Kids Adventure",
    price: "Rp 2.800.000",
    desc: "Safe, fun ride for growing adventurers",
    img: "/product-6.png",
  },
];

const CATEGORIES = [
  { name: "Mountain Bikes", img: "/cat-mountain.png" },
  { name: "Road Bikes", img: "/cat-road.png" },
  { name: "Hybrid Bikes", img: "/cat-hybrid.png" },
  { name: "Kids Bikes", img: "/cat-kids.jpg" },
];

function Navbar({ cartCount }: { cartCount: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" data-testid="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")} data-testid="logo-link">
            <Bike className="text-accent h-8 w-8" />
            <span className="font-bold text-xl text-primary tracking-tight">Pedal Pro</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("home")} className="text-sm font-medium text-foreground hover:text-accent transition-colors" data-testid="nav-home">Home</button>
            <button onClick={() => scrollTo("products")} className="text-sm font-medium text-foreground hover:text-accent transition-colors" data-testid="nav-products">Products</button>
            <button onClick={() => scrollTo("about")} className="text-sm font-medium text-foreground hover:text-accent transition-colors" data-testid="nav-about">About</button>
            <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground hover:text-accent transition-colors" data-testid="nav-contact">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-foreground hover:text-accent transition-colors" data-testid="button-cart">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileOpen(true)} data-testid="button-menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Bike className="text-accent h-8 w-8" />
                <span className="font-bold text-xl text-primary tracking-tight">Pedal Pro</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-foreground" data-testid="button-close-menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-medium">
              <button onClick={() => scrollTo("home")} className="text-left text-foreground" data-testid="mobile-nav-home">Home</button>
              <button onClick={() => scrollTo("products")} className="text-left text-foreground" data-testid="mobile-nav-products">Products</button>
              <button onClick={() => scrollTo("about")} className="text-left text-foreground" data-testid="mobile-nav-about">About</button>
              <button onClick={() => scrollTo("contact")} className="text-left text-foreground" data-testid="mobile-nav-contact">Contact</button>
            </div>
          </motion.div>
        )}
    </>
  );
}

function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img src="/hero.png" alt="Mountain biker riding a trail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Premium Bicycles for Every Rider
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
            Discover the perfect bike for your journey, from rugged trails to city streets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 text-lg px-8 py-6 h-auto" onClick={() => scrollTo("products")} data-testid="button-shop-now">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto" onClick={() => scrollTo("categories")} data-testid="button-explore">
              Explore Categories
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProducts({ onAddToCart }: { onAddToCart: () => void }) {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Bicycles</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="aspect-[4/3] bg-white p-6 relative overflow-hidden flex items-center justify-center">
                  <img src={product.img} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-primary">{product.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-xl text-foreground">{product.price}</span>
                    <Button onClick={onAddToCart} className="bg-accent hover:bg-accent/90 text-white" data-testid={`button-add-cart-${product.id}`}>
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Browse by Category</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-square md:aspect-[4/5] cursor-pointer"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                <div className="overflow-hidden">
                  <span className="inline-block text-accent font-medium translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    View All →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On all orders over Rp 5.000.000" },
    { icon: HeadphonesIcon, title: "Expert Support", desc: "Advice from passionate cyclists" },
    { icon: Shield, title: "Quality Guaranteed", desc: "Premium brands, tested and verified" }
  ];

  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-primary-foreground/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#1e293b] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bike className="text-accent h-8 w-8" />
              <span className="font-bold text-2xl tracking-tight">Pedal Pro</span>
            </div>
            <p className="text-gray-400">Your journey starts here.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-fb">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-ig">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-tw">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-yt">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Pedal Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <FeaturedProducts onAddToCart={() => setCartCount(c => c + 1)} />
        <Categories />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold text-primary">Page not found</h1>
          </div>
        </Route>
      </Switch>
    </WouterRouter>
  );
}

export default App;
