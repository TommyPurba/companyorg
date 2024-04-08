import React from "react";
import Link from "next/link";

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
    {
      name: "Peraturan",
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
    { name: "PPID", href: "/PPID" },
    {
      name: "Berita",
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
    { name: "Pengaduan", href: "/Pengaduan" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="px-3 text-left md:cursor-pointer">
          <h1 className="py-6">{link.name}</h1>
          {link.submenu && (
            <div>
              <div>
                <div>
                  {link.subNavlink.SubLinks.map((SubmenuLink, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold">
                        {SubmenuLink.subName}
                      </h3>
                      {SubmenuLink.SubNavMenu && (
                        <div>
                          <div>
                            <div>
                              {SubmenuLink.SubLinks.map((SubLink, index) => (
                                <div
                                  key={index}
                                  className="text-sm text-gray-500 my-2.5 "
                                >
                                  <Link href={SubLink.link}>
                                    <a className="hover:text-indigo-300">
                                      {SubLink.Subhead}
                                    </a>
                                  </Link>
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
          {!link.submenu && (
            <Link href={link.href}>
              <a className="hover:text-indigo-300">{link.name}</a>
            </Link>
          )}
        </div>
      ))}
    </>
  );
};
