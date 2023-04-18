import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input.Search
      placeholder="Search..."
      style={{ marginBottom: 10 }}
      onChange={handleOnChange}
    />
  );
};

export default Searcher;
