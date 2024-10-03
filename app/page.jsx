import InitialPage from "../app/InitialPage/page"
import LoginPage from "../app/LoginPage/page"
import DashboardPage from "../app/DashboardPage/page"
import MymatchesPage from "../app/MymatchesPage/page"
import AboutPage from "../app/AboutPage/page"
import UserprofilePage from "../app/UserprofilePage/page"

export default function Home() {
  return (
    <>
    <InitialPage/>
    <LoginPage/>
    <DashboardPage/>
    <MymatchesPage/>
    <AboutPage/>
    <UserprofilePage/>
    </>
  );
}
