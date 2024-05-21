import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SideMenu from "./SideMenu";

const AppLayout = () => {
  return (
    <div className="h-screen bg-bgColor text-primaryText grid grid-rows-[40px_minmax(500px,1fr)]">
      <Header />
      <section className="flex">
        <SideMenu />
        <Main>
          <Outlet />
        </Main>
      </section>
    </div>
  );
};

export default AppLayout;
