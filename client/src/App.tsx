import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Portfolios from "@/pages/Portfolios";
import PortfolioDetail from "@/pages/PortfolioDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolios" component={Portfolios} />
      <Route path="/portfolios/:id" component={PortfolioDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
