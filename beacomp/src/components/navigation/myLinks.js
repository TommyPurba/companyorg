import React from "react";

const links = () => {
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

  return { links };
};

export default links;
