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
    <div className="fixed top-4 left-4 z-50 flex items-center h-12">
      <span className="text-lg font-semibold text-white leading-none">Pinger</span>
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
      <header className="flex h-16 md:h-12 shrink-0 items-center gap-2 px-4 pt-4">
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
