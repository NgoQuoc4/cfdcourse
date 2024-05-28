import { TIME_DISPLAYS } from "@/constants/format-date";
import moment from "moment";

// ---- Format number to display currency ----//
export const formatCurrency = (data, type = "vi-VN") => {
    if (!data) return 0;
    return data.toLocaleString(type);
};

// ---- Format date to display with format ----//
export const formatDate = (date, format = TIME_DISPLAYS.DATE) => {
    if (!!!date) return "";
    return moment(date).format(format);
};