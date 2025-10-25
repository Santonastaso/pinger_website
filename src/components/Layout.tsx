import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SidebarTrigger } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";

const Error = ({ error }: { error: Error }) => (
  <div className="p-4 text-red-500">
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    {/* Fixed Pinger Logo */}
    <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
      <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-border">
        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
          <span className="text-primary-foreground text-sm font-bold">P</span>
        </div>
        <span className="text-lg font-semibold text-foreground">Pinger</span>
      </div>
    </div>

    <main
      className={cn(
        "ml-auto w-full max-w-full",
        "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
        "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
        "sm:transition-[width] sm:duration-200 sm:ease-linear",
        "flex h-svh flex-col",
        "group-data-[scroll-locked=1]/body:h-full",
        "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh",
      )}
    >
      <header className="flex h-16 md:h-12 shrink-0 items-center gap-2 px-4">
        <SidebarTrigger className="scale-125 sm:scale-100" />
        <div className="flex-1 flex items-center" id="breadcrumb" />
      </header>
      <div className="flex flex-1 flex-col px-4">
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Skeleton className="h-12 w-12 rounded-full" />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  </>
);
