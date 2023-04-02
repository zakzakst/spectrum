import { Item, GetItemsResponse } from "@/models/faq";

type State = {
  items: Item[];
};

export const useFaq = () => {
  const state = useState<State>("faq-state", () => ({
    items: [],
  }));

  const getFaqData = async (): Promise<GetItemsResponse> => {
    const response = await $fetch<GetItemsResponse>("/api/faq", {
      method: "GET",
    });
    return response;
  };

  const fetchItems = async (): Promise<void> => {
    const response = await getFaqData();
    state.value.items = response.data.items;
  };

  return {
    state: readonly(state),
    fetchItems,
  };
};
