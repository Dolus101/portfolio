import Navbar from '../Components/navbar'
import Web from './web'
import Mobile from './mobile'
import Writeups from './writeups'
import profileImg from '../assets/profile.png'

function Home() {
  const myEmail = "nicoledizon115@gmail.com";
  const subject = encodeURIComponent("Project Inquiry / Collaboration");
  const body = encodeURIComponent("Hi Nicole,\n\nI saw your portfolio and wanted to reach out regarding...");

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;

  return (
    <>
      <Navbar />

      {/* Hero Section - Removed vertical padding from parent to ground the image */}
      <div id="about" className="w-full bg-teal-900 px-6 text-white flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Info Section - Added top padding here to keep layout clean */}
          <div className="flex flex-col space-y-4 text-center md:text-left pt-12 pb-8 md:pt-16 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Nicole Franz Dizon
            </h1>
            <h2 className="text-lg md:text-xl font-semibold tracking-wide">
              <u>Web Developer | Cybersecurity Enthusiast</u>
            </h2>
            <p className="text-teal-100/80 text-base md:text-lg leading-relaxed max-w-xl">
              Full-Stack Web Developer passionate about building secure, responsive, and scalable web applications. I enjoy solving complex problems 
              and writing clean, maintainable code using PHP, Laravel, MySQL, and JavaScript.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded transition-colors duration-200"
              >
                Get in touch
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded transition-colors duration-200"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Profile Image Section - Forced flush to the bottom using self-end */}
          <div className="flex justify-center md:justify-end order-first md:order-last self-end pt-8 md:pt-0">
            <img
              src={profileImg}
              alt="Profile"
              className="max-w-[280px] md:max-w-[340px] h-auto object-contain block vertical-align-bottom"
            />
          </div>

        </div>
      </div>

      {/* Web Project Section */}
      <Web />

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-t border-teal-800" />
      </div>

      {/* Mobile Project Section */}
      <Mobile />

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-t border-teal-800" />
      </div>

      {/* Writeups Section */}
      <Writeups />
    </>
  );
}

export default Home;