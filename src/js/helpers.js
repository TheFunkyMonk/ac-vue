import MonthData from "../data/months.json";

const monthStringFromNum = (num) => MonthData[num].full;

export { monthStringFromNum }
