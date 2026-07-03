import { Instagram, Youtube } from 'lucide-react';
import { socialLinks } from '../data/siteConfig';
import SpotifyIcon from './icons/SpotifyIcon';
import AppleMusicIcon from './icons/AppleMusicIcon';

const iconMap = {
  Instagram,
  YouTube: Youtube,
  Spotify: SpotifyIcon,
  'Apple Music': AppleMusicIcon,
};

export default function SocialIcons({ className = '' }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map(({ label, href, accent }) => {
        const Icon = iconMap[label];
        const isLucide = label === 'Instagram' || label === 'YouTube';

        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`social-icon ${accent}`}
            >
              {isLucide ? (
                <Icon size={20} strokeWidth={1.75} />
              ) : (
                <Icon size={20} />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
