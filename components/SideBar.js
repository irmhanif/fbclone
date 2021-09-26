import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";
import { SIDE_BAR } from "./constants";

function SideBar() {
  const [session, loading] = useSession();
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      {SIDE_BAR.map((sidebar, index) => {
        return (
          <SidebarRow Icon={sidebar.icon} title={sidebar.name} key={index} />
        );
      })}
    </div>
  );
}

export default SideBar;
