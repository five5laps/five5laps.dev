import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import { GradientLine } from "@shared/ui/gradient-line";
import { HomePage } from "@pages/home";
import { MietShopPage } from "@pages/miet-shop";
import { MirrorAppPage } from "@pages/mirror-app";
import { NoHelloPage } from "@pages/nohello";
import { ProjectsPage } from "@pages/projects";
import { ContactsPage } from "@pages/contacts";
import { MemoriesPage } from "@pages/memories";
import styles from "./PageLayout.module.css";

type ComponentMap = Record<string, JSX.Element>;

const componentMap: ComponentMap = {
  "": <HomePage />,
  projects: <ProjectsPage />,
  contacts: <ContactsPage />,
  memories: <MemoriesPage />,
  nohello: <NoHelloPage />,
  "miet-shop": <MietShopPage />,
  "mirror-app": <MirrorAppPage />,
};

const PageLayout = () => {
  const url = location.pathname.split("/")[1];

  return (
    <div className={styles.pages}>
      <GradientLine height={8} />
      <div className={styles.pages__content}>
        <Header />
        {componentMap[url]}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
