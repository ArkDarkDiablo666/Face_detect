import React, { useEffect, useState } from 'react';

const KhoaTable = () => {
  const [khoas, setKhoas] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/khoa/")
      .then((response) => response.json())
      .then((data) => setKhoas(data))
      .catch((error) => console.error("Lỗi lấy dữ liệu:", error));
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Mã Khoa</th>
          <th>Tên Khoa</th>
        </tr>
      </thead>
      <tbody>
        {khoas.length > 0 ? (
          khoas.map((khoa) => (
            <tr key={khoa.id}>
              <td>{khoa.ma_khoa}</td>
              <td>{khoa.ten_khoa}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">Không có dữ liệu</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default KhoaTable;
