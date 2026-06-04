import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Phone, MapPin, Star, Truck, Clock, Zap, ChevronRight, Menu, X, Filter, ShieldCheck } from "lucide-react";

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

export default function MuroElectricMobileFirstSite() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [contactOpen, setContactOpen] = useState(false);
	const [query, setQuery] = useState("");

	const filteredCategories = useMemo(() => {
		const q = query.toLowerCase();
		if (!q) return categories;
		return categories.filter((cat) => [cat.name, cat.count, ...(cat.tags || [])].join(" ").toLowerCase().includes(q));
	}, [query]);

	return (
		<div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
			<header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
				<div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
					<div className="flex min-w-0 items-center justify-between gap-3 rounded-3xl bg-slate-950 px-4 py-3 text-white ring-1 ring-slate-800 md:hidden">
						<div className="flex min-w-0 items-center gap-3">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-white/90 p-2 shadow-sm">
								<img src={logo} alt="Muro Electric Supply" className="h-8 w-8 object-contain" />
							</div>
							<div className="min-w-0">
								<p className="truncate text-xs uppercase tracking-[0.22em] text-slate-300">Muro Electric Supply</p>
							</div>
						</div>

						<button
							type="button"
							aria-label={menuOpen ? "Close menu" : "Open menu"}
							onClick={() => setMenuOpen(!menuOpen)}
							className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500 bg-blue-600 text-white shadow-sm"
						>
							{menuOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>

					<div className="hidden min-w-0 items-center gap-4 rounded-3xl bg-slate-950 px-4 py-3 text-white ring-1 ring-slate-800 md:flex">
						<div className="flex min-w-0 items-center gap-3">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-white/90 p-2 shadow-sm">
								<img src={logo} alt="Muro Electric Supply" className="h-8 w-8 object-contain" />
							</div>
							<div className="min-w-0">
								<p className="truncate text-xs uppercase tracking-[0.22em] text-slate-300">Muro Electric Supply</p>
							</div>
						</div>

						<div className="ml-auto flex items-center gap-2">
							<nav className="flex items-center gap-1">
								{['Products', 'Brands', 'Request Quote', 'Directions'].map((item) => (
									<a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10">{item}</a>
								))}
							</nav>

							<Button variant="outline" size="sm" onClick={() => setContactOpen(true)} className="h-10 rounded-full border-white/30 bg-white/10 px-4 font-semibold text-white hover:bg-white hover:text-slate-950">
								Contact
							</Button>
						</div>
					</div>
				</div>

				{menuOpen && (
					<motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mx-auto max-w-6xl px-4 pb-4 sm:px-6">
						<div className="grid gap-2 rounded-2xl bg-slate-100 p-3 text-sm font-semibold">
							{['Products', 'Brands', 'Request Quote', 'Directions'].map((item) => (
								<a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-xl bg-white px-4 py-3">{item}</a>
							))}
							<button onClick={() => { setContactOpen(true); setMenuOpen(false); }} className="rounded-xl bg-white px-4 py-3 text-left text-slate-950">Contact</button>
						</div>
					</motion.nav>
				)}
			</header>

			{contactOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-h-[calc(100svh-2rem)] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:rounded-[2rem]">
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

			<main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
				<section className="relative w-full overflow-hidden bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-10">
					<div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop)" }} />
					<div className="absolute inset-0 bg-slate-950/55" />
					<div className="relative z-10">
						<div>
							<p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold"><Zap size={14} /> Electrical Supply Store in North York</p>
							<h2 className="text-4xl font-black leading-tight text-white">Find electrical materials fast.</h2>
							<p className="mt-3 break-words text-sm leading-6 text-slate-100">Wire, breakers, panels, lighting, switches, plugs, conduit, and contractor essentials across the GTA.</p>
						</div>

						<div className="mt-5 rounded-2xl bg-white p-2 shadow-xl">
							<div className="flex items-center gap-2 px-3 text-slate-500">
								<Search size={20} />
								<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search: Square D, 14/2 wire, GFCI..." className="h-12 min-w-0 w-full bg-transparent text-sm text-slate-900 outline-none" />
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
				</section>

				<section id="products" className="px-4 py-3">
					<div className="mb-4 flex items-end justify-between">
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-blue-700">Shop by category</p>
							<h3 className="text-2xl font-black">Popular Products</h3>
						</div>
						<Button variant="outline" size="sm" className="rounded-full"><Filter size={15} className="mr-1" /> Filter</Button>
					</div>

					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
			</main>
		</div>
	);
}
