import axios from 'axios';
const url1 =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects?metadatadate=2021-06-22&&departmentids=5&hasimages=true';
const url2 =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

export const GetMuseumID = async () => {
  try {
    const res = await axios.get(url1);

    return res.data;
  } catch (error) {
    return error;
  }
};

export const GetMuseumIDInfo = async( id:any) => {
  try {
    const res = await axios.get(url2 + `${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return 'error';
  }
};
