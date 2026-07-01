import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import ParticleBackground from "../Particles/ParticleBackground";
import ScrollProgress from "../ScrollProgress/ScrollProgress";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    // <>
    //   <Navbar />

    //   <main>{children}</main>
    // </>
    <>
        <ScrollProgress />
        <Background />
        <ParticleBackground />
        <Navbar />
        <main>
            {children}
        </main>
    </>
    
  );
};

export default Layout;
