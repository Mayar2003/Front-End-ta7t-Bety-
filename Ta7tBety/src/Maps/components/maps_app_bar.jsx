import colors from "../colors"; // أو المسار المناسب حسب مكان الملف

export default  function MapsAppBar({ onBack, isLoading }) {
  return (
    <div
      className="p-4 flex justify-between items-center shadow-md"
      style={{ backgroundColor: colors.primary, color: colors.white }}
    >
      <button onClick={onBack}>
        <i className="fas fa-arrow-left text-xl text-white"></i>
      </button>
      <h2 className="text-lg font-bold">Delivery Address</h2>
      <div className="w-6" />
    </div>
  );
}