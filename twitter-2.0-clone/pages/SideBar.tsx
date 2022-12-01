import React from "react";
import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";

function SideBar() {
  return (
    <div className="flex flex-col">
      <img className="h-10 w-10" src="https://links.papareact.com/drq" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmark" />
      <SidebarRow Icon={CollectionIcon} title="List" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default SideBar;
