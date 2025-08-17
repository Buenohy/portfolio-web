import { ComponentType } from 'react';
import { IoHome } from 'react-icons/io5';
import { BsBriefcaseFill } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';
import { MdMiscellaneousServices } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

export interface NavItem {
  id: string;
  Icon: ComponentType<{ className?: string }>;
  pageRoute: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', Icon: IoHome, pageRoute: '/' },
  { id: 'portfolio', Icon: BsBriefcaseFill, pageRoute: '/' },
  { id: 'about', Icon: IoMdContact, pageRoute: '/' },
  { id: 'services', Icon: MdMiscellaneousServices, pageRoute: '/' },
  { id: 'contact', Icon: MdEmail, pageRoute: '/' },
];
