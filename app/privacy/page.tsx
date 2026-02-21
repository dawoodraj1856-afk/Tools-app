import Footer from "../Home/Footer";
import Header from "../Home/Header";

export const metadata = {
  title: "Privacy Policy – Tools Platform",
  description:
    "Privacy policy for our text tools and name decoration platform.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gray-200">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-12 ">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">
            This Privacy Policy explains how our Tools Platform collects, uses
            and protects your information when you use our text tools, name
            decoration tools and related services.
          </p>

          {/* Information we collect */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not require users to create an account or provide personal
              information to use our tools. Any text, names or content you enter
              into our tools is used only to generate results for you.
            </p>
          </section>

          {/* How we use your data */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>To provide text processing and name decoration results.</li>
              <li>To improve the performance and quality of our tools.</li>
              <li>
                To monitor general usage for technical and security purposes.
              </li>
            </ul>
          </section>

          {/* Text data */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Text and Input Data</h2>
            <p className="text-gray-700 leading-relaxed">
              The text, names or content you enter into our tools are processed
              automatically in order to show you the results. We do not
              permanently store your input data unless required temporarily for
              technical operation of the service.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Cookies and Analytics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may use basic cookies or similar technologies to ensure the
              website works properly and to understand how visitors use our
              platform. These cookies do not contain personal information.
            </p>
          </section>

          {/* Third parties */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party services for analytics, hosting, or
              performance monitoring. These services may collect anonymous
              technical data such as browser type, device information and
              general usage statistics.
            </p>
          </section>

          {/* Data security */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable technical measures to protect our website and
              systems. However, no method of transmission over the internet is
              completely secure.
            </p>
          </section>

          {/* Children */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Children’s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our tools are intended for general audiences. We do not knowingly
              collect personal information from children.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our
              services, please contact us through the website.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
