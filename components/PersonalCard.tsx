export default function PersonalCard() {
    return (
        <div className="flex items-center space-x-4">
            <div className="relative">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold text-gray-900">Dmytro Mai</h1>
                <p className="text-sm text-gray-600">Software Developer</p>
                <div className="mt-1 space-y-1">
                    <p className="text-xs text-gray-500">dmytro.mai20@gmail.com</p>
                    <p className="text-xs text-gray-500">+44 7522 785292</p>
                </div>
            </div>
        </div>
    )
}
