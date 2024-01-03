import { Portfolios } from "../typings";

export const getPortfolio = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortfolio`);
    const data = await res.json();
    const portfolio: Portfolios[] = data.portfolio;
    console.log("fetching", portfolio);
    return portfolio;
}