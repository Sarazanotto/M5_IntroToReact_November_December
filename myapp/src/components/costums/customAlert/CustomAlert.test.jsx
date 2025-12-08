import { render, screen } from "@testing-library/react";
import CustomAlert from "./CustomAlert";
import { describe, it, expect } from "vitest";
import { act } from "@testing-library/react";

describe("Testing CustoAlert component", () => {
  it("render the text", () => {
    render(<CustomAlert variant="danger" text="test alert" />);
    const element = screen.getByText("test alert");

    expect(element).toBeInTheDocument();
  });
  it("apply class danger", () => {
    render(<CustomAlert variant="danger" text="test alert" />);
    const alert = screen.getByText("test alert").closest(".alert");
    expect(alert).toHaveClass("alert-danger");
  });
  it("apply class warning", () => {
    render(<CustomAlert variant="warning" text="test alert" />);
    const alertWarning = screen.getByText("test alert").closest(".alert");
    expect(alertWarning).toHaveClass("alert-warning");
  });
  it("apply timer", () => {
    vi.useFakeTimers();

    render(<CustomAlert variant="danger" text="message of alert" />);
    expect(screen.getByText("message of alert")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.queryByText("message of alert")).toBeNull();
  });
});
