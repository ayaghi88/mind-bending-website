import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";
import Publishing from "./pages/Publishing";
import AppCreation from "./pages/AppCreation";
import DNSTech from "./pages/DNSTech";
import Speaking from "./pages/Speaking";
import Author from "./pages/Author";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/books" element={<Books />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publishing" element={<Publishing />} />
            <Route path="/apps" element={<AppCreation />} />
            <Route path="/dns-tech" element={<DNSTech />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/author" element={<Author />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
