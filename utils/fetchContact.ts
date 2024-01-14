import { Contacts } from "../typings";

export const getContact = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`);
    const data = await res.json();
    const contact: Contacts[] = data.contact;
    return contact;
}