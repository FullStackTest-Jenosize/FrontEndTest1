import {
  FormOutlined,
  CheckCircleOutlined,
  PieChartOutlined,
  SendOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icon_wrapper}>
        <FormOutlined />
        <label>write</label>
      </div>
      <div className={styles.icon_wrapper}>
        <CheckCircleOutlined />
        <label>Approve</label>
      </div>
      <div className={styles.icon_wrapper}>
        <SendOutlined />
        <label>Report</label>
      </div>
      <div className={styles.icon_wrapper}>
        <PieChartOutlined />
        <label>Statistic</label>
      </div>
      <div className={styles.icon_wrapper}>
        <SettingOutlined />
        <label>Setting</label>
      </div>
      
    </div>
  );
};

export default Footer;
