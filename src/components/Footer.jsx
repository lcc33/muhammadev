import insta from "../assets/socials/instagram-social-media-network-communication-interaction-connection-svgrepo-com.svg";
import twitter from "../assets/socials/x.svg";
import linkedln from "../assets/socials/linkedln.svg";
import github from "../assets/github.png";

const Footer = () => {
  const socials = [
    { href: "https://x.com/Aizendistro", label: " X", icon: twitter },
    { href: "https://github.com/lcc33", label: "GitHub", icon: github },
    { href: "https://www.linkedin.com/in/muhammad-147648327/", label: "LinkedIn", icon: linkedln },
    { href: "https://www.instagram.com/muhammadcodes_/", label: "Instagram", icon: insta },
  ];

  return (
    <footer className="w-full py-6 bg-primary flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="inline-flex items-center justify-center p-2 rounded hover:bg-white/10"
            target="_blank"
            rel="noreferrer"
          >
            <img src={s.icon} alt={s.label} className="w-6 h-6" />
          </a>
        ))}
      </div>
      <div className="text-secondary text-sm">© {new Date().getFullYear()} Muhammad. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
