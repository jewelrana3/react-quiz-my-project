import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      //    firebasae database
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setLoading(true);
        setError(false);
        //   request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((preVideos) => {
            return [...preVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        setLoading(false);
        setError(true);
        console.log(err);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
