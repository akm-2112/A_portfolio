

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full py-8 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 mt-9 flex flex-col items-center justify-end space-y-4">


                {/* Name and Copyright */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} <span className="text-indigo-500 font-medium">Aung Kyaw Moe</span>.
                        All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}