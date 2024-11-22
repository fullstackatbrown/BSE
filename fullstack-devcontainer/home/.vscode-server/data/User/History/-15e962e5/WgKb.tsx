import { Navbar } from "@/components/hero/navbar";
import "./Home.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlobeAndStars from "@/components/hero/globe-wrapper";
import React from 'react';

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">  
      <div className="home-container">
        <Navbar />
        <GlobeAndStars/>
        <section className="at-a-glance">
          <h2>At a Glance</h2>
          <ul>
            <li>x members</li>
            <li>5 sub-teams</li>
            <li>x satellites launched</li>
          </ul>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default Home;
