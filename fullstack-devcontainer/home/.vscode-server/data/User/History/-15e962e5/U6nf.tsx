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
      <section>
        <h2>At a Glance</h2>
        <p>Welcome to the at a glance section. Here you will find a quick overview of our features.</p>
        {/* Add more content as needed */}
      </section>
    </ThemeProvider>
  );
}

export default Home;
