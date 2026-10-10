import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/home";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { pageview } from "@vercel/analytics";

const queryClient = new QueryClient();

// Reports each section as a virtual page view the first time a visitor
// settles on it, so analytics can show how far people read.
function SectionViewTracker() {
  useEffect(() => {
    const seen = new Set<string>();
    const timers = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (seen.has(id)) continue;
          if (entry.isIntersecting) {
            // Wait a second so sections scrolled past on the way elsewhere don't count
            timers.set(id, window.setTimeout(() => {
              seen.add(id);
              observer.unobserve(entry.target);
              pageview({ route: `/${id}`, path: `/${id}` });
            }, 1000));
          } else {
            window.clearTimeout(timers.get(id));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    document.querySelectorAll("section[id]:not(#home)").forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollControls() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300"
      style={{
        background: "rgba(0,200,180,0.12)",
        border: "1px solid rgba(0,200,180,0.3)",
        color: "rgba(0,200,180,0.9)",
        boxShadow: "0 0 16px rgba(0,200,180,0.15)",
        opacity: showTop ? 1 : 0,
        transform: showTop ? "translateY(0)" : "translateY(12px)",
        pointerEvents: showTop ? "auto" : "none",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,200,180,0.22)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(0,200,180,0.3)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,200,180,0.12)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 16px rgba(0,200,180,0.15)";
      }}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="dark min-h-[100dvh] bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary">
            <Router />
            <ScrollControls />
          </div>
        </WouterRouter>
        <Toaster />
        <Analytics />
        <SectionViewTracker />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
