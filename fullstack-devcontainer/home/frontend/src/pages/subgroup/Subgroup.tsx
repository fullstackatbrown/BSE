import { Navbar } from "@/components/hero/navbar";
// import ScrollingMenu from "@/components/ui/scrolling-menu";
import {SubgroupScrollMenu} from "@/pages/subgroup/subgroup-scroll-menu";
import "./Subgroup.css";
import { ThemeProvider } from "@/components/theme-provider";

function Subgroup() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">  
      <Navbar />
      <div className="side-by-side">
        <div className="left-box">
          <div className="left-text-box">
            <h1 className="title-text">
              PVDX <br />Subgroups
            </h1>
            <p className="body-text">
              BSE’s PVDX Project features five different subgroups responsible for handling various blah blah blah<br /><br />
              Subgroups are managed by group-elected leaders blah blah administration<br /><br />
              Learn more about the PVDX subgroups to the right!
            </p>
          </div>
        </div>
        <div className="right-box">
        <SubgroupScrollMenu />
          {/* <ScrollingMenu /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Subgroup;
