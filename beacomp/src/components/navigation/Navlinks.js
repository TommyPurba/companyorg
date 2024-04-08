import React from "react";
import { useState } from "react";
import links from "./myLinks";


export const Navlinks = () => {
  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((links, index) => (
        <div key={index} className="px-3 text-left md:cursor-pointer group">
          <h1 className="py-6">{links.name}</h1>
          {links.submenu && (
            <div>
              <div className="absolute top-20 hidden group-hover:block hover:block">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-400 rotate-45"></div>
                </div>
                <div className="bg-gray-400 p-3.5 md:w-32">
                  {links.sublink.map((mySubLinks, index) => (
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
                            <div className="bg-gray-400 p-3.5">
                              {mySubLinks.SubLinks.map((SubmenuLink, index) => (
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

        //  mobile
      ))}
    </>
  );
};
