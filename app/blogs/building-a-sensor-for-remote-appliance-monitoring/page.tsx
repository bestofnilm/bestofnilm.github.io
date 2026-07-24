import Link from "next/link";
import { SensorBlogPost, SiteChrome } from "../../site-content";

export default function SensorBlogPostPage() {
  return (
    <SiteChrome currentPath="/blogs">
      <section className="section-panel">
        <h2>
          <Link href="/blogs/building-a-sensor-for-remote-appliance-monitoring" className="title-link">
            Building a sensor for remote appliance monitoring
          </Link>
        </h2>
        <p className="back-link">
          <Link href="/blogs">Back to all blog posts</Link>
        </p>
        <SensorBlogPost />
      </section>
    </SiteChrome>
  );
}
