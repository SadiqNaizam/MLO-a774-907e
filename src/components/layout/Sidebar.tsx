import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; // For combining class names

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  title?: string; // Optional title for the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ children, className, title }) => {
  console.log("Rendering Sidebar with title:", title);

  return (
    <aside
      className={cn(
        "hidden md:flex md:flex-col md:w-64 bg-gray-50 border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800",
        className
      )}
    >
      {title && (
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
        </div>
      )}
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-2">
          {children ? children : (
            <p className="text-sm text-gray-500 dark:text-gray-400">Sidebar content goes here.</p>
          )}
        </nav>
      </ScrollArea>
      {/* Optional: Footer section for the sidebar */}
      {/* <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">Sidebar Footer</p>
      </div> */}
    </aside>
  );
};

export default Sidebar;