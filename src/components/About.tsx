import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At BidTales, we are passionate about creating exceptional software
            solutions that help businesses thrive in the digital age. Our team
            of experienced developers and designers work together to deliver
            high-quality, custom solutions that meet our clients' unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower businesses with innovative software solutions that
              drive growth and efficiency. We strive to deliver exceptional
              results through our expertise, dedication, and commitment to
              excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the go-to software development partner for businesses
              worldwide, known for our exceptional quality, reliability, and
              customer satisfaction.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Customer Focus</li>
              <li>Innovation</li>
              <li>Quality</li>
              <li>Teamwork</li>
              <li>Integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
