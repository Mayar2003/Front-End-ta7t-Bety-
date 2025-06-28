import {LocationArrow} from "./location_arrow";
import colors from "../colors"; // أو المسار المناسب حسب مكان الملف

export default  function LowerWidget({ isLoading, onConfirm, onRecenter }) {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <LocationArrow onClick={onRecenter} />
      <div className="p-4" style={{ backgroundColor: colors.white }}>
        <button
          className={`w-full h-12 rounded font-bold text-white ${
            isLoading ? "bg-gray-400" : ""
          }`}
          style={{
            backgroundColor: isLoading ? colors.gray : colors.orange,
          }}
          onClick={onConfirm}
          disabled={isLoading}
        >
          {isLoading ? "Detecting location..." : "Confirm pin location"}
        </button>
      </div>
    </div>
  );
}