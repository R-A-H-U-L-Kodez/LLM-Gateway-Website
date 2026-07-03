// This is file with demos of your components
// Each export is one usecase for your component

import ShaderBackground from "@/components/ui/shader-background";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FileText } from 'lucide-react';

const DemoOne = () => {
  return <ShaderBackground />;
};

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Resume', url: '#resume', icon: FileText }
  ];

  return <NavBar items={navItems} />;
}

export { DemoOne };
