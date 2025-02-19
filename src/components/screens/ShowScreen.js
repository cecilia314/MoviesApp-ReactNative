import ShowContainer from '../containers/ShowContainer';

const ShowScreen = ({ route }) => {
  const { mediaId, mediaType } = route.params;
  return <ShowContainer mediaId={mediaId} mediaType={mediaType} />;
};

export default ShowScreen;
