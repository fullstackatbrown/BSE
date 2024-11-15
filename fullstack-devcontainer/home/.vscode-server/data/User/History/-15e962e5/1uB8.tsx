import { Navbar } from "@/components/hero/navbar";
import "./Home.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobeAndStars from "@/components/hero/globe-wrapper";
import React from 'react';

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">  
      <Navbar />
      <GlobeAndStars/>
    </ThemeProvider>
  );
}

export default Home;
