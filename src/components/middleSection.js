import LeftNavBar from "./leftNavBar";
import MailBody from "./mailBody";

export default function MiddleSection() {
  return (
    <div className="grid grid-cols-4 gap-1 bg-slate-200 container mx-auto border-solid border-2 rounded-md h-[70vh] mt-2 relative">
      <LeftNavBar />
      <MailBody />
    </div>
  );
}
