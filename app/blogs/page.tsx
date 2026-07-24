import { BlogsSection, SiteChrome } from "../site-content";

export default function BlogsPage() {
  return (
    <SiteChrome currentPath="/blogs">
      <BlogsSection />
    </SiteChrome>
  );
}
