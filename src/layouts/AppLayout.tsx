import { PropsWithChildren } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="h-14 flex items-center gap-3 px-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mx-2 h-6" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Welcome to</span>
                <strong className="text-sm">Smart Hostel Management</strong>
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
