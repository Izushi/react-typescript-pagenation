import "./AlbumList.css";

type Props = {
  albums: Album[];
  currentAlbums :Album[];
}

const AlbumList = (props: Props) => {
  const { albums, currentAlbums } = props;
  return (
    <div className="albumGridWrapper">
      {currentAlbums.map((album) => (
        <div key={album.id}>
          <img src={album.url} alt="album" />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;