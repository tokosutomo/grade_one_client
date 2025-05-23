import { ChangeEventHandler, useEffect } from "react";

export default function AddressInput() {
  useEffect(() => {
    if (localStorage.getItem("address") === null) {
      localStorage.setItem("address", addressChoosen[0]);
    }
    localStorage.setItem("address", addressChoosen[0]);
  }, []);

  const addressChoosen = [
    "KFC Gajah Mada",
    "Weng Cafe Pancasila",
    "Fendi Cafe Kota baru",
    "Alfamart depan rs.yarsi",
    "Cafe bunderan gaia mall",
    "Request",
  ];

  const getAddress: ChangeEventHandler<HTMLSelectElement> = (e) => {
    localStorage.setItem("address", e.target.value);
  };

  return (
    <div className="p-5">
      <h3 className="font-bold mb-2">Alamat COD</h3>
      <select
        className="select"
        onChange={getAddress}
        defaultValue={addressChoosen[0]}
      >
        {addressChoosen.map((address, i) => {
          return (
            <option key={i} value={address}>
              {address}
            </option>
          );
        })}
      </select>
    </div>
  );
}
