import { Socials } from "../typings";

export const getSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json();
    const socials: Socials[] = data.socials;
    return socials;
}