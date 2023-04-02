import { GetItemsResponse } from "@/models/faq";

export default defineEventHandler(async (): Promise<GetItemsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          items: [
            {
              id: 1,
              heading: "見出し1",
              content: "コンテンツ1",
            },
            {
              id: 2,
              heading: "見出し2",
              content: "コンテンツ2",
            },
          ],
        },
      });
    }, 1000);
  });
});
