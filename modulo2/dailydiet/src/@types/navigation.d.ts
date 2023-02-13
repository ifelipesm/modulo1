export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined; // esta rota não possui parâmetros
      players: {
        group: string; // objeto do tipo string é passado como parâmetro da rota players
      }
    }
  }
}