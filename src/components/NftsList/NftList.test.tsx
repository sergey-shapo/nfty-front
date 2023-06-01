import { nftsMock } from "../../mocks/nftsMock";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NftsList from "./NftsList";

describe("Given a NFT List Component", () => {
  describe("When it receives a list with two NFTs with title `First NFT` and `Another NFT`", () => {
    test("Then it should render correctly both cards with this titles", () => {
      const firstTitle = "First NFT";
      const secondTitle = "Another NFT";

      renderWithProviders(wrapWithRouter(<NftsList nfts={nftsMock.nfts} />));

      expect(firstTitle).toBeInTheDocument;
      expect(secondTitle).toBeInTheDocument;
    });
  });
});
