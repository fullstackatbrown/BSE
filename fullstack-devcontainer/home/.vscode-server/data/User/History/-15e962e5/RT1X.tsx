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
      <section className="at-a-glance">
        <h2>At a Glance</h2>
        <p>At a glance section</p>
      </section>
    </ThemeProvider>
  );
}

export default Home;
