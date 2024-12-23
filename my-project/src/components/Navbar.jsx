import logo from "../assets/shivamPandeyLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/shivam-pandey-6b30871bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/shivam-1701"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://drive.google.com/file/d/14czj8jAPgYF0IG2m1w_MeQx4NwlGnn7d/view?usp=drive_link"
                    download="Shivam_Pandey_Resume.pdf"
                    className="px-1 py-1 text-white text-1xl bg-blue-500 rounded-3xl hover:bg-white hover:text-blue-600 justify-center text-center"
                >
                    Download Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
