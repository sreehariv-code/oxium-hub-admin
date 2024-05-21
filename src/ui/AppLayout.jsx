import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SideMenu from "./SideMenu";

const AppLayout = () => {
  return (
    <div className="h-screen bg-bgColor text-primaryText flex flex-col">
      <Header />
      <section className="flex h-full">
        <SideMenu />
        <Main>
          <Outlet />
        </Main>
      </section>
    </div>
  );
};

export default AppLayout;
