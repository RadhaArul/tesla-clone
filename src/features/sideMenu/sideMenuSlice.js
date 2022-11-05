import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideMenus: [
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Test Drive",
    "Insurance",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations",
  ],
};

const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectsideMenus = (state) => state.sideMenu.sideMenus;

export default sideMenuSlice.reducer;
