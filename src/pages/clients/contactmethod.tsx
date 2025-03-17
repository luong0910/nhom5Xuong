function ContactMethod() {
    // Dữ liệu động cho các mục, bao gồm cả subtitle
    const features = [
        { logo: 'src/assets/logo-1.png', tieuDe: 'High Quality', moTa: 'crafted from top materials' },
        { logo: 'src/assets/logo-2.png', tieuDe: 'Warranty Protection', moTa: 'Over 2 years' },
        { logo: 'src/assets/logo-3.png', tieuDe: 'Free Shipping', moTa: 'Order over 150 $' },
        { logo: 'src/assets/logo-4.png', tieuDe: '24 / 7 Support', moTa: 'Dedicated support' },
    ];

    return (
        <div className="py-12 mt-8 text-2xl" style={{ backgroundColor: '#FAF3EA' }}>
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 justify-items-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                            {/* Biểu tượng */}
                            <img
                                src={feature.logo}
                                alt={`${feature.tieuDe} Logo`}
                                className="w-8 h-8 md:w-10 md:h-10"
                            />
                            {/* Tiêu đề */}
                            <p className="font-bold text-base md:text-xl">{feature.tieuDe}</p>
                            {/* Mô tả phụ */}
                            <p className="text-sm text-gray-600">{feature.moTa}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactMethod