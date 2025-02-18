import ShowAllContainer from '../containers/ShowAllContainer';

const ShowAllScreen = ({ navigation, route }) => {
  const { category, mediaType } = route.params;

  return (
    <ShowAllContainer
      navigation={navigation}
      category={category}
      mediaType={mediaType}
    />
  );
};

export default ShowAllScreen;
