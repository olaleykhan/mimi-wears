import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectDirectoryData } from "../../store/reducers/directory-reducer/directorySelector";

import DirectoryItem from "../../components/directory-item/DirectoryItem";
import "./Directory.scss";


const Directory = ({ directoryData }) => {


  return (
    <div className="directory">
      {directoryData.map((item) => (
        <DirectoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  directoryData: selectDirectoryData,
})
export default connect(mapStateToProps)(Directory);
