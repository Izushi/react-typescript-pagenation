import React from "react";
import "./AlbumList.css";

type Props = {
  albums: Album[];
}

const AlbumList = (props: Props) => {
  const { albums } = props;
  return (
    <div>
      {albums.map((album) => (
        <div>
          <img src={album.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;