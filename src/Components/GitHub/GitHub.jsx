/* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/TusharGagal")
  //       .then((respone) => respone.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl flex justify-evenly items-center">
      GitHub Followers:{data.followers}
      <img src={data.avatar_url} alt="GitPicture" width={200} />
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/TusharGagal");
  return response.json();
};
