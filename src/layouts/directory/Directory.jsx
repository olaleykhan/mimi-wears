import React, { Component } from "react";
import { menuData } from "../../assets/directoryData";
import DirectoryItem from "../../components/directory-item/DirectoryItem";
import "./Directory.scss";

export class Directory extends Component {
  constructor() {
    super();

    this.state = {
      dirItems: menuData,
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.dirItems.map((item) => (
          <DirectoryItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Directory;
