import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { contact } from "../../data/contact";

const ContactInfo = () => {
  const items = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: contact.github.replace("https://", ""),
      href: contact.github,
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: contact.linkedin.replace("https://", ""),
      href: contact.linkedin,
    },
    {
      icon: <FaLocationDot />,
      title: "Location",
      value: contact.location,
      href: "#",
    },
  ];

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className="glass rounded-2xl p-6 flex gap-5 items-center hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-primary text-2xl">
            {item.icon}
          </div>

          <div>
            <p className="text-gray-400">{item.title}</p>
            <p className="font-medium break-all">{item.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;