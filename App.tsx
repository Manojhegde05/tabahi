import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Societies from "./pages/Societies";
import Team from "./pages/Team";
import Membership from "./pages/Membership";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Portal from "./pages/Portal";
import { NAV, type Page } from "./data";
import { AuthProvider } from "./backend/AuthContext";

const EXTRA: Page[] = ["login", "register", "portal"];

function isPage(id: string): id is Page {
  return NAV.some((n) => n.id === id) || EXTRA.includes(id as Page);
}

function Shell() {
  const [page, setPage] = useState<Page>("home");
  const [join, setJoin] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setPage(isPage(hash) ? hash : "home");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (p: Page) => {
    window.location.hash = p;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar page={page} onNavigate={navigate} onJoin={() => setJoin(true)} />
      <main>
        {page === "home" && <Home onNavigate={navigate} onJoin={() => setJoin(true)} />}
        {page === "about" && <About />}
        {page === "events" && <Events onNavigate={navigate} />}
        {page === "societies" && <Societies />}
        {page === "team" && <Team />}
        {page === "membership" && <Membership onJoin={() => setJoin(true)} />}
        {page === "gallery" && <Gallery />}
        {page === "contact" && <Contact />}
        {page === "login" && <Login onNavigate={navigate} />}
        {page === "register" && <Register onNavigate={navigate} />}
        {page === "portal" && <Portal onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />
      <JoinModal open={join} onClose={() => setJoin(false)} onNavigate={navigate} />
      {top && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ieee text-white shadow-lg shadow-cyan-500/30"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
