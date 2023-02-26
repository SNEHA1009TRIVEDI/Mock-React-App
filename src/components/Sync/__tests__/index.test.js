import { screen, render } from "@testing-library/react";
import React from "react";
import Sync from "..";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  // 3- Import non-mocked library and use other functionalities and hooks
  ...jest.requireActual("react-router-dom"),

  // 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate,
}));
describe("Sync", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Sync />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should should navigate to home page ", async () => {
    render(
      <BrowserRouter>
        <Sync />
      </BrowserRouter>
    );

    // Testing navigating using the button
    expect(screen.getByText("Sync")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Sync"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/record");
  });
});
