import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Phone, MapPin, MessageCircle, Star, Truck, Clock, Upload, Zap, ChevronRight, Menu, X, Filter, Navigation, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "./assets/logo.png";

const categories = [
  { name: "Wire & Cable", count: "120+ items", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=900&auto=format&fit=crop", tags: ["NMD90", "Armoured", "Low Voltage"] },
  { name: "Breakers", count: "80+ items", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop", tags: ["Square D", "Siemens", "Eaton"] },
  { name: "Panels", count: "40+ items", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop", tags: ["Residential", "Commercial", "Service"] },
  { name: "Lighting", count: "200+ items", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=900&auto=format&fit=crop", tags: ["Pot Lights", "LED Panels", "Drivers"] },
  { name: "Switches & Plugs", count: "150+ items", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=900&auto=format&fit=crop", tags: ["GFCI", "Dimmers", "Decora"] },
  { name: "Conduit & Boxes", count: "100+ items", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=900&auto=format&fit=crop", tags: ["EMT", "PVC", "Junction Boxes"] },
];

const brands = ["Square D", "Siemens", "Leviton", "Eaton", "Lutron", "Hubbell", "Schneider", "ABB"];

const featured = [
  { name: "14/2 NMD90 Wire", meta: "Contractor bulk pricing", category: "Wire" },
  { name: "Square D Breakers", meta: "Common sizes in stock", category: "Breakers" },
  { name: "4 inch LED Pot Lights", meta: "Multi-temperature options", category: "Lighting" },
  { name: "GFCI Receptacles", meta: "White / Decora / Weather resistant", category: "Plugs" },
];

export default function MuroElectricMobileFirstSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return categories;
    return categories.filter((cat) =>
      [cat.name, cat.count, ...cat.tags].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-10">
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center">
              <img src={logo} alt="Muro" className="h-8 w-8 object-contain" />
            </div>
            <p className="hidden text-lg font-bold md:block">Muro Electric</p>
          </div>
          <div className="hidden flex-1 max-w-xl md:flex">
            <div className="flex w-full items-center gap-2 rounded-lg bg-slate-200 px-3 py-2">
              <Search size={18} className="text-slate-500" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search keyword, brand, or SKU" className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500" />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="rounded-full p-2 hover:bg-slate-800 md:hidden">
              <Search size={20} />
            </button>
            <a href="#" className="hidden rounded-full p-2 hover:bg-slate-800 md:flex">
              <MapPin size={20} />
            </a>
            <a href="tel:4166361071" className="hidden rounded-full p-2 hover:bg-slate-800 md:flex">
              <Phone size={20} />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 hover:bg-slate-800 md:hidden">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden border-t border-slate-700 bg-slate-800 px-4 py-4">
            <div className="space-y-3">
              {['Products', 'Brands', 'Directions', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="block text-sm font-semibold hover:text-orange-400">{item}</a>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      <main className="mx-auto max-w-screen-2xl pb-24 px-4 md:px-8 lg:px-10">
        <section className="relative overflow-hidden bg-white py-8 text-slate-950 md:py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-sm uppercase tracking-[0.28em] text-orange-600 font-bold">Industrial & Commercial</p>
              <h1 className="mt-3 text-5xl font-black leading-tight lg:text-6xl">Find electrical materials fast.</h1>
              <p className="mt-4 text-lg leading-7 text-slate-600">Premium wire, breakers, panels, lighting, and contractor essentials. Stock across the GTA with same-day pickup and competitive pricing for professionals.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="h-12 rounded-lg bg-orange-600 px-6 font-bold hover:bg-orange-700"><Phone className="mr-2" size={20} /> Call Now: (416) 636-1071</Button>
                <Button variant="outline" className="h-12 rounded-lg border-2 border-slate-950 px-6 font-bold hover:bg-slate-50"><MapPin className="mr-2" size={20} /> Get Directions</Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="text-3xl font-black text-orange-600">99%</p>
                  <p className="text-sm text-slate-600">Stock availability</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-orange-600">2hrs</p>
                  <p className="text-sm text-slate-600">Quote response</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-orange-600">8+</p>
                  <p className="text-sm text-slate-600">Top brands</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg opacity-20 blur-xl" />
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop" 
                  alt="Electrical supplies" 
                  className="relative rounded-lg shadow-lg" 
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="products" className="py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-600 font-bold">Shop by category</p>
            <h2 className="text-4xl font-black leading-tight">Popular Products</h2>
            <p className="mt-2 text-slate-600">Explore our most in-demand electrical product categories across the GTA.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {filteredCategories.map((cat, index) => (
              <motion.div key={cat.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <a href="#" className="group block rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-200 overflow-hidden" style={{ backgroundImage: `url(${cat.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="w-full h-full bg-black/20 group-hover:bg-black/40 transition-colors flex items-end justify-start p-4" />
                  </div>
                  <div className="bg-white p-4 border border-slate-200 rounded-b-lg">
                    <h3 className="font-bold text-slate-950">{cat.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{cat.count}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="brands" className="py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-600 font-bold">Top brands</p>
            <h2 className="text-4xl font-black leading-tight">Brands contractors ask for</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {brands.map((brand) => <span key={brand} className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-orange-100 transition-colors">{brand}</span>)}
          </div>
        </section>

        <section className="hidden md:grid grid-cols-3 gap-4 px-4 py-6 lg:px-0">
          <Card className="rounded-3xl bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Local availability</p>
              <p className="mt-4 text-3xl font-black text-slate-950">99%</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Most contractor essentials are stocked and ready for pickup in North York.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Trusted brands</p>
              <p className="mt-4 text-3xl font-black text-slate-950">8+</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Top manufacturer lines like Square D, Siemens, Eaton, and Leviton are available.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Speed</p>
              <p className="mt-4 text-3xl font-black text-slate-950">2 hrs</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Typical response time for quote requests and order confirmations.</p>
            </CardContent>
          </Card>
        </section>

        <section className="px-4 py-3">
          <Card className="rounded-3xl bg-blue-700 text-white shadow-lg">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100">Fast quote tool</p>
              <h3 className="mt-1 text-2xl font-black">Have a material list?</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50">Contractors can upload a list, send a photo, or text the front desk for stock and pricing.</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button className="h-12 rounded-2xl bg-white text-blue-700 hover:bg-slate-100"><Upload size={17} className="mr-2" /> Upload list</Button>
                <Button variant="secondary" className="h-12 rounded-2xl"><MessageCircle size={17} className="mr-2" /> Text us</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Featured inventory</p>
              <h3 className="text-2xl font-black">Quick stock checks</h3>
            </div>
          </div>
          <div className="grid gap-3">
            {featured.map((item) => (
              <Card key={item.name} className="rounded-2xl">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-sm font-black">{item.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
                  </div>
                  <Button size="sm" className="rounded-full">Ask</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="directions" className="px-4 py-4">
          <Card className="overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex h-48 items-center justify-center bg-slate-200" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100"><Navigation size={17} className="mr-2" /> Open Google Maps</Button>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-black">Visit the store</h3>
                <p className="mt-2 text-sm text-slate-600">1140 Sheppard Ave W, Unit 15, North York, ON</p>
                <p className="mt-1 text-sm font-bold text-green-700">Open today 7:00 AM - 5:00 PM</p>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="px-4 py-6">
          <Card className="rounded-3xl bg-slate-950 text-white">
            <CardContent className="p-5">
              <h3 className="text-2xl font-black">SEO landing pages to add</h3>
              <div className="mt-4 grid gap-2 text-sm text-slate-200">
                <p>• Electrical Supply Store North York</p>
                <p>• Electrical Supplier Toronto</p>
                <p>• Square D Breakers Toronto</p>
                <p>• Electrical Wire Supplier GTA</p>
                <p>• Contractor Electrical Supply Toronto</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="hidden md:block border-t border-slate-200 bg-white/90 py-6">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 md:px-8 lg:px-10 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Muro Electric Supply</p>
            <p className="mt-1 text-sm text-slate-700">1140 Sheppard Ave W, Unit 15, North York, ON</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <a href="#products" className="rounded-full px-3 py-2 hover:bg-slate-100">Products</a>
            <a href="#brands" className="rounded-full px-3 py-2 hover:bg-slate-100">Brands</a>
            <a href="#directions" className="rounded-full px-3 py-2 hover:bg-slate-100">Directions</a>
            <a href="tel:4166361071" className="rounded-full bg-blue-700 px-3 py-2 text-white">Call</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1 px-2 py-2 text-xs font-bold text-slate-700">
          <a className="flex flex-col items-center gap-1 rounded-2xl p-2" href="#products"><Search size={20} />Products</a>
          <a className="flex flex-col items-center gap-1 rounded-2xl p-2" href="#directions"><MapPin size={20} />Map</a>
          <a className="flex flex-col items-center gap-1 rounded-2xl bg-blue-700 p-2 text-white" href="tel:4166361071"><Phone size={20} />Call</a>
          <a className="flex flex-col items-center gap-1 rounded-2xl p-2" href="#quote"><MessageCircle size={20} />Quote</a>
        </div>
      </div>
    </div >
  );
}
