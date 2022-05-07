/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { getProviders, getSession, signOut, useSession } from "next-auth/react";
import SidebadLink from "./SidebadLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full ">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24 card xl:w-56 ">
        <SidebadLink text="Home" Icon={HomeIcon} active />
        <SidebadLink text="Explore" Icon={HashtagIcon} active />
        <SidebadLink text="Notification" Icon={BellIcon} />
        <SidebadLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebadLink text="Lists" Icon={HomeIcon} />
        <div onClick={() => router.push("/profile")} >

        <SidebadLink text="Profile" Icon={UserIcon} />
        </div>
        <SidebadLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-2xl w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div
        className="card flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt="user name"
          className="h-10 w-10 rounded-full xl:mr-2.5 "
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@Blackpoeple</p>
        </div>
        <DotsCircleHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
