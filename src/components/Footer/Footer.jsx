import { Images } from "../../assets/assets";  

const Footer = () => {
    return (
        <footer className="bg-[#06091A] text-white pt-40 pb-8 relative">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8">
                
                {/* Center Logo */}
                <div className="flex justify-center mt-16 mb-16">
                    <img src={Images.logoFooter} alt="Cricket Logo" className="h-32" />
                </div>

                {/* Grid Layout: About, Quick Links, Subscribe */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    
                    {/* About Us */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">About Us</h3>
                        <p className="text-gray-400 max-w-xs leading-relaxed">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 md:ml-20">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="text-gray-400 space-y-3 list-disc list-inside">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">Services</a></li>
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Subscribe</h3>
                        <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                        
                        {/* Input Group */}
                        <div className="flex w-full mt-4 border-2 border-amber-200 rounded-2xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-5 py-3 rounded-l-xl text-slate-800 focus:outline-none focus:text-amber-200"
                            />
                            <button className="px-6 py-3 bg-linear-to-r from-[#E066A6] via-[#FFD771] to-[#F1C40F] text-black font-bold rounded-r-xl whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 pt-8 mt-16 text-center text-gray-500 text-sm">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;