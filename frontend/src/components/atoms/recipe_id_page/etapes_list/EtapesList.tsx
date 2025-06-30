import React from "react";
import { IEtapesListProps } from "./EtapesList.props";

export const EtapesList: React.FC<IEtapesListProps> = ({ instructions }) => {
  return (
    <div className="etapes-list">
      <h2>Etapes</h2>
      <ol>
        {instructions.split("\n").map((etape, index) => (
          <li key={index}>{etape}</li>
        ))}
      </ol>
    </div>
  );
};
