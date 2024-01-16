import { Resumes } from "../typings";

export const getResume = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getResume`);
    const data = await res.json();
    const resume: Resumes[] = data.resume;
    return resume;
}