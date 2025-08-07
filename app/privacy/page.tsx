import { ShieldCheck, Cookie, Mail } from "lucide-react";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] py-12 px-4 md:px-12">
            <section className="max-w-3xl mx-auto card p-8">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck size={32} className="text-[var(--color-accent)]" />
                    <h1 className="text-3xl font-bold text-[var(--color-text)]">Privacy Policy</h1>
                </div>
                <p className="mb-4 text-[var(--color-text-secondary)]">At Divinity Tech, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.</p>
                <h2 className="text-xl font-semibold text-[var(--color-accent)] mt-6 mb-2">Information We Collect</h2>
                <ul className="list-disc ml-6 mb-4 text-[var(--color-text-secondary)]">
                    <li>Contact details (name, email, phone) when you fill out forms</li>
                    <li>Project information you provide for quotes</li>
                    <li>Website usage data via cookies and analytics</li>
                </ul>
                <h2 className="text-xl font-semibold text-[var(--color-accent)] mt-6 mb-2">How We Use Your Data</h2>
                <ul className="list-disc ml-6 mb-4 text-[var(--color-text-secondary)]">
                    <li>To respond to your inquiries and provide services</li>
                    <li>To improve our website and offerings</li>
                    <li>For marketing and communication (with your consent)</li>
                </ul>
                <div className="flex items-center gap-2 mt-8 mb-2"><Cookie className="text-[var(--color-accent)]" size={20} /><h2 className="text-lg font-semibold text-[var(--color-text)]">Cookie Policy</h2></div>
                <p className="mb-4 text-[var(--color-text-secondary)]">We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie preferences in your browser settings.</p>
                <h2 className="text-xl font-semibold text-[var(--color-accent)] mt-6 mb-2">Data Security</h2>
                <p className="mb-4 text-[var(--color-text-secondary)]">We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.</p>
                <h2 className="text-xl font-semibold text-[var(--color-accent)] mt-6 mb-2">Contact Us</h2>
                <div className="flex items-center gap-2 mb-2"><Mail className="text-[var(--color-accent)]" size={20} /><span className="text-[var(--color-text-secondary)]">privacy@divinitytech.com</span></div>
                <p className="text-[var(--color-text-secondary)]">If you have any questions about our privacy practices, please contact us at the email above.</p>
            </section>
        </div>
    );
}
