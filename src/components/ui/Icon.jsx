import {
  ArrowRight, ArrowUp, Award, BookMarked, BookOpen, BookOpenText, Bot, CalendarDays, ChevronDown,
  ChevronLeft, ChevronRight, Clock, Cpu, Database, Eye, FileText, FolderKanban, Gavel, Globe,
  GraduationCap, Handshake, HeartHandshake, Landmark, Languages, Lightbulb, Mail, MapPin, Menu,
  Microscope, Pause, Phone, Play, Presentation, Quote, Scale, School, ScrollText, Send, Sparkles,
  Target, Trophy, Users, Vote, X,
} from 'lucide-react';

/*
 * Line icons in the same style as the reference site (outlined, 2px stroke, round caps/joins,
 * green #65B110 by default). Use <Icon name="BookOpen" /> with any name from the map below.
 */
const ICONS = {
  ArrowRight, ArrowUp, Award, BookMarked, BookOpen, BookOpenText, Bot, CalendarDays, ChevronDown,
  ChevronLeft, ChevronRight, Clock, Cpu, Database, Eye, FileText, FolderKanban, Gavel, Globe,
  GraduationCap, Handshake, HeartHandshake, Landmark, Languages, Lightbulb, Mail, MapPin, Menu,
  Microscope, Pause, Phone, Play, Presentation, Quote, Scale, School, ScrollText, Send, Sparkles,
  Target, Trophy, Users, Vote, X,
};

export default function Icon({ name, size = 24, strokeWidth = 2, className, ...rest }) {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" {...rest} />;
}

/* Brand icons (Font Awesome paths from the original site) */
const BRAND = {
  facebook: {
    viewBox: '0 0 320 512',
    d: 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z',
  },
  tiktok: {
    viewBox: '0 0 448 512',
    d: 'M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z',
  },
  linkedin: {
    viewBox: '0 0 448 512',
    d: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
  },
  youtube: {
    viewBox: '0 0 576 512',
    d: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
  },
};

export function BrandIcon({ name, size = 16 }) {
  const b = BRAND[name];
  if (!b) return null;
  return (
    <svg viewBox={b.viewBox} width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={b.d} />
    </svg>
  );
}
