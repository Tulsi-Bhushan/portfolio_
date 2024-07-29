import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Tulsi-Bhushan" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tulsi-bidya-bhushan-9b67a923b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B8CzP0IRQbKmPzK5JNOvcg%3D%3D",
  },
  { icon: <FaGlobe />, path: "https://bhushantulsibidya.wordpress.com/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/tulsib7/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
