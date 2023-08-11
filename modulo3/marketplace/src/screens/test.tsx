{avatarPhoto && (
  <FlatList
    horizontal
    data={avatarPhoto}
    renderItem={({item}) => (
      <DefaultImageCard productUri={item.uri} />
    )}
    ListEmptyComponent={
      <></>
    }
    keyExtractor={(item) => item.name}
  />
)}