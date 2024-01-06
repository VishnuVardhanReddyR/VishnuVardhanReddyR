import { CourseWorks } from "../typings";

export const getCoursework = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCoursework`);
    const data = await res.json();
    const coursework: CourseWorks[] = data.coursework;
    console.log("fetching", coursework);
    return coursework;
}