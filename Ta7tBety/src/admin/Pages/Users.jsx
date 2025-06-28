import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import Footer from "../Components/Users/Admin.Users.Footer";
import AdminUsersTable from "../Components/Users/UsersTable/Admin.Users.UsersTable";
import UsersTableHeader from "../Components/Users/UsersTable/Admin.Users.UsersTableHeader";
import AdminUsersHeader from "../Components/Users/Header/Admin.Users.Header";
import FieldsRow from "../Components/Users/UsersTable/Admin.Users.FieldsRow";
import UsersList from "../Components/Users/UsersTable/Admin.Users.UsersList";
import AdminUsersStatsList from "../Components/Users/Stats/Admin.Users.StatsList";
import {
  FiltersContext,
  UsersContext,
} from "../Components/Users/Contexts/usersContexts";

const usersInit = {
  users: [],
  filteredUsers: [],
  totalUsers: 0,
};

const filtersInit = {
  page: 1,
  pageSize: 10,
  limitFields: "name,email,region,phone",
  sort: "name,email",
  search: "",
  regions: new Set(),
  option: "",
};

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_FILTERED_USERS":
      return { ...state, filteredUsers: action.payload };
    case "SET_TOTAL_USERS":
      return { ...state, totalUsers: action.payload };
    case "SET_USERS_DATA":
      return {
        ...state,
        users: action.payload.users,
        filteredUsers: action.payload.filteredUsers,
        totalUsers: action.payload.totalUsers,
      };
    default:
      return state;
  }
}

function filtersReducer(state, action) {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_PAGE_SIZE":
      return { ...state, pageSize: action.payload };
    case "SET_LIMIT_FIELDS":
      return { ...state, limitFields: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_REGIONS":
      return { ...state, regions: action.payload };
    case "SET_OPTION":
      return { ...state, option: action.payload };
    default:
      return state;
  }
}

export default function Users() {
  const [usersState, usersStateDispatch] = useReducer(userReducer, usersInit);
  const [filtersState, filtersStateDispatch] = useReducer(
    filtersReducer,
    filtersInit
  );

  async function fetchUsers() {
    const response = await axios.get(
      `https://ta7t-bety.vercel.app/api/v1/users?page=${filtersState.page}&limit=${filtersState.pageSize}&sort=${filtersState.sort}&fields=${filtersState.limitFields}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );

    usersStateDispatch({
      type: "SET_USERS_DATA",
      payload: {
        users: response.data.data.users,
        filteredUsers: response.data.data.users,
        totalUsers: response.data.data.totalUsers,
      },
    });

    const regions = new Set();
    response.data.data.users.forEach((user) => regions.add(user.region));
    filtersStateDispatch({ type: "SET_REGIONS", payload: regions });
  }

  useEffect(() => {
    fetchUsers();
  }, [
    filtersState.page,
    filtersState.pageSize,
    filtersState.sort,
    filtersState.limitFields,
  ]);

  return (
    <UsersContext.Provider value={{ usersState, usersStateDispatch }}>
      <FiltersContext.Provider value={{ filtersState, filtersStateDispatch }}>
        <AdminUsersHeader />
        <AdminUsersStatsList />
        <AdminUsersTable>
          <UsersTableHeader
            page={filtersState.page}
            pageSize={filtersState.pageSize}
            totalUsers={usersState.totalUsers}
          />
          <FieldsRow />
          <UsersList users={usersState.filteredUsers} />
        </AdminUsersTable>
        <Footer />
      </FiltersContext.Provider>
    </UsersContext.Provider>
  );
}
