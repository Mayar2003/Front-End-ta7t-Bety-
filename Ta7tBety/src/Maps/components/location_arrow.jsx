import colors from "../colors"; // أو المسار المناسب حسب مكان الملف

export  function LocationArrow({ onClick }) {
  return (
    <div className="flex justify-end p-4">
      <button
        className="w-12 h-12 rounded-full shadow flex items-center justify-center"
        style={{ backgroundColor: colors.white }}
        onClick={onClick}
      >
        <i className="fas fa-location-arrow text-xl" style={{ color: colors.orange }}></i>
      </button>
    </div>
  );
}
