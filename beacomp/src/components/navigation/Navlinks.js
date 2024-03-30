import React from "react";

export const Navlinks = () => {
  const links = [
    { name: "Profile", href: "/Profile" },
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
        </div>
      ))}
    </>
  );
};
