import React from "react";

export const Navlinks = () => {
  const links = [
    {
      name: "Profile",
      submenu: true,
      subNavlink: {
        subName: "Organisasi",
        SubNavMenu: true,
        SubLinks: [
          { Subhead: "test", link: "/test" },
          { Subhead: "rest", link: "/rest" },
          { Subhead: "best", link: "/best" },
        ],
      },
    },
    { name: "Peraturan", href: "/Peraturan" },
    { name: "PPID", href: "/PPID" },
    { name: "Berita", href: "/Berita" },
    { name: "Pengaduan", href: "/Pengaduan" },
  ];

  return (
    <>
      {links.map((links) => (
        <div className="px-3 text-left md:cursor-pointer">
          <h1 className="py-6">{links.name}</h1>
          {links.submenu && (
            <div>
              <div>
                <div>
                  {links.subNavlink.map((mySubLinks) => (
                    <div>
                      <h3 className="text-lg font-semibold">
                        {mySubLinks.subName}
                      </h3>
                      {mySubLinks.SubNavMenu && (
                        <div>
                          <div>
                            <div>
                              {mySubLinks.SubLinks.map((SubmenuLink) => (
                                <div className="text-sm text-gray-500 my-2.5 ">
                                  <a
                                    className="hover:text-indigo-300"
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
