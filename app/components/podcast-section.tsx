import React from "react";
import Image from "next/image";

const PodcastSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-32 mt-12">
      <div className="absolute rounded-full inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/10" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Image
                src="/logos/apple-podcast.svg"
                alt="Apple Podcast"
                width={200}
                height={40}
              />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Image
                src="/logos/spotify.svg"
                alt="Apple Podcast"
                className="bg-black p-1 rounded-md"
                width={200}
                height={40}
              />
            </a>
          </div>
          
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Episode</h2>
            <p className="text-muted-foreground mb-6">Subscribe to our newsletter and get notified when new episodes are released.</p>
            
            <form className="flex gap-3 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
