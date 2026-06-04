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
  const [contactOpen, setContactOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return categories;
    return categories.filter((cat) =>
      [cat.name, cat.count, ...cat.tags].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
<<<<<<< HEAD
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 ring-1 ring-slate-200">
              <img src={logo} alt="Muro Electric Supply" className="h-8 w-8 object-contain" />
=======
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-100 ring-1 ring-slate-200">
              <img src={logo} alt="Muro Electric Supply" className="h-6 w-6 object-contain" />
>>>>>>> 410fb37 (contact button with a pop up window added)
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-slate-950">Muro Electric Supply</p>
            </div>
          </div>
<<<<<<< HEAD
          <div className="hidden items-center gap-3 text-sm font-semibold text-slate-700 md:flex">
            {['Products', 'Brands', 'Request Quote', 'Directions', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-full px-4 py-2 hover:bg-slate-100">{item}</a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border p-2 shadow-sm md:hidden">
=======

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 md:flex-1 md:justify-center">
            <nav className="hidden md:flex items-center gap-1">
              {['Products', 'Brands', 'Request Quote', 'Directions'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100">{item}</a>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex">
            <Button variant="outline" size="sm" onClick={() => setContactOpen(true)} className="h-10 rounded-full px-4 font-semibold">
              Contact
            </Button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden rounded-full border p-2 shadow-sm">
>>>>>>> 410fb37 (contact button with a pop up window added)
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
<<<<<<< HEAD
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mx-auto max-w-md px-4 pb-4">
=======
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mx-auto max-w-6xl px-4 pb-4 sm:px-6">
>>>>>>> 410fb37 (contact button with a pop up window added)
            <div className="grid gap-2 rounded-2xl bg-slate-100 p-3 text-sm font-semibold">
              {['Products', 'Brands', 'Request Quote', 'Directions', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-xl bg-white px-4 py-3">{item}</a>
              ))}
              <button onClick={() => { setContactOpen(true); setMenuOpen(false); }} className="rounded-xl bg-white px-4 py-3 text-left text-slate-950">Contact</button>
            </div>
          </motion.nav>
        )}
      </header>

<<<<<<< HEAD
      <main className="mx-auto max-w-screen-2xl pb-24 px-4 md:px-8 lg:px-10">
        <section className="relative overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-6 md:px-8 lg:px-10">
=======
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">See us in person!</p>
                <h2 className="mt-3 text-2xl font-black text-slate-950">Contact Information</h2>
              </div>
              <button onClick={() => setContactOpen(false)} className="rounded-full border p-2 text-slate-700 transition hover:bg-slate-100">
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="text-sm font-semibold text-slate-950">1140 Sheppard Ave W</p>
                <p className="text-sm text-slate-700">
                  Office <a href="tel:4166361071" className="text-blue-600 hover:underline">(416) 636-1071</a><br />
                  Front Desk <a href="tel:4166369138" className="text-blue-600 hover:underline">(416) 636-9138</a>
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Operations</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">Murat Erdeviren</p>
                  <p className="text-sm text-blue-600 hover:underline"><a href="mailto:murat@mesitoronto.ca">murat@mesitoronto.ca</a></p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Sales</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">Faruk E. Donmez</p>
                  <p className="text-sm text-blue-600 hover:underline"><a href="mailto:faruk@mesitoronto.ca">faruk@mesitoronto.ca</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-10">
>>>>>>> 410fb37 (contact button with a pop up window added)
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop)", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3 ring-1 ring-white/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/90 p-2 shadow-sm">
                    <img src={logo} alt="Muro Electric Supply" className="h-8 w-8 object-contain" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Muro Electric Supply</p>
                    <p className="text-sm font-semibold text-white">Electrical supply for contractors</p>
                  </div>
                </div>
<<<<<<< HEAD
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold"><Zap size={14} /> Electrical Supply Store in North York</p>
                <h2 className="text-4xl font-black leading-tight">Find electrical materials fast.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">Wire, breakers, panels, lighting, switches, plugs, conduit, and contractor essentials across the GTA.</p>

                <div className="mt-5 rounded-2xl bg-white p-2 shadow-xl">
                  <div className="flex items-center gap-2 px-3 text-slate-500">
                    <Search size={20} />
                    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search: Square D, 14/2 wire, GFCI..." className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:flex md:max-w-xl md:space-x-3">
                  <Button className="h-12 rounded-2xl bg-blue-600 font-bold w-full md:w-auto"><Phone className="mr-2" size={18} /> Call Now</Button>
                  <Button variant="secondary" className="h-12 rounded-2xl font-bold w-full md:w-auto"><MapPin className="mr-2" size={18} /> Directions</Button>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm">
                  <span className="flex text-yellow-300"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></span>
                  <span>Trusted by contractors in Toronto</span>
                </div>
              </div>

              <div className="hidden rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 md:block">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Built for busy teams</p>
                <h3 className="mt-4 text-2xl font-black text-white">More than a product list</h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  <li>• Fast stock lookup across top contractor brands</li>
                  <li>• Same-day pickup and delivery coverage in the GTA</li>
                  <li>• Quote-ready inventory for projects and bids</li>
                </ul>
                <div className="mt-6 grid gap-3">
                  <Button className="h-12 w-full rounded-2xl bg-blue-600 font-bold">Request a quote</Button>
                  <Button variant="secondary" className="h-12 w-full rounded-2xl">Browse inventory</Button>
=======
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Muro Electric Supply</p>
>>>>>>> 410fb37 (contact button with a pop up window added)
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD
          </div>
        </section>

        <section className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-3 md:px-0">
          <Card className="rounded-2xl"><CardContent className="p-3 text-center"><Clock className="mx-auto mb-2" size={20} /><p className="text-xs font-bold">Same-day pickup</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-3 text-center"><Truck className="mx-auto mb-2" size={20} /><p className="text-xs font-bold">GTA delivery</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-3 text-center"><ShieldCheck className="mx-auto mb-2" size={20} /><p className="text-xs font-bold">Pro pricing</p></CardContent></Card>
=======

            <div className="mt-5 rounded-2xl bg-white p-2 shadow-xl">
              <div className="flex items-center gap-2 px-3 text-slate-500">
                <Search size={20} />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search: Square D, 14/2 wire, GFCI..." className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none" />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Button className="h-12 rounded-2xl bg-blue-600 font-bold"><Phone className="mr-2" size={18} /> Call Now</Button>
              <Button variant="secondary" className="h-12 rounded-2xl font-bold"><MapPin className="mr-2" size={18} /> Directions</Button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="flex text-yellow-300"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></span>
              <span>Trusted by contractors in Toronto</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="rounded-2xl"><CardContent className="p-3 text-center"><Clock className="mx-auto mb-2" size={20}/><p className="text-xs font-bold">Same-day pickup</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-3 text-center"><Truck className="mx-auto mb-2" size={20}/><p className="text-xs font-bold">GTA delivery</p></CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="p-3 text-center"><ShieldCheck className="mx-auto mb-2" size={20}/><p className="text-xs font-bold">Pro pricing</p></CardContent></Card>
>>>>>>> 410fb37 (contact button with a pop up window added)
        </section>

        <section id="products" className="px-4 py-3">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Shop by category</p>
              <h3 className="text-2xl font-black">Popular Products</h3>
            </div>
            <Button variant="outline" size="sm" className="rounded-full"><Filter size={15} className="mr-1" /> Filter</Button>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
=======
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
>>>>>>> 410fb37 (contact button with a pop up window added)
            {filteredCategories.map((cat, index) => (
              <motion.div key={cat.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }}>
                <Card className="overflow-hidden rounded-3xl shadow-sm">
                  <div className="h-28 bg-slate-200" style={{ backgroundImage: `url(${cat.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <CardContent className="p-3">
                    <h4 className="text-sm font-black">{cat.name}</h4>
                    <p className="mt-1 text-xs text-slate-500">{cat.count}</p>
                    <div className="mt-3 flex items-center justify-between text-blue-700">
                      <span className="text-xs font-bold">View items</span>
                      <ChevronRight size={18} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="brands" className="px-4 py-6">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Searchable SEO section</p>
          <h3 className="text-2xl font-black">Brands contractors ask for</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {brands.map((brand) => <span key={brand} className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">{brand}</span>)}
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
<<<<<<< HEAD
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button className="h-12 rounded-2xl bg-white text-blue-700 hover:bg-slate-100"><Upload size={17} className="mr-2" /> Upload list</Button>
                <Button variant="secondary" className="h-12 rounded-2xl"><MessageCircle size={17} className="mr-2" /> Text us</Button>
=======
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button className="h-12 rounded-2xl bg-white text-blue-700 hover:bg-slate-100"><Upload size={17} className="mr-2"/> Upload list</Button>
                <Button variant="secondary" className="h-12 rounded-2xl"><MessageCircle size={17} className="mr-2"/> Text us</Button>
>>>>>>> 410fb37 (contact button with a pop up window added)
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
          <div className="grid gap-3 md:grid-cols-2">
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

<<<<<<< HEAD
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

=======
>>>>>>> 410fb37 (contact button with a pop up window added)
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
