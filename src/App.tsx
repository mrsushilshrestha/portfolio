import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Research from "./pages/Research";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import SocialSidebar from "@/components/SocialSidebar";
import WelcomeScreen from "@/components/WelcomeScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WelcomeScreen />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
