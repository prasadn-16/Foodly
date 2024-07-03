import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCards from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
it('Should render Restaurant Card Component with props Data', () => {
    render(<RestaurantCards resData={MOCK_DATA} />)
});
