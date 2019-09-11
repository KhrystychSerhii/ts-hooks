import { MONTHS } from "./constants";

export class ConvertClass {
    public convertDate(date: string): string {
        const d: Date = new Date(date);
        if (isNaN(d.getTime())) return 'Invalid Date';

        const month = MONTHS[d.getMonth()];
        const year = d.getFullYear();
        const day = d.getDate();
        return `${month} ${day}th ${year}`;
    }
    public convertUrl(url: string): string {
        if (!url) return '';
        if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) return url;

        return  `http://${url}`;
    }
}