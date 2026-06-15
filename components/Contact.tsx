'use client';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-subtitle mb-10">
          I am actively seeking internship opportunities in business analysis, data analytics, strategic planning, and product management. If you have a role or project where analytical thinking and structured problem-solving matter, let&apos;s talk.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zihniaryanto00@gmail.com"
            className="button-primary"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/zihni-aryanto"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zihniii"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
