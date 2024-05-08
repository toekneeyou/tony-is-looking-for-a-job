import uclaLogo from "../../assets/ucla-logo.webp";
import lewagonLogo from "../../assets/lewagon-logo.jpg";
import nielsenLogo from "../../assets/nielsen-logo.svg";
import tiltLogo from "../../assets/tilt-logo.svg";
import { classNames } from "../../helpers/helpers";

type AboutMeVisualProps = {};
export default function AboutMeVisual({}: AboutMeVisualProps) {
  return (
    <ul
      role="list"
      className="p-[1rem] w-full grid gap-[1rem] grid-cols-1 xl:grid-cols-3 xl:grid-rows-3 xl:row-start-3 xl:row-end-6 xl:col-start-2 xl:col-end-5"
    >
      <AboutMeVisualItem
        src={nielsenLogo}
        company="Gracenote, a Nielsen Company"
        title="Sr. Software Engineer"
        date="2020 - Present"
        className="bg-gradient-to-br from-[#5030aa] via-[#304e69] to-[#1f2c66] xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2"
      />
      <AboutMeVisualItem
        src={tiltLogo}
        company="Tilt"
        title="Software Engineer"
        date="2020-2021"
        className="bg-my-white text-my-black xl:row-start-2 xl:row-end-3 xl:col-start-2 xl:col-end-3"
      />
      <AboutMeVisualItem
        src={lewagonLogo}
        company="Le Wagon"
        title="Web Development Program"
        date="2019"
        className="bg-[#e71005] xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-4"
      />
      <AboutMeVisualItem
        src={uclaLogo}
        company="UCLA Jules Stein Eye Institute"
        title="Ophthalmic Technician II"
        date="2016 - 2019"
        className="bg-[#0f7bb6] xl:row-start-3 xl:row-end-4 xl:col-start-2 xl:col-end-3"
      />
      <button
        className="flex w-full max-w-[52ch] items-center justify-center h-[7rem] xl:h-auto xl:aspect-square border-2 border-my-white justify-self-center xl:row-start-3 xl:row-end-4"
        onClick={() => {
          window.open("https://linkedin.com/in/tonyyu1129", "_blank");
        }}
      >
        <span className="mr-[0.5rem]">See more on LinkedIn</span>
        <span className="material-symbols-outlined">open_in_new</span>
      </button>
    </ul>
  );
}

type AboutMeVisualItemProps = {
  src: string;
  title: string;
  company: string;
  date: string;
  className: string;
};
function AboutMeVisualItem({
  src,
  title,
  company,
  date,
  className,
}: AboutMeVisualItemProps) {
  return (
    <li
      className={classNames(
        "overflow-hidden group relative w-full max-w-[52ch] h-[7rem] grid grid-cols-[6rem_1fr] xl:grid-cols-1 items-center gap-[0.5rem] justify-self-center xl:aspect-square xl:h-auto",
        {
          [className]: !!className,
        }
      )}
    >
      <img
        className="w-[5rem] justify-self-center xl:w-[85%] transition-transform xl:duration-500 group-hover:translate-x-[110%]"
        src={src}
        alt={`${company}-logo`}
      />
      <div className="flex flex-col xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full xl:centered xl:transition-transform xl:duration-500 xl:translate-x-[-100%] group-hover:translate-x-0">
        <span className="font-bold">{title}</span>
        <span className="text-[14px] font-medium">{company}</span>
        <span className="text-[14px] font-medium">{date}</span>
      </div>
    </li>
  );
}
