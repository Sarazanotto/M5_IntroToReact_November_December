import { describe, expect, it } from "vitest";
import Welcome from "./Welcome";
import { render, screen} from "@testing-library/react";

describe("testing of hero", () => {
  it("render heading", () => {
    render(<Welcome />);
    const headingHero = screen.getByRole("heading", {
      name: /epicbooks/i,
    });
    expect(headingHero).toBeInTheDocument();
  });
  it("render describe", () => {
    render(<Welcome />);
    const describeHero = screen.getByText(/libreria preferita con migliaia/i);
    expect(describeHero).toBeInTheDocument();
  });
  it("rendere image", () => {
    render(<Welcome />);
    const img = screen.getByAltText(/libri/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      "src",
      "https://www.picamemag.com/wp-content/uploads/2020/09/libri6-picame.png"
    );
  });
});
