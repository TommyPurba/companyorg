import React from "react";

export const Navlinks = () => {
  const links = [
    {
      name: "Profile",
      submenu: true,
      sublink: [
        {
          subName: "Organisasi",
          SubNavMenu: true,
          SubLinks: [
            { Subhead: "test", link: "/test" },
            { Subhead: "rest", link: "/rest" },
            { Subhead: "best", link: "/best" },
          ],
        },
        {
          subName: "Organisasi",
          SubNavMenu: true,
          SubLinks: [
            { Subhead: "test", link: "/test" },
            { Subhead: "rest", link: "/rest" },
            { Subhead: "best", link: "/best" },
          ],
        },
        {
          subName: "Organisasi",
          SubNavMenu: true,
          SubLinks: [
            { Subhead: "test", link: "/test" },
            { Subhead: "rest", link: "/rest" },
            { Subhead: "best", link: "/best" },
          ],
        },
      ],
    },
    { name: "Peraturan", href: "/Peraturan" },
    { name: "PPID", href: "/PPID" },
    { name: "Berita", href: "/Berita" },
    { name: "Pengaduan", href: "/Pengaduan" },
  ];

  return (
    <>
      {links.map((links) => (
        <div className="px-3 text-left md:cursor-pointer group">
          <h1 className="py-6">{links.name}</h1>
          {links.submenu && (
            <div>
              <div className="absolute top-20 hidden group-hover:block hover:block">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-400 rotate-45"></div>
                </div>
                <div className="bg-gray-400 p-3.5">
                  {links.sublink.map((mySubLinks) => (
                    <div>
                      <p className="hover:text-blue-950 m-2">
                        {mySubLinks.subName}
                      </p>
                      {mySubLinks.SubNavMenu && (
                        <div>
                          <div className="absolute left-10 ">
                            <div className="bg-gray-400 p-3.5">
                              {mySubLinks.SubLinks.map((SubmenuLink) => (
                                <div className="text-sm text-gray-500">
                                  <a
                                    className="hover:text-indigo-300 m-2"
                                    href={SubmenuLink.link}
                                  >
                                    {SubmenuLink.Subhead}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
