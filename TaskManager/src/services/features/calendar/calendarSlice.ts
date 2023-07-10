import { createSlice } from "@reduxjs/toolkit";

type CalendarProps = {
  date: string;
  ref: {
    today: () => void;
    nextYear: () => void;
    prevYear: () => void;
    incrementDate: (options: { month: number }) => void;
  };
};

const initialState: CalendarProps = {
  date: "",
  ref: {
    today: function (): void {
      throw new Error("Function not implemented.");
    },
    nextYear: function (): void {
      throw new Error("Function not implemented.");
    },
    prevYear: function (): void {
      throw new Error("Function not implemented.");
    },
    incrementDate: function (): void {
      throw new Error("Function not implemented.");
    },
  },
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setRef: (state, action) => {
      state.ref = action.payload;
    },
    resetCalendar: () => {
      return initialState;
    },
  },
});
export const { setDate, setRef } = calendarSlice.actions;
export default calendarSlice.reducer;
