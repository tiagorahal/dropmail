import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";

export default function Header() {
  return (
    <nav className="container m-auto bg-slate-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded-md dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://github.com/tiagorahal/dropmail"
          className="flex items-center"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <MarkunreadMailboxIcon
            fontSize="large"
            sx={{
              textDecoration: "none",
              color: "blue",
            }}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dropmail
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default"></div>
      </div>
    </nav>
  );
}
