import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import client from "./client";
import { useNavigate } from "react-router-dom";

// * POST 요청 보내기 *
/**
 * @interface POSTWishRequest
 * 소원작성 POST API 요청 Request
 */
interface POSTWishRequest {
  from_name: string;
  to_name: string;
  content: string;
  is_open: boolean;
}
/**
 * @interface POSTWishResponse
 * 소원작성 POST API 요청 Response
 */
interface POSTWishResponse {
  id: number;
  from_name: string;
  to_name: string;
  content: string;
  emoji: string;
  password: string; // uuid
  is_myself: boolean;
}

const usePOSTWish = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (wish: POSTWishRequest): Promise<POSTWishResponse> => {
      const { data } = await client.post(`/wish`, wish);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["wish", data.id], data);
      if (data.password) {
        navigate(`/songpyeon?wishId=${data.id}&pw=${data.password}`, {
          state: { rightAfterPost: true, hasPassword: true },
        });
      } else {
        navigate(`/songpyeon?wishId=${data.id}`, {
          state: { rightAfterPost: true, hasPassword: false },
        });
      }
    },
  });
};

// * GET 요청 보내기 *
/**
 * @interface GETWishRequest
 * 단일 소원 GET API 요청 Request
 */
interface GETWishRequest {
  id: number;
  password?: string;
}
/**
 * @interface GETWishResponse
 * 단일 소원 GET API 요청 Response
 */
interface GETWishResponse {
  id: number;
  from_name: string;
  to_name?: string;
  content: string;
  emoji: string;
  is_myself: string;
}

const useGETWish = (params: GETWishRequest) => {
  const { id: wishId } = params;
  return useQuery<GETWishResponse>(
    ["wish", wishId],
    async (): Promise<GETWishResponse> => {
      const { data } = await client.get<GETWishResponse>(`/wish`, {
        params: { ...params },
      });
      return data;
    },
    {
      refetchOnWindowFocus: true,
      refetchIntervalInBackground: true,
      retry: 0,
      enabled: !wishId,
    }
  );
};

export { usePOSTWish, useGETWish };
