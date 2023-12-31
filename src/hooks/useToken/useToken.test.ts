import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { userTokenMock, userTokenPayloadMock } from "../../mocks/userMocks";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the the id, name and token", () => {
      const token = userTokenMock;

      const { result } = renderHook(() => useToken());
      const { getTokenData } = result.current;

      const tokenData = getTokenData(token);

      expect(tokenData).toStrictEqual(userTokenPayloadMock);
    });
  });
});
