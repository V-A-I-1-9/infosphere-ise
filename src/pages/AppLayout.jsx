import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main className={styles.appLayout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
