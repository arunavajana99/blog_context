import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPage } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>
          )}
          {page < totalPage && (
            <button
              className="border-2 border-gray-300 py-1 px-4 rounded-md"
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          )}

          <p className="text-sm font-semibold ml-auto">
            Page {page} of {totalPage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
