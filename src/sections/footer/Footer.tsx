import { FOOTER_ID } from "../../constants/id";
import Actions from "../../features/Actions";

export default function Footer() {
  return (
    <footer
      id={FOOTER_ID}
      role="contentinfo"
      className="p-1rem mt-[var(--mobile-header-height)] space-y-2"
    >
      <div className="divider bg-app-white opacity-25" />
      <Actions className="p-2rem" />
      <div className="text-center p-2rem pt-0 opacity-60">
        &copy; 2024 Tony Yu. All rights reserved.
      </div>
    </footer>
  );
}
