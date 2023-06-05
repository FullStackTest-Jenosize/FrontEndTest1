import { useState } from "react";
import styles from "../../styles/body.module.css";
import { Tabs, Card, Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp,faComment,faGift,faGem } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const { TabPane } = Tabs;
const dateFormat = "DD MMMM YYYY";

const Body = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedTab, setSelectedTab] = useState("daily");
  const [selectedDate, setSelectedDate] = useState(moment().format(dateFormat));
  // ตัวแปรสำหรับจัดเก็บวันที่

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    // setShowChart(true);
  };

  const handleClick = (menu) => {
    setSelectedMenu(menu);
  };

  // ฟังก์ชันที่เรียกเมื่อมีการเปลี่ยนหน้า
  const handlePageChange = (page, pageSize) => {
    // แปลงหมายเลขหน้าเป็นวันที่
    const newSelectedDate = moment()
      .subtract(6 - page, "days")
      .format(dateFormat);
    setSelectedDate(newSelectedDate);

    // ทำอย่างอื่นเมื่อมีการเปลี่ยนหน้า
    console.log("Current Page:", page);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div className={styles.menubar}>
        <div
          className={`${styles.menuItem} ${
            selectedMenu === "submission" ? styles.selected : ""
          }`}
          onClick={() => handleClick("submission")}
        >
          Submission
        </div>
        <div
          className={`${styles.menuItem} ${
            selectedMenu === "engagement" ? styles.selected : ""
          }`}
          onClick={() => handleClick("engagement")}
        >
          Engagement
        </div>
      </div>
      <Tabs activeKey={selectedTab} onChange={handleTabChange}>
        <TabPane tab="Daily" key="daily">
          <div>
            <Pagination
              defaultCurrent={1}
              total={300}
              onChange={handlePageChange}
            />
            <hr />
            <br></br>
            <div>{selectedDate}</div>
            <br></br>
          </div>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "20px",
              }}
            >
              <Card
                style={{
                  width: 150,
                  height: 200,
                  border: "1px solid black",
                  textAlign: "center",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#3766ff",
                    fontSize: "16px",
                  }}
                >
                  <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: "20px" }} />&nbsp;
                  <p> Like</p>
                </div>
                <p style={{ fontSize: "36px", fontWeight: "bold" }}>34</p>
                <p>Likes</p>
              </Card>
              <Card
                style={{
                  width: 150,
                  height: 200,
                  border: "1px solid black",
                  textAlign: "center",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#3766ff",
                    fontSize: "16px",
                  }}
                >
                  <FontAwesomeIcon icon={faComment} style={{ fontSize: "20px" }} />&nbsp;
                  <p> Comment</p>
                </div>
                <p style={{ fontSize: "36px", fontWeight: "bold" }}>56</p>
                <p>Comments</p>
              </Card>
              <Card
                style={{
                  width: 150,
                  height: 200,
                  border: "1px solid black",
                  textAlign: "center",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#3766ff",
                    fontSize: "16px",
                  }}
                >
                  <FontAwesomeIcon icon={faGift} style={{ fontSize: "20px" }} />&nbsp;
                  <p> Point</p>
                </div>
                <p style={{ fontSize: "36px", fontWeight: "bold" }}>450</p>
                <p>Point</p>
              </Card>
              <Card
                style={{
                  width: 150,
                  height: 200,
                  border: "1px solid black",
                  textAlign: "center",
                  paddingTop: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#3766ff",
                    fontSize: "16px",
                  }}
                >
                  <FontAwesomeIcon icon={faGem} style={{ fontSize: "20px" }} />&nbsp;
                  <p> Diamond</p>
                </div>
                <p style={{ fontSize: "36px", fontWeight: "bold" }}>40</p>
                <p> Diamond</p>
              </Card>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Weekly" key="weekly">
          <div>comming soon...</div>
        </TabPane>
        <TabPane tab="Monthly" key="Monthly">
          <div>comming soon...</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Body;
