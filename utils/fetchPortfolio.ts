import { Portfolios } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "portfolio"]`;

export const getPortfolio = async () => {
    const res = await sanityClient.fetch(query);
    const portfolio: Portfolios[] = res;
    return portfolio;
}