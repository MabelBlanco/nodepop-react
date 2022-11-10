export function aplicateFilters(advertisements, filters) {
  let advertisementsWithFilters;

  if (filters.name) {
    advertisementsWithFilters = advertisements.filter((advertisement) => {
      return advertisement.name.includes(filters.name);
    });
  }

  if (filters.sale) {
    debugger;
    if (filters.sale === "sale") {
      advertisementsWithFilters = advertisementsWithFilters.filter(
        (advertisement) => {
          return advertisement.sale === true;
        }
      );
    } else if (filters.sale === "buy") {
      advertisementsWithFilters = advertisementsWithFilters.filter(
        (advertisement) => advertisement.sale === false
      );
    }
  }
  return advertisementsWithFilters;
}
