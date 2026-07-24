import { BioSection, SiteChrome } from "./site-content";

export default function Home() {
  return (
    <SiteChrome currentPath="/">
      <BioSection />
    </SiteChrome>
  );
}
