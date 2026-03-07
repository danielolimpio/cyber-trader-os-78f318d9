import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const LegalNotices = lazy(() => import("./pages/LegalNotices"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const APIBinding = lazy(() => import("./pages/APIBinding"));
const AbrirConta = lazy(() => import("./pages/AbrirConta"));
const Depositar = lazy(() => import("./pages/Depositar"));
const ComprarGas = lazy(() => import("./pages/ComprarGas"));
const ChaveAPIokx = lazy(() => import("./pages/ChaveAPIokx"));
const ExecutarPasso = lazy(() => import("./pages/ExecutarPasso"));
const Contato = lazy(() => import("./pages/Contato"));
const CentralAjuda = lazy(() => import("./pages/CentralAjuda"));
const Documentacao = lazy(() => import("./pages/Documentacao"));
const Tutoriais = lazy(() => import("./pages/Tutoriais"));
const Historicos = lazy(() => import("./pages/Historicos"));
const Estrategias = lazy(() => import("./pages/Estrategias"));
const Sobre = lazy(() => import("./pages/Sobre"));
const SystemStatus = lazy(() => import("./pages/SystemStatus"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen" />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
