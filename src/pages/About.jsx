import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, HeartHandshake, Shirt, Truck } from "lucide-react";
import NavBar from "./NavBar";
import Footer from "../components/Footer";

const values = [
  {
    icon: Shirt,
    title: "Style for everyday life",
    description: "Explore clothing, bags and accessories selected to help you express your personal style."
  },
  {
    icon: BadgeCheck,
    title: "Value and quality",
    description: "We aim to make attractive fashion choices accessible while keeping quality in view."
  },
  {
    icon: HeartHandshake,
    title: "Customer relationships",
    description: "We value clear communication and building lasting relationships with our customers."
  },
  {
    icon: Truck,
    title: "Bulk purchase enquiries",
    description: "Interested in larger quantities? Contact our team to discuss available products and arrangements."
  }
];

const About = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-slate-50 pt-24">
        <section className="bg-gradient-to-r from-purple-950 via-purple-800 to-slate-900 px-5 py-16 text-center text-white md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">The Folly story</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-6xl">Fashion should feel personal.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-purple-100 md:text-base">At Folly Market, we are passionate about clothing and accessories that help people express their individuality. Our goal is to offer stylish, affordable choices and build better relationships with our customers.</p>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Explore the collection <ArrowRight className="h-4 w-4" /></Link>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">What matters to us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">A thoughtful way to shop</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">Our focus is simple: make discovering fashion easier and make every customer interaction count.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-purple-700"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-5xl px-5">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-amber-100 p-7 sm:flex-row sm:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Looking for something specific?</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Talk to us about product availability, bulk purchases or any questions you have.</p>
            </div>
            <Link to="/contact" className="shrink-0 rounded-full bg-purple-700 px-6 py-3 text-sm font-bold text-white hover:bg-purple-800">Contact Folly</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
