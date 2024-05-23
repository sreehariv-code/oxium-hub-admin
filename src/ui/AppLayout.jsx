import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SideMenu from "./SideMenu";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bgColor text-primaryText">
      <Header />
      <section className="flex flex-grow">
        <SideMenu />
        <Main>
          <Outlet />
        </Main>
      </section>
    </div>
  );
};

export default AppLayout;
