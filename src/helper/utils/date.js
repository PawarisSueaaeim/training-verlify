
import { format, subDays, subMonths, subYears, startOfMonth, startOfYear, parseISO } from 'date-fns';

export const dateSelector = period => {

    const today = new Date();

    switch (period) {
        case 'Today': {
            const dateValues = {startDate: format(today, 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        case '7D': {
            const dateValues = {startDate: format(subDays(today, 7), 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        case '15D': {
            const dateValues = {startDate: format(subDays(today, 15), 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        case '1M': {
            const dateValues = {startDate: format(subMonths(today, 1), 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        case '1Y': {
            const dateValues = {startDate: format(subYears(today, 1), 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        case 'MTD': {
            const dateValues = {startDate: format(startOfMonth(today), 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        case 'YTD': {
            const dateValues = {startDate: format(startOfYear(today), 'yyyy-MM-dd'), endDate: format(today, 'yyyy-MM-dd')}
            return dateValues;
        }
        default: break;
    }
};

export const dayMonthYearFormat = dateString => {
    return format(parseISO(dateString), 'dd MMM yyyy');
};

export const dayMonthYearSlashFormat = dateString => {
    return format(parseISO(dateString), 'dd/MM/yyyy');
};

export const dayMonthYearDashFormat = dateString => {
    return format(parseISO(dateString), 'dd-MMM-yyyy');
};

export const monthIndex = monthText => {
    switch(monthText) {
        case 'January': return 0;
        case 'February': return 1;
        case 'March': return 2;
        case 'April': return 3;
        case 'May': return 4;
        case 'June': return 5;
        case 'July': return 6;
        case 'August': return 7;
        case 'September': return 8;
        case 'October': return 9;
        case 'November': return 10;
        case 'December': return 11;
        default: break;
    }
};