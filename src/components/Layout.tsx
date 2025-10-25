import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SidebarTrigger } from "./ui/sidebar";

const Error = ({ error }: { error: Error }) => (
  <div className="p-4 text-red-500">
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
      {/* Top header with logo - outside of main content area */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 md:h-12 items-center gap-2 px-4 bg-transparent">
        <div className="flex items-center pl-2">
          <span className="text-4xl font-bold leading-none">Pinger</span>
        </div>
        <SidebarTrigger className="text-base font-normal hover:scale-110 transition-transform duration-200" />
        <div className="flex-1 flex items-center" id="breadcrumb" />
      </header>

    {/* Main content area with top padding to account for fixed header */}
    <main
      className={cn(
        "ml-auto w-full max-w-full pt-16 md:pt-12",
        "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
        "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
        "sm:transition-[width] sm:duration-200 sm:ease-linear",
        "flex h-svh flex-col",
        "group-data-[scroll-locked=1]/body:h-full",
        "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh",
      )}
    >
      <div className="flex flex-1 flex-col px-4 py-6 overflow-y-auto">
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 animate-pulse"></div>
                <div className="text-muted-foreground">Loading...</div>
              </div>
            </div>
          }>
            {children}
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  </>
);
