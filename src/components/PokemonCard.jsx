import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import "./PokemonList.css";
import StarButton from "./StarButton";

const PokemonCard = ({name, image, types, id, favorite}) => {
  const dispatch = useDispatch()
  const renderType = types.map(type => type.type.name).join(', ')

  const handleOnFavorite = () =>{
    dispatch(setFavorite({pokemonId: id}))
  }
  
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite}  onClick={handleOnFavorite}/>}
    >
      <Meta description={renderType} />
    </Card>
  );
};




export default PokemonCard;
