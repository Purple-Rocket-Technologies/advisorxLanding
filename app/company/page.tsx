"use client";
import NavBar from "../components/nav";
import Footer from "../components/footer";

export default function CompanyPage() {
  return (
    <div className="mt-32">
      <NavBar />
      {/* Hero Section */}
      <div className="mb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-6">Our Story</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          AdvisorX was founded in May of 2024 by multiple serial entrepreneurs
          with specialized experience in marketing technology, investment
          management and artificial intelligence. 2 of our 3 founders are
          Y-Combinator alumni featured on the YC top 100 AI startup companies
          list.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mt-4">
          Our mission is to enable financial advisors leverage AI to educate
          more American households with engaging educational content. We live in
          an age of content proliferation and brand differentiation is one of
          the core unique selling points that firms will have to adopt to stand
          out and attract their ideal clients.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mt-4">
          We believe AI presents a new opportunity for wealth management firms
          to achieve this consistently and compliantly.
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center mb-12 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
        <div className="grid gap-8 md:grid-cols-3 place-items-center">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border w-full flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">
                Founder {index + 1}
              </h3>
              <p className="text-gray-500 text-sm">Y Combinator Alumni</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
