import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GiftList from "./GiftList";
import { giftsMocks } from "../../mocks/gifts/giftsMocks";
import { vi } from "vitest";

describe("Given the GiftList component", () => {
  const onDeleteGift = vi.fn();
  const onDeleteGifts = vi.fn();
  describe("When it rendered with a list of three gifts", () => {
    test("Then it should show the three cards with of the gifts with its names ", () => {
      const computerGift = giftsMocks[0].name;
      const saladGift = giftsMocks[1].name;
      const castleGift = giftsMocks[2].name;

      render(
        <GiftList
          gifts={giftsMocks}
          onDeleteGift={onDeleteGift}
          onDeleteGifts={onDeleteGifts}
        />,
      );

      const computerCardTitle = screen.getByText(computerGift);
      const saladCardTitle = screen.getByText(saladGift);
      const castleCardTitle = screen.getByText(castleGift);

      expect(computerCardTitle).toBeInTheDocument;
      expect(saladCardTitle).toBeInTheDocument;
      expect(castleCardTitle).toBeInTheDocument;
    });
  });

  describe("When it rendered with a list of cards and the user click on the delete button", () => {
    test("Then the gift should be removed from the document", async () => {
      const user = userEvent.setup();

      render(
        <GiftList
          gifts={giftsMocks}
          onDeleteGift={onDeleteGift}
          onDeleteGifts={onDeleteGifts}
        />,
      );

      await user.click(onDeleteGift(giftsMocks[0].id));

      expect(onDeleteGift).toHaveBeenCalledTimes(1);
    });
  });
});
