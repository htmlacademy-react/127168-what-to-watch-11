import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthErrorStatus = (state: State): string | undefined => state[NameSpace.ServiceStateProcess].authError;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.ServiceStateProcess].isDataLoading;
export const getError404Status = (state: State): boolean => state[NameSpace.ServiceStateProcess].isError404;
export const getFavoriteDownloadedStatus = (state: State): boolean => state[NameSpace.ServiceStateProcess].isFavoriteDownloaded;
export const getDataPostingStatus = (state: State): boolean => state[NameSpace.ServiceStateProcess].isDataPosting;
