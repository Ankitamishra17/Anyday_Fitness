// import { useState } from "react";
// import { MapPin, Phone, Mail, Clock, Send, Plus, Minus } from "lucide-react";
// import PageHero from "../components/PageHero";
// import SectionHeading from "../components/SectionHeading";

// const contactInfo = [
//   {
//     icon: MapPin,
//     label: "Location",
//     value:
//       "6th Floor, Zeal 31, Plot 31, Greater Noida W Rd, Tech Zone IV, West, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201306",
//   },
//   { icon: Phone, label: "Phone", value: "070424 50015" },
//   { icon: Mail, label: "Email", value: "info@anydayfitness.in" },
//   // { icon: Clock, label: "Opening Hours", value: "Mon - Sat : 9am - 10pm" },
// ];

// const contactFaqs = [
//   {
//     q: "How quickly will I get a response?",
//     a: "Our team typically replies within 24 hours on weekdays. For anything urgent, call us directly and we'll pick up.",
//   },
//   {
//     q: "Can I schedule a free trial or tour before joining?",
//     a: "Yes — use the form below or call us to book a walk-through of the facility and a free trial session with one of our trainers.",
//   },
//   {
//     q: "Do you offer corporate or group memberships?",
//     a: "We do. Mention it in your message subject and our team will reach out with corporate and group pricing options.",
//   },
//   {
//     q: "Where exactly are you located?",
//     a: "We're on the 6th Floor of Zeal 31, Tech Zone IV, Greater Noida West — see the map above for directions and nearby parking.",
//   },
//   {
//     q: "What's the best way to reach the front desk directly?",
//     a: "Call or WhatsApp us at 070424 50015 and our team will assist you right away.",
//   },
// ];

// function ContactFaqItem({ q, a, index }) {
//   const [open, setOpen] = useState(false);
//   const num = String(index + 1).padStart(2, "0");

//   return (
//     <div
//       className={`group relative rounded-xl p-[1.5px] transition-all duration-500 ${
//         open
//           ? "bg-gradient-to-r from-primary/70 via-primary/30 to-transparent"
//           : "bg-gradient-to-br from-white/10 to-white/[0.03] hover:from-primary/40 hover:to-white/5"
//       }`}
//     >
//       <div className="rounded-[10px] bg-surface overflow-hidden">
//         <button
//           onClick={() => setOpen((o) => !o)}
//           className="w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-6 py-5 text-left"
//         >
//           <span
//             className={`font-teko text-3xl sm:text-4xl font-semibold leading-none shrink-0 transition-colors duration-300 ${
//               open ? "text-primary" : "text-white/10"
//             }`}
//           >
//             {num}
//           </span>

//           <span
//             className={`flex-1 font-rajdhani font-semibold uppercase tracking-wide text-sm sm:text-base transition-colors duration-300 ${
//               open ? "text-primary" : "text-heading"
//             }`}
//           >
//             {q}
//           </span>

//           <span
//             className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-all duration-300 ${
//               open
//                 ? "bg-primary border-primary text-black"
//                 : "border-white/20 text-body group-hover:border-primary/60 group-hover:text-primary"
//             }`}
//           >
//             {open ? <Minus size={16} /> : <Plus size={16} />}
//           </span>
//         </button>

//         <div
//           className={`grid transition-all duration-300 ${
//             open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//           }`}
//         >
//           <div className="overflow-hidden">
//             <p className="font-inter text-sm text-body pl-[3rem] sm:pl-[4.75rem] pr-4 sm:pr-14 pb-5 -mt-1">
//               {a}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);
//     setSuccessMessage("");
//     setErrorMessage("");

//     try {
//       const res = await fetch(
//         "https://anydayfitness.in/send-contact.php",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: form.name,
//             phone: form.phone,
//             email: form.email,
//             subject: form.subject,
//             message: form.message,
//           }),
//         },
//       );

//       const data = await res.json();

//       if (data.success) {
//         setSuccessMessage("Your message has been sent successfully!");

//         setForm({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         setErrorMessage(
//           data.message || "Something went wrong. Please try again.",
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setErrorMessage("Network error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <PageHero
//         image="/contactbanner1.png"
//         eyebrow="Get In Touch"
//         title="Contact "
//         highlight="us"
//         description="Have a question, need more information, or ready to bring your ideas to life? Get in touch with our team today. We’re here to listen, help, and find the right solution for you."
//         primaryBtnText="Contact Us"
//         primaryBtnLink="/contact"
//         secondaryBtnText="Learn More"
//         secondaryBtnLink="/about"
//       />

//       <section className="py-16 sm:py-24 bg-surface">
//         <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12">
//           {/* Info */}
//           <div className="flex flex-col gap-5">
//             {contactInfo.map((info) => (
//               <div
//                 key={info.label}
//                 className="card-dark flex items-start gap-4 p-6"
//               >
//                 <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-primary/15 border border-primary/50 text-primary">
//                   <info.icon size={20} strokeWidth={1.75} />
//                 </div>
//                 <div>
//                   <h3 className="font-rajdhani font-bold text-heading uppercase tracking-wide text-sm">
//                     {info.label}
//                   </h3>
//                   <p className="font-inter text-sm text-body mt-1">
//                     {info.value}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             <div className="relative mt-2 h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-surface shadow-lg">
//               {/* Map */}
//               <iframe
//                 className="absolute inset-0 h-full w-full border-0"
//                 src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Anyday+Fitness%2C+6th+Floor%2C+Zeal+31%2C+Plot+31%2C+Greater+Noida+W+Rd%2C+Tech+Zone+IV%2C+Greater+Noida%2C+Uttar+Pradesh+201306&maptype=roadmap&zoom=15"
//                 title="Anyday Fitness Location"
//                 allowFullScreen
//                 loading="lazy"
//               />

//               {/* Subtle overlay */}
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

//               {/* Location label */}
//               <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white backdrop-blur-md">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15">
//                   <MapPin size={20} className="text-primary" />
//                 </div>

//                 <div className="min-w-0">
//                   <p className="text-sm font-semibold">Anyday Fitness</p>
//                   <p className="truncate text-xs text-white/60">
//                     Zeal 31, Tech Zone IV, Greater Noida
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="card-dark p-8 flex flex-col gap-5"
//           >
//             <h2 className="font-teko text-3xl font-semibold text-heading uppercase">
//               Send Us A Message
//             </h2>

//             <div className="grid sm:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="name"
//                   className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
//                 >
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="email"
//                   className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-5">
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="phone"
//                   className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
//                   placeholder="+91 12345 67890"
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="subject"
//                   className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   id="subject"
//                   name="subject"
//                   type="text"
//                   value={form.subject}
//                   onChange={handleChange}
//                   className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors"
//                   placeholder="How can we help?"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <label
//                 htmlFor="message"
//                 className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={10}
//                 required
//                 value={form.message}
//                 onChange={handleChange}
//                 className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors resize-none"
//                 placeholder="Tell us what you're looking for..."
//               />
//             </div>

//             <button type="submit" className="btn-primary justify-center group">
//               Send Message
//               <Send
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </button>

//             {submitted && (
//               <p className="text-primary font-rajdhani font-semibold text-sm text-center animate-fadeIn">
//                 Message sent! We'll get back to you shortly.
//               </p>
//             )}

//             {successMessage && (
//               <p className="text-green-500 font-semibold text-sm text-center">
//                 {successMessage}
//               </p>
//             )}

//             {errorMessage && (
//               <p className="text-red-500 font-semibold text-sm text-center">
//                 {errorMessage}
//               </p>
//             )}
//           </form>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="relative py-16 sm:py-24  overflow-hidden">
//         {/* Ambient glow so the section reads as designed, not a flat block */}

//         {/* Fade to black at the very bottom so the section doesn't cut abruptly
//             into whatever plain-black surface (footer / body bg) sits below it */}
//         {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" /> */}

//         <div className="container-x relative">
//           <SectionHeading
//             eyebrow="FAQ"
//             title="Common"
//             highlight="Questions"
//             align="left"
//             className="mb-14"
//           />

//           <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
//             {/* Side CTA panel */}
//             <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-10 flex flex-col gap-6 lg:sticky lg:top-28 bg-gradient-to-br from-surface to-black">
//               <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
//               <div className="relative w-14 h-14 flex items-center justify-center rounded-xl border border-primary/40 bg-black/30 text-primary">
//                 <Mail size={24} strokeWidth={1.75} />
//               </div>
//               <div className="relative flex flex-col gap-2">
//                 <h3 className="font-teko text-3xl font-semibold uppercase text-heading leading-none">
//                   Still Have <span className="text-primary">Questions?</span>
//                 </h3>
//                 <p className="font-inter text-sm text-body">
//                   Can't find what you're looking for? Reach out directly and our
//                   team will get back to you right away.
//                 </p>
//               </div>

//               <div className="relative flex flex-col gap-3 pt-2 border-t border-white/10">
//                 <a
//                   href="tel:07042450015"
//                   className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body hover:text-primary transition-colors duration-300"
//                 >
//                   <Phone size={16} className="text-primary shrink-0" />
//                   070424 50015
//                 </a>
//                 <a
//                   href="mailto:info@anydayfitness.in"
//                   className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-body hover:text-primary transition-colors duration-300"
//                 >
//                   <Mail size={16} className="text-primary shrink-0" />
//                   info@anydayfitness.in
//                 </a>
//               </div>
//             </div>

//             {/* FAQ list */}
//             <div className="flex flex-col gap-4">
//               {contactFaqs.map((f, i) => (
//                 <ContactFaqItem key={f.q} {...f} index={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, Plus, Minus, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

/**
 * LIGHT THEME NOTES
 * ------------------
 * This file no longer depends on dark-only utility classes like
 * `bg-surface`, `card-dark`, `text-heading`, `text-body`, `text-offwhite`,
 * `text-muted`. Those were tuned for a black background and don't have
 * enough contrast on white, so this version uses a small local palette
 * instead. If your `btn-primary` class in globals.css was also tuned for
 * dark surfaces (e.g. transparent bg + light border), you may want to swap
 * it for the `.btn-primary` definition suggested at the bottom of this file
 * — otherwise the button may look washed out here.
 *
 * Palette:
 *   ink       #14171A  – headings
 *   slate     #5B6169  – body copy
 *   mist      #8C929B  – muted / captions
 *   paper     #FFFFFF  – cards
 *   cloud     #F5F4F1  – page background / alt sections
 *   line      #E7E5E0  – hairline borders
 *   primary   #FF4B26  – brand accent (unchanged energy-orange)
 */

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value:
      "6th Floor, Zeal 31, Plot 31, Greater Noida W Rd, Tech Zone IV, West, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201306",
  },
  { icon: Phone, label: "Phone", value: "070424 50015" },
  { icon: Mail, label: "Email", value: "info@anydayfitness.in" },
];

const contactFaqs = [
  {
    q: "How quickly will I get a response?",
    a: "Our team typically replies within 24 hours on weekdays. For anything urgent, call us directly and we'll pick up.",
  },
  {
    q: "Can I schedule a free trial or tour before joining?",
    a: "Yes — use the form below or call us to book a walk-through of the facility and a free trial session with one of our trainers.",
  },
  {
    q: "Do you offer corporate or group memberships?",
    a: "We do. Mention it in your message subject and our team will reach out with corporate and group pricing options.",
  },
  {
    q: "Where exactly are you located?",
    a: "We're on the 6th Floor of Zeal 31, Tech Zone IV, Greater Noida West — see the map above for directions and nearby parking.",
  },
  {
    q: "What's the best way to reach the front desk directly?",
    a: "Call or WhatsApp us at 070424 50015 and our team will assist you right away.",
  },
];

function ContactFaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-xl border transition-colors duration-300 ${
        open
          ? "border-[#F47B0B]/40 bg-white shadow-[0_8px_24px_-12px_rgba(255,75,38,0.25)]"
          : "border-[#E7E5E0] bg-white hover:border-[#F47B0B]/25 hover:shadow-[0_6px_18px_-14px_rgba(20,23,26,0.25)]"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 sm:gap-5 px-5 sm:px-6 py-5 text-left"
      >
        <span
          className={`font-teko text-3xl sm:text-4xl font-semibold leading-none shrink-0 transition-colors duration-300 ${
            open ? "text-[#F47B0B]" : "text-[#E7E5E0]"
          }`}
        >
          {num}
        </span>

        <span
          className={`flex-1 font-rajdhani font-semibold uppercase tracking-wide text-sm sm:text-base transition-colors duration-300 ${
            open ? "text-[#F47B0B]" : "text-[#14171A]"
          }`}
        >
          {q}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border transition-colors duration-300 ${
            open
              ? "bg-[#F47B0B] border-[#F47B0B] text-white"
              : "border-[#E7E5E0] text-[#5B6169] group-hover:border-[#F47B0B]/50 group-hover:text-[#FF4B26]"
          }`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-inter text-sm text-[#5B6169] leading-relaxed pl-[3rem] sm:pl-[4.75rem] pr-4 sm:pr-14 pb-5 -mt-1">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("https://anydayfitness.in/send-contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "bg-white border border-[#E7E5E0] rounded-md px-4 py-3 text-sm text-[#14171A] font-inter placeholder:text-[#8C929B] focus:outline-none focus:border-[#FF4B26] focus:ring-4 focus:ring-[#FF4B26]/10 transition-all";

  const labelClasses =
    "font-rajdhani text-xs font-semibold uppercase tracking-wide text-[#8C929B]";

  return (
    <>
      <PageHero
        image="/contactbanner1.png"
        eyebrow="Get In Touch"
        title="Contact "
        highlight="us"
        description="Have a question, need more information, or ready to bring your ideas to life? Get in touch with our team today. We're here to listen, help, and find the right solution for you."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/about"
      />

      <section className="py-16 sm:py-24 bg-[#F5F4F1]">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#E7E5E0] shadow-[0_4px_16px_-10px_rgba(20,23,26,0.15)] hover:border-[#F47B0B] transition-colors duration-300"
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-[#F47B0B]/10 border border-[#F47B0B/30 text-[#F47B0B]">
                  <info.icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-rajdhani font-bold text-[#14171A] uppercase tracking-wide text-sm">
                    {info.label}
                  </h3>
                  <p className="font-inter text-sm text-[#5B6169] mt-1 leading-relaxed">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative mt-2 h-64 w-full overflow-hidden rounded-xl border border-[#E7E5E0] bg-white shadow-[0_4px_16px_-10px_rgba(20,23,26,0.15)]"
            >
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Anyday+Fitness%2C+6th+Floor%2C+Zeal+31%2C+Plot+31%2C+Greater+Noida+W+Rd%2C+Tech+Zone+IV%2C+Greater+Noida%2C+Uttar+Pradesh+201306&maptype=roadmap&zoom=15"
                title="Anyday Fitness Location"
                allowFullScreen
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-lg border border-white/20 bg-white/90 backdrop-blur-md px-4 py-3 shadow-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F47B0B]/10">
                    <MapPin size={20} className="text-[#F47B0B]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#14171A]">Anyday Fitness</p>
                    <p className="truncate text-xs text-[#5B6169]">
                      Zeal 31, Tech Zone IV, Greater Noida
                    </p>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.google.com/maps/search/?api=1&query=Anyday+Fitness+Greater+Noida"
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#14171A] text-white hover:bg-[#F47B0B] transition-colors"
                  aria-label="Open in Google Maps"
                >
                  <ArrowUpRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="p-8 flex flex-col gap-5 rounded-xl bg-white border border-[#E7E5E0] shadow-[0_8px_28px_-14px_rgba(20,23,26,0.2)]"
          >
            <div>
              <span className="font-rajdhani text-xs font-semibold uppercase tracking-widest text-[#F47B0B]">
                Say Hello
              </span>
              <h2 className="font-teko text-3xl font-semibold text-[#14171A] uppercase mt-1">
                Send Us A Message
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className={labelClasses}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                required
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us what you're looking for..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F47B0B] text-white font-rajdhani font-semibold uppercase tracking-wide text-sm px-6 py-3.5 hover:bg-[#F47B0B] disabled:opacity-60 disabled:cursor-not-allowed transition-colors group"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isSubmitting ? "sending" : "idle"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={isSubmitting ? { rotate: 360 } : { x: 0 }}
                transition={
                  isSubmitting
                    ? { repeat: Infinity, duration: 0.8, ease: "linear" }
                    : { duration: 0.2 }
                }
                className="inline-flex group-hover:translate-x-1 transition-transform"
              >
                <Send size={16} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {successMessage && (
                <motion.p
                  initial={{ opacity: 0, height: 0, y: -6 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[#1A8A4A] bg-[#1A8A4A]/10 border border-[#1A8A4A]/20 rounded-md font-rajdhani font-semibold text-sm text-center py-2.5 overflow-hidden"
                >
                  {successMessage}
                </motion.p>
              )}

              {errorMessage && (
                <motion.p
                  initial={{ opacity: 0, height: 0, y: -6 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-[#F47B0B] bg-[#F47B0B]/10 border border-[#F47B0B]/20 rounded-md font-rajdhani font-semibold text-sm text-center py-2.5 overflow-hidden"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        <div className="container-x relative">
          <SectionHeading
            eyebrow="FAQ"
            title="Common"
            highlight="Questions"
            align="left"
            className="mb-14"
          />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
            {/* Side CTA panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#E7E5E0] p-8 sm:p-10 flex flex-col gap-6 lg:sticky lg:top-28 bg-[#14171A]"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F47B0B] blur-3xl"
              />
              <div className="relative w-14 h-14 flex items-center justify-center rounded-xl border border-[#F47B0B] bg-white/5 text-[#FF4B26]">
                <Mail size={24} strokeWidth={1.75} />
              </div>
              <div className="relative flex flex-col gap-2">
                <h3 className="font-teko text-3xl font-semibold uppercase text-white leading-none">
                  Still Have <span className="text-[#F47B0B]">Questions?</span>
                </h3>
                <p className="font-inter text-sm text-white/60">
                  Can't find what you're looking for? Reach out directly and our
                  team will get back to you right away.
                </p>
              </div>

              <div className="relative flex flex-col gap-3 pt-2 border-t border-white/10">
                <a
                  href="tel:07042450015"
                  className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-white hover:text-[#F47B0B] transition-colors duration-300"
                >
                  <Phone size={16} className="text-[#F47B0B] shrink-0" />
                  070424 50015
                </a>
                <a
                  href="mailto:info@anydayfitness.in"
                  className="flex items-center gap-3 font-rajdhani font-semibold text-sm text-white hover:text-[#F47B0B] transition-colors duration-300"
                >
                  <Mail size={16} className="text-[#F47B0B] shrink-0" />
                  info@anydayfitness.in
                </a>
              </div>
            </motion.div>

            {/* FAQ list */}
            <div className="flex flex-col gap-4">
              {contactFaqs.map((f, i) => (
                <ContactFaqItem key={f.q} {...f} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
