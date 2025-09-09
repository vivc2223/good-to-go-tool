import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Strategy from "./pages/Strategy";
import Mission from "./pages/Mission";
import Culture from "./pages/Culture";
import Careers from "./pages/Careers";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SubmissionDetail from "./pages/SubmissionDetail";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import MoreResearch from "./pages/MoreResearch";
import Blog from "./pages/Blog";
import Fundraising from "./pages/Fundraising";
import DynaResearch from "./pages/DynaResearch";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/research" element={<Research />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/fundraising" element={<Fundraising />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/dyna-1/research" element={<MoreResearch />} />
              <Route path="/dyna-2/research" element={<DynaResearch />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/submission/:id"
                element={<SubmissionDetail />}
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
