import fetch from "node-fetch";
import { VercelRequestBody, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequestBody,
  res: VercelResponse
) {
  const { title, page, id } = JSON.parse(req.body);
  //body에 담으려면 post를 해야한다.
  //요청할때 JSON.stringify로 보냈던 걸 다시 parse

  const url = id
    ? `https://omdbapi.com?apikey=${process.env.APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${process.env.APIKEY}&s=${title}&page=${page}`;
  const fetchRes = await fetch(url);
  //node.js에서는 라이브러리를 가져와야함

  const json = await fetchRes.json();
  res.status(200).json(json);
  //모든 요청 반환이 정상적이면 작동
}

// Severless Function
// npm run vercel
// http://localhost:3000/api/movie/
