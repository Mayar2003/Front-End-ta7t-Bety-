import { useContext, useEffect, useState } from "react";
import { PageArrowIcon, SelectArrowIcon } from "../Icons";
import { FiltersContext, UsersContext } from "./Contexts/usersContexts";

export default function Footer() {
  const usersContext = useContext(UsersContext);
  const filtersContext = useContext(FiltersContext);

  const { page, pageSize } = filtersContext.filtersState;
  const { totalUsers } = usersContext.usersState;

  return (
    <div style={styles.footerContainer}>
      {`${page * pageSize - pageSize + 1} - ${Math.min(
        page * pageSize,
        totalUsers
      )} of ${totalUsers}`}
      <div style={styles.controlsContainer}>
        <div style={styles.rowsPerPageContainer}>
          <span>Rows per page:</span>
          <SelectNumberOfPages />
        </div>
        <Arrows />
      </div>
    </div>
  );
}

function Arrows() {
  const usersContext = useContext(UsersContext);
  const filtersContext = useContext(FiltersContext);
  const { totalUsers } = usersContext.usersState;
  const { page, pageSize } = filtersContext.filtersState;
  const totalPages = Math.ceil(totalUsers / pageSize);
  const [isPreviousAllowed, setIsPreviousAllowed] = useState(false);
  const [isNextAllowed, setIsNextAllowed] = useState(true);

  useEffect(() => {
    setIsPreviousAllowed(page > 1);
    setIsNextAllowed(page < totalPages);
  }, [page, totalPages]);

  function handleNextPage() {
    if (page < totalPages) {
      filtersContext.filtersStateDispatch({
        type: "SET_PAGE",
        payload: page + 1,
      });
    }
  }

  function handlePreviousPage() {
    if (page > 1) {
      filtersContext.filtersStateDispatch({
        type: "SET_PAGE",
        payload: page - 1,
      });
    }
  }

  return (
    <div style={styles.arrowsContainer}>
      <PageArrowIcon
        onClick={handlePreviousPage}
        direction="left"
        clickable={isPreviousAllowed}
      />
      <PageArrowIcon
        onClick={handleNextPage}
        direction="right"
        clickable={isNextAllowed}
      />
    </div>
  );
}

function SelectNumberOfPages({ options = [10, 20, 30, 40, 50] }) {
  const filtersContext = useContext(FiltersContext);
  const { pageSize } = filtersContext.filtersState;

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(pageSize);

  function handleSelect(option) {
    setSelectedOption(option);
    setOpen(false);
    filtersContext.filtersStateDispatch({
      type: "SET_PAGE_SIZE",
      payload: option,
    });
  }

  return (
    <div style={styles.selectContainer}>
      <div
        style={styles.selectBox}
        onClick={() => setOpen(!open)}
        role="button"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span style={styles.selectedOption}>{selectedOption}</span>
        <div
          style={{
            ...styles.selectArrow,
            transform: open ? "" : "rotate(180deg)",
          }}
        >
          <SelectArrowIcon />
        </div>
      </div>

      {open && (
        <ul style={styles.dropdownList} role="listbox">
          {options.map((option) => (
            <li
              key={option}
              style={{
                ...styles.dropdownItem,
                backgroundColor:
                  selectedOption === option ? "#F0F5FF" : "white",
                color: selectedOption === option ? "#1E86FF" : "#15243F",
              }}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selectedOption === option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "1rem",
  },
  controlsContainer: {
    display: "flex",
    gap: "10px",
  },
  rowsPerPageContainer: {
    display: "flex",
    gap: "10px",
  },
  arrowsContainer: {
    display: "flex",
    gap: "10px",
  },
  selectContainer: {
    position: "relative",
  },
  selectBox: {
    display: "flex",
    alignItems: "center",
    width: "60px",
    height: "26px",
    border: "1px solid #CFD9E9",
    borderRadius: "7px",
    padding: "6px 8px",
    cursor: "pointer",
    backgroundColor: "#CFD9E9",
  },
  selectedOption: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#15243F",
  },
  selectArrow: {
    marginLeft: "auto",
    padding: "0",
  },
  dropdownList: {
    position: "absolute",
    top: "100%",
    transform: "translateY(-130%)",
    left: 0,
    width: "60px",
    listStyle: "none",
    padding: 0,
    margin: "4px 0 0 0",
    backgroundColor: "white",
    borderRadius: "7px",
    border: "1px solid #CFD9E9",
    boxShadow: "0px 2px 4px rgba(1, 5, 17, 0.2)",
    zIndex: 1000,
  },
  dropdownItem: {
    padding: "5px 8px",
    cursor: "pointer",
    fontSize: "10px",
    fontFamily: "Inter",
    lineHeight: "14px",
  },
};
