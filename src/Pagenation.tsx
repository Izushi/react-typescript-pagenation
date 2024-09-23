// Removed the unused import statement
import AlbumList from "./AlbumList";
import "./Pagenation.css";

type Props = {
  albums: Album[];
}

const Pagenation = (props: Props) => {
  const { albums } = props;
  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} />
    </div>
  );
};

export default Pagenation;
