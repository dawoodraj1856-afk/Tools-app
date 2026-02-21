import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export const metadata = {
  title: "Terms & Conditions – Tools Platform",
  description:
    "Terms and conditions for using our text tools and name decoration platform.",
};
const page = () => {
  return (
    <div className="bg-gray-200">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="text-gray-600 mb-8">
          These Terms and Conditions govern your use of our Tools Platform and
          all related text tools, name decoration tools and services. By
          accessing or using this website, you agree to these terms.
        </p>

        {/* Use of the website */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Use of Our Website</h2>
          <p className="text-gray-700 leading-relaxed">
            You may use our tools only for lawful and personal or informational
            purposes. You agree not to misuse the website, attempt to disrupt
            its operation, or use the tools in a way that violates any
            applicable laws.
          </p>
        </section>

        {/* No warranties */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">No Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            All tools and services are provided on an "as is" and "as available"
            basis. We do not guarantee that the tools will always be accurate,
            uninterrupted, or error-free.
          </p>
        </section>

        {/* User content */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">User Content</h2>
          <p className="text-gray-700 leading-relaxed">
            Any text, names, or content that you enter into our tools remain
            your responsibility. You confirm that you have the right to use and
            submit such content.
          </p>
        </section>

        {/* Limitation of liability */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for any direct or indirect damages arising
            from your use of the website or tools, including loss of data, loss
            of profits, or business interruption.
          </p>
        </section>

        {/* Intellectual property */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All website content, design, layout and software are the property of
            the Tools Platform or its licensors and are protected by applicable
            intellectual property laws.
          </p>
        </section>

        {/* Third-party links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of those
            websites.
          </p>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to suspend or terminate access to the website
            at any time if these terms are violated.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms and Conditions at any time. Any changes
            will be posted on this page.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms and Conditions, please
            contact us through the website.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
