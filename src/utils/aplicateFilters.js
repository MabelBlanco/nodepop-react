export function aplicateFilters(advertisements, filters) {
  let advertisementsWithFilters = advertisements;

  if (filters.name) {
    advertisementsWithFilters = advertisementsWithFilters.filter(
      (advertisement) => {
        return advertisement.name.includes(filters.name);
      }
    );
  }

  if (filters.sale) {
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

  if (filters.priceMin || filters.priceMax) {
    if (filters.priceMin) {
      advertisementsWithFilters = advertisementsWithFilters.filter(
        (advertisement) => advertisement.price >= filters.priceMin
      );
    }
    if (filters.priceMax) {
      advertisementsWithFilters = advertisementsWithFilters.filter(
        (advertisement) => advertisement.price <= filters.priceMax
      );
    }
  }

  if (filters.selectedTags.length > 0) {
    advertisementsWithFilters = advertisementsWithFilters.filter(
      (advertisement) => {
        // Must have every tags selected
        const filtersTags = filters.selectedTags.sort();
        const advertisementTags = advertisement.tags.sort();

        return (
          filtersTags.length === advertisementTags.length &&
          filtersTags.every((value, index) => {
            return value === advertisementTags[index];
          })
        );
        // Must have 1 of tags selected
        // const result = filters.selectedTags.map((tag) =>
        //   advertisement.tags.includes(tag)
        // );
        // return result[0];
      }
    );
  }
  return advertisementsWithFilters;
}
