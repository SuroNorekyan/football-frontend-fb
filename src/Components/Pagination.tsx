import React from "react";

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  currentPage,
  postsPerPage,
  totalPosts,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  let pageNumbers: number[] = [];

  // Logic to determine which page numbers to display
  if (totalPages <= 10) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage <= 5) {
    pageNumbers = [1, 2, 3, 4, 5, 10];
  } else if (currentPage > 5 && currentPage <= totalPages - 5) {
    pageNumbers = [
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
      10,
    ];
  } else {
    pageNumbers = [
      totalPages - 9,
      totalPages - 8,
      totalPages - 7,
      totalPages - 6,
      totalPages - 5,
      totalPages,
    ];
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === pageNumber
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-500 bg-white"
              } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
