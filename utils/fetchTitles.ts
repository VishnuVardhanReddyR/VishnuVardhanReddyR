import { Titles } from "../typings";

export const getTitles = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTitles`);
    const data = await res.json();
    const titles: Titles[] = data.titles;
    console.log("fetching", titles);
    return titles;
}