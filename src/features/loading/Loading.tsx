import { classNames } from "../../helpers/helpers";
import { useLoadingContext } from "../../contexts/LoadingContext";
import "./loading.css";

type LoadingProps = {};

export default function Loading({}: LoadingProps) {
  const { isLoading } = useLoadingContext();

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full h-full z-[100] bg-app-black centered",
        "transition-[opacity,transform] duration-500",
        { "opacity-0": !isLoading, "pointer-events-none": !isLoading }
      )}
    >
      <div className="lds-ellipsis" role="status" aria-label="Loading">
        <div aria-hidden="true" />
        <div aria-hidden="true" />
        <div aria-hidden="true" />
        <div aria-hidden="true" />
      </div>
    </div>
  );
}
