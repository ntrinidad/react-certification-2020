import { YOUTUBE_API_KEY, YOUTUBE_BASE_URL } from '../utils/constants';

const getRelatedVideos = async (videoId) => {
  let response = null;

  try {
    const url = `${YOUTUBE_BASE_URL}search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${YOUTUBE_API_KEY}`;
    response = (await fetch(url)).json();
  } catch (e) {
    console.log(e);
  }

  return response;
};

const getVideoDetail = async (videoId) => {
  let response = null;

  try {
    const url = `${YOUTUBE_BASE_URL}videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    response = (await fetch(url)).json();
  } catch (e) {
    console.log(e);
  }

  return response;
};

const searchVideos = async (keyword) => {
  let response = null;

  try {
    const url = `${YOUTUBE_BASE_URL}search?part=snippet&q=${encodeURIComponent(
      keyword
    )}&type=video&key=${YOUTUBE_API_KEY}`;
    response = (await fetch(url)).json();
  } catch (e) {
    console.log(e);
  }

  return response;
};

export default {
  getRelatedVideos,
  getVideoDetail,
  searchVideos,
};
