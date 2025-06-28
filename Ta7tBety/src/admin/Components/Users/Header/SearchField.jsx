import { useContext } from "react";
import { SearchIcon } from "../../Icons";
import { FiltersContext, UsersContext } from "../Contexts/usersContexts";
import "./Header.css";

export default function SearchField() {
  const filtersContext = useContext(FiltersContext);
  const usersContext = useContext(UsersContext);

  function handleSearchChange(e) {
    const searchValue = e.target.value.toLowerCase();
    filtersContext.filtersStateDispatch({
      type: "SET_SEARCH",
      payload: searchValue,
    });

    const filteredUsers = usersContext.usersState.users.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );

    usersContext.usersStateDispatch({
      type: "SET_FILTERED_USERS",
      payload: filteredUsers,
    });
  }

  return (
    <div className="search-field-container">
      <input
        type="text"
        placeholder="Search for..."
        className="search-input"
        value={filtersContext.filtersState.search}
        onChange={handleSearchChange}
      />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </div>
  );
}
