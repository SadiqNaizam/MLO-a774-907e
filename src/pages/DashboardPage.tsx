import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from 'react-router-dom';
import { Home, Settings, User, LogOut, LayoutDashboard, Edit3, BarChart3 } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  console.log('DashboardPage loaded');

  const handleLogout = () => {
    console.log("User logging out");
    // Add actual logout logic here (e.g., clear token, call API)
    navigate('/login');
  };

  const sidebarLinks = [
    { href: "/dashboard", label: "Overview", icon: <LayoutDashboard className="h-5 w-5" /> },
    { href: "/dashboard/analytics", label: "Analytics", icon: <BarChart3 className="h-5 w-5" /> },
    { href: "/dashboard/editor", label: "Editor", icon: <Edit3 className="h-5 w-5" /> },
    { href: "/dashboard/settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar title="Main Menu">
        <ul className="space-y-2">
          {sidebarLinks.map((link) => (
            <li key={link.href}>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => navigate(link.href)}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </Button>
            </li>
          ))}
        </ul>
      </Sidebar>

      <div className="flex flex-col flex-1">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/dashboard" className={navigationMenuTriggerStyle()}>
                  <Home className="h-5 w-5 mr-2" /> Dashboard
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>User Account</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/dashboard/profile"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                        >
                          <User className="h-6 w-6" />
                          <div className="mb-1 mt-2 text-sm font-medium">Profile</div>
                          <p className="text-xs leading-tight text-muted-foreground">
                            View and edit your profile.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                     <li>
                      <NavigationMenuLink asChild>
                        <Button variant="ghost" onClick={handleLogout} className="w-full justify-start p-3 text-sm">
                           <LogOut className="h-5 w-5 mr-2" /> Logout
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        <main className="flex-1 p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Your Dashboard!</CardTitle>
              <CardDescription>This is a generic dashboard page. Customize it as needed.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Here you can display various statistics, summaries, quick actions, or any relevant information
                for your authenticated users.
              </p>
              <Separator />
              <div>
                <Label htmlFor="notes" className="text-lg font-semibold">Quick Notes</Label>
                <Textarea id="notes" placeholder="Jot down some notes..." className="mt-2 min-h-[100px]" />
                <Button className="mt-2">Save Notes</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Sample Widget 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Content for widget 1. Could be a chart, a list, or stats.</p>
                <img src="https://via.placeholder.com/300x150/FFA07A/FFFFFF?text=Chart+Placeholder" alt="Placeholder Chart" className="mt-2 rounded"/>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sample Widget 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Content for widget 2. Maybe some recent activity feed.</p>
                 <ul className="list-disc list-inside mt-2 text-sm">
                    <li>User A completed task X.</li>
                    <li>New item B added.</li>
                    <li>Report C generated.</li>
                </ul>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-2">
                <Button variant="outline">Create New Item</Button>
                <Button variant="outline">View Reports</Button>
                <Button variant="secondary">Export Data</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;