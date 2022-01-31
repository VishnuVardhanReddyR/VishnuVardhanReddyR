import Image from "next/image";

function Header() {
    return (
    <div className="w-screen z-9 bg-black fixed">
        <div className="flex justify-between min-w-screen py-4 mx-5 items-center">
            <div className="relative lg:inline-grid h-8 w-20 p-4 lg:h-16">
                <Image
                    src="/VR-logo.png"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        
            <div className="flex items-center mt-5 justify-end space-x-6">
                <div className="">
                    <h3 className="navBtn">About</h3>
                </div>
                <div className="div">
                    <h3 className="navBtn">Resume</h3>
                </div>
                <div className="div">
                    <h3 className="navBtn">Portfolio</h3>
                </div>
                <div className="div">
                    <h3 className="navBtn">Blog</h3>
                </div>
                <div className="div">
                    <h3 className="navBtn">Contact</h3>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;
