import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((prop,id)=>(
         <Tile tile={prop} key={id} />
      )  
      )}
    </div>
  );
};
