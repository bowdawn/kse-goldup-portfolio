import data from "src/core/scripts/json/graph/kse_graph_10294643.json";
import dayjs from "dayjs";

const lastDate = dayjs(data[data.length - 1].date);
const currentDate = dayjs();
const daysDifference = currentDate.diff(lastDate, "day");
const graphData = data.map((point) => {
  const newDate = dayjs(point.date)
    .add(daysDifference, "day")
    .format("YYYY-MM-DD HH:mm:ss");
  return {
    date: newDate,
    price: point.price,
  };
});
console.log(graphData);

export default graphData;
