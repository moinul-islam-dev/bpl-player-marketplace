import { Images } from "../../assets/assets"

const SubscribeUI = () => {
    return (
        /* মোবাইলে উইডথ ৯৫% এবং বড় স্ক্রিনে (lg) ৫৫% করা হয়েছে */
        <div className="relative w-[95%] lg:w-[55%] mx-auto mt-10 rounded-3xl border-2 border-white p-2 md:p-4 bg-white/10 backdrop-blur-xl">
            
            <div className="relative overflow-hidden bg-white rounded-2xl flex flex-col items-center justify-center py-10 md:py-16 px-4 md:px-6 shadow-xl text-center">
                
                {/* Background Shadow */}
                <img 
                    src={Images.bgShadow} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" 
                />

                <div className="relative z-10 space-y-4 md:space-y-6 max-w-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-slate-500 font-medium text-sm md:text-lg">
                        Get the latest updates and news right in your inbox!
                    </p>

                    {/* Input and Button Container */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            /* মোবাইলে w-full যাতে পুরো জায়গা নেয় */
                            className="w-full sm:w-80 md:w-96 px-4 md:px-6 py-3 md:py-4 bg-white border border-slate-200 rounded-xl text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFD771] transition-all shadow-sm text-sm md:text-base"
                        />

                        <button className="w-full sm:w-auto px-8 py-3 md:py-4 bg-gradient-to-r from-[#E066A6] via-[#FFD771] to-[#F1C40F] text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md text-sm md:text-base whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeUI;