import Image from "next/image";

function Header() {
    return (
        <header class="py-6 sticky z-9">
            <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <span class="ml-3 text-lg text-white font-bold">
                    Vishnu 
                    <span className="bg-white ml-2 font-bold text-black">Rapuru</span>
                </span>
                <nav class="hidden cursor-pointer text-white md:flex space-x-12 items-center">
                    <a class="mr-5 hover:border-b border-white">Home</a>
                    <a class="mr-5 hover:border-b border-white">About</a>
                    <a class="mr-5 hover:border-b border-white">Resume</a>
                    <a class="mr-5 hover:border-b border-white">Portfolio</a>
                    <a class="mr-5 hover:border-b border-white">Contact</a>
                </nav>
                <nav class="md:hidden">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/>
                    </svg>
                </nav>
            </div>
      </header>
    );
}

export default Header;
