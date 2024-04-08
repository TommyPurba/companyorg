import React from "react";
import { useState } from "react";

export const Navlinks = () => {
  const [heading, setHeading] = useState("");
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
          subName: "sadf",
          SubNavMenu: true,
          SubLinks: [
            { Subhead: "tedsast", link: "/test" },
            { Subhead: "redsast", link: "/rest" },
            { Subhead: "besdast", link: "/best" },
          ],
        },
        {
          subName: "tererere",
          SubNavMenu: true,
          SubLinks: [
            { Subhead: "tedsast", link: "/test" },
            { Subhead: "redasst", link: "/rest" },
            { Subhead: "bedasst", link: "/best" },
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
      {links.map((link, index) => (
        <div>
          <div key={index} className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-6">{link.name}</h1>
            {link.submenu && (
              <div className="">
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-400 rotate-45"></div>
                  </div>
                  <div className="bg-gray-400 p-3.5 md:w-32">
                    {link.sublink.map((mySubLinks, index) => (
                      <div key={index}>
                        <p
                          className="hover:text-white"
                          onClick={() => setHeading(mySubLinks.subName)}
                        >
                          {mySubLinks.subName}
                        </p>
                        {mySubLinks.SubNavMenu && (
                          <div>
                            <div
                              className={`${
                                heading == mySubLinks.subName
                                  ? "md:block"
                                  : "hidden"
                              }`}
                            >
                              <div>
                                {mySubLinks.SubLinks.map(
                                  (SubmenuLink, index) => (
                                    <div
                                      key={index}
                                      className="text-sm text-gray-500 "
                                    >
                                      <a
                                        key={index}
                                        className="hover:text-indigo-300"
                                        href={SubmenuLink.link}
                                      >
                                        {SubmenuLink.Subhead}
                                      </a>
                                    </div>
                                  )
                                )}
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
          {/* mobile */}
          <div>
            {link.submenu && (
              <div>
                {link.sublink.map((sLinks, index) => (
                  <div key={index}>
                    <div>
                      <p className="py-4 pl-7 font-semibold md:pr-0 pr-5">
                        {sLinks.subName}
                      </p>
                      {sLinks.SubNavMenu && (
                        <div>
                          <div>
                            {sLinks.SubLinks.map((SubMobLink, index) => (
                              <div key={index}>
                                <a
                                  key={index}
                                  className="hover:text-indigo-300"
                                  href={SubMobLink.link}
                                >
                                  {SubMobLink.Subhead}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
