'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarItems } from '@/types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Notifications', href: '/item/notifications', icon: Bell },
    { label: 'Messages', href: '/item/messages', icon: Mail },
    {
      href: '/item/lists',
      icon: List,
      label: 'Lists',
    },
    {
      href: '/item/bookmarks',
      icon: Bookmark,
      label: 'Bookmarks',
    },
    {
      href: '/item/communities',
      icon: Users,
      label: 'Communities',
    },
    {
      href: '/item/profile',
      icon: User,
      label: 'Profile',
    },
  ]
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
