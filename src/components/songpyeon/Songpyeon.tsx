import { useGETWish } from "hooks/api/story";
import { useSearchParams } from "react-router-dom";

const Songpyeon = () => {
  const [searchParams] = useSearchParams();
  const { data } = useGETWish({
    id: parseInt(searchParams.get("wishId") as string),
  });

  return (
    <div>
      {data && (
        <>
          <div>{data.id}</div>
          <div>{data.content}</div>
          <div>{data.emoji}</div>
          <div>{data.from_name}</div>
          <div>{data.to_name}</div>
          <div>{data.is_myself}</div>
        </>
      )}
    </div>
  );
};

export default Songpyeon;
