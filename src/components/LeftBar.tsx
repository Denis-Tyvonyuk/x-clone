import Link from "next/link";
import Imag from "./Image";
import Socket from "./Socket";
import Notification from "./Notification";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  // {
  //   id: 3,
  //   name: "Notification",
  //   link: "/",
  //   icon: "notification.svg",
  // },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between p-2 pb-8">
      {/*Logo Menu */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/**Logo */}
        <Link href={"/"} className="p-2 rounded-full hover:bg-[#181818]">
          <Imag path={"icons/logo.svg"} alt="logo" w={24} h={24} />
        </Link>
        {/**Menu list */}
        <div className="flex flex-col gap-4">
          {menuList.map((item, i) => (
            <>
              {i === 2 && (
                <div>
                  <Notification />
                </div>
              )}
              <Link
                href={item.link}
                key={item.id}
                className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              >
                <Imag
                  path={`icons/${item.icon}`}
                  alt={item.name}
                  w={24}
                  h={24}
                />
                <span className="hidden xxl:inline">{item.name}</span>
              </Link>
            </>
          ))}
        </div>
        {/**Button */}
        <Link
          href={"/compose/post"}
          className=" bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Imag path={"icons/post.svg"} alt="new post" w={24} h={24} />
        </Link>
        <Link
          href={"/compose/post"}
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      <Socket />
      {/*User */}
      <div className="flex items-center justify-between">
        <div className="felx items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Imag
              path={"/general/avatar.png"}
              alt="lama dev"
              w={100}
              h={100}
              tr={false}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Lama Dev</span>
            <span className="text-sm text-textGray">@lamamam</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
