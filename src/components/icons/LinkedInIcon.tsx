type LinkedInIconProps = {
  isGradient: boolean;
};

export default function LinkedInIcon({ isGradient }: LinkedInIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="w-[24px] h-[24px] transition-all group-hover:drop-shadow-pink-glow"
      viewBox="0 0 300 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M278.571 0.413044H21.3616C9.57589 0.413044 0 10.1158 0 22.0268V278.582C0 290.493 9.57589 300.196 21.3616 300.196H278.571C290.357 300.196 300 290.493 300 278.582V22.0268C300 10.1158 290.357 0.413044 278.571 0.413044ZM90.6696 257.37H46.2054V114.304H90.7366V257.37H90.6696ZM68.4375 94.7643C54.1741 94.7643 42.6562 83.1878 42.6562 69.0017C42.6562 54.8156 54.1741 43.2391 68.4375 43.2391C82.6339 43.2391 94.2188 54.8156 94.2188 69.0017C94.2188 83.2548 82.7009 94.7643 68.4375 94.7643ZM257.344 257.37H212.879V187.777C212.879 171.182 212.545 149.836 189.777 149.836C166.607 149.836 163.058 167.903 163.058 186.573V257.37H118.594V114.304H161.25V133.843H161.853C167.812 122.601 182.344 110.757 203.973 110.757C248.973 110.757 257.344 140.401 257.344 178.944V257.37Z"
        fill={isGradient ? "url(#paint0_linear_209_21)" : "#EEE"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_209_21"
          x1="0.108683"
          y1="300.196"
          x2="299.891"
          y2="0.413061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5BDD66" />
          <stop offset="1" stopColor="#EA7BFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
