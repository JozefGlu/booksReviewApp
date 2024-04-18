import { useQuery } from '@tanstack/react-query';

type AssetIdType = {
  sys: {
    id: string;
  };
};

type ImageIdType = {
  fields: {
    image: {
      sys: {
        id: string;
      };
    };
  };
};

export type BookDataType = {
  isLoading: boolean;
  isError: boolean;
  data?: {
    author: string;
    createdAt: string;
    description: string;
    genre: string;
    rating?: number;
    image: {
      src?: string;
      title?: string;
      description?: string;
    };
  }[];
};

const baseApiUrl = 'https://cdn.contentful.com';
const apiKey = import.meta.env.VITE_API_KEY;
const apiSpace = import.meta.env.VITE_SPACE_ID;
const booksEntryId = '41ugHy2kSXJlaZjYDZqHRn';

const generateEntryQuery = (entryId: string): string =>
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/entries/${entryId}?access_token=${apiKey}`;

const generateAssetQuery = (assetId: string): string =>
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/assets/${assetId}?access_token=${apiKey}`;

const useFetchBooksData = (): BookDataType => {
  const {
    data: entryData,
    isError: entryIsError,
    isLoading: entryIsLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['books'],
    queryFn: () => fetch(generateEntryQuery(booksEntryId)).then((res) => (res.ok ? res.json() : Promise.reject())),
  });

  const promisessArray = entryData
    ? entryData.fields?.items?.map((asset: AssetIdType) =>
        fetch(generateEntryQuery(asset?.sys?.id ?? '')).then((res) => (res.ok ? res.json() : Promise.reject())),
      )
    : [];

  const {
    data: assetsData,
    isError: assetIsError,
    isLoading: assetsIsLoading,
    isSuccess: assetIsSuccess,
  } = useQuery({
    queryKey: ['bookAssets'],
    queryFn: () => Promise.all(promisessArray),
    enabled: isSuccess,
  });

  const assetsPromises = assetsData
    ? assetsData.map((assetData: ImageIdType) =>
        fetch(generateAssetQuery(assetData?.fields.image.sys.id)).then((res) =>
          res.ok ? res.json() : Promise.reject(),
        ),
      )
    : [];

  const {
    data: imagesData,
    isLoading: isImageLoading,
    isError: isImageError,
  } = useQuery({
    queryKey: ['bookImage'],
    queryFn: () => Promise.all(assetsPromises),
    enabled: assetIsSuccess,
  });

  const isLoading = isImageLoading || assetsIsLoading || entryIsLoading;
  const isError = isImageError || assetIsError || entryIsError;

  const data = assetsData?.map((current, index) => ({
    title: current.fields.title,
    author: current.fields.author,
    genre: current.fields.genre,
    rating: current?.fields.rating,
    description: current.fields.description,
    createdAt: current.sys.createdAt,
    image: {
      title: imagesData?.[index].fields.title,
      description: imagesData?.[index].fields.description,
      src: imagesData?.[index].fields.file.url,
    },
  }));

  return {
    isLoading,
    isError,
    data,
  };
};

export { useFetchBooksData };
