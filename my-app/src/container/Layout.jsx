import ProductList from "@/feature/Product/ProductList";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <ProductList />
        </div>
    );
};

export default Layout;