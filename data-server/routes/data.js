// 라우팅 처리
const express = require("express");
const router = express.Router();

const db = require("../controllers/dataController");

router.get("/counts", (req, res) => {
  db.getCounts((data) => {
    res.send(data);
  });
});

router.post("/inccount", (req, res) => {
  // 통신이 성공했는지 안했는지 메시지만
  db.incCounts((msg) => {
    res.send(msg);
  });
});

module.exports = router;
