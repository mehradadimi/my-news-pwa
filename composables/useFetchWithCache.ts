import { useLocalStorage, StorageSerializers } from "@vueuse/core";

export default async <T>(url: string) => {
  const cached = useLocalStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  console.log("Cached value:", cached.value);

  if (!cached.value) {
    console.log("Fetching new data...");
    const { data, error } = await useFetch<T>(url, {
      key: url + "-" + Date.now(), // Ensure fresh fetch
    });

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`,
      });
    }

    cached.value = data.value as T;
  } else {
    console.log(`Serving cached data for ${url}`);
  }

  return cached;
};
