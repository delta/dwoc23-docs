import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import footerBg from "../../../static/img/footerBg.webp";
import footerTrees from "../../../static/img/footerTrees.webp";
function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-end overflow-x-clip">
      <div className="w-full h-full relative">
        <img
          src={footerTrees}
          alt="Winter Trees"
          className="absolute bottom-[-2px] object-cover lg:h-auto w-full "
        />
        <img
          src={footerBg}
          alt="Snowy mountains"
          className=" absolute -bottom-3 object-cover h-[90%] lg:h-auto w-full"
        />
      </div>
      <div className="w-full basis-[10%] items-center justify-end p-8 flex flex-col shrink-0 bg-[#234356]">
        <span className="text-white font-light text-2xl sm:text-4xl text-center select-none">
          <span className="font-quicksand">Made with </span>
          <span className="text-red animate-pulse">&#x2764;</span>
          <span className="font-quicksand"> by </span>
          <a href="https://delta.nitt.edu" target="_blank">
            <span className="text-green hover:tracking-wide font-quicksand font-medium">
              Delta Force
            </span>
          </a>
        </span>
      </div>
    </div>
  );
}
export default React.memo(Footer);
