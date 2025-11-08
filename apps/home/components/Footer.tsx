import { siteConfig } from "@config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            {siteConfig.footer.text}
          </p>
          
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <a
              href={siteConfig.footer.links.privacy}
              className="hover:text-white transition-colors duration-200"
              aria-label="Privacy Policy"
            >
              Privacy
            </a>
            <a
              href={siteConfig.footer.links.terms}
              className="hover:text-white transition-colors duration-200"
              aria-label="Terms of Service"
            >
              Terms
            </a>
            <a
              href={siteConfig.footer.links.contact}
              className="hover:text-white transition-colors duration-200"
              aria-label="Contact Us"
            >
              Contact
            </a>
            <a
              href={siteConfig.footer.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

