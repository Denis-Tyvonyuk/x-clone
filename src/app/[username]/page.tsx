import Feed from "@/components/Feed";
import Imag from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      {/* profile title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href={"/"}>
          <Imag path="icons/back.svg" alt="pack" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Lama dev</h1>
      </div>
      {/* info */}
      <div>
        {/* cover & avatar container */}
        <div className="relative w-full">
          {/* cover */}
          <div className="w-full aspect-[3/1] relative">
            <Imag path="general/cover.jpg" alt="" w={600} h={200} />
          </div>
          {/* avatar */}
          <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Imag path="general/avatar.png" alt="" w={100} h={100} />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Imag path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Imag path="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Imag path="icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* user details */}
        <div className="p-4 flex flex-col gap-2">
          {/* username and handle */}
          <div>
            <h1 className="text-2xl font-bold">Lama Dev</h1>
            <span className="text-textGray text-sm">@lamawed</span>
          </div>
          <p>Lava devo channel</p>
          {/* job and location and data */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Imag
                path="icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Imag path="icons/date.svg" alt="location" w={20} h={20} />
              <span>joined 2010</span>
            </div>
          </div>
          {/* followings and followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* feed */}
      <Feed />
    </div>
  );
};

export default UserPage;
