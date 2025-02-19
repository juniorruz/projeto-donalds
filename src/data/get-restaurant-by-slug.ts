import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurat = db.restaurant.findUnique({
    where: {
      slug,
    },
  });
};
