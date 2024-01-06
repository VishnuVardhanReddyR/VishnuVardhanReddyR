import { Introduction } from "../typings";

export const getIntro = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getIntro`);
    const data = await res.json();
    const intro: Introduction[] = data.intro;
    console.log("fetching", intro);
    return intro;
}