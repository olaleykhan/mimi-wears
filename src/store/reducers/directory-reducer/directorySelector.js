import { createSelector } from "reselect";

const selectDirectory = (state) => state.directoryReducer;

export const selectDirectoryData = createSelector([selectDirectory], (directory) => {
    return directory.menuData
})