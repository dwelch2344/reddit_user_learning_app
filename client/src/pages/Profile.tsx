import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_SINGLE_USER } from "../utils/queries";

import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username },
  });
  const { loading: loading2, data: data2 } = useQuery(QUERY_ME);
  if (loading) {
    <div>loading</div>;
  }

  const date = new Date(+data.user.createdAt);
  const [year, month, day] = [
    date.getFullYear(),
    date.toLocaleString("default", { month: "long" }),
    date.getDate(),
  ];

  console.log(date);
  return data ? (
    <section className="page-container">
      <div>
        <img src={`/avatars/${data.user.avatar}`} alt="avatar" />
      </div>
      <h2>{data.user.name}</h2>
      <h4>{data.user.username}</h4>
      <p>{data.user.bio}</p>
      <div>has # friends friend s </div>
      <div>Hi score is #</div>
      <p>Joined {` ${month} ${day}, ${year}`} </p>
    </section>
  ) : (
    <section className="page-container">
      <div>you are not logged in</div>
    </section>
  );
};

export default Profile;
