// components/Footer.js



const Footer = () => {
  return (
    <footer className="bg-cyan-500 text-black py-8">
      <div className="container mx-auto flex justify-between">
        {/* Footer Links */}
        <div className="footer-links">
          {/* <img src="/logo.png" alt="Logo" width="100" /> */}
          <div className="bg-cyan-500">
            <a href="../#" className="mr-4">
              About Us
            </a>
          </div>

          <br />
          <a href="#" className="mr-4">
            &copy; 2024 Dereje Senay All Rights Reserved!
          </a>
        </div>

        {/* Company Information */}
        <div className="footer-company-info">
          {" "}
          <ul>
            <li className="mb-1">Eamil: info@triaplc.com</li>
            <li className="mb-1">Phone: +251 955232323</li>
            <li className="mb-1">
              Address: Lingo tower,11th Floor, Bole Medahnialem, Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
