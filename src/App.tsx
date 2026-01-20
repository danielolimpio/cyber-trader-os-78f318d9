import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotices from "./pages/LegalNotices";
import CookiePolicy from "./pages/CookiePolicy";
import APIBinding from "./pages/APIBinding";
import AbrirConta from "./pages/AbrirConta";
import Depositar from "./pages/Depositar";
import ComprarGas from "./pages/ComprarGas";
import ChaveAPIokx from "./pages/ChaveAPIokx";
import ExecutarPasso from "./pages/ExecutarPasso";
import Contato from "./pages/Contato";
import CentralAjuda from "./pages/CentralAjuda";
import Documentacao from "./pages/Documentacao";
import Tutoriais from "./pages/Tutoriais";
import Historicos from "./pages/Historicos";
import Estrategias from "./pages/Estrategias";
import Sobre from "./pages/Sobre";
import SystemStatus from "./pages/SystemStatus";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/termos" element={<TermsOfService />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/avisos" element={<LegalNotices />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/vinculacao-api" element={<APIBinding />} />
          <Route path="/abrir-conta" element={<AbrirConta />} />
          <Route path="/depositar" element={<Depositar />} />
          <Route path="/comprar-gas" element={<ComprarGas />} />
          <Route path="/chave-api-okx" element={<ChaveAPIokx />} />
          <Route path="/executar-passo" element={<ExecutarPasso />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/central-ajuda" element={<CentralAjuda />} />
          <Route path="/documentacao" element={<Documentacao />} />
          <Route path="/tutoriais" element={<Tutoriais />} />
          <Route path="/historicos" element={<Historicos />} />
          <Route path="/estrategias" element={<Estrategias />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/status" element={<SystemStatus />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
