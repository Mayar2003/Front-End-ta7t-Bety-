import { useContext, useState } from "react";
import { SelectArrowIcon } from "./Icons";
import { FiltersContext, UsersContext } from "./Users/Contexts/usersContexts";

export default function SelectList() {
  const filtersContext = useContext(FiltersContext);
  const usersContext = useContext(UsersContext);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelect(option) {
    setSelectedOption(option);
    setOpen(false);
    filtersContext.filtersStateDispatch({
      type: "SET_OPTION",
      payload: option,
    });
    const filteredUsers = usersContext.usersState.users.filter(
      (user) => user.region === option
    );
    usersContext.usersStateDispatch({
      type: "SET_FILTERED_USERS",
      payload: filteredUsers,
    });
  }

  return (
    <div>
      <div style={styles.selectBox} onClick={() => setOpen(!open)}>
        <span style={styles.selectText}>select an option</span>
        <div style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <SelectArrowIcon />
        </div>
      </div>
      {open && (
        <ul style={styles.optionsList}>
          {Array.from(filtersContext.filtersState.regions).map((option) => (
            <li
              key={option}
              style={{
                ...styles.optionItem,
                backgroundColor:
                  selectedOption === option ? "#F0F5FF" : "white",
                color: selectedOption === option ? "#1E86FF" : "#15243F",
              }}
              onClick={() => handleSelect(option)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F0F5FF";
                e.target.style.color = "#1E86FF";
              }}
              onMouseLeave={(e) => {
                if (selectedOption !== option) {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#15243F";
                }
              }}
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
  selectBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "250px",
    height: "35px",
    border: "0.1px solid #CFD9E9",
    borderRadius: "7px",
    padding: "6px 7px",
    cursor: "pointer",
  },
  selectText: {
    fontSize: "16px",
    fontFamily: "Inter",
    color: "#15243F",
    fontWeight: "400",
  },
  optionsList: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "absolute",
    width: "250px",
    backgroundColor: "white",
    borderRadius: "7px",
    boxShadow: "0px 2px 4px #01051133",
  },
  optionItem: {
    padding: "5px 0",
    cursor: "pointer",
  },
};
