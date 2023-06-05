import { HomeFilled, SettingOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/topbar.module.css";
const items = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

const topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.icon_wrapper}>
      <HomeFilled style={{ fontSize: '24px' }}/>
      </div>
      <div className={styles.select_wrapper}>
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["3"],
          }}
        >
          <Typography.Link>
            <Space style={{ fontSize: '16px', color: 'white', fontWeight: 'bold'}}>
              All Report
              <DownOutlined />
            </Space>
          </Typography.Link>
        </Dropdown>
      </div>
      <div className={styles.icon_wrapper}>
      <FontAwesomeIcon icon={faSliders} style={{ fontSize: '24px' }}/>
      </div>
    </div>
  );
};

export default topbar;
