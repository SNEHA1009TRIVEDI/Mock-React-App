import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import React from "react";
import makeRequest from "../../../utils/makeRequest";
import Card from "../../Card/index";

jest.mock("../../../utils/makeRequest");
const mockDataArr = {
  data: [
    {
      id: "0e2ddccf-f494-4c41-a499-90f8267f491a",
      name: "Beautiful Mistakes (feat. Megan Thee Stallion)",
      genre: {
        id: "128aa7f8-c943-48ce-b352-7edd26fa4c6e",
        name: "Pop",
      },
      artist: {
        id: "496b0a85-2bfa-45bc-8d0f-57fe0ce55708",
        name: "Maroon 5",
      },
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631",
      publishedAt: "2021-06-11T00:00:00",
    },
  ],
};

const mockData = {
  data: {
    data: {
      like: false,
      count: 15,
    },
  },
};

describe("Card", () => {
  it("should change the color of heart from grey to red", async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getByTestId } = render(<Card data={mockDataArr.data[0]} cnt={1} />);
    const element = getByTestId("heart-image");
    // console.log(element.src);
    expect(element.src).toContain("heart-gray.svg");
    fireEvent.click(element);
    await waitFor(() => {
      expect(element.src).toContain("heart-red.svg");
    });
  });
  it("should change the color of heart from red to grey", async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getByTestId } = render(<Card data={mockDataArr.data[0]} cnt={2} />);
    const element = getByTestId("heart-image");
    fireEvent.click(element);
    // console.log(element.src);
    fireEvent.click(element);
    await waitFor(() => {
      expect(element.src).toContain("heart-red.svg");
    });
  });
  it("shoukd display the count value", async () => {
    makeRequest.mockResolvedValue(mockData);
    const { getByTestId } = render(<Card data={mockDataArr.data[0]} cnt={2} />);
    const count = getByTestId("count");
    await waitFor(() => {
      expect(count.textContent).toBe("15");
    });
  });
  it("should render the card correctly", async () => {
    makeRequest.mockResolvedValue(mockData);
    const { container } = render(<Card data={mockDataArr.data[0]} cnt={2} />);
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
