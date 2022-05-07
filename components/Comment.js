import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Moment from "react-moment";

function Comment({ comment }) {
  const {data: session} = useSession()
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-200">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-black text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-black mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Comment;
