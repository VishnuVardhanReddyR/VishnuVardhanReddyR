import { AboutAuthor } from "../typings";

export const getAbout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
    const data = await res.json();
    const about: AboutAuthor[] = data.about;
    console.log("fetching", about);
    return about;
}