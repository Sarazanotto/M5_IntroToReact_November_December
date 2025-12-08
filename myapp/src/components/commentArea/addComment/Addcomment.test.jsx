import { render, screen } from "@testing-library/react";
import AddComment from "./AddComment";
import { CommentContext } from "../../../context/CommentsContext";
import { beforeEach, expect, vi } from "vitest";
const mockGetComment = vi.fn();

const renderContext = (children, value) => {
  return render(
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

describe("testing addComment", () => {
  beforeEach(() => {
    mockGetComment.mockClear();
  });

  it("rendre form", () => {
    renderContext(<AddComment asin="111" />, { getComment: mockGetComment });
    const commentInput = screen.getByPlaceholderText(/il tuo commento/i);
    const rateInput = screen.getByPlaceholderText(/assegna da 1 a 5/i);
    expect(commentInput.value).toBe("");
    expect(rateInput.value).toBe("");
  });
});
