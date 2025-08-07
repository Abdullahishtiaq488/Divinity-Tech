"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, ChevronLeft, DollarSign, Calendar, User, Mail, ClipboardCheck } from "lucide-react";

const services = [
    { name: "Web Development", base: 3000 },
    { name: "Graphic Design", base: 1500 },
    { name: "Content Writing", base: 800 },
    { name: "Digital Marketing", base: 1200 },
];
const timelines = ["2-4 weeks", "1-2 months", "2-3 months", "Flexible"];

export default function QuotePage() {
    const [step, setStep] = useState(0);
    const [selected, setSelected] = useState([]);
    const [budget, setBudget] = useState(3000);
    const [timeline, setTimeline] = useState(timelines[0]);
    const [info, setInfo] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);
    const total = selected.reduce((sum, s) => sum + (services.find(x => x.name === s)?.base || 0), 0);

    function handleServiceChange(name) {
        setSelected(sel => sel.includes(name) ? sel.filter(s => s !== name) : [...sel, name]);
    }

    function handleInfoChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] py-12 px-4 md:px-12 flex flex-col items-center justify-center">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-8 text-[var(--color-text)] text-center">Get a Custom Quote</motion.h1>
            <form onSubmit={handleSubmit} className="card w-full max-w-xl flex flex-col gap-8">
                {submitted ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
                        <ClipboardCheck size={48} className="text-[var(--color-accent)]" />
                        <h2 className="text-2xl font-bold text-[var(--color-text)]">Thank you!</h2>
                        <p className="text-[var(--color-text-secondary)] text-center">Your quote request has been submitted. Our team will contact you soon.</p>
                    </motion.div>
                ) : (
                    <>
                        {/* Stepper */}
                        <div className="flex items-center justify-center gap-4 mb-4">
                            {["Services", "Budget", "Timeline", "Contact", "Summary"].map((label, i) => (
                                <div key={label} className={`flex items-center gap-2 ${step === i ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)]"}`}>
                                    {i > 0 && <ChevronLeft size={16} />}
                                    <span className="font-semibold">{label}</span>
                                </div>
                            ))}
                        </div>
                        {/* Steps */}
                        {step === 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold mb-2">Select Services</h2>
                                {services.map(s => (
                                    <label key={s.name} className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" checked={selected.includes(s.name)} onChange={() => handleServiceChange(s.name)} className="accent-[var(--color-accent)] w-5 h-5" />
                                        <span>{s.name} <span className="text-[var(--color-text-secondary)] text-sm">(from ${s.base})</span></span>
                                    </label>
                                ))}
                            </motion.div>
                        )}
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold mb-2">Select Budget</h2>
                                <div className="flex items-center gap-4">
                                    <DollarSign size={24} className="text-[var(--color-accent)]" />
                                    <input type="range" min={1000} max={20000} step={500} value={budget} onChange={e => setBudget(Number(e.target.value))} className="w-full accent-[var(--color-accent)]" />
                                    <span className="font-bold">${budget}</span>
                                </div>
                            </motion.div>
                        )}
                        {step === 2 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold mb-2">Project Timeline</h2>
                                <div className="flex flex-col gap-2">
                                    {timelines.map(t => (
                                        <label key={t} className="flex items-center gap-3 cursor-pointer">
                                            <input type="radio" name="timeline" checked={timeline === t} onChange={() => setTimeline(t)} className="accent-[var(--color-accent)] w-5 h-5" />
                                            <span>{t}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {step === 3 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                                <div className="flex items-center gap-3">
                                    <User size={24} className="text-[var(--color-accent)]" />
                                    <input type="text" name="name" value={info.name} onChange={handleInfoChange} placeholder="Your Name" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] w-full" required />
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={24} className="text-[var(--color-accent)]" />
                                    <input type="email" name="email" value={info.email} onChange={handleInfoChange} placeholder="Your Email" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] w-full" required />
                                </div>
                            </motion.div>
                        )}
                        {step === 4 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold mb-2">Quote Summary</h2>
                                <div className="bg-[var(--color-muted)] rounded-lg p-4">
                                    <div className="mb-2"><span className="font-semibold">Services:</span> {selected.join(", ") || "None selected"}</div>
                                    <div className="mb-2"><span className="font-semibold">Budget:</span> ${budget}</div>
                                    <div className="mb-2"><span className="font-semibold">Timeline:</span> {timeline}</div>
                                    <div className="mb-2"><span className="font-semibold">Name:</span> {info.name}</div>
                                    <div className="mb-2"><span className="font-semibold">Email:</span> {info.email}</div>
                                    <div className="mb-2"><span className="font-semibold">Estimated Price:</span> <span className="bg-[var(--color-accent)] text-white font-bold px-4 py-1 rounded-full text-sm shadow">${total}</span></div>
                                </div>
                            </motion.div>
                        )}
                        {/* Navigation Buttons */}
                        <div className="flex gap-4 justify-between mt-4">
                            {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 bg-[var(--color-muted)] text-[var(--color-text)] px-4 py-2 rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors"><ChevronLeft size={18} />Back</button>}
                            {step < 4 && <button type="button" onClick={() => setStep(step + 1)} className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--color-accent-hover)] transition-transform ml-auto">Next<ChevronRight size={18} /></button>}
                            {step === 4 && <button type="submit" className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--color-accent-hover)] transition-transform ml-auto"><CheckCircle size={18} />Submit</button>}
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
