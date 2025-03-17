import React, { useState } from "react";

function CheckoutPage() {
  const provinces: string[] = ["Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ"];
  const districts: Record<string, string[]> = {
    "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
    "TP Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
  };

  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setSelectedDistricts(districts[province] ?? []);
  };

  return (
    <section className="w-full mx-auto py-4">
      {/* <img src="/in-banner-tra-sua-11.jpg" alt="Banner" className="w-full h-[300px] object-cover mb-5" /> */}
      <h2 className="text-4xl font-semibold text-center my-6">Thanh toán</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Thông tin thanh toán */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Thông tin thanh toán</h3>
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Họ và Tên" className="col-span-2 border p-2 rounded" />
            <input type="text" placeholder="Số điện thoại" className="col-span-2 border p-2 rounded" />
            <select className="col-span-2 border p-2 rounded" onChange={handleProvinceChange}>
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
            <select className="col-span-2 border p-2 rounded" disabled={!selectedDistricts.length}>
              <option value="">Chọn quận/huyện</option>
              {selectedDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Địa chỉ cụ thể" className="col-span-2 border p-2 rounded" />
            <textarea placeholder="Ghi chú đơn hàng" className="col-span-2 border p-2 rounded"></textarea>
          </form>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Tóm tắt đơn hàng</h3>
          <div className="flex justify-between border-b pb-2">
            <span>Sofa Asgaard x 1</span>
            <span className="font-semibold">25.000.000đ</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Tạm tính</span>
            <span className="font-semibold">25.000.000đ</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-xl font-semibold">Tổng</span>
            <span className="text-xl font-semibold text-yellow-700">25.000.000đ</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Chuyển khoản ngân hàng trực tiếp: Vui lòng sử dụng mã đơn hàng của bạn làm tham chiếu thanh toán.
          </p>
          <button className="w-full text-xl py-2 border-2 rounded-md border-black mt-4">Đặt hàng</button>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage