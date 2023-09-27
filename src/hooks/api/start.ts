// * GET 요청 보내기 *

import { useQuery } from "@tanstack/react-query";
import client from "./client";

/**
 * @interface GETWishCountResponse
 * 단일 소원 GET API 요청 Response
 */
interface GETWishCountResponse {
  count: number;
}

export const useGETWishCount = () => {
  return useQuery<number>(
    ["wishCount"],
    async (): Promise<number> => {
      const { data } = await client.get<GETWishCountResponse>(`/wish/count`);
      return data.count;
    },
    {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      retry: 0,
    }
  );
};
