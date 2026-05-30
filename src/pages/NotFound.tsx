import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Helmet>
        <title>Página Não Encontrada | Vespers Bot</title>
        <meta name="description" content="A página que você procura não foi encontrada. Volte para a página inicial da Vespers Bot." />
        <meta property="og:title" content="Página Não Encontrada | Vespers Bot" />
        <meta property="og:description" content="A página que você procura não foi encontrada. Volte para a página inicial da Vespers Bot." />
        <meta property="og:url" content="https://cyber-trader-os.lovable.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
