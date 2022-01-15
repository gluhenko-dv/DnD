import axios from 'axios';
import { IBoardData } from 'interfaces/interfaces';

const strapiUrl = process.env.STRAPI;

export const getDndBoardData = () => axios.get(`${strapiUrl}/boards`);
export const putBoardDatra = (data: any) => axios.put(`${strapiUrl}/boards/1`, { data });
